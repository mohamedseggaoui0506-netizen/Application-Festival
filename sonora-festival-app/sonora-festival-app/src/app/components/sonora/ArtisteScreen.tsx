import { ScreenType } from '../../App';
import BottomNav from './BottomNav';

interface ArtisteScreenProps {
  goTo: (screen: ScreenType) => void;
  showToast: (message: string) => void;
}

export default function ArtisteScreen({ goTo, showToast }: ArtisteScreenProps) {
  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div onClick={() => goTo('programme')} className="text-[13px] text-[#FF5C1A] cursor-pointer font-medium">← Retour</div>
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Artiste</div>
        <div onClick={() => showToast('★ Ajouté aux favoris !')} className="text-[22px] cursor-pointer text-[#FF5C1A]">★</div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="h-[180px] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a0800] to-[#0C0C0C]">
          <div className="w-20 h-20 rounded-full bg-[#3A3A3A] border-[3px] border-[#FF5C1A] flex items-center justify-center text-[40px] mb-2.5 relative z-10">🎸</div>
        </div>

        <div className="px-5 py-4">
          <div className="font-[Bebas_Neue] text-[26px] text-[#F5F1EA] tracking-[2px] mb-1.5">Tame Impala</div>

          <div className="flex gap-1.5 flex-wrap mb-2.5">
            <span className="text-[9px] font-bold py-0.5 px-2 rounded bg-[rgba(46,204,113,0.15)] text-[#2ECC71] tracking-wider uppercase">Psychedelic Rock</span>
            <span className="text-[9px] font-bold py-0.5 px-2 rounded bg-[rgba(46,204,113,0.15)] text-[#2ECC71] tracking-wider uppercase">Australie</span>
          </div>

          <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-3 rounded mb-3.5">
            <div className="flex gap-5">
              <div>
                <div className="text-[9px] text-[#555] tracking-[2px] uppercase mb-0.5">Scène</div>
                <div className="text-[13px] font-bold text-[#F5F1EA]">Principale</div>
              </div>
              <div>
                <div className="text-[9px] text-[#555] tracking-[2px] uppercase mb-0.5">Heure</div>
                <div className="text-[13px] font-bold text-[#FF5C1A]">18h00 – 19h30</div>
              </div>
              <div>
                <div className="text-[9px] text-[#555] tracking-[2px] uppercase mb-0.5">Jour</div>
                <div className="text-[13px] font-bold text-[#F5F1EA]">Jour 1</div>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-2">Biographie</div>
          <div className="text-[13px] text-[#aaa] leading-relaxed mb-4">
            Tame Impala est le projet psychédélique du musicien australien Kevin Parker. Depuis ses débuts en 2007, il repousse les frontières entre rock psychédélique, pop électronique et soul futuriste.
          </div>

          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-2">Écouter</div>
          <div className="flex gap-2 mb-4">
            <button onClick={() => showToast('Ouverture Spotify...')} className="bg-transparent border-[1.5px] border-[#FF5C1A] text-[#FF5C1A] py-2 px-3.5 text-[10px] font-bold tracking-[2px] uppercase cursor-pointer transition-opacity hover:opacity-90 select-none">▶ Spotify</button>
            <button onClick={() => showToast('Ouverture YouTube...')} className="bg-transparent border-[1.5px] border-[#FF5C1A] text-[#FF5C1A] py-2 px-3.5 text-[10px] font-bold tracking-[2px] uppercase cursor-pointer transition-opacity hover:opacity-90 select-none">▶ YouTube</button>
          </div>

          <button onClick={() => showToast('★ Ajouté à Mon Planning !')} className="bg-[#FF5C1A] text-white py-3.5 px-5 text-xs font-bold tracking-[2px] uppercase text-center cursor-pointer border-none transition-opacity hover:opacity-90 w-full select-none">
            ★ Ajouter à Mon Planning
          </button>
        </div>
      </div>

      <BottomNav active="programme" goTo={goTo} />
    </>
  );
}
