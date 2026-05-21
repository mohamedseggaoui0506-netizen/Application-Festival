import { ScreenType } from '../../App';
import BottomNav from './BottomNav';

interface ConfirmationScreenProps {
  goTo: (screen: ScreenType) => void;
  showToast: (message: string) => void;
}

export default function ConfirmationScreen({ goTo, showToast }: ConfirmationScreenProps) {
  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between border-b border-[#2A2A2A] bg-[#0C0C0C]">
        <div className="font-[Bebas_Neue] text-[22px] text-[#F5F1EA] tracking-[3px]">Confirmation</div>
        <div className="text-base text-[#2ECC71]">✓</div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="px-6 py-5 text-center">
          <div className="w-[60px] h-[60px] rounded-full bg-[rgba(46,204,113,0.15)] border-2 border-[#2ECC71] flex items-center justify-center text-[28px] mx-auto mb-4">✓</div>
          <div className="font-[Bebas_Neue] text-xl text-[#F5F1EA] tracking-[2px] mb-1.5">Paiement Confirmé !</div>
          <div className="text-xs text-[#888] mb-5">
            Un e-mail de confirmation a été envoyé à<br />
            <strong className="text-[#FF5C1A]">clara@email.com</strong>
          </div>
          <hr className="border-none border-t border-[#2A2A2A] mb-4 mx-0" />
        </div>

        <div className="px-5 pt-0">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-[#888] mb-3">Votre billet numérique</div>
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded overflow-hidden">
            <div className="bg-gradient-to-br from-[#1a0800] to-[#1E1E1E] py-4 px-4 border-b border-dashed border-[#2A2A2A]">
              <div className="text-[9px] text-[#FF5C1A] tracking-[3px] uppercase mb-1">SONORA Festival 2026</div>
              <div className="font-[Bebas_Neue] text-lg text-[#F5F1EA] tracking-[2px]">Pass 1 Jour · Jour 1</div>
              <div className="text-[11px] text-[#888] mt-1">15 Juin 2026 · Clara Martin</div>
            </div>
            <div className="py-4 px-4 text-center">
              <div className="bg-white p-4 mx-auto w-fit rounded">
                <div className="w-20 h-20 bg-[repeating-conic-gradient(#000_0%_25%,#fff_0%_50%)] bg-[length:8px_8px] mx-auto border-4 border-white"></div>
              </div>
              <div className="text-[10px] text-[#555] tracking-[2px] mt-2">SN2026-A3K7-X9M2</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2.5">
            <button onClick={() => showToast('Ajouté au Wallet !')} className="bg-transparent border-[1.5px] border-[#FF5C1A] text-[#FF5C1A] py-2 px-3.5 text-[10px] font-bold tracking-[2px] uppercase text-center cursor-pointer w-full select-none">📲 Wallet</button>
            <button onClick={() => showToast('Téléchargement PDF...')} className="bg-[#2C2C2C] text-[#F5F1EA] border-none py-2 px-3.5 text-[10px] font-bold tracking-[2px] uppercase text-center cursor-pointer w-full select-none">⬇ PDF</button>
          </div>

          <div className="text-[10px] text-[#444] text-center mt-2.5 tracking-wider">Billet accessible hors-ligne dans Mon Compte</div>

          <div className="mt-4 mb-4">
            <button onClick={() => goTo('programme')} className="bg-transparent border-[1.5px] border-[#FF5C1A] text-[#FF5C1A] py-3.5 px-5 text-xs font-bold tracking-[2px] uppercase text-center cursor-pointer w-full select-none">
              🎵 Voir le programme
            </button>
          </div>
        </div>
      </div>

      <BottomNav active="billets" goTo={goTo} />
    </>
  );
}
