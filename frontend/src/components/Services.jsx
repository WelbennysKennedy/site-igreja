import { SERVICES } from "./data";
import { Reveal } from "./Reveal";

export default function Services() {
  return (
    <section id="cultos" data-testid="services-section" className="px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-ink/20 pb-6">
          <div>
            <span className="eyebrow">Reúna-se connosco</span>
            <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3 font-semibold">
              Horários dos <span className="italic text-[#3b82f6] font-bold">cultos</span>
            </h2>
          </div>
          <p className="font-sans text-ink2 max-w-xs sm:text-right text-base sm:text-lg">
            As portas abrem 30 minutos antes. Traga a família, há espaço para todos.
          </p>
        </div>
      </Reveal>

      <div className="mt-4">
        {SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div
              data-testid={`service-row-${i}`}
              className="group grid grid-cols-1 sm:grid-cols-[1.1fr,1.4fr,auto] items-baseline gap-2 sm:gap-8 py-6 border-b border-ink/12 transition-colors hover:bg-ink/[0.03]"
            >
              <span className="font-sans text-xs uppercase tracking-[0.22em] text-ink2 font-semibold">{s.day}</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-ink font-semibold">{s.name}</h3>
                <p className="font-sans text-sm text-ink2 mt-1">{s.note}</p>
              </div>
              <span className="font-serif text-2xl md:text-3xl text-ink whitespace-nowrap font-semibold">{s.time}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
