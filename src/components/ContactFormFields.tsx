"use client";

import { FormEvent, useEffect, useState } from "react";
import { SERVICES } from "@/lib/data";

function ContactFormFields({
  onSubmit,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold text-maroon"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            autoComplete="name"
            className="w-full rounded-full border border-gray-200 bg-cream px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-semibold text-maroon"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="07123 456 789"
            autoComplete="tel"
            className="w-full rounded-full border border-gray-200 bg-cream px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-semibold text-maroon"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          autoComplete="email"
          className="w-full rounded-full border border-gray-200 bg-cream px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-xs font-semibold text-maroon"
        >
          Select a Service
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-full border border-gray-200 bg-cream px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold text-maroon"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Briefly describe your project..."
          className="w-full rounded-2xl border border-gray-200 bg-cream px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
        />
      </div>

      <button
        type="submit"
        className="btn-pill btn-pill-gold w-full py-3.5 text-base"
      >
        Request Free Quote
      </button>
    </form>
  );
}

function ContactFormSkeleton() {
  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-[66px] rounded-full bg-cream" />
        <div className="h-[66px] rounded-full bg-cream" />
      </div>
      <div className="h-[66px] rounded-full bg-cream" />
      <div className="h-[66px] rounded-full bg-cream" />
      <div className="h-[88px] rounded-2xl bg-cream" />
      <div className="h-12 rounded-full bg-gold/30" />
    </div>
  );
}

export default function ContactFormFieldsClient({
  onSubmit,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ContactFormSkeleton />;
  }

  return <ContactFormFields onSubmit={onSubmit} />;
}
