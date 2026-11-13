"use client";

import { useId, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string; code?: string };

const tracks = siteConfig.tracks.map((track) => ({
  id: track.id,
  label: track.title,
}));

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          track: data.get("track"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
        code?: string;
      } | null;

      if (!response.ok || !payload?.ok) {
        setStatus({
          state: "error",
          message:
            payload?.message ??
            "The message could not be sent right now. Please try email instead.",
          code: payload?.code,
        });
        return;
      }

      form.reset();
      setStatus({
        state: "success",
        message:
          payload.message ??
          "Your message has been sent. I will reply as soon as I can.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "The network request failed. Please try again, or send a direct email.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div aria-live="polite" className="contact-form__result" role="status">
        <p className="folio mono">
          <span className="folio__line" /> Message sent
        </p>
        <p className="display contact-form__result-title">
          Thank you — the note is on its way.
        </p>
        <p>{status.message}</p>
        <a
          className="button button--outline"
          href={`mailto:${siteConfig.email}`}
        >
          Email directly instead
        </a>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="field">
          <label htmlFor={`${formId}-name`}>Name</label>
          <input
            autoComplete="name"
            id={`${formId}-name`}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </div>
        <div className="field">
          <label htmlFor={`${formId}-email`}>Email</label>
          <input
            autoComplete="email"
            id={`${formId}-email`}
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${formId}-track`}>What is this about?</label>
        <select defaultValue="employment" id={`${formId}-track`} name="track">
          {tracks.map((track) => (
            <option key={track.id} value={track.id}>
              {track.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor={`${formId}-message`}>Message</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          placeholder="A little context: the problem, the timeline, and what a good outcome looks like."
          required
          rows={6}
        />
      </div>

      <div aria-hidden="true" className="contact-form__honeypot">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          autoComplete="off"
          id={`${formId}-company`}
          name="company"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div aria-live="polite" className="contact-form__status" role="status">
        {status.state === "error" ? (
          <p className="contact-form__error">
            {status.message}
            {status.code === "not_configured" ? (
              <>
                {" "}
                This form is not connected to a mail provider in this
                environment. Write to{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </>
            ) : null}
          </p>
        ) : status.state === "submitting" ? (
          <p className="contact-form__pending mono">
            <LoaderCircle aria-hidden="true" className="spin" size={14} />{" "}
            Sending
          </p>
        ) : (
          <p className="contact-form__hint mono">
            No newsletters. No third-party marketing. A direct reply.
          </p>
        )}
      </div>

      <div className="contact-form__actions">
        <button
          className="button button--solid"
          disabled={status.state === "submitting"}
          type="submit"
        >
          <span>
            {status.state === "submitting" ? "Sending" : "Send message"}
          </span>
          <ArrowRight aria-hidden="true" size={15} strokeWidth={1.5} />
        </button>
        <p className="mono contact-form__direct">
          or <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </div>
    </form>
  );
}
