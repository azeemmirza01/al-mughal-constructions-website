import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-10">
        <AnimateOnScroll direction="up" className="mx-auto mb-10 max-w-xl text-center">
          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-gold">
            What We Do
          </p>
          <h2 className="mb-3 font-display text-2xl font-bold text-maroon md:text-4xl">
            Our Premium Services
          </h2>
          <p className="text-base text-slate-muted">
            From foundations to finish, AL Mughal Constructions provides
            comprehensive building solutions across West Yorkshire.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={(i % 3) * 100} direction="up">
              <article className="group card-hover overflow-hidden rounded-2xl bg-cream shadow-sm">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} — AL Mughal Constructions Bradford`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-maroon p-2 text-white shadow-lg">
                    <span className="material-symbols-outlined text-xl">
                      {service.icon}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 font-display text-base font-bold text-maroon">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-muted">{service.description}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
