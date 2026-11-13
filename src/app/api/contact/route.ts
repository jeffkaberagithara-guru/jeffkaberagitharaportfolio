import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  track: z.enum(["employment", "freelance", "collaboration"]),
  message: z.string().trim().min(20).max(5000),
  company: z.string().max(200).optional().default(""),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED = 5000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function pruneAttempts(now: number) {
  if (attempts.size <= 1000) return;

  for (const [key, value] of attempts) {
    if (value.resetAt < now) attempts.delete(key);
  }

  while (attempts.size > MAX_TRACKED) {
    const oldest = attempts.keys().next().value;
    if (oldest === undefined) break;
    attempts.delete(oldest);
  }
}

function rateLimited(ip: string) {
  const now = Date.now();
  pruneAttempts(now);

  const entry = attempts.get(ip);

  if (!entry || entry.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const ip = getIp(request);

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        code: "rate_limited",
        message:
          "Too many messages from this connection. Please wait a few minutes or send a direct email.",
      },
      { status: 429 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_json",
        message: "The request could not be read. Please try again.",
      },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_fields",
        message:
          "Please check the form: a name, a valid email and a message of at least 20 characters are required.",
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  if (data.company) {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message:
          "Email delivery is not configured in this environment, so the message was not sent.",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeTrack = escapeHtml(data.track);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Track: ${data.track}`,
    "",
    data.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Portfolio enquiry — ${data.name} (${data.track})`,
        text,
        html: `
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Track:</strong> ${safeTrack}</p>
          <hr />
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: "provider_error",
          message:
            "The mail provider rejected the message. Please try again, or send a direct email.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Your message has been sent. I will reply directly, usually within a few working days.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "network_error",
        message:
          "The mail provider could not be reached. Please try again, or send a direct email.",
      },
      { status: 502 },
    );
  }
}
