import { Resend } from "resend";
import {
  CONTACT_FORM_ENABLED,
  EMAIL,
  ENQUIRY_DEPARTMENTS,
  SITE,
  type EnquiryDepartment,
} from "@/lib/site-config";

export const runtime = "nodejs";

const DEPARTMENT_LABELS: Record<EnquiryDepartment, string> = {
  info: "Informacije",
  service: "Servis",
  inspection: "Tehnički pregled",
};

const MAX = {
  name: 120,
  email: 200,
  phone: 40,
  message: 4000,
} as const;

function isEnquiryDepartment(value: string): value is EnquiryDepartment {
  return (ENQUIRY_DEPARTMENTS as readonly string[]).includes(value);
}

function clean(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  if (!CONTACT_FORM_ENABLED) {
    return Response.json({ error: "Form unavailable" }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Mail not configured" }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }

  // Honeypot - bots fill this; humans never see it
  if (clean(formData.get("company"), 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(formData.get("name"), MAX.name);
  const email = clean(formData.get("email"), MAX.email);
  const phone = clean(formData.get("phone"), MAX.phone);
  const message = clean(formData.get("message"), MAX.message);
  const departmentValue = clean(formData.get("department"), 40);
  const department = isEnquiryDepartment(departmentValue) ? departmentValue : "info";
  const departmentLabel = DEPARTMENT_LABELS[department];

  if (!name || !email || !message || !isValidEmail(email)) {
    return Response.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const textLines = [
    `Ime: ${name}`,
    `Email: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    `Odjeljenje: ${departmentLabel}`,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const html = [
    `<p><strong>Ime:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : null,
    `<p><strong>Odjeljenje:</strong> ${escapeHtml(departmentLabel)}</p>`,
    `<p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `${SITE.name} <noreply@dajmi.me>`,
    to: [EMAIL.display],
    replyTo: email,
    subject: `Upit sa sajta - ${departmentLabel}`,
    text: textLines.join("\n"),
    html,
  });

  if (error) {
    console.error("Resend contact form error:", error);
    return Response.json({ error: "Send failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
