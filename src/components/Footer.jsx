function Footer({ links, serviceGroups }) {
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
                href="mailto:soluciones@potencialrh.org"
                className="text-slate-400 transition hover:text-coral-400"
              >
                soluciones@potencialrh.org
              </a>
            </li>
            <li>@potencialcapitalhumano</li>
            <li>Potencial Capital Humano</li>
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
