import { useMemo, useState } from "react";
import { WHATSAPP_URL } from "../data/content";

const initialFormState = {
  fullName: "",
  whatsapp: "",
  company: "",
  companySize: "",
  urgency: "",
  service: "",
  message: "",
};

function ContactForm({ options }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const requiredFields = useMemo(
    () => ["fullName", "whatsapp", "company", "companySize", "urgency", "service"],
    [],
  );

  const validate = () => {
    const nextErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = "Este campo es obligatorio.";
      }
    });
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

    const parts = [
      `Hola, soy *${formData.fullName}*`,
      formData.company ? `trabajo en *${formData.company}*` : null,
      formData.companySize ? `una empresa de ${formData.companySize}` : null,
    ].filter(Boolean);

    const intro = parts.join(", ") + ".";

    const details = [
      formData.service ? `Me interesa el servicio de *${formData.service}*.` : null,
      formData.urgency ? `Mi urgencia es: ${formData.urgency}.` : null,
      formData.whatsapp ? `Podés contactarme al ${formData.whatsapp}.` : null,
      formData.message ? `\n${formData.message}` : null,
    ].filter(Boolean).join(" ");

    const message = `${intro}\n\n${details}\n\n¡Quedo a disposición, muchas gracias!`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");

    setSubmitted(true);
    setErrors({});
    setFormData(initialFormState);
  };

  return (
    <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Nombre y apellido *"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Field
            label="WhatsApp *"
            name="whatsapp"
            type="tel"
            placeholder="+54 9 261 000 0000"
            value={formData.whatsapp}
            onChange={handleChange}
            error={errors.whatsapp}
          />
          <Field
            label="Empresa *"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
          <SelectField
            label="Tamaño de la empresa *"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            error={errors.companySize}
            options={["1–10 empleados", "11–50 empleados", "51–200 empleados", "+200 empleados"]}
          />
          <SelectField
            label="Nivel de urgencia *"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            error={errors.urgency}
            options={[
              "Inmediata (esta semana)",
              "Próximo mes",
              "En los próximos 3 meses",
              "Estoy explorando opciones",
            ]}
          />
          <SelectField
            label="Servicio de interés *"
            name="service"
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
            options={options}
          />
        </div>

        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Mensaje <span className="font-normal text-slate-400">(opcional)</span>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500"
            placeholder="Contanos brevemente qué desafío están atravesando en tu empresa."
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-800"
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
        <ul className="mt-5 space-y-4 text-sm">
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-petrol-300 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.528 5.836L.057 23.522a.5.5 0 0 0 .62.618l5.774-1.501A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.187-1.453l-.371-.22-3.828.995.998-3.73-.24-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp directo
            </a>
          </li>
          <li>
            <a
              href="mailto:soluciones@potencialrh.org"
              className="text-petrol-300 transition hover:text-white"
            >
              soluciones@potencialrh.org
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/potencialcapitalhumano/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-petrol-300 transition hover:text-white"
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
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @potencialcapitalhumano
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/potencial-capital-humano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-petrol-300 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
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

function Field({ label, name, value, onChange, error, type = "text", placeholder }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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

function SelectField({ label, name, value, onChange, error, options }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition ${
          error
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
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

export default ContactForm;
