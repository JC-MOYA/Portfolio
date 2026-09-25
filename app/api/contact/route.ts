import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { portfolioConfig } from "@/lib/config";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Resend's sandbox mode (no verified domain) can only deliver to the email
// the Resend account was created with. Once a domain is verified at
// resend.com/domains, this can switch back to portfolioConfig.email.
const CONTACT_DELIVERY_EMAIL =
  process.env.CONTACT_TO_EMAIL || "komawo1901@gmail.com";

const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: process.env.UPSTASH_REDIS_REST_URL,
          token: process.env.UPSTASH_REDIS_REST_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "portfolio-contact",
      })
    : null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (ratelimit) {
    const { success, reset } = await ratelimit.limit(ip);
    if (!success) {
      const retryAfter = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }
  }

  let body: {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company) {
    return NextResponse.json({ success: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const safeName = name.replace(/[\r\n]+/g, " ");
  const initial = escapeHtml(safeName.trim().charAt(0).toUpperCase() || "?");
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    const { error: sendError } = await resend.emails.send({
      from: `${portfolioConfig.name} Portfolio <onboarding@resend.dev>`,
      to: CONTACT_DELIVERY_EMAIL,
      replyTo: email,
      subject: `New message from ${safeName} via portfolio`,
      text: `From: ${safeName} <${email}>\n\n${message}`,
      html: `
<body style="margin:0;padding:32px 16px;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e5ea;">
          <tr>
            <td style="background:#0071e3;padding:20px 32px;">
              <p style="margin:0;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:0.6px;text-transform:uppercase;">New Portfolio Message</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:44px;height:44px;border-radius:50%;background:#eaf3ff;color:#0071e3;font-size:18px;font-weight:700;text-align:center;vertical-align:middle;" width="44" height="44">
                    ${initial}
                  </td>
                  <td style="padding-left:14px;vertical-align:middle;">
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1d1d1f;">${escapeHtml(safeName)}</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#6e6e73;">${escapeHtml(email)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 32px;">
              <div style="background:#f5f5f7;border-radius:12px;padding:20px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:#1d1d1f;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 24px;border-top:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#a1a1a6;">Sent ${escapeHtml(submittedAt)} from the contact form on your portfolio. Reply to this email to respond directly to ${escapeHtml(safeName)}.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
      `,
    });

    if (sendError) {
      console.error("Failed to send contact email", sendError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
