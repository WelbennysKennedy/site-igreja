import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { VIDEOS } from "./data";
import { Reveal } from "./Reveal";

export default function Videos() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const select = (i) => {
    setActive(i);
    setPlaying(false);
    requestAnimationFrame(() => {
      if (videoRef.current) videoRef.current.load();
    });
  };

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const current = VIDEOS[active];

  return (
    <section id="videos" data-testid="videos-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Assista quando quiser</span>
            <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3 font-semibold">
              Mural de <span className="italic text-[#fe8c00] font-bold">vídeos</span>
            </h2>
          </div>
          <p className="font-sans text-ink2 max-w-xs sm:text-right">Cultos, mensagens e momentos especiais da nossa casa.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-9">
        {/* Main player */}
        <Reveal className="lg:col-span-8">
          <div className="video-frame relative" style={{ transform: "rotate(-1deg)" }}>
            <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: "16/9" }}>
              <video
                ref={videoRef}
                data-testid="main-video"
                key={current.src}
                className="absolute inset-0 h-full w-full object-cover duotone"
                poster={current.poster}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src={current.src} type="video/mp4" />
              </video>
              <button
                onClick={toggle}
                data-testid="video-play-toggle"
                aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
                className="absolute inset-0 flex items-center justify-center text-cream transition-colors"
              >
                {!playing && (
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-ink/70 hover:bg-accent/80 transition-colors">
                    <Play size={34} className="ml-1" />
                  </span>
                )}
                {playing && (
                  <span className="absolute bottom-4 left-4 flex items-center justify-center w-11 h-11 rounded-full bg-ink/60 hover:bg-accent/80 transition-colors">
                    <Pause size={18} />
                  </span>
                )}
              </button>
            </div>
            <p className="pt-4 px-1 pb-1 font-serif text-2xl text-ink">{current.title}</p>
            <span className="absolute -top-3 right-16 tape" style={{ transform: "rotate(5deg)" }} aria-hidden="true" />
          </div>
        </Reveal>

        {/* Thumbnails */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {VIDEOS.map((v, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => select(i)}
                data-testid={`video-thumb-${i}`}
                className={`group w-full text-left flex gap-4 items-center p-2 pr-3 transition-colors ${active === i ? "bg-ink/[0.06]" : "hover:bg-ink/[0.03]"}`}
              >
                <span className="relative shrink-0 w-32 h-24 sm:w-28 sm:h-20 overflow-hidden bg-ink">
                  <img src={v.poster} alt={v.title} loading="lazy" decoding="async" className="h-full w-full object-cover duotone" />
                  <span className="absolute inset-0 flex items-center justify-center text-cream">
                    <Play size={18} className={`${active === i ? "text-accent" : ""}`} />
                  </span>
                </span>
                <span className="min-w-0">
                  <span className={`block font-serif text-lg leading-tight ${active === i ? "text-accent" : "text-ink"}`}>{v.title}</span>
                  <span className="block cap mt-1">{v.meta}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
