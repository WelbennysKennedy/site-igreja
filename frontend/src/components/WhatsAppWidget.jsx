import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarClock, HandHeart, MapPin, MessageCircle, Info, ChevronRight } from "lucide-react";
import { WA_OPTIONS, waLink, WHATSAPP_DISPLAY } from "./data";

const ICONS = {
  "calendar-clock": CalendarClock,
  "hand-heart": HandHeart,
  "map-pin": MapPin,
  "message-circle": MessageCircle,
  info: Info,
};

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="wa-panel"
            data-testid="whatsapp-panel"
            role="dialog"
            aria-label="Atendimento WhatsApp"
          >
            {/* header */}
            <div className="bg-ink text-cream px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-lg leading-none">Casa da Oração</p>
                <span className="text-cream/60 text-xs">Responde normalmente em minutos</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Fechar" data-testid="whatsapp-close" className="text-cream/80 hover:text-cream">
                <X size={20} />
              </button>
            </div>

            {/* greeting */}
            <div className="px-5 pt-4">
              <p className="font-sans text-sm text-ink2 leading-relaxed">
                Olá! Como podemos ajudar hoje? Escolha uma opção e continuamos no WhatsApp.
              </p>
            </div>

            {/* options */}
            <div className="p-3 space-y-1.5">
              {WA_OPTIONS.map((opt, i) => {
                const Icon = ICONS[opt.icon] || MessageCircle;
                return (
                  <a
                    key={i}
                    href={waLink(opt.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`whatsapp-option-${i}`}
                    className="group flex items-center gap-3 px-3 py-3 hover:bg-ink/[0.05] transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-paper text-accent shrink-0">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <span className="flex-1 font-sans text-sm text-ink">{opt.label}</span>
                    <ChevronRight size={16} className="text-ink2 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </a>
                );
              })}
            </div>

            <div className="px-5 py-3 border-t border-ink/10 bg-paper/60">
              <span className="cap">{WHATSAPP_DISPLAY}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="wa-fab"
        data-testid="whatsapp-fab"
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento WhatsApp"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
