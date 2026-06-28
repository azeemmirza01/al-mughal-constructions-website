import AnimateOnScroll from "@/components/AnimateOnScroll";
import BrandMark from "@/components/BrandMark";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark pt-14 pb-6 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-5 md:px-10">
        <AnimateOnScroll direction="up" className="min-w-0 space-y-3 md:col-span-2">
          <BrandMark variant="footer" />
          <p className="text-sm leading-relaxed text-white/80">
            {SITE.tagline}. Premium residential and commercial construction
            across Bradford & West Yorkshire.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80} direction="up">
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-light">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-sm text-white/90">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="transition-colors duration-300 hover:text-white"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={160} direction="up">
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-light">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm font-medium text-white/90">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={240} direction="up">
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-light">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-white/90">
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address.full}</li>
          </ul>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll direction="fade">
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-center md:px-10">
          <p className="text-sm text-white/60" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
