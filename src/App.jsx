import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionHeading from "./components/SectionHeading";
import {
  activeSearches,
  companyPainPoints,
  impactMetrics,
  navLinks,
  processSteps,
  serviceGroups,
  serviceInterestOptions,
  valueCards,
} from "./data/content";

const serviceSymbols = ["SP", "DO", "CL", "PA"];

function App() {
  return (
    <>
      <Header links={navLinks} />

      <main id="inicio" className="overflow-x-hidden">
        <section className="relative isolate border-b border-slate-200 bg-hero-pattern py-12 sm:py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div className="reveal-up">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-petrol-600 shadow-soft">
                Consultoría en Recursos Humanos
              </p>
              <h1 className="text-balance text-2xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-6xl">
                Potenciamos personas. Escalamos organizaciones.
              </h1>
              <p className="mt-4 text-base text-slate-700 sm:mt-6 sm:text-lg">
                Consultoría en Recursos Humanos, selección estratégica y
                desarrollo organizacional para empresas que quieren crecer con
                estructura, cultura y talento.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href="#contacto"
                  className="w-full rounded-full bg-brand-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-petrol-600 sm:w-auto"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href="#servicios"
                  className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-petrol-400 hover:text-petrol-600 sm:w-auto"
                >
                  Ver servicios
                </a>
              </div>
              <p className="mt-7 text-base font-semibold text-petrol-600">
                Cuando las personas crecen, los negocios también.
              </p>
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
              >
                Conversemos sobre tu equipo
              </a>
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
              <img
                src="/logo_con_frase.jpg"
                alt="Potencial Capital Humano - Acompañamos a las organizaciones a potenciar su activo más valioso: las personas"
                className="w-full h-auto object-cover"
              />
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
              subtitle="Completá el formulario y nos pondremos en contacto para conocer las necesidades de tu empresa."
            />
            <div className="mt-8">
              <ContactForm options={serviceInterestOptions} />
            </div>
          </div>
        </section>
      </main>

      <Footer links={navLinks} serviceGroups={serviceGroups} />
    </>
  );
}

export default App;
