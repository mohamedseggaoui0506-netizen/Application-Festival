import { useEffect, useState } from 'react';
import { ScreenType } from '../../App';
import BottomNav from './BottomNav';

interface HomeScreenProps {
  goTo: (screen: ScreenType) => void;
  showToast: (message: string) => void;
}

export default function HomeScreen({ goTo, showToast }: HomeScreenProps) {
  const [time, setTime] = useState({ days: 47, hours: 12, mins: 34, secs: 0 });

  useEffect(() => {
    const festival = new Date('2026-06-15T14:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const diff = festival.getTime() - now.getTime();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        {/* Hero */}
        <div className="h-[200px] bg-gradient-to-br from-[#1a0a00] via-[#0C0C0C] to-[#0C0C0C] relative overflow-hidden flex flex-col items-center justify-center gap-1">
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,92,26,0.3)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#0C0C0C] to-transparent"></div>
          <div className="text-[10px] tracking-[5px] uppercase text-[#FF5C1A] font-bold relative z-10">Édition 2026</div>
          <div className="font-[Bebas_Neue] text-[64px] text-[#F5F1EA] tracking-[8px] leading-none relative z-10">SONORA</div>
          <div className="text-[11px] text-[#888] tracking-[3px] relative z-10">15 · 16 · 17 JUIN · BORDEAUX</div>
        </div>

        {/* Countdown */}
        <div className="px-5 pt-4 pb-2">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Compte à rebours</div>
          <div className="flex items-center justify-center gap-3 bg-[#1E1E1E] py-3.5 px-3.5 border border-[#2A2A2A]">
            {[
              { val: time.days, label: 'Jours' },
              { val: time.hours, label: 'Heures' },
              { val: time.mins, label: 'Min' },
              { val: time.secs, label: 'Sec' },
            ].map((unit, idx) => (
              <>
                {idx > 0 && <div key={`sep-${idx}`} className="font-[Bebas_Neue] text-2xl text-[#333] mb-2">:</div>}
                <div key={unit.label} className="text-center min-w-[44px]">
                  <div className="font-[Bebas_Neue] text-[32px] text-[#FF5C1A] leading-none">
                    {String(unit.val).padStart(2, '0')}
                  </div>
                  <div className="text-[8px] text-[#555] tracking-[2px] uppercase mt-0.5">{unit.label}</div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="px-5 pt-2">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Accès rapide</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => goTo('billets')} className="bg-[#FF5C1A] text-white py-3.5 px-5 text-xs font-bold tracking-[2px] uppercase text-center cursor-pointer border-none transition-opacity hover:opacity-90 select-none">
              🎟️ Acheter billets
            </button>
            <button onClick={() => goTo('programme')} className="bg-transparent border-[1.5px] border-[#FF5C1A] text-[#FF5C1A] py-3.5 px-5 text-xs font-bold tracking-[2px] uppercase text-center cursor-pointer transition-opacity hover:opacity-90 select-none">
              🎵 Programme
            </button>
          </div>
        </div>

        <hr className="border-none border-t border-[#2A2A2A] my-1 mx-0" />

        {/* News */}
        <div className="px-5 py-4">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Actualités</div>
          {[
            { icon: '🎸', title: 'Tame Impala rejoint la programmation', sub: 'Il y a 2h · Annonce' },
            { icon: '🎟', title: 'Ouverture billetterie VIP — places limitées', sub: 'Hier · Info billet' },
            { icon: '🚌', title: 'Navettes depuis la gare — infos transports', sub: 'Il y a 3 jours · Pratique' },
          ].map((news, idx) => (
            <div key={idx} onClick={() => showToast('Article ouvert')} className="bg-[#1E1E1E] border border-[#2A2A2A] p-3.5 mb-2 cursor-pointer transition-colors hover:border-[#FF5C1A] rounded flex gap-3 items-start">
              <div className="w-[52px] h-[52px] min-w-[52px] bg-gradient-to-br from-[#FF5C1A] to-[#c23a00] rounded flex items-center justify-center text-xl">
                {news.icon}
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#F5F1EA] mb-0.5 leading-tight">{news.title}</div>
                <div className="text-[11px] text-[#888]">{news.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="home" goTo={goTo} />
    </>
  );
}
