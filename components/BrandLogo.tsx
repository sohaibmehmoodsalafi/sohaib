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
      className={`relative inline-block h-8 w-[132px] sm:h-10 sm:w-[168px] ${className}`}
    >
      <Image
        src="/sohaib-logo.png"
        alt="Sohaib Mehmood — Scaling Brands. Empowering Souls."
        fill
        priority={priority}
        className="object-contain object-left"
        sizes="(max-width:640px) 132px, 168px"
      />
    </span>
  );
}
