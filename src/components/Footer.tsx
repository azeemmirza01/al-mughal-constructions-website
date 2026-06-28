import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BrandMark from "@/components/BrandMark";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark pt-14 pb-6 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-5 md:px-10">
        <AnimateOnScroll direction="up" className="min-w-0 space-y-3 md:col-span-2">
          <BrandMark variant="footer" />
          <p className="text-xs leading-relaxed text-white/70">
            {SITE.tagline}. Premium residential and commercial construction
            across Bradford & West Yorkshire.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80} direction="up">
          <h4 className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-gold-light">
            Our Services
          </h4>
          <ul className="space-y-1.5 text-xs text-white/70">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="transition-colors duration-300 hover:text-gold-light"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={160} direction="up">
          <h4 className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-gold-light">
            Quick Links
          </h4>
          <ul className="space-y-1.5 text-xs text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={240} direction="up">
          <h4 className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-gold-light">
            Contact
          </h4>
          <ul className="space-y-2 text-xs text-white/70">
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-gold-light"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors duration-300 hover:text-gold-light"
              >
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address.full}</li>
          </ul>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll direction="fade">
        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 md:flex-row md:px-10">
          <p className="text-xs text-white/50" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
          <Link
            href={SITE.url}
            className="text-xs text-gold-light transition-colors duration-300 hover:text-gold"
          >
            {SITE.url.replace("https://", "")}
          </Link>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
