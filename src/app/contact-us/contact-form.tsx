"use client";

import { useState } from "react";

const SUBJECT_OPTIONS = [
  "Course Information",
  "Enrollment & Registration",
  "Payment Assistance",
  "Technical Support",
  "Business Consultation",
  "Student Support",
  "Other",
] as const;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECT_OPTIONS[0],
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: POST to backend endpoint (e.g. /api/contact) with values
    // For now, simulate a successful submission
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/40 p-10 text-center"
      >
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="size-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within
          1–2 business days.
        </p>
      </div>
    );
  }

  const inputBase =
    "h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-2 focus:outline-offset-2 focus:outline-primary";
  const errorInput = "border-destructive focus:outline-destructive";
  const labelClass = "text-sm font-medium text-foreground";
  const errorText = "mt-1 text-xs text-destructive";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          value={values.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`${inputBase} ${errors.name ? errorInput : ""}`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className={errorText}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`${inputBase} ${errors.email ? errorInput : ""}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className={errorText}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          aria-required="false"
          value={values.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className={inputBase}
        />
      </div>

      {/* Subject / Reason */}
      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          className={inputBase}
        >
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={values.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us how we can help…"
          className={`${inputBase} min-h-[100px] resize-y ${errors.message ? errorInput : ""}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className={errorText}>
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center gap-3 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Send Message
      </button>
    </form>
  );
}
