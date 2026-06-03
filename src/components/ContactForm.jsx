import { useMemo, useState } from "react";

const initialFormState = {
  fullName: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactForm({ options }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const requiredFields = useMemo(
    () => [
      "fullName",
      "company",
      "role",
      "email",
      "phone",
      "service",
      "message",
    ],
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
            label="Cargo"
            name="role"
            value={formData.role}
            onChange={handleChange}
            error={errors.role}
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
            label="Teléfono"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            Servicio de interés
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
            Email:{" "}
            <a
              href="mailto:soluciones@potencialrh.org"
              className="text-accent-300"
            >
              soluciones@potencialrh.org
            </a>
          </li>
          <li>Instagram: @potencialcapitalhumano</li>
          <li>LinkedIn: Potencial Capital Humano</li>
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
