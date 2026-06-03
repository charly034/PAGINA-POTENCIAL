function SectionHeading({ title, subtitle, align = "left" }) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 inline-block rounded-full bg-petrol-100 px-4 py-1 text-sm font-semibold tracking-wide text-petrol-700">
        Potencial Capital Humano
      </p>
      <h2 className="text-balance text-xl font-bold leading-tight text-slate-900 sm:text-2xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
