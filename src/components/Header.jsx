import { useEffect, useState } from "react";

function Header({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo_recortado.webp`;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/95 shadow-soft backdrop-blur"
            : "border-transparent bg-white/80 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center" onClick={closeMenu}>
            <img
              src={logoSrc}
              alt="Potencial Capital Humano"
              className="h-10 w-auto object-contain sm:h-12 lg:h-14"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-petrol-600 active:translate-y-0"
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Hamburger — 44px mínimo */}
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <nav
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navegación móvil"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <img
            src={logoSrc}
            alt="Potencial Capital Humano"
            className="h-9 w-auto object-contain"
            loading="lazy"
          />
          <button
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6L18 18M6 18L18 6" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-100 p-4">
          <a
            href="#contacto"
            onClick={closeMenu}
            className="block rounded-full bg-brand-700 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-petrol-600"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
