import { useState } from "react";

interface SelectableEmptyFriendsListProps {
  onContinue?: () => void;
  showEmpty?: boolean;
  onNavigateToAddFriends?: () => void;
  onSelectFriend?: (friend: string | null) => void;
}

const FRIENDS = [
  { name: "amy2321", top: 100, icon: "/figma-screens/icon1.svg" },
  { name: "janesdoes781", top: 178, icon: "/figma-screens/icon2.svg" },
  { name: "jaondoes781", top: 256, icon: "/figma-screens/icon3.svg" },
  { name: "jaondoes22781", top: 334, icon: "/figma-screens/icon4.svg" },
  { name: "jaondoes2273381", top: 412, icon: "/figma-screens/icon5.svg" },
  { name: "jaondoes22381-a", top: 490, icon: "/figma-screens/icon1.svg" },
  { name: "jaondoes22381-b", top: 568, icon: "/figma-screens/icon2.svg" },
  { name: "jaondoes22381-c", top: 646, icon: "/figma-screens/icon3.svg" },
];

const FRIEND_LABELS: Record<string, string> = {
  "amy2321": "amy2321",
  "janesdoes781": "janesdoes781",
  "jaondoes781": "jaondoes781",
  "jaondoes22781": "jaondoes22781",
  "jaondoes2273381": "jaondoes2273381",
  "jaondoes22381-a": "jaondoes22381",
  "jaondoes22381-b": "jaondoes22381",
  "jaondoes22381-c": "jaondoes22381",
};

export default function SelectableEmptyFriendsList({
  showEmpty = false,
  onSelectFriend,
}: SelectableEmptyFriendsListProps) {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  if (showEmpty) {
    return (
      <div className="relative size-full bg-[#f1eed9] flex flex-col items-center justify-center gap-4">
        <p className="text-[#b0a96e] text-[22px]"
          style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}>
          No friends yet!
        </p>
        <p className="text-[#b0a96e] text-[16px]"
          style={{ fontFamily: '"Cabin Condensed", sans-serif' }}>
          Add friends to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="relative size-full bg-[#f1eed9]">

      {/* Title */}
      <p className="absolute left-[26px] top-[50px] text-[#394648] text-[24px]"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}>
        My Friends
      </p>

      {/* Friend rows */}
      {FRIENDS.map((friend) => {
        const isSelected = selectedFriend === friend.name;
        return (
          <button
            key={friend.name}
            onClick={() => {
              const next = isSelected ? null : friend.name;
              setSelectedFriend(next);
              onSelectFriend?.(next);
            }}
            className="absolute left-[26px] w-[338px] h-[62px] rounded-[6px] flex items-center px-[12px] gap-[12px]"
            style={{
              top: `${friend.top}px`,
              zIndex: 20,
              backgroundColor: isSelected ? "#EC9808" : "#ebe4b3",
              pointerEvents: 'auto',
            }}
            aria-label={`Select ${friend.name}`}
          >
            {/* Avatar icon */}
            <div
              className="w-[44px] h-[44px] rounded-[6px] overflow-hidden shrink-0 flex items-center justify-center"
              style={{ backgroundColor: isSelected ? "rgba(255,255,255,0.3)" : "#f2d267" }}
            >
              <img
                src={friend.icon}
                className="w-full h-full object-contain"
                alt="avatar"
              />
            </div>
            <p style={{
              fontFamily: '"Cabin Condensed", sans-serif',
              fontWeight: 700,
              fontSize: "18px",
              color: isSelected ? "white" : "#394648"
            }}>
              {FRIEND_LABELS[friend.name]}
            </p>
          </button>
        );
      })}
    </div>
  );
}