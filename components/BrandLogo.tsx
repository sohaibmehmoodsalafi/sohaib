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
      className={`relative inline-block h-12 w-[180px] sm:h-14 sm:w-[228px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        priority={priority}
        className="object-contain object-left"
        sizes="(max-width:640px) 180px, 228px"
      />
    </span>
  );
}
