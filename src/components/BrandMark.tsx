import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data";

type BrandMarkProps = {
  variant?: "header" | "footer";
  priority?: boolean;
};

const LOGO_WIDTH = 495;
const LOGO_HEIGHT = 477;

export default function BrandMark({
  variant = "header",
  priority = false,
}: BrandMarkProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="#home"
      className="inline-flex items-center gap-1.5"
      aria-label={`${SITE.name} home`}
    >
      <span
        className={`inline-flex shrink-0 items-center ${
          isHeader ? "py-1.5 md:py-2" : "py-1.5"
        }`}
      >
        <Image
          src="/images/header-logo.webp"
          alt={`${SITE.name} logo`}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          className={`object-contain object-left ${
            isHeader ? "h-20 w-auto md:h-24" : "h-16 w-auto md:h-20"
          }`}
          priority={priority}
        />
      </span>
      <span
        className={`whitespace-nowrap font-display font-bold leading-tight ${
          isHeader
            ? "text-base text-maroon md:text-lg"
            : "text-sm text-white md:text-base"
        }`}
      >
        AL Mughal Constructions
      </span>
    </Link>
  );
}
