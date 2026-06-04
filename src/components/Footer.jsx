function Footer({ links, serviceGroups, onTrackEvent }) {
  return (
    <footer className="bg-brand-900 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">
            Potencial Capital Humano
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Consultoría en RRHH, selección estratégica y desarrollo
            organizacional para empresas en crecimiento.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Links rápidos
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 transition hover:text-coral-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Servicios principales
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {serviceGroups.map((group) => (
              <li key={group.title}>{group.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Contacto y redes
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <a
                href="https://wa.me/5492617048032?text=Hola%2C%20quiero%20coordinar%20un%20diagn%C3%B3stico%20de%20RRHH%20para%20mi%20empresa."
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-coral-400"
                onClick={() =>
                  onTrackEvent?.("whatsapp_click", {
                    location: "footer_direct_channel",
                  })
                }
              >
                +54 9 261 704 8032
              </a>
            </li>
            <li>
              <a
                href="mailto:soluciones@potencialrh.org"
                className="text-slate-400 transition hover:text-coral-400"
                onClick={() =>
                  onTrackEvent?.("contact_click", {
                    channel: "email",
                    location: "footer",
                  })
                }
              >
                soluciones@potencialrh.org
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/potencialcapitalhumano/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition hover:text-coral-400"
                onClick={() =>
                  onTrackEvent?.("social_click", {
                    network: "instagram",
                    location: "footer",
                  })
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                @potencialcapitalhumano
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/potencial-capital-humano"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition hover:text-coral-400"
                onClick={() =>
                  onTrackEvent?.("social_click", {
                    network: "linkedin",
                    location: "footer",
                  })
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM5.6 9.75h2.67V18H5.6V9.75Zm4.34 0h2.56v1.13h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1V18H15.6v-3.91c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.01-1.5 2.06V18H9.94V9.75Z" />
                </svg>
                Potencial Capital Humano
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © 2026 Potencial Capital Humano. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
