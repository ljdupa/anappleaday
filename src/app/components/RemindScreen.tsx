import { useState } from 'react';
import SharedTaskbar from './SharedTaskbar';

interface RemindScreenProps {
  onBack?: () => void;
  onSend?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
  onNavigateToProfile?: () => void;
}

export default function RemindScreen({
  onBack,
  onSend,
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToFriends,
  onNavigateToProfile,
}: RemindScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const messages = [
    "Make sure to hydrate!",
    "Take a break",
    "Get some fresh air, take a walk!",
    "Remember your deadlines!",
    "Make sure to keep in contact!",
    "Keep track of time!",
    "Make sure to eat something!",
    "Remember to get some sleep tonight!",
    "Don't forget to ask for help if you need!",
  ];

  return (
    <div className="relative size-full overflow-hidden bg-[#f3efd4]">
      <img
        src="/figma-screens/iPhone16Remind.svg"
        className="absolute top-0 left-0 w-full h-full object-cover object-left-top"
      />

      <style>{`
        [data-name="continue button"] { display: none !important; }
        [data-name="send"] { display: none !important; }
        [data-name="Send"] { display: none !important; }
        [data-name="send button"] { display: none !important; }
      `}</style>

      {messages.map((_, index) => (
        <button
          key={index}
          onClick={() => setSelected(selected === index ? null : index)}
          className={`absolute left-[19px] w-[355px] h-[64px] rounded-[10px] z-10 border-0 transition-all ${
            selected === index ? 'ring-4 ring-[#EC9808] bg-[#EC9808]/10' : 'bg-transparent'
          }`}
          style={{ top: `${90 + index * 70}px` }}
          aria-label={messages[index]}
        />
      ))}

      <button
        onClick={onBack}
        className="absolute left-[26px] bottom-[85px] z-20 bg-[#f0a500] text-white px-3 py-1 flex items-center gap-2 rounded-[6px]"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
      >
        ← back
      </button>

      <button
        onClick={() => selected !== null && onSend?.()}
        className="absolute right-[26px] bottom-[85px] z-20 bg-[#f0a500] text-white px-4 py-1 rounded-[6px]"
        style={{
          fontFamily: '"Cabin Condensed", sans-serif',
          fontWeight: 700,
          opacity: selected !== null ? 1 : 0.5,
        }}
      >
        send →
      </button>

      {/* Global taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-[72px] z-30">
        <SharedTaskbar
          onNavigateToHome={onNavigateToHome}
          onNavigateToJournal={onNavigateToJournal}
          onNavigateToLogMood={onNavigateToLogMood}
          onNavigateToFriends={onNavigateToFriends}
          onNavigateToProfile={onNavigateToProfile}
        />
      </div>
    </div>
  );
}