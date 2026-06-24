import { useState } from "react";

function TeamCarousel({ members }) {
  const [current, setCurrent] = useState(0);
  const member = members[current];

  const prev = () => setCurrent((c) => (c - 1 + members.length) % members.length);
  const next = () => setCurrent((c) => (c + 1) % members.length);

  return (
    <div className="relative" role="region" aria-label="Equipo de trabajo">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            className="h-80 w-full object-cover object-top sm:h-96"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-80 w-full items-center justify-center bg-gradient-to-br from-brand-50 to-petrol-100 sm:h-96" role="img" aria-label={member.name}>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-700 text-5xl font-bold text-white shadow-soft">
              {member.name.charAt(0)}
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 bg-brand-900 px-6 py-4">
          <div className="min-w-0 flex-1">
            <p className="font-bold text-white">{member.name}</p>
            <p className="mt-0.5 text-sm text-slate-300">{member.role}</p>
          </div>
        </div>
      </div>

      {members.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 py-2">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ver a ${members[i].name}`}
                aria-current={i === current ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500 ${
                  i === current ? "w-8 bg-brand-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                style={{ minHeight: "0.625rem", padding: "0.5rem 0", boxSizing: "content-box" }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Persona anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Persona siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamCarousel;
