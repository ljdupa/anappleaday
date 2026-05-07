import { useState } from 'react';
import SharedTaskbar from './SharedTaskbar';

interface EncourageScreenProps {
  onBack?: () => void;
  onSend?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
  onNavigateToProfile?: () => void;
  userAvatar?: string;
}

export default function EncourageScreen({
  onBack,
  onSend,
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToFriends,
  onNavigateToProfile, userAvatar
}: EncourageScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const messages = [
    "You've come a long way",
    "You got this!",
    "Small steps still count!",
    "I'm so proud of you!",
    "It doesn't have to be perfect!",
    "Take your time",
    "I'm here for you no matter what!",
    "You won't feel like this forever",
    "I believe in you!",
  ];

  return (
    <div className="relative size-full overflow-hidden bg-[#f3efd4]">
      <img
        src="/figma-screens/iPhone16Encourage.svg"
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
          className={`absolute left-[15px] w-[355px] h-[60px] rounded-[10px] z-10 border-0 transition-all ${
            selected === index ? 'ring-4 ring-[#EC9808] bg-[#EC9808]/10' : 'bg-transparent'
          }`}
          style={{ top: `${88 + index * 70}px` }}
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
          userAvatar={userAvatar}
        />
      </div>
    </div>
  );
}