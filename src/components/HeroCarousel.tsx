"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SLIDES, SITE } from "@/lib/data";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const slide = HERO_SLIDES[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const next = (current + 1) % HERO_SLIDES.length;
    const img = new window.Image();
    img.src = HERO_SLIDES[next].image;
  }, [current]);

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden pt-[5.75rem] md:pt-28"
      aria-label="Hero"
    >
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={`hero-slide ${i === current ? "active" : ""}`}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            quality={75}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-maroon/85 via-maroon/70 to-maroon/50" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-10">
        <div key={current} className="hero-text-enter max-w-2xl space-y-4 text-white">
          <span className="inline-block rounded-full bg-gold/90 px-4 py-1.5 font-display text-[0.65rem] font-semibold uppercase tracking-widest text-maroon-dark">
            Bradford&apos;s Premier Builders
          </span>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {slide.title}{" "}
            <span className="text-gold-light">{slide.highlight}</span>
          </h1>
          <p className="max-w-xl text-base text-white/90 md:text-lg">
            {slide.subtitle}
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="#contact"
              className="btn-pill btn-pill-gold px-7 py-3 text-base"
            >
              Get Free Quote
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </a>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="btn-pill btn-pill-outline px-7 py-3 text-base"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              Call Now
            </a>
          </div>

          <div className="mt-4 rounded-full border border-gold/40 bg-white/10 px-5 py-3 md:inline-block">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-gold-light">
              Eco Grants Available
            </p>
            <p className="text-xs text-white/90">
              Claim your free ECO grants quote today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
