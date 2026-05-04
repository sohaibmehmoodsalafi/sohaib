import Image from "next/image";

/** Larger lockup for footer / marketing blocks */
export function BrandLogoLockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block h-14 w-[228px] sm:h-[64px] sm:w-[288px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        className="object-contain object-left"
        sizes="(max-width:640px) 228px, 288px"
      />
    </span>
  );
}
