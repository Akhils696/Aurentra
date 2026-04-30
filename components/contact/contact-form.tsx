"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

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
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Name
          <input name="name" required className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Email
          <input name="email" type="email" required className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="you@company.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-white/72">
        Message
        <textarea name="message" required className="min-h-44 rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Tell us what you want to build" />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="sm:w-fit">
          {formState.status === "loading" ? "Sending..." : "Send Message"}
          <Send aria-hidden className="ml-2 size-4" />
        </Button>
        {formState.message ? (
          <p className={formState.status === "error" ? "text-sm text-red-200" : "text-sm text-emerald-200"} role="status">
            {formState.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
