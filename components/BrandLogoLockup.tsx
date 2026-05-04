import Image from "next/image";

/** Larger lockup for footer / marketing blocks */
export function BrandLogoLockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block h-[3.75rem] w-[245px] sm:h-[4.5rem] sm:w-[310px] md:h-[5rem] md:w-[340px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        className="object-contain object-left drop-shadow-[0_2px_12px_rgba(198,163,90,0.22)]"
        sizes="(max-width:640px) 245px, 340px"
      />
    </span>
  );
}
