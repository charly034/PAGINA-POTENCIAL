import { useState } from "react";

function Header({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo_recortado.JPG`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <img
            src={logoSrc}
            alt="Potencial Capital Humano"
            className="h-10 w-auto object-contain sm:h-12 lg:h-16"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-petrol-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-petrol-600"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Abrir menú"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={closeMenu}
                className="mt-2 block rounded-xl bg-brand-700 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Solicitar diagnóstico
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
