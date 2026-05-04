import Image from "next/image";

export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`relative inline-block h-[3.85rem] w-[255px] sm:h-[4.6rem] sm:w-[310px] md:h-[5rem] md:w-[340px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        priority={priority}
        className="object-contain object-left drop-shadow-[0_2px_14px_rgba(198,163,90,0.28)]"
        sizes="(max-width:640px) 255px, 340px"
      />
    </span>
  );
}
