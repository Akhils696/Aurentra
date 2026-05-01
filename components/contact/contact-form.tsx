"use client";

import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

function FloatingField({
  label,
  name,
  type = "text",
  multiline = false,
}: {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
}) {
  const classes =
    "peer w-full rounded-md border border-white/10 bg-black/22 px-4 pb-3 pt-6 text-white outline-none ring-aurora/40 transition placeholder:text-transparent focus:border-aurora/55 focus:shadow-[0_0_26px_rgba(239,68,68,0.12)] focus:ring-2";
  const labelClasses =
    "pointer-events-none absolute left-4 top-3 text-sm text-white/45 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/35 peer-focus:top-3 peer-focus:text-sm peer-focus:text-aurora";

  return (
    <label className="relative block">
      {multiline ? (
        <textarea name={name} required className={`${classes} min-h-44 resize-y`} placeholder={label} />
      ) : (
        <input name={name} type={type} required className={classes} placeholder={label} />
      )}
      <span className={labelClasses}>{label}</span>
    </label>
  );
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "loading", message: "Sending your message..." });

    const form = event.currentTarget;
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
    setFormState({ status: "success", message: data.message ?? "Thanks. We will reply shortly." });
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid gap-5 rounded-lg p-6 sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingField label="Name" name="name" />
        <FloatingField label="Email" name="email" type="email" />
      </div>
      <FloatingField label="Message" name="message" multiline />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="sm:w-fit">
          {formState.status === "loading" ? "Sending..." : "Send Message"}
          <Send aria-hidden className="ml-2 size-4" />
        </Button>
        <AnimatePresence mode="wait">
          {formState.message ? (
            <motion.p
              key={formState.status}
              className={formState.status === "error" ? "text-sm text-red-200" : "flex items-center gap-2 text-sm text-emerald-200"}
              role="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {formState.status === "success" ? (
                <motion.span
                  className="flex size-5 items-center justify-center rounded-full bg-emerald-300 text-ink"
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
