import { PHOTO_INTRO } from "./data";
import { Reveal } from "./Reveal";

function Piece({ item, index }) {
  return (
    <figure
      data-testid={`intro-photo-${index}`}
      style={{ transform: `rotate(${item.rotate}deg)` }}
      className="photo-frame photo-frame--intro"
    >
      <div className="intro-photo-media relative overflow-hidden bg-[#f8f2e6]">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full duotone transition-transform duration-1000 ease-out hover:scale-105 ${item.fit === "contain" ? "object-contain" : "object-cover"}`}
        />
      </div>
      <figcaption className="intro-photo-caption cap">{item.cap}</figcaption>
    </figure>
  );
}

export default function PhotoStrip() {
  return (
    <section data-testid="photo-intro-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <h2 className="font-serif text-[#000103] text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold">
            A vida da <span className="italic text-[#fe8c00] font-bold">nossa casa</span>
          </h2>
          <p className="font-sans text-ink2 max-w-sm sm:text-right">
            Momentos de culto, comunhão e celebração recortes da nossa comunidade.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-8 items-start">
        {PHOTO_INTRO.map((item, i) => (
          <div key={i}>
            <Piece item={item} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
