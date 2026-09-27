import { ArrowUpRight } from "lucide-react";
import { MINISTRIES, waLink } from "./data";
import { Reveal, RevealImage } from "./Reveal";

export default function Ministries() {
  return (
    <section id="ministerios" data-testid="ministries-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">Sirva com propósito</span>
          <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3 font-semibold">
            Ministérios que <span className="italic text-[#fe8c00] font-bold">movem</span> a casa
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mt-12">
        {MINISTRIES.map((m, i) => (
          <RevealImage key={i} delay={(i % 3) * 0.06}>
            <a
              href={waLink(`Olá! Quero saber mais sobre o ministério de ${m.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`ministry-${i}`}
              className="group block photo-frame"
              style={{ transform: `rotate(${i % 2 ? 0.7 : -0.7}deg)` }}
            >
              <div className="ministry-photo-media relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={m.img} alt={m.name} loading="lazy" decoding="async" className="h-full w-full object-cover duotone transition-transform duration-1000 ease-out group-hover:scale-105" />
                <span className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent, rgba(21,19,17,0.55))" }} />
                <span className="absolute bottom-2 left-3 font-serif text-cream text-2xl">{m.name}</span>
              </div>
              <div className="flex items-center justify-between pt-3 px-1 pb-1">
                <p className="font-sans text-ink2 leading-relaxed">{m.desc}</p>
                <ArrowUpRight size={18} className="text-ink2 shrink-0 group-hover:text-accent transition-colors" />
              </div>
            </a>
          </RevealImage>
        ))}
      </div>
    </section>
  );
}
