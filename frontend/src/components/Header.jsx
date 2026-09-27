import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, CONTACT } from "./data";
import logo from "../assets/logo-transparent-small.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header data-testid="site-header" className="fixed inset-x-0 top-0 z-50">
      <div
        className={`sheet-w mt-2 md:mt-3 flex items-center justify-between px-6 sm:px-10 md:px-12 transition-all duration-500 ${
          scrolled
            ? "py-2 md:py-3 bg-black/70 shadow-[0_8px_18px_rgba(0,0,0,0.2)]"
            : "py-3 md:py-5 bg-black/35"
        }`}
      >
        <a href="#inicio" onClick={(e) => go(e, "#inicio")} data-testid="logo-link" className="flex items-center gap-3 group shrink-0">
          <img src={logo} alt="Igreja Casa da Oração" className="h-14 w-auto md:h-20 select-none" draggable="false" />
        </a>

        <nav className="hidden xl:flex items-center gap-6 pr-6 text-white" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)} data-testid={`nav-${item.label.toLowerCase()}`} className="link-underline font-sans text-sm tracking-wide text-white">
              {item.label}
            </a>
          ))}
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" data-testid="header-live-btn" className="btn-live">
            <span className="live-dot" /> Ao vivo
          </a>
        </nav>

        <button className="xl:hidden text-ink p-2 -mr-2" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} data-testid="mobile-menu-toggle">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="sheet-w mt-2 bg-paper px-6 py-6 shadow-[0_16px_28px_rgba(21,19,17,0.2)] xl:hidden"
            data-testid="mobile-menu"
            aria-label="Navegação móvel"
          >
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={(e) => go(e, item.href)} data-testid={`mobile-nav-${item.label.toLowerCase()}`} className="font-serif text-xl text-ink hover:text-accent transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="btn-live mt-6 w-full justify-center" data-testid="mobile-live-btn">
              <span className="live-dot" /> Ao vivo agora
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
