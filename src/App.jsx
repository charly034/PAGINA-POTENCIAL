import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionHeading from "./components/SectionHeading";
import { trackEvent } from "./utils/analytics";
import {
  activeSearches,
  caseStudies,
  clientSectors,
  companySizeOptions,
  companyPainPoints,
  impactMetrics,
  navLinks,
  processSteps,
  serviceGroups,
  serviceInterestOptions,
  testimonials,
  urgencyOptions,
  valueCards,
} from "./data/content";

const serviceSymbols = ["SP", "DO", "CL", "PA"];
const brandImageSrc = `${import.meta.env.BASE_URL}logo_con_frase.jpg`;
const compactBrandImageSrc = `${import.meta.env.BASE_URL}logo.jpg`;
const whatsappLink =
  "https://wa.me/5492617048032?text=Hola%2C%20quiero%20coordinar%20un%20diagn%C3%B3stico%20de%20RRHH%20para%20mi%20empresa.";

function App() {
  const onTrackEvent = (eventName, params = {}) => {
    trackEvent(eventName, params);
  };

  useEffect(() => {
    onTrackEvent("page_view", { page: "home" });

    const seenSections = new Set();
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId && !seenSections.has(sectionId)) {
              seenSections.add(sectionId);
              onTrackEvent("section_view", { section: sectionId });
            }
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    let tracked50 = false;
    let tracked90 = false;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const depth = scrollTop / totalHeight;
      if (depth >= 0.5 && !tracked50) {
        tracked50 = true;
        onTrackEvent("scroll_depth", { depth: "50" });
      }
      if (depth >= 0.9 && !tracked90) {
        tracked90 = true;
        onTrackEvent("scroll_depth", { depth: "90" });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Saltar al contenido principal
      </a>

      <Header links={navLinks} onTrackEvent={onTrackEvent} />

      <main id="inicio" className="overflow-x-hidden">
        <section className="relative isolate border-b border-slate-200 bg-hero-pattern py-12 sm:py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div className="reveal-up">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-petrol-600 shadow-soft">
                Consultoría RRHH para PyMEs y empresas en crecimiento
              </p>
              <h1 className="text-balance text-2xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-6xl">
                Convertí tu gestión de personas en una ventaja competitiva.
              </h1>
              <p className="mt-4 text-base text-slate-700 sm:mt-6 sm:text-lg">
                En 30 días te ayudamos a ordenar estructura, mejorar selección y
                profesionalizar liderazgo para escalar con menos rotación y
                mejores resultados.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                <a
                  href="#contacto"
                  className="w-full rounded-full bg-brand-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-petrol-600 sm:w-auto"
                  aria-label="Solicitar diagnóstico estratégico"
                  onClick={() =>
                    onTrackEvent("cta_click", { location: "hero_primary" })
                  }
                >
                  Solicitar diagnóstico estratégico
                </a>
                <a
                  href="#casos"
                  className="text-sm font-semibold text-petrol-700 underline-offset-4 transition hover:underline"
                  onClick={() =>
                    onTrackEvent("cta_click", { location: "hero_secondary" })
                  }
                >
                  Ver casos reales
                </a>
              </div>
              <div className="mt-7 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                <p className="rounded-lg bg-white/80 px-3 py-2">
                  Respuesta inicial en 24h
                </p>
                <p className="rounded-lg bg-white/80 px-3 py-2">
                  Implementación práctica
                </p>
                <p className="rounded-lg bg-white/80 px-3 py-2">
                  Acompañamiento personalizado
                </p>
              </div>
            </div>

            <div className="reveal-up-delay hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:block">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 p-4 text-slate-50 sm:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-petrol-300">
                    Visión estratégica
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Equipo, liderazgo y estructura alineados para crecer con
                    consistencia.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Cultura
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Diagnóstico y acciones de clima laboral.
                  </p>
                </div>
                <div className="rounded-2xl bg-petrol-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-petrol-600">
                    Analytics
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Indicadores de RRHH para decidir mejor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-white py-12 sm:py-16"
          id="prueba-social"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Empresas de distintos sectores ya trabajan con nosotros"
              subtitle="Acompañamos procesos de selección, desarrollo y liderazgo en contextos de crecimiento real."
              align="center"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {clientSectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {sector}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.quote}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
                >
                  <p className="text-sm leading-relaxed text-slate-700">
                    "{item.quote}"
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">
                    {item.author}
                  </p>
                  <p className="text-xs text-slate-500">{item.company}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
          id="valor"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="RRHH estratégico para empresas que quieren crecer"
              subtitle="Acompañamos a organizaciones en crecimiento a encontrar, desarrollar y ordenar su talento. Combinamos selección estratégica, desarrollo organizacional, cultura, liderazgo y People Analytics para tomar mejores decisiones sobre las personas."
            />

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20"
          id="servicios"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Servicios"
              subtitle="Soluciones de Recursos Humanos para cada etapa de crecimiento de tu empresa."
            />

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
              {serviceGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-sm font-bold text-brand-700">
                    {serviceSymbols[index]}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {group.description}
                  </p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                    <p>
                      <strong>Para quién:</strong> {group.forWho}
                    </p>
                    <p className="mt-2">
                      <strong>Resultado esperado:</strong>{" "}
                      {group.expectedResult}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
          id="para-empresas"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="¿Tu empresa está creciendo, pero la estructura interna todavía no acompaña?"
              subtitle="Te ayudamos a profesionalizar la gestión de personas para que tu equipo pueda sostener el crecimiento del negocio."
            />

            <div className="mt-8 rounded-3xl bg-brand-900 p-6 sm:p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {companyPainPoints.map((issue) => (
                  <li
                    key={issue}
                    className="rounded-xl border border-brand-700 bg-brand-800 px-4 py-3 text-sm text-slate-200"
                  >
                    {issue}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-7 inline-flex rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-400"
                onClick={() =>
                  onTrackEvent("cta_click", { location: "pain_points" })
                }
              >
                Conversemos sobre tu equipo
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full border border-brand-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-brand-500 hover:text-white"
                onClick={() =>
                  onTrackEvent("whatsapp_click", { location: "pain_points" })
                }
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
          id="casos"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Casos de trabajo: problema, solución y resultado"
              subtitle="Mostramos cómo transformamos desafíos de RRHH en resultados concretos de negocio."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {caseStudies.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700">
                    <strong>Problema:</strong> {item.problem}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    <strong>Solución:</strong> {item.solution}
                  </p>
                  <p className="mt-2 rounded-lg bg-white p-3 text-sm font-medium text-petrol-700">
                    Resultado: {item.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20"
          id="proceso"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Cómo trabajamos" align="center" />

            <div className="mt-10 md:hidden">
              <ol className="space-y-6 border-l-2 border-brand-200 pl-5">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[30px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative mt-12 hidden md:block">
              <div className="absolute left-0 right-0 top-5 h-px bg-brand-200" />
              <ol className="grid grid-cols-5 gap-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                  >
                    <span className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
          id="busquedas"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Búsquedas activas"
              subtitle="También conectamos talento con oportunidades laborales en empresas de Argentina y Latinoamérica."
            />

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
              {activeSearches.map((search) => (
                <article
                  key={search.role}
                  className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {search.role}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {search.location}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {search.workday}
                  </p>
                  <button
                    type="button"
                    className="mt-5 rounded-full border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-700 hover:text-white"
                  >
                    Ver búsqueda
                  </button>
                </article>
              ))}
            </div>

            <p className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-100 p-4 text-sm text-slate-600">
              Esta sección puede conectarse luego a un panel de administración o
              formulario para cargar búsquedas reales.
            </p>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20"
          id="nosotros"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <SectionHeading
                title="Sobre Potencial Capital Humano"
                subtitle="Somos una consultora especializada en Recursos Humanos, selección de personal y desarrollo organizacional. Acompañamos a empresas a construir equipos más claros, saludables y preparados para crecer."
              />
              <blockquote className="mt-6 border-l-4 border-coral-500 pl-4 text-lg font-semibold italic text-slate-800">
                Creemos que el talento correcto, en el lugar correcto, puede
                transformar una organización.
              </blockquote>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-soft">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={compactBrandImageSrc}
                />
                <img
                  src={brandImageSrc}
                  alt="Potencial Capital Humano - Acompañamos a las organizaciones a potenciar su activo más valioso: las personas"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1440"
                  height="1440"
                />
              </picture>
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-white py-10 sm:py-14 lg:py-16"
          id="impacto"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                >
                  <p className="text-3xl font-bold text-petrol-600">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16 lg:py-20" id="contacto">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Conversemos sobre el próximo paso de tu equipo"
              subtitle="Completá este formulario de diagnóstico y te respondemos con una propuesta concreta según tu etapa de crecimiento."
            />
            <div className="mt-8">
              <ContactForm
                options={serviceInterestOptions}
                companySizeOptions={companySizeOptions}
                urgencyOptions={urgencyOptions}
                onTrackEvent={onTrackEvent}
              />
            </div>
          </div>
        </section>
      </main>

      <a
        href="#contacto"
        className="fixed bottom-4 left-4 right-20 z-40 rounded-full bg-brand-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-soft sm:hidden"
        aria-label="Solicitar diagnóstico"
        onClick={() => onTrackEvent("cta_click", { location: "sticky_mobile" })}
      >
        Solicitar diagnóstico
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:bg-emerald-600"
        aria-label="Escribir por WhatsApp"
        onClick={() => onTrackEvent("whatsapp_click", { location: "floating" })}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.05 4.94A9.86 9.86 0 0 0 12 2a10 10 0 0 0-8.7 14.93L2 22l5.22-1.27A10 10 0 1 0 19.05 4.94Zm-7.05 15.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.1.75.83-3.03-.2-.31a8.34 8.34 0 1 1 7 3.93Zm4.58-6.2c-.25-.13-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.17.25-.64.8-.79.96-.15.17-.3.19-.56.06-.25-.13-1.08-.4-2.05-1.28-.76-.68-1.27-1.52-1.42-1.77-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.41l-.47-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.58.12.17 1.76 2.68 4.26 3.76.6.26 1.07.42 1.44.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z" />
        </svg>
      </a>

      <Footer
        links={navLinks}
        serviceGroups={serviceGroups}
        onTrackEvent={onTrackEvent}
      />
    </>
  );
}

export default App;
