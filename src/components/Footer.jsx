function Footer({ links }) {
  return (
    <footer className="border-t border-slate-200 bg-brand-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        {/* Marca */}
        <p className="text-sm font-bold text-white">Potencial Capital Humano</p>

        {/* Nav */}
        <nav aria-label="Links del footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-coral-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:soluciones@potencialrh.org"
            className="text-sm text-slate-400 transition hover:text-coral-400"
          >
            soluciones@potencialrh.org
          </a>
          <a
            href="https://www.instagram.com/potencialcapitalhumano/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-slate-400 transition hover:text-coral-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/potencial-capital-humano"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition hover:text-coral-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M6.94 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM5.6 9.75h2.67V18H5.6V9.75Zm4.34 0h2.56v1.13h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1V18H15.6v-3.91c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.01-1.5 2.06V18H9.94V9.75Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-600">
        © 2026 Potencial Capital Humano. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
