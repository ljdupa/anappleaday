import { useState } from "react";
import EmptyFriendsList from "../../imports/IPhone1615/IPhone1615-20-6345";

interface SelectableEmptyFriendsListProps {
  onContinue?: () => void;
  showEmpty?: boolean;
  onNavigateToAddFriends?: () => void;
  onSelectFriend?: (friend: string | null) => void;
}

const FRIENDS = [
  { name: "Friend 1", top: 100 },
  { name: "Friend 2", top: 178 },
  { name: "Friend 3", top: 256 },
  { name: "Friend 4", top: 334 },
  { name: "Friend 5", top: 412 },
  { name: "Friend 6", top: 490 },
  { name: "Friend 7", top: 568 },
  { name: "Friend 8", top: 646 },
];

export default function SelectableEmptyFriendsList({
  onContinue,
  showEmpty = false,
  onNavigateToAddFriends,
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
    <div className="relative size-full">
      {/* Background highlights for selected friends */}
      {FRIENDS.map((friend) => {
        const isSelected = selectedFriend === friend.name;
        return (
          <div
            key={`bg-${friend.name}`}
            className="absolute left-[26px]"
            style={{ top: `${friend.top}px`, zIndex: 1 }}
          >
            <div
              className="absolute left-0 w-[338px] h-[62px] rounded-[6px]"
              style={{ backgroundColor: isSelected ? "#EC9808" : "#ebe4b3" }}
            />
          </div>
        );
      })}

      {/* Figma component — pointer events disabled so it can't block clicks */}
      <div className="relative" style={{ zIndex: 10, pointerEvents: 'none' }}>
        <style>{`
          [data-name="jaondoes781"] > div[class*="bg-[#ebe4b3]"],
          [data-name="jaondoes2273381"] > div[class*="bg-[#ebe4b3]"],
          [data-name="jaondoes22381"] > div[class*="bg-[#ebe4b3]"],
          [data-name="jaondoes2281"] > div[class*="bg-[#ebe4b3]"],
          [data-name="amy2321"] > div[class*="bg-[#e8e1b3]"],
          [data-name="jaondoes22781"] > div[class*="bg-[#ebe4b3]"],
          [data-name="janesdoes781"] > div[class*="bg-[#ebe4b3]"] {
            opacity: 0 !important;
          }
          [data-name="sendrequest"] { display: none !important; }
          [data-name="FRIENDS ICON"] { display: none !important; }
        `}</style>
        <EmptyFriendsList />
      </div>

      {/* Clickable overlay buttons — pointer events explicitly enabled */}
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
            className="absolute left-[26px] w-[338px] h-[62px] rounded-[6px] border-0 p-0"
            style={{ top: `${friend.top}px`, zIndex: 20, backgroundColor: "transparent", pointerEvents: 'auto' }}
            aria-label={`Select ${friend.name}`}
          />
        );
      })}
    </div>
  );
}