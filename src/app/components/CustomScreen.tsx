import { useState } from 'react';
import SharedTaskbar from './SharedTaskbar';

interface CustomScreenProps {
  onBack?: () => void;
  onSend?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
  onNavigateToProfile?: () => void;
  userAvatar?: string;
}

export default function CustomScreen({
  onBack,
  onSend,
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToFriends,
  onNavigateToProfile,
  userAvatar
}: CustomScreenProps) {
  const [customMessage, setCustomMessage] = useState('');

  return (
    <div className="relative size-full overflow-hidden bg-[#f3efd4]">
      <img
        src="/figma-screens/iPhone16Custom.svg"
        className="absolute top-0 left-0 w-full h-full object-cover object-left-top"
      />

      <style>{`
        [data-name="continue button"] { display: none !important; }
        [data-name="send"] { display: none !important; }
        [data-name="Send"] { display: none !important; }
        [data-name="send button"] { display: none !important; }
        [data-name="Rectangle 57"] { display: none !important; }
        [data-name="input"] { display: none !important; }
        [data-name="text input"] { display: none !important; }
        [data-name="textbox"] { display: none !important; }
      `}</style>

      {/* Functional text input */}
      <textarea
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
        placeholder="Write your message here..."
        className="absolute left-[16px] w-[361px] h-[80px] rounded-[10px] z-10 px-4 py-3 outline-none resize-none border-0"
        style={{
          top: '240px',
          fontFamily: '"Cabin Condensed", sans-serif',
          fontWeight: 400,
          backgroundColor: 'rgba(235, 228, 179, 0.9)',
          color: '#394648',
          fontSize: '16px',
        }}
      />

      {/* Back + Send buttons — raised above taskbar (bottom-[85px]) */}
      <button
        onClick={onBack}
        className="absolute left-[26px] bottom-[85px] z-20 bg-[#f0a500] text-white px-3 py-1 flex items-center gap-2 rounded-[6px]"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
      >
        ← back
      </button>

      <button
        onClick={() => customMessage.trim() && onSend?.()}
        className="absolute right-[26px] bottom-[85px] z-20 bg-[#f0a500] text-white px-4 py-1 rounded-[6px]"
        style={{
          fontFamily: '"Cabin Condensed", sans-serif',
          fontWeight: 700,
          opacity: customMessage.trim() ? 1 : 0.5,
        }}
      >
        send →
      </button>

      {/* Global taskbar — pinned to bottom */}
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