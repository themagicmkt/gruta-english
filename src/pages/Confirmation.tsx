import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { loadLeadRaw, loadLeadMasked, clearLead } from "@/lib/leadStorage";

type Plan = {
  id: string;
  name: string;
  priceLabel: string;
  productId: string;   // Digistore product
  plan?: string;       // Digistore plan index/id (opcional)
  highlight?: boolean;
  color?: "teal" | "gold" | "default";
};

const PLANS: Plan[] = [
  { id: "p1", name: "I Need a Little Support",        priceLabel: "$9",  productId: "624608",  color: "default" },
  { id: "p2", name: "Actual Delivery Cost",           priceLabel: "$19", productId: "PRODUCT_ID_19", color: "teal", highlight: true, plan: "0" },
  { id: "p3", name: "Send and Help Another Devotee",  priceLabel: "$35", productId: "PRODUCT_ID_35", color: "gold" },
];

const Confirmation = () => {
  const [headline, setHeadline] = useState("");
  const [paragraph, setParagraph] = useState("");

  const location = useLocation();
  const state = location.state as { nome?: string } | null;

  const leadRaw = useMemo(() => loadLeadRaw(), []);
  const leadMasked = useMemo(() => loadLeadMasked(), []);

  const nome = state?.nome || leadRaw?.name || "Friend";
  const primeiroNome = nome.split(" ")[0];
  const firstName = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1).toLowerCase();
  const saudacao = `Dear ${firstName},`;

  useEffect(() => {
    setHeadline(localStorage.getItem("headline") || "");
    setParagraph(localStorage.getItem("paragraph") || "");
  }, []);

  /** Monta URL do checkout Digistore com dados reais do lead */
  function buildDigistoreUrl(p: Plan): string {
    if (!leadRaw) return "#";

    const base = `https://www.checkout-ds24.com/product/${encodeURIComponent(p.productId)}`;
    const params = new URLSearchParams({
      email: leadRaw.email,     // **REAL**
      lang: "en",
      currency: "USD",
      // Passe telefone como custom, se quiser capturar:
      custom: leadRaw.phone     // **REAL** (ex.: para resgatar depois via webhook)
    });

    if (p.plan) {
      params.set("plan", p.plan);
      params.set("hide_plans", ""); // opcional: esconde escolhas
    }

    // cupom? params.set("voucher", "PROMO10");

    return `${base}?${params.toString()}`;
  }

  function handleCheckout(p: Plan) {
    const url = buildDigistoreUrl(p);
    // se quiser apagar PII local ao sair:
    clearLead();
    window.location.href = url;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header (igual ao seu) */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Volunteers of Lourdes</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">How It Works</a>
            <a href="#por-que-lourdes" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Why Lourdes?</a>
            <a href="#contribuicao" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Contribute</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
              <HeartPulse className="text-[#5f9ea0]" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 text-[#333333]">
              {headline || "📿 Just one more step for your prayer to reach the Grotto of Lourdes"}
            </h2>
          </div>
        </section>

        {/* Saudação + conteúdo */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
              {saudacao}
            </h3>

            {paragraph && <p className="text-lg mb-6 leading-relaxed">{paragraph}</p>}

            {/* Exemplo: se quiser mostrar os dados MASKED ao usuário */}
            {leadMasked && (
              <div className="mb-8 text-sm text-gray-600">
                <p><strong>Email (masked):</strong> {leadMasked.email}</p>
                <p><strong>Phone (masked):</strong> <span style={{wordBreak: 'break-word'}}>{leadMasked.phone}</span></p>
              </div>
            )}

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img src="/img04.webp" alt="Grotto of Lourdes" className="w-full max-w-none aspect-video object-cover" />
            </div>
          </div>
        </section>

        {/* Contribuição (Cards → agora com botão que chama Digistore) */}
        <section id="contribuicao" className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
              Send Your Prayer Request Now
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {PLANS.map(p => {
                const isTeal  = p.color === "teal";
                const isGold  = p.color === "gold";
                const border  = isTeal ? "border-[#5f9ea0]" : isGold ? "border-[#f4d58d]" : "border-[#5f9ea0]/30";
                const btnBase = isTeal ? "bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white" :
                                isGold ? "bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333]" :
                                         "bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white";
                return (
                  <Card key={p.id} className={`shadow-md hover:shadow-lg transition-all ${p.highlight ? "shadow-lg" : ""} border ${border}`}>
                    {p.highlight && (
                      <div className="absolute top-0 right-0 bg-[#5f9ea0] text-white text-xs py-1 px-3 rounded-bl-lg">
                        Recommended
                      </div>
                    )}
                    <CardContent className="pt-6 px-4 pb-6">
                      <div className="flex justify-center mb-4">
                        {isGold ? <Gift className="text-[#f4d58d]" size={32} /> :
                         isTeal ? <HeartPulse className="text-[#5f9ea0]" size={32} /> :
                                  <Gift className="text-[#5f9ea0]" size={32} />}
                      </div>
                      <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-2 text-center">{p.priceLabel}</h3>
                      <h4 className="font-sans text-lg mb-4 text-center">{p.name}</h4>

                      <Button className={`w-full ${btnBase} px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all`}
                              onClick={() => handleCheckout(p)}>
                        Continue
                      </Button>

                      <p className="text-xs mt-3 text-center text-gray-500">
                        It is an honor to include your prayer.
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Outras seções… (How it works etc.) */}
      </main>

      {/* Footer igual ao seu */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-6xl">
          {/* ... */}
          <div className="md:pl-8">
            <h4 className="font-playfair text-xl mb-4 text-white">Important Links</h4>
            <ul className="space-y-2">
              <li><Link to="/termos" className="text-sm hover:text-[#f4d58d] transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacidade" className="text-sm hover:text-[#f4d58d] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contato" className="text-sm hover:text-[#f4d58d] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Confirmation;
