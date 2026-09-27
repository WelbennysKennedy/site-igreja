import { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { CONTACT, waLink } from "./data";
import { Reveal, RevealImage } from "./Reveal";

export default function Location() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Preencha o nome e o e-mail, por favor.");
      return;
    }
    toast.success("Mensagem recebida! Entraremos em contacto em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" data-testid="location-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">Venha visitar-nos</span>
          <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3 font-semibold">
            Onde nos <span className="italic text-[#fe8c00] font-bold">encontrar</span>
          </h2>
          <p className="mt-5 font-sans text-ink2 leading-relaxed">
            A nossa casa fica em Amora. Chegue mais cedo, tome um café connosco e
            sinta-se em família desde o primeiro momento.
          </p>
        </div>
      </Reveal>

      {/* Church photo + map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        <RevealImage className="lg:col-span-5">
          <figure className="photo-frame h-full" style={{ transform: "rotate(-1deg)" }}>
            <div className="relative overflow-hidden h-full" style={{ aspectRatio: "4/5" }}>
              <img src={CONTACT.churchPhoto} alt="Igreja Casa da Oração" loading="lazy" decoding="async" className="h-full w-full object-cover duotone" />
            </div>
            <figcaption className="absolute bottom-3 left-0 right-0 text-center cap">A nossa casa · Amora</figcaption>
          </figure>
        </RevealImage>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="photo-frame" style={{ transform: "rotate(0.6deg)" }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/12" }}>
              <iframe
                title="Mapa — Igreja Casa da Oração, Amora"
                src={CONTACT.mapEmbed}
                data-testid="map-iframe"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center cap">Amora · 38.62°N, 9.12°W</p>
          </div>
        </Reveal>
      </div>

      {/* Contacts + form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif text-2xl text-ink">{CONTACT.address}</h3>
                  <p className="font-sans text-ink2">{CONTACT.region}</p>
                  <a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer" data-testid="directions-link" className="link-underline inline-flex items-center gap-1 text-sm mt-2">
                    Como chegar <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-accent shrink-0" size={20} strokeWidth={1.5} />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="link-underline font-sans" data-testid="phone-link">{CONTACT.phone}</a>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-accent shrink-0" size={20} strokeWidth={1.5} />
                <a href={`mailto:${CONTACT.email}`} className="link-underline font-sans" data-testid="email-link">{CONTACT.email}</a>
              </div>
              <div className="flex gap-4 items-center">
                <img src="https://icons8.com/icon/A1JUR9NRH7sC/whatsapp-logo" alt="WhatsApp logo" className="h-5 w-5 object-contain" />
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="link-underline font-sans" data-testid="instagram-link">{CONTACT.instagramHandle}</a>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fa-brands fa-whatsapp text-accent text-xl w-5 text-center" aria-hidden="true" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="link-underline font-sans" data-testid="contact-whatsapp-link">{CONTACT.phone}</a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-10 space-y-4" data-testid="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="O seu nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="contact-name-input" className="bg-transparent border-b border-ink/30 py-3 font-sans text-ink placeholder:text-ink2/70 focus:outline-none focus:border-accent transition-colors" />
                <input type="email" placeholder="O seu e-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="contact-email-input" className="bg-transparent border-b border-ink/30 py-3 font-sans text-ink placeholder:text-ink2/70 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <textarea rows={3} placeholder="Como podemos orar por si?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="contact-message-input" className="w-full bg-transparent border-b border-ink/30 py-3 font-sans text-ink placeholder:text-ink2/70 focus:outline-none focus:border-accent transition-colors resize-none" />
              <button type="submit" className="btn-ink btn-animate-border" data-testid="contact-submit-btn">
                <span className="btn-animate-border__content inline-flex items-center gap-3">
                  Enviar mensagem <ArrowUpRight size={16} />
                </span>
                <span className="btn-border-edge top" />
                <span className="btn-border-edge right" />
                <span className="btn-border-edge bottom" />
                <span className="btn-border-edge left" />
              </button>
            </form>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="bg-black/75 text-cream p-8 md:p-12 h-full flex flex-col justify-center backdrop-blur-xl border border-white/15 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)]" style={{ transform: "rotate(-1.8deg)" }}>
              <span className="font-sans text-xs uppercase tracking-[0.28em] text-cream/70">Fale connosco agora</span>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight mt-4">
                Um toque, e estamos <span className="italic text-accent">à sua espera</span>.
              </h3>
              <p className="mt-4 font-sans text-cream/70 leading-relaxed max-w-md">
                Prefere uma conversa direta? Fale connosco pelo WhatsApp respondemos com carinho.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/5 text-cream text-3xl transition hover:bg-white/20 hover:text-white" data-testid="location-whatsapp-btn" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/5 text-cream text-3xl transition hover:bg-white/20 hover:text-white" data-testid="location-instagram-btn" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
