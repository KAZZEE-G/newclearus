import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  href?: string | null;
};

const sizeMap = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl sm:text-6xl",
};

export default function Logo({ size = "md", withTagline = false, href = "/" }: LogoProps) {
  const mark = (
    <div className="inline-flex flex-col gap-1.5 select-none">
      <span
        className={`font-display font-bold tracking-tight ${sizeMap[size]} leading-none`}
      >
        <span className="text-red">new</span>
        <span className="text-white">clear</span>
        <span className="text-blue">us</span>
      </span>
      <span className="brand-underline">
        <span className="bg-red" />
        <span className="bg-white" />
        <span className="bg-blue" />
      </span>
      {withTagline && (
        <span className="text-[0.65em] tracking-[0.35em] text-mist font-sans uppercase">
          Technology Simplified
        </span>
      )}
    </div>
  );

  if (href === null) return mark;

  return (
    <Link href={href} aria-label="newclearus home" className="inline-flex">
      {mark}
    </Link>
  );
}
