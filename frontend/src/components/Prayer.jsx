import { HeartHandshake } from "lucide-react";
import { waLink } from "./data";
import { Reveal, RevealImage } from "./Reveal";

const PRAYER_IMG = "https://images.unsplash.com/photo-1438032005730-c779502df39b";

export default function Prayer() {
  return (
    <section id="oracao" data-testid="prayer-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <RevealImage className="order-2 lg:order-1">
          <figure className="photo-frame" style={{ transform: "rotate(-1.5deg)" }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={PRAYER_IMG} alt="Velas acesas em oração" loading="lazy" className="h-full w-full object-cover duotone" />
            </div>
            <figcaption className="absolute bottom-3 left-0 right-0 text-center cap">Estamos a orar por si</figcaption>
          </figure>
        </RevealImage>

        <Reveal className="order-1 lg:order-2">
          <span className="eyebrow">Um lugar para o seu coração</span>
          <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight mt-4 font-semibold">
            Deixe-nos <span className="italic text-[#fe8c00] font-bold">orar</span> por si
          </h2>
          <p className="mt-6 font-sans text-ink2 leading-relaxed max-w-lg">
            Seja qual for o peso que carrega hoje, não precisa de o carregar sozinho.
            Partilhe o seu pedido e a nossa equipa de intercessão orará por si com
            carinho e discrição.
          </p>
          <a href={waLink("Olá! Tenho um pedido de oração que gostaria de partilhar.")} target="_blank" rel="noopener noreferrer" data-testid="prayer-whatsapp-btn" className="btn-ink mt-8">
            <HeartHandshake size={18} /> Enviar pedido pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
