import IPhone16Reminders from '../../imports/IPhone16Reminders/IPhone16Reminders';
import SharedTaskbar from './SharedTaskbar';

interface RemindersScreenProps {
  onSend: (reminder: string) => void;
  onBack?: () => void;
  selectedFriends: string[];
  onNavigateToCheckUp?: () => void;
  onNavigateToRemind?: () => void;
  onNavigateToEncourage?: () => void;
  onNavigateToCustom?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
  onNavigateToProfile?: () => void;
  userAvatar?: string;
}

export default function RemindersScreen({
  onSend, onBack, selectedFriends,
  onNavigateToCheckUp, onNavigateToRemind, onNavigateToEncourage, onNavigateToCustom,
  onNavigateToHome, onNavigateToJournal, onNavigateToLogMood, onNavigateToFriends,
  onNavigateToProfile, userAvatar,
}: RemindersScreenProps) {
  const reminders = [
    { id: 'check-up', name: 'Check Up', position: { left: 13, top: 232 }, onNavigate: onNavigateToCheckUp },
    { id: 'encourage', name: 'Encourage', position: { left: 13, top: 426 }, onNavigate: onNavigateToEncourage },
    { id: 'remind', name: 'Remind', position: { left: 203, top: 232 }, onNavigate: onNavigateToRemind },
    { id: 'custom', name: 'Custom', position: { left: 203, top: 426 }, onNavigate: onNavigateToCustom },
  ];

  return (
    <div className="relative size-full">
      <IPhone16Reminders />
      <style>{`
        [data-name="continue button"] { display: none !important; }
        [data-name="send"] { display: none !important; }
        [data-name="Send"] { display: none !important; }
        [data-name="send button"] { display: none !important; }
      `}</style>

      <p
        className="absolute left-[15px] top-[170px] text-[25px] z-10"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700, color: '#394648' }}
      >
        Choose your messages
      </p>

      {reminders.map((reminder) => (
        <button
          key={reminder.id}
          onClick={reminder.onNavigate}
          className="absolute w-[170px] h-[171px] cursor-pointer rounded-[10px] z-10"
          style={{ left: `${reminder.position.left}px`, top: `${reminder.position.top}px` }}
          aria-label={`Select ${reminder.name}`}
        />
      ))}

      <button
        onClick={onBack}
        className="absolute left-[26px] bottom-[85px] z-10 bg-[#f0a500] text-white px-3 py-1 flex items-center gap-2 rounded-[6px]"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
      >
        ← back
      </button>

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