import { useEffect, useRef, useState } from "react";

function TeamCarousel({ members }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = members.length;

  const goTo = (index) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = (index + total) % total;
    el.scrollTo({ left: clamped * el.offsetWidth, behavior: "smooth" });
    setCurrent(clamped);
  };

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(timer);
  }, [current, total]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () =>
      setCurrent(Math.round(el.scrollLeft / el.offsetWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative" role="region" aria-label="Equipo de trabajo">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-3xl border border-slate-200 shadow-soft"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {members.map((member, i) => (
          <div key={i} className="w-full shrink-0 snap-start bg-white">
            {member.photo ? (
              <img
                src={member.photo}
                alt={`${member.name}, ${member.role}`}
                className="h-80 w-full object-cover object-top sm:h-96"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                className="flex h-80 w-full items-center justify-center bg-gradient-to-br from-brand-50 to-petrol-100 sm:h-96"
                role="img"
                aria-label={member.name}
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-700 text-5xl font-bold text-white shadow-soft">
                  {member.name.charAt(0)}
                </div>
              </div>
            )}
            <div className="bg-brand-900 px-6 py-4">
              <p className="font-bold text-white">{member.name}</p>
              <p className="mt-0.5 text-sm text-slate-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flecha izquierda */}
      {total > 1 && (
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Persona anterior"
          className="absolute left-3 top-[40%] -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-brand-900/70 text-white backdrop-blur-sm transition hover:bg-brand-900"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Flecha derecha */}
      {total > 1 && (
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Persona siguiente"
          className="absolute right-3 top-[40%] -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-brand-900/70 text-white backdrop-blur-sm transition hover:bg-brand-900"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ver a ${members[i].name}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-brand-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamCarousel;
