import AnimateOnScroll from "@/components/AnimateOnScroll";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-maroon py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <AnimateOnScroll direction="left" className="lg:w-1/3">
            <p className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-gold-light">
              Why Us
            </p>
            <h2 className="mb-4 font-display text-2xl font-bold md:text-4xl">
              Why Partner With AL Mughal?
            </h2>
            <p className="text-base text-white/80">
              We don&apos;t just build structures; we build trust through
              transparency, precision, and unwavering commitment to quality.
            </p>
          </AnimateOnScroll>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80} direction="up">
                <div className="card-hover rounded-2xl border border-white/10 bg-maroon-dark/50 p-5 transition-colors hover:border-gold/30">
                  <span className="material-symbols-outlined mb-3 text-3xl text-gold-light">
                    {item.icon}
                  </span>
                  <h3 className="mb-1.5 font-display text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/75">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
