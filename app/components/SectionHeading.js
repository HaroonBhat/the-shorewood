export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  dark = false,
  className = "",
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-medium tracking-wide ${
            dark
              ? "border-white/20 bg-white/5 text-white/80"
              : "border-black/10 bg-[#FAF8F0] text-[#033D4A]"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#033D4A]" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px] lg:text-[52px] ${
          dark ? "text-white" : "text-[#191919]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
