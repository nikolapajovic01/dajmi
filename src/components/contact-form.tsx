"use client";

import { useState } from "react";
import {
  CONTACT_FORM_ENABLED,
  ENQUIRY_DEPARTMENTS,
} from "@/lib/site-config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ copy }: { copy: Dictionary["contactPage"]["form"] }) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!CONTACT_FORM_ENABLED || status === "submitting") return;

    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5">
      <fieldset
        disabled={!CONTACT_FORM_ENABLED || status === "submitting"}
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
              autoComplete="name"
              maxLength={120}
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
              autoComplete="email"
              maxLength={200}
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
              autoComplete="tel"
              maxLength={40}
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
            maxLength={4000}
            className="resize-none border border-navy/18 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-navy-accent"
          />
        </label>

        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          className="mt-1 w-fit bg-navy px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-white transition-colors hover:bg-navy-accent disabled:pointer-events-none disabled:hover:bg-navy"
        >
          {status === "submitting" ? copy.sending : copy.submit}
        </button>
      </fieldset>

      <p className="text-[13px] leading-[1.6] text-grey" role="status" aria-live="polite">
        {!CONTACT_FORM_ENABLED
          ? copy.unavailable
          : status === "success"
            ? copy.success
            : status === "error"
              ? copy.error
              : copy.note}
      </p>
    </form>
  );
}
