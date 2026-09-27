import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Radio } from "lucide-react";
import { HERO_VIDEO, HERO_POSTER, CONTACT } from "./data";
import { EASE } from "./Reveal";

const TITLE_LINES = ["Onde a fé", "encontra", "família"];
const HERO_PHOTOS = [
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", alt: "Congregação reunida", rotate: -2 },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4", alt: "Momento de comunhão", rotate: 2.5 },
  { src: "https://images.unsplash.com/photo-1522158637959-30385a09e0da", alt: "Culto de celebração", rotate: -1.5 },
  { src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7", alt: "Adoração em culto", rotate: 1.7 },
];

const scrollTo = (sel) => {
  document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroVideo() {
  const reduce = useReducedMotion();

  return (
    <section id="inicio" data-testid="hero-section" className="relative px-5 sm:px-8 md:px-12 lg:px-16 pt-28 md:pt-32 pb-14 md:pb-20">
      <div className="flex items-center justify-between border-b border-ink/15 pb-4 mb-8 md:mb-12">
        <span className="eyebrow">Igreja Casa da Oração</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        {/* Copy */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <h1 className="font-serif leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl">
            {TITLE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {i === 0 || i === 2 ? (
                    <span className="text-[#000103] font-semibold">{line}</span>
                  ) : (
                    <span className="italic text-[#fe8c00] font-bold">{line}</span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-7 max-w-md font-sans text-base md:text-lg text-ink2 leading-relaxed"
          >
            Uma comunidade viva em Portugal culto, comunhão e conexão. Assista à nossa
            transmissão e sinta-se em casa desde o primeiro momento.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="btn-live" data-testid="hero-live-btn">
              <span className="live-dot" /> Ao vivo agora
            </a>
            <button onClick={() => scrollTo("#cultos")} className="btn-outline" data-testid="hero-schedule-btn">
              Ver horários dos cultos <ArrowDownRight size={16} />
            </button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="mt-8 flex items-center gap-3 text-ink2"
          >
            <Radio size={16} className="text-accent" />
            <span className="font-sans text-sm">Transmissão as Sexta-Feira, 21h00 · Horario de Portugal</span>
          </motion.div>
        </div>

        {/* Tilted video */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, rotate: -5, scale: 0.96 }}
            animate={{ opacity: 1, rotate: -2.2, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="video-frame relative mx-auto max-w-[640px]"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
              {HERO_VIDEO ? (
                <video
                  data-testid="hero-video"
                  className="absolute inset-0 h-full w-full object-cover duotone"
                  src={HERO_VIDEO}
                  poster={HERO_POSTER}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                />
              ) : (
                <img
                  data-testid="hero-video"
                  src={HERO_POSTER}
                  alt="Culto da Familia"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover duotone"
                />
              )}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(21,19,17,0.05) 0%, rgba(21,19,17,0.35) 100%)" }} />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/80 text-cream px-3 py-1.5 text-[0.62rem] tracking-[0.2em] uppercase">
                <span className="live-dot" /> Ao vivo
              </span>
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center cap">Culto da Familia · Domingo</p>
            <span className="absolute -top-4 right-14 tape" style={{ transform: "rotate(6deg)" }} aria-hidden="true" />
            <span className="absolute -bottom-3 left-16 tape" style={{ transform: "rotate(-4deg)" }} aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="hidden md:block mt-6 bg-paper px-5 py-4 shadow-[0_12px_28px_rgba(21,19,17,0.2)] w-full max-w-[420px] rotated-card"
          >
            <span className="eyebrow">Palavra</span>
            <p className="font-serif italic text-ink text-xl md:text-2xl leading-snug mt-1">“A minha casa será chamada casa de oração.” Isaías 56:7</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
