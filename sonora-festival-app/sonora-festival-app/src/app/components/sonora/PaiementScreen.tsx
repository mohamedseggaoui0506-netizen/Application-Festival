import { useState } from 'react';
import { ScreenType, TicketQuantities } from '../../App';
import BottomNav from './BottomNav';

interface PaiementScreenProps {
  goTo: (screen: ScreenType) => void;
  qtys: TicketQuantities;
}

export default function PaiementScreen({ goTo, qtys }: PaiementScreenProps) {
  const [activePayment, setActivePayment] = useState(0);
  const [processing, setProcessing] = useState(false);

  const prices = { q1: 35, q2: 80, q3: 15 };
  const subtotal = Object.keys(qtys).reduce((sum, key) => {
    const k = key as keyof TicketQuantities;
    return sum + qtys[k] * prices[k];
  }, 0);
  const total = (subtotal + 2.5).toFixed(2);

  const processPayment = () => {
    setProcessing(true);
    setTimeout(() => goTo('confirmation'), 2000);
  };

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div onClick={() => goTo('panier')} className="text-[13px] text-[#FF5C1A] cursor-pointer font-medium">← Retour</div>
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Paiement</div>
        <div className="text-[11px] text-[#2ECC71]">🔒 Sécurisé</div>
      </div>

      <div className="flex items-center py-3 px-5 bg-[#1E1E1E] border-b border-[#2A2A2A]">
        {['Billets', 'Panier', 'Paiement', 'Confirmation'].map((step, idx) => (
          <>
            {idx > 0 && <div key={`sep-${idx}`} className="flex-1 h-px bg-[#333] mx-1.5"></div>}
            <span key={step} className={`text-[9px] font-bold tracking-wider uppercase whitespace-nowrap ${idx === 2 ? 'text-[#FF5C1A]' : idx < 2 ? 'text-[#2ECC71]' : 'text-[#444]'}`}>
              {step}
            </span>
          </>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="px-5 py-4">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-2">Vos coordonnées</div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[{ label: 'Prénom *', placeholder: 'Clara', defaultValue: 'Clara' }, { label: 'Nom *', placeholder: 'Martin', defaultValue: 'Martin' }].map(f => (
              <div key={f.label}>
                <label className="text-[10px] font-bold text-[#888] tracking-[2px] uppercase mb-1.5 block">{f.label}</label>
                <input className="w-full bg-[#1E1E1E] border-[1.5px] border-[#2A2A2A] text-[#F5F1EA] py-3 px-3.5 text-[13px] outline-none focus:border-[#FF5C1A] placeholder:text-[#444]" placeholder={f.placeholder} defaultValue={f.defaultValue} />
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label className="text-[10px] font-bold text-[#888] tracking-[2px] uppercase mb-1.5 block">E-mail *</label>
            <input type="email" className="w-full bg-[#1E1E1E] border-[1.5px] border-[#2A2A2A] text-[#F5F1EA] py-3 px-3.5 text-[13px] outline-none focus:border-[#FF5C1A] placeholder:text-[#444]" defaultValue="clara@email.com" />
          </div>

          <hr className="border-none border-t border-[#2A2A2A] my-4" />

          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-2">Moyen de paiement</div>
          <div className="grid grid-cols-3 gap-1.5 mb-3.5">
            {['💳 Carte', 'PayPal', 'Apple Pay'].map((method, idx) => (
              <div key={idx} onClick={() => setActivePayment(idx)}
                className={`bg-[#1E1E1E] border-[1.5px] py-2.5 px-1.5 text-center text-[11px] font-bold cursor-pointer rounded transition-all select-none ${activePayment === idx ? 'border-[#FF5C1A] text-[#FF5C1A]' : 'border-[#2A2A2A] text-[#555] hover:border-[#FF5C1A] hover:text-[#FF5C1A]'}`}>
                {method}
              </div>
            ))}
          </div>

          <div className="mb-3">
            <label className="text-[10px] font-bold text-[#888] tracking-[2px] uppercase mb-1.5 block">Numéro de carte *</label>
            <input className="w-full bg-[#1E1E1E] border-[1.5px] border-[#2A2A2A] text-[#F5F1EA] py-3 px-3.5 text-[13px] outline-none focus:border-[#FF5C1A] placeholder:text-[#444]" placeholder="1234 5678 9012 3456" maxLength={19} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-[#888] tracking-[2px] uppercase mb-1.5 block">Expiration *</label>
              <input className="w-full bg-[#1E1E1E] border-[1.5px] border-[#2A2A2A] text-[#F5F1EA] py-3 px-3.5 text-[13px] outline-none focus:border-[#FF5C1A] placeholder:text-[#444]" placeholder="MM / AA" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#888] tracking-[2px] uppercase mb-1.5 block">CVV *</label>
              <input className="w-full bg-[#1E1E1E] border-[1.5px] border-[#2A2A2A] text-[#F5F1EA] py-3 px-3.5 text-[13px] outline-none focus:border-[#FF5C1A] placeholder:text-[#444]" placeholder="123" maxLength={3} />
            </div>
          </div>

          <div className="flex items-center gap-1.5 justify-center py-2 text-[10px] text-[#444] tracking-wider mb-2">
            🔒 Traitement sécurisé via Stripe · Certification PCI-DSS
          </div>
        </div>
      </div>

      <div className="py-2 px-5 pb-3">
        <button onClick={processPayment} disabled={processing}
          className={`bg-[#FF5C1A] text-white py-3.5 px-5 text-xs font-bold tracking-[2px] uppercase text-center cursor-pointer border-none w-full select-none ${processing ? 'opacity-70 pointer-events-none' : 'hover:opacity-90'}`}>
          {processing ? '⏳ Traitement en cours...' : `Payer ${total} € →`}
        </button>
      </div>

      <BottomNav active="billets" goTo={goTo} />
    </>
  );
}
