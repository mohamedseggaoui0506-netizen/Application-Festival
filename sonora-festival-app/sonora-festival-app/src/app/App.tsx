import { useState } from 'react';
import HomeScreen from './components/sonora/HomeScreen';
import ProgrammeScreen from './components/sonora/ProgrammeScreen';
import ArtisteScreen from './components/sonora/ArtisteScreen';
import BilletsScreen from './components/sonora/BilletsScreen';
import PanierScreen from './components/sonora/PanierScreen';
import PaiementScreen from './components/sonora/PaiementScreen';
import ConfirmationScreen from './components/sonora/ConfirmationScreen';
import InfosScreen from './components/sonora/InfosScreen';

export type ScreenType = 'home' | 'programme' | 'artiste' | 'billets' | 'panier' | 'paiement' | 'confirmation' | 'infos';

export interface TicketQuantities {
  q1: number;
  q2: number;
  q3: number;
}

export default function App() {
  const [screen, setScreen] = useState<ScreenType>('home');
  const [qtys, setQtys] = useState<TicketQuantities>({ q1: 0, q2: 0, q3: 0 });
  const [toast, setToast] = useState<string>('');

  const goTo = (newScreen: ScreenType) => setScreen(newScreen);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(''), 2000);
  };

  const changeQty = (id: keyof TicketQuantities, delta: number) => {
    setQtys(prev => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-start py-8 px-5">
      {/* Phone Shell */}
      <div className="w-[375px] bg-[#0C0C0C] rounded-[44px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_0_1px_#333]">

        {/* Notch */}
        <div className="bg-black h-9 flex items-center justify-between px-5">
          <span className="text-xs font-bold text-white">9:41</span>
          <div className="w-[100px] h-6 bg-black rounded-[20px] absolute top-[14px] left-1/2 -translate-x-1/2 border-2 border-[#1a1a1a]"></div>
          <div className="flex gap-1.5 items-center text-[11px] text-white">
            <span>●●●</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className="min-h-[720px] bg-[#0C0C0C] flex flex-col">
          {screen === 'home' && <HomeScreen goTo={goTo} showToast={showToast} />}
          {screen === 'programme' && <ProgrammeScreen goTo={goTo} showToast={showToast} />}
          {screen === 'artiste' && <ArtisteScreen goTo={goTo} showToast={showToast} />}
          {screen === 'billets' && <BilletsScreen goTo={goTo} qtys={qtys} changeQty={changeQty} />}
          {screen === 'panier' && <PanierScreen goTo={goTo} qtys={qtys} setQtys={setQtys} showToast={showToast} />}
          {screen === 'paiement' && <PaiementScreen goTo={goTo} qtys={qtys} />}
          {screen === 'confirmation' && <ConfirmationScreen goTo={goTo} showToast={showToast} />}
          {screen === 'infos' && <InfosScreen goTo={goTo} showToast={showToast} />}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-[120px] left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white px-5 py-2.5 rounded-3xl text-xs font-bold whitespace-nowrap">
          {toast}
        </div>
      )}
    </div>
  );
}
