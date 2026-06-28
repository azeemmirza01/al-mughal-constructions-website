"use client";

import { FormEvent, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactFormFieldsClient from "@/components/ContactFormFields";
import { SITE } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-10">
        <AnimateOnScroll direction="up">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="grid lg:grid-cols-5">
            <div className="bg-maroon p-8 text-white lg:col-span-2 lg:p-10">
              <p className="mb-1.5 font-display text-xs font-semibold uppercase tracking-widest text-gold-light">
                Contact
              </p>
              <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                Start Your Project Today
              </h2>
              <p className="mb-8 text-sm text-white/80">
                Contact our team for a no-obligation site visit and detailed
                quotation.
              </p>

              <div className="space-y-6">
                {SITE.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 transition-colors hover:text-gold-light"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-wider text-white/60">
                        Call Us
                      </p>
                      <p className="font-display text-sm font-semibold">{phone}</p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <span className="material-symbols-outlined text-xl">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-white/60">
                      Visit Us
                    </p>
                    <p className="font-display text-sm font-semibold">
                      {SITE.address.full}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 transition-colors hover:text-gold-light"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-white/60">
                      Email Us
                    </p>
                    <p className="font-display text-sm font-semibold">{SITE.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 lg:col-span-3 lg:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="material-symbols-outlined mb-3 text-5xl text-gold">
                    check_circle
                  </span>
                  <h3 className="mb-2 font-display text-xl font-bold text-maroon">
                    Thank You!
                  </h3>
                  <p className="text-sm text-slate-muted">
                    We&apos;ve received your enquiry and will be in touch
                    shortly.
                  </p>
                </div>
              ) : (
                <ContactFormFieldsClient onSubmit={handleSubmit} />
              )}
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
