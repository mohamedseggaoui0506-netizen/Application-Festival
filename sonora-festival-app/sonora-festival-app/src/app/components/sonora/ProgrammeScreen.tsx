import { useState, type MouseEvent } from 'react';
import { ScreenType } from '../../App';
import BottomNav from './BottomNav';

interface ProgrammeScreenProps {
  goTo: (screen: ScreenType) => void;
  showToast: (message: string) => void;
}

export default function ProgrammeScreen({ goTo, showToast }: ProgrammeScreenProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeChip, setActiveChip] = useState(0);

  const tabs = ['Jour 1', 'Jour 2', 'Jour 3'];
  const chips = ['Toutes', 'Principale', 'Découverte', 'Électro'];

  const artists = [
    { icon: '🎸', name: 'Tame Impala', time: '18h00 — Scène Principale', tag: 'Psychedelic Rock', fav: false },
    { icon: '🎛️', name: 'Bicep', time: '19h30 — Scène Électro', tag: 'Electronic', fav: true },
    { icon: '🌍', name: 'Mdou Moctar', time: '21h00 — Scène Découverte', tag: 'World / Tuareg', fav: false },
    { icon: '🎹', name: 'Floating Points', time: '22h30 — Scène Électro', tag: 'Jazz / Electronic', fav: false },
    { icon: '🎤', name: 'Arooj Aftab', time: '16h00 — Scène Découverte', tag: 'Neo-Soul / Pakistani', fav: false },
  ];

  const [favorites, setFavorites] = useState(artists.map(a => a.fav));

  const toggleStar = (e: MouseEvent<HTMLDivElement>, idx: number) => {
    e.stopPropagation();
    const newFavs = [...favorites];
    newFavs[idx] = !newFavs[idx];
    setFavorites(newFavs);
    showToast(newFavs[idx] ? '★ Ajouté aux favoris !' : 'Retiré des favoris');
  };

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Programme</div>
        <div className="w-9 h-9 bg-[#2C2C2C] rounded-full flex items-center justify-center text-base cursor-pointer">🔍</div>
      </div>

      <div className="flex border-b border-[#2A2A2A] bg-[#0C0C0C]">
        {tabs.map((tab, idx) => (
          <div key={idx} onClick={() => { setActiveTab(idx); showToast(`Jour affiché : ${tab}`); }}
            className={`flex-1 py-3 px-2 text-center text-xs font-bold tracking-wider cursor-pointer border-b-2 transition-all select-none ${activeTab === idx ? 'text-[#FF5C1A] border-[#FF5C1A]' : 'text-[#555] border-transparent'}`}>
            {tab}
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="px-5 py-4">
          <div className="flex gap-1.5 flex-wrap">
            {chips.map((chip, idx) => (
              <div key={idx} onClick={() => setActiveChip(idx)}
                className={`text-[10px] font-bold py-1.5 px-3 border-[1.5px] cursor-pointer rounded-full tracking-wider uppercase transition-all select-none ${activeChip === idx ? 'bg-[#FF5C1A] text-white border-[#FF5C1A]' : 'text-[#555] border-[#2A2A2A] hover:border-[#FF5C1A] hover:text-[#FF5C1A]'}`}>
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 pb-5">
          {artists.map((artist, idx) => (
            <div key={idx} onClick={() => goTo('artiste')}
              className="flex items-center gap-3 bg-[#1E1E1E] border border-[#2A2A2A] py-3 px-3.5 mb-2 cursor-pointer rounded transition-colors hover:border-[#FF5C1A]">
              <div className="w-11 h-11 min-w-[44px] rounded-full flex items-center justify-center text-xl bg-[#3A3A3A]">{artist.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-bold text-[#F5F1EA]">{artist.name}</div>
                <div className="text-[11px] text-[#888] mt-0.5">{artist.time}</div>
                <div className="text-[9px] font-bold py-0.5 px-2 bg-[#3A3A3A] text-[#FF5C1A] rounded inline-block tracking-wider uppercase mt-1">{artist.tag}</div>
              </div>
              <div onClick={(e) => toggleStar(e, idx)}
                className={`text-xl cursor-pointer p-1 flex-shrink-0 select-none transition-colors ${favorites[idx] ? 'text-[#FF5C1A]' : 'text-[#444]'}`}>
                {favorites[idx] ? '★' : '☆'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="programme" goTo={goTo} />
    </>
  );
}
