import Taskbar from "./SharedTaskbar";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
}

interface ProfileScreenProps {
  userName: string;
  entries: JournalEntry[];
  userAvatar: string;
  avatarBg: string;
  onNavigateToHome: () => void;
  onNavigateToFriends: () => void;
  onNavigateToJournal: () => void;
  onNavigateToLogMood: () => void;
  onNavigateToProfile: () => void;
  onNavigateToCustomize: () => void;
}

const getMoodApple = (mood: string) => {
  switch (mood) {
    case 'great': return '/figma-screens/apple1.svg';
    case 'good': return '/figma-screens/apple2.svg';
    case 'okay': return '/figma-screens/apple3.svg';
    case 'bad': return '/figma-screens/apple4.svg';
    case 'rotten': return '/figma-screens/apple5.svg';
    default: return '/figma-screens/apple1.svg';
  }
};

export default function ProfileScreen({
  userName,
  entries,
  userAvatar,
  avatarBg,
  onNavigateToHome,
  onNavigateToFriends,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToProfile,
  onNavigateToCustomize,
}: ProfileScreenProps) {
  const cabin = { fontFamily: "Cabin Condensed, sans-serif" };
  const cabinBold = { fontFamily: "Cabin Condensed, sans-serif", fontWeight: 700 };

  return (
    <div className="relative h-[852px] w-[393px] overflow-hidden bg-[#bac15b]">

      {/* Cream background bottom */}
      <div className="absolute left-0 right-0 rounded-[2px] bottom-0 bg-[#B3BA5D]" style={{ top: "420px" }} />

      {/* Profile card */}
      <div
        className="absolute bg-[#f3efd4] rounded-[20px] shadow-lg"
        style={{ left: "60px", right: "60px", top: "40px", padding: "16px" }}
      >
        {/* Edit button */}
        <button
          onClick={onNavigateToCustomize}
          className="absolute top-[325px] right-[12px] bg-[#EC9808] text-white text-[12px] px-3 py-1 rounded-[6px] z-10"
          style={cabinBold}
        >
          edit
        </button>

        {/* Avatar */}
        <div
          className="rounded-[16px] overflow-hidden flex items-center justify-center mb-[12px]"
          style={{ backgroundColor: avatarBg, height: "220px" }}
        >
          <img
            src={userAvatar}
            alt="avatar"
            className="w-[160px] h-[160px] object-contain"
          />
        </div>

        {/* Name */}
        <p style={{ ...cabinBold, fontSize: "22px", color: "#394648", textAlign: "center" }}
          className="mb-[12px]">
          {userName}
        </p>

        {/* Stats row */}
        <div className="flex justify-center gap-[48px]">
          <div className="flex flex-col items-center">
            <p style={{ ...cabinBold, fontSize: "24px", color: "#394648" }}>{entries.length}</p>
            <p style={{ ...cabin, fontSize: "13px", color: "#394648" }}>Entries</p>
          </div>
          <div className="flex flex-col items-center">
            <p style={{ ...cabinBold, fontSize: "24px", color: "#394648" }}>—</p>
            <p style={{ ...cabin, fontSize: "13px", color: "#394648" }}>Friends</p>
          </div>
        </div>
      </div>

      {/* Journal label */}
      <p
        className="absolute left-0 right-0 text-center"
        style={{ ...cabinBold, fontSize: "20px", color: "white", top: "450px" }}
      >
        {userName}'s Journal
      </p>

      {/* Journal entries */}
      <div
        className="absolute left-0 right-0 overflow-y-auto px-[16px]"
        style={{ top: "485px", bottom: "72px" }}
      >
        {entries.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-[40px] gap-[8px]">
            <p style={{ ...cabinBold, fontSize: "18px", color: "white", opacity: 0.7 }}>
              No entries yet
            </p>
            <p style={{ ...cabin, fontSize: "14px", color: "white", opacity: 0.5 }}>
              Start journaling to see your entries here
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-[10px] pb-[16px]">
            {entries.map((entry) => (
              <button
                key={entry.id}
                onClick={onNavigateToJournal}
                className="w-full bg-[#f3efd4] rounded-[16px] p-[14px] flex gap-[12px] items-center text-left"
              >
                <img
                  src={getMoodApple(entry.mood)}
                  className="w-[48px] h-[48px] shrink-0 object-contain"
                  alt={entry.mood}
                />
                <div className="flex-1 min-w-0">
                  <p style={{ ...cabinBold, fontSize: "15px", color: "#394648" }} className="truncate">
                    {entry.title || "Untitled"}
                  </p>
                  <p style={{ ...cabin, fontSize: "12px", color: "#394648", opacity: 0.6 }}>
                    {entry.date}
                  </p>
                </div>
                <span style={{ color: "#394648", opacity: 0.4, fontSize: "20px" }}>›</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[72px]" style={{ zIndex: 99999 }}>
        <Taskbar
          onNavigateToHome={onNavigateToHome}
          onNavigateToFriends={onNavigateToFriends}
          onNavigateToJournal={onNavigateToJournal}
          onNavigateToLogMood={onNavigateToLogMood}
          onNavigateToProfile={onNavigateToProfile}
          userAvatar={userAvatar}
        />
      </div>
    </div>
  );
}