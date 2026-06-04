import { useMemo, useState } from "react";

const initialFormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  companySize: "",
  urgency: "",
  service: "",
  message: "",
};

function ContactForm({
  options,
  companySizeOptions,
  urgencyOptions,
  onTrackEvent,
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const requiredFields = useMemo(
    () => ["fullName", "company", "email", "companySize", "urgency", "message"],
    [],
  );

  const validate = () => {
    const nextErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = "Este campo es obligatorio.";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Ingresá un email válido.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
    setFormData(initialFormState);
    onTrackEvent?.("lead_form_submit", {
      service: formData.service || "no_definido",
      urgency: formData.urgency,
      company_size: formData.companySize,
    });
  };

  return (
    <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Nombre y apellido"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Field
            label="Empresa"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Field
            label="Teléfono (opcional)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            Tamaño de empresa
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className={`rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition ${
                errors.companySize
                  ? "border-rose-500 bg-rose-50"
                  : "border-slate-300 focus:border-brand-500"
              }`}
            >
              <option value="">Seleccioná una opción</option>
              {companySizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.companySize ? (
              <span className="text-xs text-rose-600">
                {errors.companySize}
              </span>
            ) : null}
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            Nivel de urgencia
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className={`rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition ${
                errors.urgency
                  ? "border-rose-500 bg-rose-50"
                  : "border-slate-300 focus:border-brand-500"
              }`}
            >
              <option value="">Seleccioná una opción</option>
              {urgencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.urgency ? (
              <span className="text-xs text-rose-600">{errors.urgency}</span>
            ) : null}
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            Servicio de interés (opcional)
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition ${
                errors.service
                  ? "border-rose-500 bg-rose-50"
                  : "border-slate-300 focus:border-brand-500"
              }`}
            >
              <option value="">Seleccioná una opción</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service ? (
              <span className="text-xs text-rose-600">{errors.service}</span>
            ) : null}
          </label>
        </div>

        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Mensaje
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition ${
              errors.message
                ? "border-rose-500 bg-rose-50"
                : "border-slate-300 focus:border-brand-500"
            }`}
            placeholder="Contanos brevemente qué desafío están atravesando en tu empresa."
          />
          {errors.message ? (
            <span className="text-xs text-rose-600">{errors.message}</span>
          ) : null}
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-800"
          aria-label="Enviar formulario de contacto"
        >
          Enviar consulta
        </button>

        {submitted ? (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
            Gracias por contactarnos. Pronto nos comunicaremos con vos.
          </p>
        ) : null}
      </form>

      <aside className="rounded-2xl bg-brand-900 p-6 text-slate-50">
        <h3 className="text-xl font-semibold">Canales directos</h3>
        <p className="mt-2 text-sm text-slate-300">
          También podés escribirnos por estos medios para coordinar una reunión
          con nuestro equipo.
        </p>
        <ul className="mt-5 space-y-3 text-sm">
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/5492617048032?text=Hola%2C%20quiero%20coordinar%20un%20diagn%C3%B3stico%20de%20RRHH%20para%20mi%20empresa."
              target="_blank"
              rel="noreferrer"
              className="text-accent-300"
              aria-label="Escribir por WhatsApp al +54 9 261 704 8032"
              onClick={() =>
                onTrackEvent?.("whatsapp_click", {
                  location: "form_direct_channel",
                })
              }
            >
              +54 9 261 704 8032
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:soluciones@potencialrh.org"
              className="text-accent-300"
            >
              soluciones@potencialrh.org
            </a>
          </li>
          <li className="flex items-center gap-2">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/potencialcapitalhumano/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent-300"
              aria-label="Abrir Instagram de Potencial Capital Humano"
              onClick={() =>
                onTrackEvent?.("social_click", {
                  network: "instagram",
                  location: "form",
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
          <li className="flex items-center gap-2">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/company/potencial-capital-humano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent-300"
              aria-label="Abrir LinkedIn de Potencial Capital Humano"
              onClick={() =>
                onTrackEvent?.("social_click", {
                  network: "linkedin",
                  location: "form",
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
      </aside>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition ${
          error
            ? "border-rose-500 bg-rose-50"
            : "border-slate-300 focus:border-brand-500"
        }`}
      />
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

export default ContactForm;
