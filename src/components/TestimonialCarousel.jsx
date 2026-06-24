import { useEffect, useRef, useState } from "react";

function TestimonialCarousel({ testimonials }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goTo = (index) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = (index + total) % total;
    // En desktop no hay scroll (se muestran todas)
    if (el.scrollWidth <= el.clientWidth + 4) return;
    el.scrollTo({ left: clamped * el.offsetWidth, behavior: "smooth" });
    setCurrent(clamped);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () =>
      setCurrent(Math.round(el.scrollLeft / el.offsetWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative" role="region" aria-label="Testimonios de clientes">

      {/* Desktop: grid con las 3 imágenes | Mobile: carrusel */}
      <div
        ref={trackRef}
        className="
          flex gap-4
          snap-x snap-mandatory overflow-x-auto scroll-smooth
          lg:grid lg:grid-cols-3 lg:overflow-visible
        "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="w-[85vw] shrink-0 snap-start sm:w-[75vw] lg:w-auto lg:shrink"
          >
            <img
              src={item.photo}
              alt={item.company}
              className="w-full rounded-2xl object-cover shadow-soft"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Flechas sobre la imagen — solo en mobile */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Testimonio anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 lg:hidden"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Testimonio siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 lg:hidden"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

    </div>
  );
}

export default TestimonialCarousel;
