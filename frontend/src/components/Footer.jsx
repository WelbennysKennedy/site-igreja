import { useRef } from "react";
import { NAV, CONTACT, waLink } from "./data";
import { Reveal } from "./Reveal";
import logo from "../assets/logo-transparent-small.png";

export default function Footer() {
  const titleRef = useRef(null);
  const handleTitleMove = (event) => {
    const title = titleRef.current;
    if (!title) return;
    const rect = title.getBoundingClientRect();
    title.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    title.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };
  const go = (e, href) => {
    e.preventDefault();
    const t = document.querySelector(href);
    if (!t) return;
    t.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="site-footer" className="px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-10">
      <div className="border-t border-ink/20 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="bg-dark inline-flex p-2" style={{ boxShadow: "0 6px 16px rgba(21,19,17,0.35)" }}>
              <img src={logo} alt="Igreja Casa da Oração" className="h-11 w-auto" draggable="false" />
            </span>
            <p className="mt-5 font-sans text-ink2 leading-relaxed max-w-xs">
              Uma casa de oração para todos os povos. {CONTACT.address}, {CONTACT.region}.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram" className="w-10 h-10 flex items-center justify-center bg-ink text-cream hover:bg-accent transition-colors">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-testid="footer-whatsapp" className="w-10 h-10 flex items-center justify-center bg-ink text-cream hover:bg-accent transition-colors">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="E-mail" data-testid="footer-email" className="w-10 h-10 flex items-center justify-center bg-ink text-cream hover:bg-accent transition-colors">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <span className="eyebrow">Navegação</span>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={(e) => go(e, n.href)} className="link-underline font-sans">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Horários</span>
            <ul className="mt-4 space-y-2 font-sans text-ink2">
              <li>Domingo — 11h00 · 13h00</li>
              <li>Sexta Feira — 21h00 Live</li>
            </ul>
          </div>
        </div>

        <Reveal>
          <h2
            ref={titleRef}
            onMouseMove={handleTitleMove}
            className="footer-text-highlight font-serif text-[#000103] leading-none tracking-tight mt-14 text-[15vw] lg:text-[11vw] select-none font-semibold"
          >
            Casa da <span className="inline-block italic text-[#fe8c00] font-bold ml-4">Oração</span>
          </h2>
        </Reveal>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-8 pt-6 border-t border-ink/15">
          <p className="font-sans text-xs text-ink2 tracking-wide">© {new Date().getFullYear()} Igreja Casa da Oração · Amora, Portugal</p>
          <p className="font-sans text-xs text-ink2 tracking-wide">Feito com fé e cuidado editorial</p>
        </div>
      </div>
    </footer>
  );
}
