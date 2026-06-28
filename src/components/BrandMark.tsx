import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data";

type BrandMarkProps = {
  variant?: "header" | "footer";
  priority?: boolean;
};

const LOGO_WIDTH = 495;
const LOGO_HEIGHT = 477;

function BrandText({ variant }: { variant: "header" | "footer" }) {
  const isHeader = variant === "header";

  return (
    <span
      className={`font-display font-bold leading-[1.15] ${
        isHeader ? "text-maroon" : "text-gold-light"
      }`}
    >
      <span
        className={`block whitespace-nowrap ${
          isHeader ? "text-base md:text-lg" : "text-sm md:text-base"
        }`}
      >
        AL Mughal
      </span>
      <span
        className={`block whitespace-nowrap ${
          isHeader ? "text-base md:text-lg" : "text-sm md:text-base"
        }`}
      >
        Constructions
      </span>
    </span>
  );
}

export default function BrandMark({
  variant = "header",
  priority = false,
}: BrandMarkProps) {
  const isHeader = variant === "header";

  const logo = (
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
  );

  if (isHeader) {
    return (
      <Link
        href="#home"
        className="inline-flex items-center gap-1.5"
        aria-label={`${SITE.name} home`}
      >
        {logo}
        <BrandText variant="header" />
      </Link>
    );
  }

  return (
    <Link
      href="#home"
      className="flex flex-col items-start gap-2"
      aria-label={`${SITE.name} home`}
    >
      {logo}
      <BrandText variant="footer" />
    </Link>
  );
}
