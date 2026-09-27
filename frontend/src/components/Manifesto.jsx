import { CHAPTERS, ABOUT_PHOTOS } from "./data";
import { Reveal, RevealImage } from "./Reveal";

export default function Manifesto() {
  return (
    <section id="sobre" data-testid="about-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">A nossa fé</span>
            <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl leading-[1.02] tracking-tight mt-4 font-semibold">
              Quem somos, <span className="italic text-[#fe8c00] font-bold">em três capítulos</span>
            </h2>
            <p className="mt-6 font-sans text-ink2 leading-relaxed max-w-sm">
              Não somos um edifício. Somos pessoas reunidas em torno de uma mesma
              esperança e ainda há lugar à mesa para si.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 mt-10">
            {ABOUT_PHOTOS.map((p, i) => (
              <RevealImage key={i} delay={i * 0.1}>
                <figure className="photo-frame photo-frame--about mx-auto block max-w-[36rem] sm:max-w-[40rem]" style={{ transform: `rotate(${p.rotate}deg)` }}>
                  <div className="about-photo-media relative overflow-hidden rounded-[1.5rem] border border-[#d6dfe8] bg-[#f8fbff] shadow-[0_20px_45px_-24px_rgba(5,70,112,0.45)] min-h-[20rem]">
                    <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="block h-full w-full object-contain bg-[#f8f2e6] duotone" />
                  </div>
                </figure>
              </RevealImage>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <article className={`grid grid-cols-[auto,1fr] gap-6 md:gap-10 py-8 md:py-10 ${i !== 0 ? "border-t border-ink/15" : ""}`}>
                <span className="font-serif text-6xl md:text-7xl leading-none text-accent/25 select-none">{c.n}</span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink leading-snug">{c.title}</h3>
                  <p className="mt-3 font-sans text-ink2 leading-relaxed max-w-xl">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
