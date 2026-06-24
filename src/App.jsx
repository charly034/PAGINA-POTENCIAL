import { useState } from "react";
import ClientLogos from "./components/ClientLogos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionHeading from "./components/SectionHeading";
import TeamCarousel from "./components/TeamCarousel";
import TestimonialCarousel from "./components/TestimonialCarousel";
import {
  WHATSAPP_URL,
  activeSearches,
  clientLogos,
  companyPainPoints,
  impactMetrics,
  navLinks,
  processSteps,
  serviceGroups,
  serviceInterestOptions,
  teamMembers,
  testimonials,
  valueCards,
} from "./data/content";

const serviceSymbols = ["SP", "DO", "CL", "PA"];
const serviceColors = [
  "bg-brand-100 text-brand-700",
  "bg-petrol-100 text-petrol-700",
  "bg-coral-100 text-coral-700",
  "bg-slate-200 text-slate-700",
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.528 5.836L.057 23.522a.5.5 0 0 0 .62.618l5.774-1.501A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.187-1.453l-.371-.22-3.828.995.998-3.73-.24-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function App() {
  const [painExpanded, setPainExpanded] = useState(false);
  return (
    <>
      <Header links={navLinks} />

      <main id="inicio" className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative isolate border-b border-slate-200 bg-hero-pattern py-16 sm:py-20 lg:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
            <div className="reveal-up">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-petrol-600 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-coral-500" />
                Asesoría en Recursos Humanos
              </p>
              <h1 className="text-balance text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-6xl">
                Potenciamos personas.<br className="hidden sm:block" />
                <span className="text-petrol-600"> Escalamos organizaciones.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                Asesoría en Recursos Humanos, selección estratégica y desarrollo
                organizacional para empresas que quieren crecer con estructura,
                cultura y talento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-petrol-600 active:translate-y-0"
                >
                  Solicitar diagnóstico estratégico
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
              <p className="mt-8 text-sm font-semibold text-petrol-600">
                Cuando las personas crecen, los negocios también.
              </p>
            </div>

            <div className="reveal-up-delay hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft lg:block">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand-900 p-5 text-slate-50 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-petrol-300">
                    Visión estratégica
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug">
                    Equipo, liderazgo y estructura alineados para crecer con consistencia.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Cultura
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Diagnóstico y acciones de clima laboral.
                  </p>
                </div>
                <div className="rounded-2xl bg-petrol-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-petrol-600">
                    Analítica
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Indicadores de RRHH para decidir mejor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARA EMPRESAS ── */}
        <section
          className="border-b border-slate-200 bg-brand-900 py-10 sm:py-20 lg:py-24"
          id="para-empresas"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Para empresas"
              title="¿Tu empresa está creciendo, pero la estructura interna todavía no acompaña?"
              subtitle="Te ayudamos a profesionalizar la gestión de personas para que tu equipo pueda sostener el crecimiento del negocio."
              theme="dark"
            />

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {companyPainPoints.map((issue, i) => (
                <li
                  key={issue}
                  className={`flex items-start gap-3 rounded-xl border border-brand-700 bg-brand-800/60 px-5 py-4 text-sm text-slate-200 ${i >= 4 && !painExpanded ? "hidden sm:flex" : "flex"}`}
                >
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-coral-500/20 text-center text-xs leading-5 text-coral-400">✓</span>
                  {issue}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setPainExpanded((p) => !p)}
              className="mt-4 text-sm font-semibold text-coral-400 underline-offset-2 hover:underline sm:hidden"
            >
              {painExpanded ? "Ver menos ↑" : "Ver todos ↓"}
            </button>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-400"
              >
                Conversemos sobre tu equipo
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── NOSOTROS ── */}
        <section
          className="border-b border-slate-200 bg-white py-10 sm:py-20 lg:py-24"
          id="nosotros"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Nuestro equipo"
              title="Sobre Potencial Capital Humano"
              subtitle="Somos una agencia especializada en Recursos Humanos, selección de personal y desarrollo organizacional. Acompañamos a empresas a construir equipos más claros, saludables y preparados para crecer."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
              <TeamCarousel members={teamMembers} />

              <div className="flex flex-col justify-center gap-5">
                <blockquote className="border-l-4 border-coral-500 pl-5 text-lg font-semibold italic leading-relaxed text-slate-800 sm:text-xl">
                  "Creemos que el talento correcto, en el lugar correcto, puede
                  transformar una organización."
                </blockquote>
                <p className="hidden text-base leading-relaxed text-slate-600 sm:block">
                  Con más de 15 años de experiencia combinada en RRHH, nuestro
                  equipo acompaña a empresas de Argentina y Latinoamérica a
                  tomar mejores decisiones sobre su capital humano.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {impactMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4"
                    >
                      <p className="text-xl font-bold text-petrol-600 sm:text-2xl">{metric.value}</p>
                      <p className="mt-0.5 text-xs leading-snug text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section
          className="border-b border-slate-200 bg-slate-50 py-10 sm:py-20 lg:py-24"
          id="servicios"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Lo que hacemos"
              title="Servicios"
              subtitle="Soluciones de Recursos Humanos para cada etapa de crecimiento de tu empresa."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {serviceGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="card-hover rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${serviceColors[index]}`}>
                      {serviceSymbols[index]}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{group.description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 hidden grid-cols-2 gap-2 sm:grid">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALOR ── */}
        <section
          className="border-b border-slate-200 bg-white py-10 sm:py-20 lg:py-24"
          id="valor"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="¿Por qué elegirnos?"
              title="RRHH estratégico para empresas que quieren crecer"
              subtitle="Combinamos selección estratégica, desarrollo organizacional, cultura, liderazgo y People Analítica para tomar mejores decisiones sobre las personas."
              align="center"
            />

            {/* Mobile: lista compacta */}
            <ul className="mt-8 space-y-3 sm:hidden">
              {valueCards.map((card, i) => (
                <li key={card.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-sm font-bold text-brand-700">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{card.title}</p>
                    <p className="text-sm text-slate-500">{card.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Desktop: cards */}
            <div className="mt-12 hidden grid-cols-3 gap-5 sm:grid">
              {valueCards.map((card, i) => (
                <article
                  key={card.title}
                  className="card-hover group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-lg font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-700 to-petrol-600 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ── */}
        <section
          className="border-b border-slate-200 bg-slate-50 py-10 sm:py-20 lg:py-24"
          id="proceso"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Nuestro proceso" title="Cómo trabajamos" align="center" />

            {/* Mobile: solo títulos numerados */}
            <div className="mt-8 lg:hidden">
              <ol className="space-y-3 border-l-2 border-brand-200 pl-6">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[33px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white ring-4 ring-slate-50">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500 sm:block">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Desktop: grid horizontal */}
            <div className="relative mt-14 hidden lg:block">
              <div className="absolute left-0 right-0 top-[22px] h-0.5 bg-gradient-to-r from-brand-200 via-petrol-300 to-brand-200" />
              <ol className="grid grid-cols-5 gap-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="card-hover relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
                  >
                    <span className="absolute -top-3.5 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white ring-4 ring-slate-50">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CASOS DE ÉXITO ── */}
        <section
          className="border-b border-slate-200 bg-white py-10 sm:py-20 lg:py-24"
          id="testimonios"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Testimonios"
              title="Casos de éxito"
              subtitle="Lo que dicen las empresas que ya transformaron su gestión de personas con nosotros."
              align="center"
            />
            <div className="mx-auto mt-10 max-w-3xl">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </section>

        {/* ── EMPRESAS QUE CONFIARON ── */}
        <section className="border-b border-slate-100 bg-slate-50 py-10 sm:py-12">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
              Empresas que ya confían en nosotros
            </p>
            <ClientLogos logos={clientLogos} />
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section className="bg-slate-50 py-10 sm:py-20 lg:py-24" id="contacto">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Contacto"
              title="Conversemos sobre el próximo paso de tu equipo"
              subtitle="Completá el formulario y nos pondremos en contacto para conocer las necesidades de tu empresa."
            />
            <div className="mt-10">
              <ContactForm options={serviceInterestOptions} />
            </div>
          </div>
        </section>
      </main>

      <Footer links={navLinks} serviceGroups={serviceGroups} />

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      {/* En mobile sube para no tapar el CTA sticky (bottom-[4.5rem] = 72px ≈ altura del sticky) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-[4.5rem] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe5d] active:scale-100 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon />
      </a>

      {/* ── CTA STICKY MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          href="#contacto"
          className="block w-full rounded-full bg-brand-700 py-3.5 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-petrol-600"
        >
          Solicitar diagnóstico
        </a>
      </div>
    </>
  );
}

export default App;
