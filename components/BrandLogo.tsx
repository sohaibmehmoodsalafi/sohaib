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
      className={`relative inline-block h-[3.25rem] w-[220px] sm:h-[4rem] sm:w-[280px] md:h-[4.25rem] md:w-[300px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        priority={priority}
        className="object-contain object-left"
        sizes="(max-width:640px) 220px, 300px"
      />
    </span>
  );
}
