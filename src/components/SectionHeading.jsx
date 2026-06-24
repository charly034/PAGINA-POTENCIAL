function SectionHeading({ title, subtitle, align = "left", label, theme = "light" }) {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label ? (
        <p className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest ${
          isDark ? "bg-brand-700 text-petrol-300" : "bg-petrol-100 text-petrol-700"
        }`}>
          {label}
        </p>
      ) : null}
      <h2 className={`text-balance text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
        isDark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
