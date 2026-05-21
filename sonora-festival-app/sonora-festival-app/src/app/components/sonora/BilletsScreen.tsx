import { ScreenType, TicketQuantities } from '../../App';
import BottomNav from './BottomNav';

interface BilletsScreenProps {
  goTo: (screen: ScreenType) => void;
  qtys: TicketQuantities;
  changeQty: (id: keyof TicketQuantities, delta: number) => void;
}

export default function BilletsScreen({ goTo, qtys, changeQty }: BilletsScreenProps) {
  const prices = { q1: 35, q2: 80, q3: 15 };
  const total = Object.keys(qtys).reduce((sum, key) => {
    const k = key as keyof TicketQuantities;
    return sum + qtys[k] * prices[k];
  }, 0);

  const tickets = [
    { key: 'q1' as keyof TicketQuantities, name: 'Pass 1 Jour', price: 35, desc: "Accès à toutes les scènes · 1 journée au choix" },
    { key: 'q2' as keyof TicketQuantities, name: 'Pass 3 Jours', price: 80, desc: "Accès intégral · 15, 16 & 17 juin 2026" },
    { key: 'q3' as keyof TicketQuantities, name: 'Pass Enfant (−12 ans)', price: 15, desc: "Accès libre accompagné d'un adulte · 1 journée" },
  ];

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Billetterie</div>
        <div className="w-9 h-9 bg-[#2C2C2C] rounded-full flex items-center justify-center text-base cursor-pointer">🛒</div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="px-5 py-4">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Sélectionner vos billets</div>

          {tickets.map(({ key, name, price, desc }) => (
            <div key={key} className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 mb-2.5 rounded">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[15px] font-bold text-[#F5F1EA]">{name}</div>
                <div className="font-[Bebas_Neue] text-xl text-[#FF5C1A] tracking-wider">{price} €</div>
              </div>
              <div className="text-[11px] text-[#888] mb-2.5">{desc}</div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold py-0.5 px-2 rounded bg-[rgba(46,204,113,0.15)] text-[#2ECC71] tracking-wider uppercase">● Disponible</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => changeQty(key, -1)} className="w-8 h-8 bg-[#3A3A3A] text-[#F5F1EA] border-none text-lg cursor-pointer rounded-full flex items-center justify-center transition-colors hover:bg-[#FF5C1A] select-none">−</button>
                  <span className="text-base font-bold text-[#F5F1EA] min-w-[20px] text-center">{qtys[key]}</span>
                  <button onClick={() => changeQty(key, 1)} className="w-8 h-8 bg-[#3A3A3A] text-[#F5F1EA] border-none text-lg cursor-pointer rounded-full flex items-center justify-center transition-colors hover:bg-[#FF5C1A] select-none">+</button>
                </div>
              </div>
            </div>
          ))}

          {/* VIP - épuisé */}
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 mb-2.5 rounded opacity-40 pointer-events-none">
            <div className="flex justify-between items-start mb-2">
              <div className="text-[15px] font-bold text-[#F5F1EA]">Pass VIP</div>
              <div className="font-[Bebas_Neue] text-xl text-[#FF5C1A] tracking-wider">150 €</div>
            </div>
            <div className="text-[11px] text-[#888] mb-2.5">Espace VIP + rencontres artistes · 3 jours</div>
            <span className="text-[9px] font-bold py-0.5 px-2 rounded bg-[rgba(255,255,255,0.05)] text-[#555] tracking-wider uppercase">Épuisé</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] border-t border-[#2A2A2A] py-3 px-5 flex justify-between items-center">
        <div>
          <div className="text-[10px] text-[#555] tracking-[2px] uppercase">Total</div>
          <div className="font-[Bebas_Neue] text-2xl text-[#FF5C1A] tracking-wider">{total} €</div>
        </div>
        <button onClick={() => total > 0 && goTo('panier')}
          className={`bg-[#FF5C1A] text-white py-2 px-3.5 text-[10px] font-bold tracking-[2px] uppercase cursor-pointer border-none transition-opacity select-none ${total > 0 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
          Panier →
        </button>
      </div>

      <BottomNav active="billets" goTo={goTo} />
    </>
  );
}
