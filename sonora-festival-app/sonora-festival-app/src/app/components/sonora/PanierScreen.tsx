import { ScreenType, TicketQuantities } from '../../App';
import BottomNav from './BottomNav';

interface PanierScreenProps {
  goTo: (screen: ScreenType) => void;
  qtys: TicketQuantities;
  setQtys: (qtys: TicketQuantities) => void;
  showToast: (message: string) => void;
}

export default function PanierScreen({ goTo, qtys, setQtys, showToast }: PanierScreenProps) {
  const prices = { q1: 35, q2: 80, q3: 15 };
  const names = { q1: 'Pass 1 Jour', q2: 'Pass 3 Jours', q3: 'Pass Enfant' };

  const subtotal = Object.keys(qtys).reduce((sum, key) => {
    const k = key as keyof TicketQuantities;
    return sum + qtys[k] * prices[k];
  }, 0);

  const totalCount = Object.values(qtys).reduce((s, q) => s + q, 0);
  const fees = subtotal > 0 ? 2.5 : 0;
  const total = subtotal + fees;

  const removeItem = (key: keyof TicketQuantities) => {
    setQtys({ ...qtys, [key]: 0 });
    showToast('Billet retiré du panier');
  };

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div onClick={() => goTo('billets')} className="text-[13px] text-[#FF5C1A] cursor-pointer font-medium">← Retour</div>
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Mon Panier</div>
        <div className="text-[11px] text-[#888]">{totalCount} billet{totalCount > 1 ? 's' : ''}</div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="px-5 py-4">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Récapitulatif</div>

          {totalCount === 0 ? (
            <div className="text-center py-8 text-[#444] text-[13px]">Votre panier est vide</div>
          ) : (
            Object.keys(qtys).map((key) => {
              const k = key as keyof TicketQuantities;
              if (qtys[k] === 0) return null;
              return (
                <div key={k} className="bg-[#1E1E1E] border border-[#2A2A2A] py-3 px-3.5 mb-2 rounded flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-[#F5F1EA]">{names[k]} × {qtys[k]}</div>
                    <div className="text-[11px] text-[#888] mt-0.5">SONORA Festival 2026</div>
                  </div>
                  <div className="text-right">
                    <div className="font-[Bebas_Neue] text-base text-[#FF5C1A] tracking-wider">{qtys[k] * prices[k]} €</div>
                    <div onClick={() => removeItem(k)} className="text-[10px] text-[#555] cursor-pointer mt-1 tracking-wider uppercase">Supprimer</div>
                  </div>
                </div>
              );
            })
          )}

          <div className="mt-3">
            <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-2">Code promo</div>
            <div className="flex gap-2">
              <input className="flex-1 bg-[#1E1E1E] border-[1.5px] border-[#2A2A2A] text-[#F5F1EA] py-3 px-3.5 text-[13px] outline-none focus:border-[#FF5C1A] placeholder:text-[#444]" placeholder="Saisir un code" />
              <button onClick={() => showToast('Code promo invalide')} className="bg-[#FF5C1A] text-white py-2 px-3.5 text-[10px] font-bold tracking-[2px] uppercase cursor-pointer border-none select-none">OK</button>
            </div>
          </div>

          <hr className="border-none border-t border-[#2A2A2A] my-4" />
          <div className="flex justify-between mb-1.5">
            <span className="text-xs text-[#888]">Sous-total</span>
            <span className="text-xs font-bold text-[#F5F1EA]">{subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-xs text-[#888]">Frais de service</span>
            <span className="text-xs font-bold text-[#F5F1EA]">{fees.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between py-3 px-3 bg-[#1E1E1E] rounded">
            <span className="text-[13px] font-bold text-[#F5F1EA]">TOTAL</span>
            <span className="font-[Bebas_Neue] text-[22px] text-[#FF5C1A] tracking-wider">{total.toFixed(2)} €</span>
          </div>
        </div>
      </div>

      <div className="py-3 px-5 pb-2">
        <button onClick={() => goTo('paiement')} className="bg-[#FF5C1A] text-white py-3.5 px-5 text-xs font-bold tracking-[2px] uppercase text-center cursor-pointer border-none transition-opacity hover:opacity-90 w-full select-none">
          Procéder au paiement →
        </button>
        <div className="flex items-center gap-1.5 justify-center py-2 text-[10px] text-[#444] tracking-wider">
          🔒 Paiement 100% sécurisé · Stripe · PCI-DSS
        </div>
      </div>

      <BottomNav active="billets" goTo={goTo} />
    </>
  );
}
