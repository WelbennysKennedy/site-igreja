import { EVENT_GALLERY } from "./data";
import { Reveal } from "./Reveal";

function Photo({ item, index }) {
  return (
    <figure
      data-testid={`gallery-photo-${index}`}
      className="photo-frame photo-frame--gallery"
    >
      <div className="gallery-photo-media relative overflow-hidden">
        <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover duotone transition-transform duration-1000 ease-out hover:scale-105" />
      </div>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="galeria" data-testid="gallery-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink/20 pb-6 mb-12">
          <div>
            <span className="eyebrow">Momentos</span>
            <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3 font-semibold">
              Galeria da <span className="italic text-[#fe8c00] font-bold">comunidade</span>
            </h2>
          </div>
          <span className="font-serif italic text-ink2 text-lg hidden sm:block">Nº 06</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
        {EVENT_GALLERY.map((item, i) => (
          <Photo key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
