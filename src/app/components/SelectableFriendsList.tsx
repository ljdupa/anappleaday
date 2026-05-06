import { useState } from "react";
import FriendsList from "../../imports/IPhone1616/IPhone1616-20-6350.tsx";

interface SelectableFriendsListProps {
  onContinue?: () => void;
}

const FRIENDS = [
  { name: "amy2321", top: 99 },
  { name: "janesdoes781", top: 177 },
  { name: "jaondoes781", top: 255 },
  { name: "jaondoes22781", top: 333 },
  { name: "jaondoes2273381", top: 411 },
  { name: "jaondoes22381-a", top: 489 },
  { name: "jaondoes22381-b", top: 567 },
  { name: "jaondoes22381-c", top: 645 },
];

export default function SelectableFriendsList({ onContinue }: SelectableFriendsListProps) {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  return (
    <div
      className={`relative w-full h-full overflow-hidden selected-${selectedFriend ?? "none"}`}
      style={{ fontFamily: "Cabin Condensed, sans-serif" }}
    >
      <FriendsList />

      <style>{`
        * { font-family: "Cabin Condensed", sans-serif !important; }
        [data-name="add friend icon"],
        [data-name="add friends icon"],
        [data-name="plus friends"],
        [data-name="Group 50"] { display: none !important; }

        .selected-amy2321 [data-name="amy2321"] div[class*="bg-[#e8e1b3]"],
        .selected-amy2321 [data-name="amy2321"] div[class*="bg-[#ebe4b3]"],
        .selected-janesdoes781 [data-name="janesdoes781"] div[class*="bg-[#ebe4b3]"],
        .selected-jaondoes781 [data-name="jaondoes781"] div[class*="bg-[#ebe4b3]"],
        .selected-jaondoes22781 [data-name="jaondoes22781"] div[class*="bg-[#ebe4b3]"],
        .selected-jaondoes2273381 [data-name="jaondoes2273381"] div[class*="bg-[#ebe4b3]"] {
          background-color: #EC9808 !important;
        }
        .selected-jaondoes22381-a [data-name="jaondoes22381"]:nth-of-type(1) div[class*="bg-[#ebe4b3]"],
        .selected-jaondoes22381-b [data-name="jaondoes22381"]:nth-of-type(2) div[class*="bg-[#ebe4b3]"],
        .selected-jaondoes22381-c [data-name="jaondoes22381"]:nth-of-type(3) div[class*="bg-[#ebe4b3]"] {
          background-color: #EC9808 !important;
        }
      `}</style>

      {FRIENDS.map((friend) => {
        const isSelected = selectedFriend === friend.name;
        return (
          <button
            key={friend.name}
            onClick={() => setSelectedFriend(isSelected ? null : friend.name)}
            className="absolute left-[26px] w-[338px] h-[62px] rounded-[6px] border-0 p-0 bg-transparent"
            style={{ top: `${friend.top}px`, zIndex: 20 }}
            aria-label={`Select ${friend.name}`}
          />
        );
      })}
    </div>
  );
}