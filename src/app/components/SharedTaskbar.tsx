import taskbarSvgPaths from '../../imports/IPhone16Landingofficial-3/svg-im0bd7ybth';

interface SharedTaskbarProps {
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
  onNavigateToProfile?: () => void;
  userAvatar?: string;
}

export default function SharedTaskbar({
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToFriends,
  onNavigateToProfile,
  userAvatar,
}: SharedTaskbarProps) {
  return (
    <div className="relative w-full h-full bg-[#bac15b]">
      <div className="absolute flex gap-[30px] items-center left-[22px] bottom-[13px]">
        <button onClick={onNavigateToHome} className="relative shrink-0 size-[45.962px]">
          <svg style={{ pointerEvents: 'none' }} className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
            <circle cx="22.9812" cy="22.9812" fill="#EC9808" r="22.9811" />
            <path d={taskbarSvgPaths.p2442c000} fill="white" />
            <rect fill="white" height="13.1321" width="5.4717" x="14.2264" y="19.698" />
            <rect fill="white" height="13.1321" width="5.4717" x="26.2641" y="19.698" />
          </svg>
        </button>
        <button onClick={onNavigateToFriends} className="relative shrink-0 size-[45.962px]">
          <svg style={{ pointerEvents: 'none' }} className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
            <circle cx="22.9811" cy="22.9812" fill="#EC9808" r="22.9811" />
            <circle cx="16.9623" cy="16.9622" fill="white" r="4.92453" />
            <path d={taskbarSvgPaths.p2ebd1b00} fill="white" />
            <circle cx="29.0001" cy="16.9622" fill="white" r="4.92453" />
            <path d={taskbarSvgPaths.p4979600} fill="white" />
          </svg>
        </button>
        <button onClick={onNavigateToLogMood} className="relative shrink-0 size-[45.962px]">
          <svg style={{ pointerEvents: 'none' }} className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
            <circle cx="22.9811" cy="22.9812" fill="#EC9808" r="22.9811" />
            <rect fill="white" height="3.28302" width="22.9811" x="12.0377" y="21.8867" />
            <rect fill="white" height="3.28302" transform="rotate(-90 21.8868 36.1133)" width="24.0755" x="21.8868" y="36.1133" />
          </svg>
        </button>
        <button onClick={onNavigateToJournal} className="relative shrink-0 size-[45.962px]">
          <svg style={{ pointerEvents: 'none' }} className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
            <circle cx="22.9811" cy="22.9812" fill="#EC9808" r="22.9811" />
            <path d={taskbarSvgPaths.p3d15cc00} fill="white" />
            <path d={taskbarSvgPaths.p23645bf0} fill="#EC9808" />
            <path d={taskbarSvgPaths.p1daa7800} fill="#EC9808" />
          </svg>
        </button>

        {/* Profile button — shows user's chosen avatar */}
        <button onClick={onNavigateToProfile} className="relative shrink-0 size-[45.962px]">
          <div className="absolute inset-0 rounded-full bg-[#A2A652] overflow-hidden flex items-center justify-center">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt="profile"
                className="w-full h-full object-contain"
              />
            ) : (
              <svg style={{ pointerEvents: 'none' }} className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                <circle cx="23" cy="23" fill="#A2A652" r="23" />
                <rect x="8" y="11" width="30" height="8" rx="4" fill="#6C5850" />
                <rect x="12" y="6" width="22" height="8" rx="3" fill="#726058" />
                <circle cx="23" cy="22" r="10" fill="#D8C59D" />
                <path d="M13 18 Q14 12 23 12 Q32 12 33 18 Q30 14 23 14 Q16 14 13 18Z" fill="black" />
                <ellipse cx="19.5" cy="21" rx="0.9" ry="1.4" fill="black" />
                <ellipse cx="26.5" cy="21" rx="0.9" ry="1.4" fill="black" />
                <path d="M20 24.5 Q23 26.5 26 24.5" stroke="black" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                <path d="M14 38 Q14 31 23 31 Q32 31 32 38" fill="#A71515" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}