function ClientLogos({ logos }) {
  const items = [...logos, ...logos];

  return (
    <div
      className="overflow-hidden"
      aria-label="Empresas que confían en nosotros"
      role="region"
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 32s linear infinite",
        }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            style={{
              width: 180,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 20px",
            }}
          >
            <img
              src={logo.logo}
              alt={logo.name}
              style={{ height: 56, width: "auto", maxWidth: 150, objectFit: "contain" }}
              className="grayscale transition-[filter] duration-300 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientLogos;
