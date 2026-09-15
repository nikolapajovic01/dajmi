"use client";

import {
  CONTACTS,
  CONTACT_FORM_ENABLED,
  EMAIL,
  ENQUIRY_DEPARTMENTS,
  type EnquiryDepartment,
} from "@/lib/site-config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

function isEnquiryDepartment(value: string): value is EnquiryDepartment {
  return (ENQUIRY_DEPARTMENTS as readonly string[]).includes(value);
}

function departmentMailto(key: EnquiryDepartment) {
  const contact = CONTACTS.find((entry) => entry.key === key);
  if (contact && "email" in contact) {
    return contact.email.href;
  }
  return EMAIL.href;
}

export function ContactForm({ copy }: { copy: Dictionary["contactPage"]["form"] }) {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!CONTACT_FORM_ENABLED) return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const departmentValue = String(data.get("department") ?? "info");
    const department = isEnquiryDepartment(departmentValue) ? departmentValue : "info";
    const departmentLabel = copy.department[department];

    const bodyLines = [
      `${copy.name}: ${name}`,
      `${copy.email}: ${email}`,
      phone ? `${copy.phone}: ${phone}` : null,
      `${copy.department.label}: ${departmentLabel}`,
      "",
      message,
    ].filter((line) => line !== null);

    const subject = `${copy.subject} - ${departmentLabel}`;
    const mailto = `${departmentMailto(department)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- mailto: opens the user's email app, not an in-app route
    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <fieldset
        disabled={!CONTACT_FORM_ENABLED}
        className="grid min-w-0 gap-5 border-0 p-0 disabled:cursor-not-allowed disabled:opacity-50"
      >
      <div className="grid gap-5 min-[600px]:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-navy/70 uppercase">
            {copy.name}
          </span>
          <input
            type="text"
            name="name"
            required
            className="border border-navy/18 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-navy-accent"
          />
        </label>

        <label className="grid gap-2">
          <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-navy/70 uppercase">
            {copy.email}
          </span>
          <input
            type="email"
            name="email"
            required
            className="border border-navy/18 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-navy-accent"
          />
        </label>
      </div>

      <div className="grid gap-5 min-[600px]:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-navy/70 uppercase">
            {copy.phone}
          </span>
          <input
            type="tel"
            name="phone"
            className="border border-navy/18 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-navy-accent"
          />
        </label>

        <label className="grid gap-2">
          <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-navy/70 uppercase">
            {copy.department.label}
          </span>
          <select
            name="department"
            defaultValue="info"
            required
            className="border border-navy/18 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-navy-accent"
          >
            {ENQUIRY_DEPARTMENTS.map((key) => (
              <option key={key} value={key}>
                {copy.department[key]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-navy/70 uppercase">
          {copy.message}
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none border border-navy/18 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-navy-accent"
        />
      </label>

      <button
        type="submit"
        className="mt-1 w-fit bg-navy px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-white transition-colors hover:bg-navy-accent disabled:pointer-events-none disabled:hover:bg-navy"
      >
        {copy.submit}
      </button>
      </fieldset>
      <p className="text-[13px] leading-[1.6] text-grey">
        {CONTACT_FORM_ENABLED ? copy.note : copy.unavailable}
      </p>
    </form>
  );
}
