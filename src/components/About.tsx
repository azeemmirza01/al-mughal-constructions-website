import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ABOUT_FEATURES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-10">
        <AnimateOnScroll direction="left" className="space-y-6">
          <div className="space-y-3">
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
              About Us
            </p>
            <h2 className="font-display text-2xl font-bold text-maroon md:text-4xl">
              Reliable Builders You Can Trust
            </h2>
            <p className="text-base leading-relaxed text-slate-muted">
              AL Mughal Constructions has been a cornerstone of Bradford&apos;s
              building landscape. We combine traditional craftsmanship with
              modern architectural techniques to deliver results that exceed
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ABOUT_FEATURES.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 80} direction="up">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-2xl text-gold">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-xs font-bold text-maroon">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div className="relative h-[320px] md:h-[400px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gold/20" />
            <Image
              src="/images/house-extension.webp"
              alt="Construction site in Bradford by AL Mughal Constructions"
              fill
              className="relative z-10 rounded-2xl object-cover shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
