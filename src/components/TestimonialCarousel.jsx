import { useCallback, useEffect, useRef, useState } from "react";

function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const liveRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 200);
    },
    [animating],
  );

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo, testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const item = testimonials[current];

  return (
    <div className="relative" role="region" aria-label="Testimonios de clientes">
      {/* Slide */}
      <div
        className={`min-h-[280px] rounded-3xl bg-brand-900 p-8 shadow-soft transition-opacity duration-200 sm:p-10 sm:min-h-[260px] ${
          animating ? "opacity-0" : "opacity-100"
        }`}
        aria-live="polite"
        aria-atomic="true"
        ref={liveRef}
      >
        {/* Comillas */}
        <svg viewBox="0 0 48 36" fill="none" className="mb-5 h-7 w-7 text-coral-500 opacity-90" aria-hidden="true">
          <path d="M0 36V21.6C0 9.6 7.2 2.4 21.6 0L24 3.6c-7.2 1.2-11.4 4.4-12.4 9.6H18V36H0zm26 0V21.6C26 9.6 33.2 2.4 47.6 0L50 3.6c-7.2 1.2-11.4 4.4-12.4 9.6H44V36H26z" fill="currentColor" />
        </svg>

        <p className="text-lg font-medium leading-relaxed text-slate-100 sm:text-xl">
          {item.quote}
        </p>

        <div className="mt-7 flex items-center gap-4 border-t border-brand-700 pt-6">
          {item.photo ? (
            <img
              src={item.photo}
              alt={`Foto de ${item.author}`}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-coral-500"
              loading="lazy"
            />
          ) : (
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral-500 text-lg font-bold text-white"
              role="img"
              aria-label={`Inicial de ${item.author}`}
            >
              {item.author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{item.author}</p>
            <p className="text-sm text-slate-400">{item.company}</p>
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="mt-5 flex items-center justify-between">
        {/* Dots — área mínima 44px altura para mobile */}
        <div className="flex items-center gap-2 py-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonio ${i + 1} de ${testimonials.length}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500 ${
                i === current ? "w-8 bg-coral-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              style={{ minWidth: i === current ? "2rem" : "0.625rem", minHeight: "0.625rem", padding: "0.5rem 0", boxSizing: "content-box" }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          {/* Pause/Play */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Reanudar rotación automática" : "Pausar rotación automática"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
          >
            {paused ? (
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.841z" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
              </svg>
            )}
          </button>
          <button
            onClick={prev}
            aria-label="Testimonio anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Testimonio siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
