"use client";

import { useRef, useState } from "react";
import { content } from "@/lib/content";
import { Icon } from "@/lib/icons";

const { contact } = content;
const { form: formCopy } = contact;

type FieldId = "name" | "email" | "message";
type Values = Record<FieldId, string>;
type Errors = Record<FieldId, string>;

// Local part: common unreserved characters. Domain: dot-separated labels of
// alphanumerics with inner hyphens only (no underscores, no consecutive/trailing
// dots), ending in an alphabetic TLD of 2+ letters.
const EMAIL_PATTERN =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

/** Returns an error message, or "" when the value is valid. */
function validate(field: FieldId, value: string): string {
  const v = value.trim();
  switch (field) {
    case "name":
      return v.length < 2
        ? "Please enter your name (at least 2 characters)."
        : "";
    case "email":
      return EMAIL_PATTERN.test(v)
        ? ""
        : "Please enter a valid email address, e.g. name@example.com.";
    case "message":
      return v.length < 10
        ? "Please describe your vehicle and the issue in at least 10 characters."
        : "";
  }
}

const FIELDS: FieldId[] = ["name", "email", "message"];

export function ContactForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });
  const [successShown, setSuccessShown] = useState(false);
  const inputRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const setValue = (field: FieldId, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Any edit invalidates a previously shown success note.
    setSuccessShown(false);
    // Live re-validate only while an error is displayed for the field.
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
  };

  const handleBlur = (field: FieldId) => {
    // Skip blank fields on blur; required errors surface on submit.
    if (values[field].trim() === "") return;
    setErrors((prev) => ({ ...prev, [field]: validate(field, values[field]) }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(nextErrors);

    const firstInvalid = FIELDS.find((field) => nextErrors[field] !== "");
    if (firstInvalid) {
      setSuccessShown(false);
      inputRefs[firstInvalid].current?.focus();
      return;
    }

    // Valid input: open an email draft addressed to the configured mailbox.
    const body =
      `Name: ${values.name.trim()}\n` +
      `Email: ${values.email.trim()}\n\n` +
      `Vehicle & issue:\n${values.message.trim()}\n`;
    const mailto =
      `mailto:${contact.email}` +
      `?subject=${encodeURIComponent(contact.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Try to open the mail client first; only then show the success note,
    // so the note never claims a draft was created before the attempt.
    const link = document.createElement("a");
    link.href = mailto;
    link.rel = "noopener";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setSuccessShown(true);
  };

  const fieldShell = (field: FieldId) =>
    errors[field]
      ? "border-danger shadow-[0_0_0_3px_rgba(192,57,43,.12)]"
      : "border-[#cfd4ca] focus-within:border-safety";

  return (
    <form
      className="rounded-xl border border-line bg-paper px-[22px] py-[26px] min-[900px]:px-8 min-[900px]:py-[34px]"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="mb-[18px]">
        <label
          htmlFor="cf-name"
          className="mb-[7px] block text-[15px] font-semibold"
        >
          {formCopy.nameLabel}{" "}
          <span className="text-safety" aria-hidden="true">
            *
          </span>
        </label>
        <input
          ref={inputRefs.name}
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={formCopy.namePlaceholder}
          aria-required="true"
          aria-describedby="err-name"
          aria-invalid={errors.name ? true : undefined}
          value={values.name}
          onChange={(e) => setValue("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          className={`w-full rounded-[7px] border-[1.5px] bg-white px-3.5 py-[13px] font-body text-base text-ink transition-shadow placeholder:text-[#9aa19a] focus:shadow-[0_0_0_3px_rgba(244,96,28,.16)] focus:outline-none ${fieldShell(
            "name",
          )}`}
        />
        <p
          id="err-name"
          role="alert"
          className={`mt-[7px] text-[13.5px] font-medium text-danger ${
            errors.name ? "" : "hidden"
          }`}
        >
          {errors.name}
        </p>
      </div>

      <div className="mb-[18px]">
        <label
          htmlFor="cf-email"
          className="mb-[7px] block text-[15px] font-semibold"
        >
          {formCopy.emailLabel}{" "}
          <span className="text-safety" aria-hidden="true">
            *
          </span>
        </label>
        <input
          ref={inputRefs.email}
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder={formCopy.emailPlaceholder}
          aria-required="true"
          aria-describedby="err-email"
          aria-invalid={errors.email ? true : undefined}
          value={values.email}
          onChange={(e) => setValue("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={`w-full rounded-[7px] border-[1.5px] bg-white px-3.5 py-[13px] font-body text-base text-ink transition-shadow placeholder:text-[#9aa19a] focus:shadow-[0_0_0_3px_rgba(244,96,28,.16)] focus:outline-none ${fieldShell(
            "email",
          )}`}
        />
        <p
          id="err-email"
          role="alert"
          className={`mt-[7px] text-[13.5px] font-medium text-danger ${
            errors.email ? "" : "hidden"
          }`}
        >
          {errors.email}
        </p>
      </div>

      <div className="mb-[18px]">
        <label
          htmlFor="cf-message"
          className="mb-[7px] block text-[15px] font-semibold"
        >
          {formCopy.messageLabel}{" "}
          <span className="text-safety" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          ref={inputRefs.message}
          id="cf-message"
          name="message"
          autoComplete="off"
          placeholder={formCopy.messagePlaceholder}
          aria-required="true"
          aria-describedby="err-message"
          aria-invalid={errors.message ? true : undefined}
          value={values.message}
          onChange={(e) => setValue("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={`min-h-[120px] w-full resize-y rounded-[7px] border-[1.5px] bg-white px-3.5 py-[13px] font-body text-base text-ink transition-shadow placeholder:text-[#9aa19a] focus:shadow-[0_0_0_3px_rgba(244,96,28,.16)] focus:outline-none ${fieldShell(
            "message",
          )}`}
        />
        <p
          id="err-message"
          role="alert"
          className={`mt-[7px] text-[13.5px] font-medium text-danger ${
            errors.message ? "" : "hidden"
          }`}
        >
          {errors.message}
        </p>
      </div>

      <button type="submit" className="btn btn-primary mt-1.5 w-full">
        <Icon name="mail" />
        <span>{formCopy.submitLabel}</span>
      </button>

      <p
        id="form-success"
        role="status"
        aria-live="polite"
        className={`mt-4 rounded-lg border border-[#b7dec7] bg-[#e8f5ee] px-4 py-3.5 text-[14.5px] font-medium text-success ${
          successShown ? "" : "hidden"
        }`}
      >
        {successShown ? formCopy.successNote : ""}
      </p>
    </form>
  );
}
