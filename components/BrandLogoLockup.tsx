import Image from "next/image";

/** Larger lockup for footer / marketing blocks */
export function BrandLogoLockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block h-11 w-[180px] sm:h-[52px] sm:w-[220px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        className="object-contain object-left"
        sizes="220px"
      />
    </span>
  );
}
