import { useState } from 'react';
import { ScreenType } from '../../App';
import BottomNav from './BottomNav';

interface InfosScreenProps {
  goTo: (screen: ScreenType) => void;
  showToast: (message: string) => void;
}

export default function InfosScreen({ goTo, showToast }: InfosScreenProps) {
  const [activeChip, setActiveChip] = useState(0);
  const chips = ['Scènes', 'Toilettes', 'Resto', 'Secours'];

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Infos Pratiques</div>
        <div className="w-9 h-9 bg-[#2C2C2C] rounded-full flex items-center justify-center text-base cursor-pointer">ℹ️</div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="px-5 py-4">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Carte du festival</div>
          <div className="h-[160px] bg-[#1E1E1E] relative rounded overflow-hidden mb-2.5">
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,92,26,0.08) 0%, transparent 50%), repeating-linear-gradient(0deg, #2A2A2A 0px, #2A2A2A 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #2A2A2A 0px, #2A2A2A 1px, transparent 1px, transparent 30px)` }}></div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-[#FF5C1A] absolute top-[35px] left-[55px]"></div>
            <div className="absolute top-[20px] left-[62px] text-[8px] text-white bg-black/70 px-1 py-0.5 rounded whitespace-nowrap">🎵 Principale</div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-[#4ecdc4] absolute top-[75px] left-[160px]"></div>
            <div className="absolute top-[60px] left-[168px] text-[8px] text-white bg-black/70 px-1 py-0.5 rounded whitespace-nowrap">🎛 Électro</div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-[#a29bfe] absolute top-[45px] left-[240px]"></div>
            <div className="absolute top-[30px] left-[248px] text-[8px] text-white bg-black/70 px-1 py-0.5 rounded whitespace-nowrap">🌍 Découverte</div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-[#fd79a8] absolute top-[110px] left-[90px]"></div>
            <div className="absolute top-[122px] left-[98px] text-[8px] text-white bg-black/70 px-1 py-0.5 rounded whitespace-nowrap">🍕 Food</div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-white absolute top-[105px] left-[200px]"></div>
            <div className="absolute top-[117px] left-[208px] text-[8px] text-white bg-black/70 px-1 py-0.5 rounded whitespace-nowrap">🚻 WC</div>
          </div>

          <div className="flex gap-1.5 flex-wrap mb-4">
            {chips.map((chip, idx) => (
              <div key={idx} onClick={() => setActiveChip(idx)}
                className={`text-[10px] font-bold py-1.5 px-3 border-[1.5px] cursor-pointer rounded-full tracking-wider uppercase transition-all select-none ${activeChip === idx ? 'bg-[#FF5C1A] text-white border-[#FF5C1A]' : 'text-[#555] border-[#2A2A2A] hover:border-[#FF5C1A] hover:text-[#FF5C1A]'}`}>
                {chip}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-none border-t border-[#2A2A2A]" />

        <div className="px-5 py-4">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Informations</div>
          {[
            { icon: '🚗', title: 'Accès & Transports', msg: 'Accès & Transports' },
            { icon: '🅿️', title: 'Parking', msg: 'Parking ouvert' },
            { icon: '📋', title: 'Règlement intérieur', msg: 'Règlement intérieur' },
            { icon: '❓', title: 'FAQ — Questions fréquentes', msg: 'FAQ ouverte' },
            { icon: '📞', title: 'Contact urgence festival', msg: 'Appel : 05 56 XX XX XX' },
          ].map((item, idx) => (
            <div key={idx} onClick={() => showToast(item.msg)} className="flex items-center justify-between py-3.5 border-b border-[#2A2A2A] cursor-pointer group">
              <div className="flex items-center gap-2.5">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm font-medium text-[#F5F1EA]">{item.title}</span>
              </div>
              <span className={`text-lg transition-colors ${idx === 4 ? 'text-[#FF5C1A]' : 'text-[#444] group-hover:text-[#FF5C1A]'}`}>
                {idx === 4 ? 'Appeler' : '›'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="infos" goTo={goTo} />
    </>
  );
}
