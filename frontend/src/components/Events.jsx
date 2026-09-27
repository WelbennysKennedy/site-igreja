import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EVENTS, MARQUEE } from "./data";
import { Reveal, RevealImage } from "./Reveal";

export default function Events() {
  const reduce = useReducedMotion();
  const loop = [...MARQUEE, ...MARQUEE];

  return (
    <section id="eventos" data-testid="events-section" className="py-16 md:py-24">
      {/* Slow editorial marquee */}
      <div className="relative overflow-hidden border-y border-ink/15 py-5 md:py-7" aria-hidden="true">
        <div className="marquee-track" style={reduce ? undefined : { animation: "marquee-scroll 34s linear infinite" }}>
          {loop.map((t, i) => (
            <span key={i} className="font-serif italic text-accent text-3xl md:text-5xl px-8 flex items-center gap-8">
              {t}
              <span className="text-ink/25 not-italic font-serif">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      <div className="px-5 sm:px-8 md:px-12 lg:px-16 mt-14">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
        
              <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3 font-semibold">
                Eventos em <span className="italic text-[#fe8c00] font-bold">destaque</span>
              </h2>
            </div>
            <p className="font-sans text-ink2 max-w-xs sm:text-right">Cultos, conferências e momentos especiais da nossa comunidade.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {EVENTS.map((e, i) => (
            <RevealImage key={i} delay={(i % 2) * 0.08}>
              <article data-testid={`event-card-${i}`} className="group relative photo-frame" style={{ transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
                <div className="event-photo-media relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img src={e.img} alt={e.title} loading="lazy" decoding="async" className={`h-full w-full duotone transition-transform duration-1000 ease-out group-hover:scale-105 ${e.fit === "contain" ? "object-contain bg-[#f8f2e6]" : "object-cover"}`} />
                  <span className="absolute top-3 left-3 bg-ink/85 text-cream px-3 py-1.5 font-serif text-xl leading-none">{e.date}</span>
                  <span className="absolute top-3 right-3 bg-cream/90 text-ink px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase">{e.tag}</span>
                </div>
                <div className="pt-4 pb-1 px-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">{e.title}</h3>
                  <p className="mt-2 font-sans text-ink2 leading-relaxed">{e.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.18em] text-ink2 group-hover:text-accent transition-colors">
                    Saber mais <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </RevealImage>
          ))}
        </div>
      </div>
    </section>
  );
}
