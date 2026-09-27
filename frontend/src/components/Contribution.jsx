import { useState } from "react";
import { Copy, Check, Heart } from "lucide-react";
import { toast } from "sonner";
import { GIVING } from "./data";
import { Reveal } from "./Reveal";

export default function Contribution() {
  const [copied, setCopied] = useState("");

  const copy = (value, key) => {
    navigator.clipboard?.writeText(value);
    setCopied(key);
    toast.success("Copiado para a área de transferência.");
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section id="contribuicao" data-testid="giving-section" className="px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="border-t border-b border-ink/15 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Generosidade</span>
              <h2 className="font-serif text-[#000103] text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight mt-3 font-semibold">
                Contribua com a <span className="italic text-[#fe8c00] font-bold">obra</span>
              </h2>
              <p className="mt-6 font-sans text-ink2 leading-relaxed max-w-xl">
                Cada oferta sustenta cultos, ministérios e ações sociais que tocam
                famílias em Amora. Contribua com alegria — “Deus ama quem dá com
                alegria.” (2 Coríntios 9:7)
              </p>

              <div className="mt-8 space-y-5 max-w-md">
                <div className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4" data-testid="giving-mbway">
                  <div>
                    <span className="cap">MB WAY</span>
                    <p className="font-serif text-2xl text-ink mt-1">{GIVING.mbway}</p>
                  </div>
                  <button onClick={() => copy(GIVING.mbway, "mbway")} className="btn-outline !px-4 !py-2" data-testid="copy-mbway-btn" aria-label="Copiar MB WAY">
                    {copied === "mbway" ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4" data-testid="giving-iban">
                  <div className="min-w-0">
                    <span className="cap">IBAN · {GIVING.holder}</span>
                    <p className="font-serif text-xl md:text-2xl text-ink mt-1 break-all">{GIVING.iban}</p>
                  </div>
                  <button onClick={() => copy(GIVING.iban.replace(/\s/g, ""), "iban")} className="btn-outline !px-4 !py-2 shrink-0" data-testid="copy-iban-btn" aria-label="Copiar IBAN">
                    {copied === "iban" ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* QR */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.1}>
              <div className="qr-frame relative text-center" style={{ transform: "rotate(1.5deg)" }}>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 tape" style={{ transform: "rotate(-3deg)" }} aria-hidden="true" />
                <img src={GIVING.qr} alt="QR Code para contribuição via MB WAY" width="240" height="240" className="w-56 h-56 md:w-64 md:h-64 mx-auto" data-testid="giving-qr" />
                <p className="mt-4 flex items-center justify-center gap-2 font-sans text-sm text-ink2">
                  <Heart size={15} className="text-accent" /> Aponte a câmara para contribuir
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
