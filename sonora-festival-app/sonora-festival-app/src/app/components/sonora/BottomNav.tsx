import { ScreenType } from '../../App';

interface BottomNavProps {
  active: ScreenType;
  goTo: (screen: ScreenType) => void;
}

export default function BottomNav({ active, goTo }: BottomNavProps) {
  const items = [
    { id: 'home' as ScreenType, icon: '🏠', label: 'Accueil' },
    { id: 'programme' as ScreenType, icon: '🎵', label: 'Programme' },
    { id: 'billets' as ScreenType, icon: '🎟️', label: 'Billets' },
    { id: 'infos' as ScreenType, icon: '🗺️', label: 'Infos' },
    { id: 'confirmation' as ScreenType, icon: '👤', label: 'Compte' },
  ];

  return (
    <div className="bg-[#050505] border-t border-[#2A2A2A] pt-2 pb-4 px-1 flex justify-around flex-shrink-0">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => goTo(item.id)}
          className="flex flex-col items-center gap-1 cursor-pointer py-1 px-2.5 rounded-lg transition-colors hover:bg-[#1E1E1E] select-none"
        >
          <div className="text-xl leading-none">{item.icon}</div>
          <div className={`text-[9px] font-bold tracking-wider uppercase ${
            active === item.id ? 'text-[#FF5C1A]' : 'text-[#444]'
          }`}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
