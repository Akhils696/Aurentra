"use client";

import { Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

type FieldName = "name" | "email" | "projectType" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(formData: FormData): FieldErrors {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const errors: FieldErrors = {};

  if (!name) errors.name = "Please add your name.";
  if (!emailRegex.test(email)) errors.email = "Use a valid business email.";
  if (!projectType) errors.projectType = "Choose the closest project type.";
  if (message.length < 20) errors.message = "Share at least 20 characters so we can understand the request.";

  return errors;
}

function FloatingField({
  label,
  name,
  type = "text",
  multiline = false,
  required = true,
  error,
  onBlur,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
  error?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const classes =
    "input-surface peer w-full rounded-md border border-white/10 bg-black/22 px-4 pb-3 pt-6 text-white outline-none placeholder:text-transparent aria-[invalid=true]:border-red-300/50";
  const labelClasses =
    "pointer-events-none absolute left-4 top-3 text-sm text-white/45 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/35 peer-focus:top-3 peer-focus:text-sm peer-focus:text-aurora";

  return (
    <label className="relative block">
      {multiline ? (
        <textarea name={name} required={required} aria-invalid={Boolean(error)} className={`${classes} min-h-44 resize-y`} placeholder={label} onBlur={onBlur} onChange={onChange} />
      ) : (
        <input name={name} type={type} required={required} aria-invalid={Boolean(error)} className={classes} placeholder={label} onBlur={onBlur} onChange={onChange} />
      )}
      <span className={labelClasses}>{label}</span>
      {error ? <span className="mt-2 block text-xs font-medium text-red-200">{error}</span> : null}
    </label>
  );
}

function FloatingSelect({
  label,
  name,
  options,
  required = true,
  error,
  onBlur,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  const classes =
    "input-surface peer w-full appearance-none rounded-md border border-white/10 bg-black/22 px-4 pb-3 pt-6 text-white outline-none aria-[invalid=true]:border-red-300/50";
  const labelClasses =
    "pointer-events-none absolute left-4 top-3 text-sm text-white/45 transition-all duration-200 peer-focus:text-aurora";

  return (
    <label className="relative block">
      <select name={name} required={required} aria-invalid={Boolean(error)} className={classes} defaultValue="" onBlur={onBlur} onChange={onChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#050914] text-white">
            {option}
          </option>
        ))}
      </select>
      <span className={labelClasses}>{label}</span>
      {error ? <span className="mt-2 block text-xs font-medium text-red-200">{error}</span> : null}
    </label>
  );
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  function validateVisibleFields(form: HTMLFormElement, nextTouched = touched) {
    const nextErrors = validateForm(new FormData(form));
    setErrors(Object.fromEntries(Object.entries(nextErrors).filter(([field]) => nextTouched[field as FieldName])) as FieldErrors);
    return nextErrors;
  }

  function handleFieldBlur(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const field = event.currentTarget.name as FieldName;
    const nextTouched = { ...touched, [field]: true };
    setTouched(nextTouched);
    validateVisibleFields(event.currentTarget.form as HTMLFormElement, nextTouched);
  }

  function handleFieldChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    if (touched[event.currentTarget.name as FieldName]) {
      validateVisibleFields(event.currentTarget.form as HTMLFormElement);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validateForm(new FormData(form));
    const allTouched = { name: true, email: true, projectType: true, message: true };

    setTouched(allTouched);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormState({ status: "error", message: "Please review the highlighted fields." });
      return;
    }

    setFormState({ status: "loading", message: "Securing your request..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(form),
    });
    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setFormState({ status: "error", message: data.message ?? "Something went wrong. Please try again." });
      return;
    }

    form.reset();
    setErrors({});
    setTouched({});
    setFormState({ status: "success", message: data.message ?? "Thanks. We received your inquiry and will respond within 1 business day." });
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-panel glass grid gap-5 rounded-lg p-6 sm:p-8" aria-label="Contact form" aria-busy={formState.status === "loading"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingField label="Name" name="name" error={errors.name} onBlur={handleFieldBlur} onChange={handleFieldChange} />
        <FloatingField label="Email" name="email" type="email" error={errors.email} onBlur={handleFieldBlur} onChange={handleFieldChange} />
      </div>
      <FloatingSelect
        label="Project Type"
        name="projectType"
        options={["AI Automation", "Website Development", "Mobile App Development", "Software for Business", "UI/UX Design", "Not sure yet"]}
        error={errors.projectType}
        onBlur={handleFieldBlur}
        onChange={handleFieldChange}
      />
      <div className="grid gap-5 sm:grid-cols-3">
        <FloatingSelect label="Estimated Budget" name="budget" options={["Under INR 50k", "INR 50k - INR 1L", "INR 1L - INR 3L", "INR 3L+", "Not sure yet"]} required={false} />
        <FloatingSelect label="Timeline" name="timeline" options={["This month", "1-3 months", "3-6 months", "Flexible"]} required={false} />
        <FloatingSelect label="Company Size" name="companySize" options={["Solo founder", "2-10", "11-50", "51+", "Not applicable"]} required={false} />
      </div>
      <FloatingField label="Message" name="message" multiline error={errors.message} onBlur={handleFieldBlur} onChange={handleFieldChange} />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="sm:w-fit">
          {formState.status === "loading" ? "Sending securely" : "Request Consultation"}
          {formState.status === "loading" ? <Loader2 aria-hidden className="ml-2 size-4 animate-spin" /> : <Send aria-hidden className="ml-2 size-4" />}
        </Button>
        <p className="text-sm leading-6 text-white/52">We usually respond within 1 business day.</p>
        <AnimatePresence mode="wait">
          {formState.message ? (
            <motion.p
              key={formState.status}
              className={
                formState.status === "error"
                  ? "text-sm text-red-200"
                  : "flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-white/82"
              }
              role="status"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {formState.status === "success" ? (
                <motion.span
                  className="flex size-5 items-center justify-center rounded-full bg-white text-ink shadow-[0_0_28px_rgba(239,61,61,0.26)]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg aria-hidden viewBox="0 0 16 16" className="size-3">
                    <path fill="currentColor" d="M6.3 11.2 2.9 7.8l1.1-1.1 2.3 2.3 5.7-5.7 1.1 1.1-6.8 6.8Z" />
                  </svg>
                </motion.span>
              ) : null}
              {formState.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
