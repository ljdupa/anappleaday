import { useState } from "react";
import SelectableEmptyFriendsList from "./SelectableEmptyFriendsList";
import SharedTaskbar from "./SharedTaskbar";

interface FriendsScreenProps {
  onNavigateToHome: () => void;
  onNavigateToJournal: () => void;
  onNavigateToLogMood: () => void;
  onNavigateToAddFriends: () => void;
  onNavigateToReminders: (selectedFriends: string[]) => void;
  onNavigateToProfile?: () => void;
}

export default function FriendsScreen({
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToAddFriends,
  onNavigateToReminders,
  onNavigateToProfile,
}: FriendsScreenProps) {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-[#f1eed9]"
      style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
    >
      <div className="absolute inset-0 bottom-[72px]" style={{ zIndex: 10 }}>
        <SelectableEmptyFriendsList
          showEmpty={false}
          onNavigateToAddFriends={onNavigateToAddFriends}
          onSelectFriend={setSelectedFriend}
        />
      </div>

      {/* ➕ Add Friends button */}
      <button
        onClick={onNavigateToAddFriends}
        className="absolute right-[30px] top-[48px]"
        style={{ zIndex: 20 }}
      >
        <svg width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="22.679" cy="6.525" rx="6.15915" ry="6.525" fill="#EC9808"/>
          <path d="M32.9443 20.987C32.9443 27.7729 28.3484 29.0002 22.6791 29.0002C17.0097 29.0002 12.4138 27.7729 12.4138 20.987C12.4138 14.2012 17.0097 8.7002 22.6791 8.7002C28.3484 8.7002 32.9443 14.2012 32.9443 20.987Z" fill="#EC9808"/>
          <ellipse cx="37.7347" cy="6.525" rx="6.15915" ry="6.525" fill="#EC9808"/>
          <path d="M48 20.987C48 27.7729 43.4041 29.0002 37.7347 29.0002C32.0654 29.0002 27.4695 27.7729 27.4695 20.987C27.4695 14.2012 32.0654 8.7002 37.7347 8.7002C43.4041 8.7002 48 14.2012 48 20.987Z" fill="#EC9808"/>
          <rect y="11.7085" width="12.4138" height="1.62834" fill="#EC9808"/>
          <rect x="5.32019" y="18.7645" width="11.9412" height="1.7734" transform="rotate(-90 5.32019 18.7645)" fill="#EC9808"/>
        </svg>
      </button>

      <button
        onClick={onNavigateToHome}
        className="absolute left-[26px] bottom-[85px] bg-[#f0a500] text-white px-3 py-1 flex items-center gap-2 rounded-[6px]"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700, zIndex: 20 }}
      >
        ← back
      </button>

      <button
        onClick={() => {
          if (selectedFriend) onNavigateToReminders([selectedFriend]);
        }}
        className="absolute right-[26px] bottom-[85px] bg-[#f0a500] text-white px-4 py-1 rounded-[6px]"
        style={{
          fontFamily: '"Cabin Condensed", sans-serif',
          fontWeight: 700,
          opacity: selectedFriend ? 1 : 0.5,
          zIndex: 20,
        }}
      >
        continue →
      </button>

      <div className="absolute bottom-0 left-0 right-0 w-full h-[72px]" style={{ zIndex: 99999 }}>
        <SharedTaskbar
          onNavigateToHome={onNavigateToHome}
          onNavigateToFriends={onNavigateToAddFriends}
          onNavigateToLogMood={onNavigateToLogMood}
          onNavigateToJournal={onNavigateToJournal}
          onNavigateToProfile={onNavigateToProfile}
        />
      </div>
    </div>
  );
}