export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {kicker && (
        <p className={`kicker mb-3 ${light ? "text-pacific" : ""}`}>
          {kicker}
        </p>
      )}
      <h2
        className={`text-3xl md:text-[2.4rem] font-semibold leading-tight ${
          light ? "text-white" : "text-amethyst"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15.5px] leading-relaxed ${
            light ? "text-white/70" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
