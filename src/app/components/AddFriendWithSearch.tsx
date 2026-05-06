import { useState } from "react";
import EmptySearch from "../../imports/IPhone1619/IPhone1619";
import svgPaths from "../../imports/IPhone1617-1/svg-bxwk3f00lr";
import taskbarSvgPaths from "../../imports/IPhone16Landingofficial-3/svg-im0bd7ybth";

const FRIENDS_LIST = [
  "Amelie312",
  "Amelie3122",
  "Amelie3124",
  "Amelie3125",
  "Amelie3126",
  "Amelie3127",
  "Amelie3128",
  "Amelie3129",
];

function FriendAvatar() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9996 48.8715">
      <g>
        <rect fill="#B1AE68" height="30.6285" rx="7" width="35.1532" x="3.53825" y="17.1988" />
        <path d={svgPaths.p38616080} fill="#8C704E" />
        <path d={svgPaths.pd178270} fill="#D8C59D" />
        <path d={svgPaths.p2191ea00} fill="#B0AE68" />
        <path d={svgPaths.p202e0100} fill="#B0AE68" />
        <path d={svgPaths.p2f907b80} fill="#5B4A36" />
        <path d={svgPaths.pa91d670} fill="#726058" />
        <ellipse cx="14.4444" cy="22.9552" fill="black" rx="0.962963" ry="1.5867" />
        <ellipse cx="27.9257" cy="22.9552" fill="black" rx="0.962963" ry="1.5867" />
        <path d={svgPaths.p20c0c080} fill="black" />
        <rect fill="#D8C59D" height="4.23121" width="5.77778" x="18.2963" y="29.8309" />
        <path d={svgPaths.p18ff2080} fill="#8CA179" stroke="black" strokeWidth="0.1" />
        <rect fill="#726058" height="3.17341" width="1.92593" x="15.4073" y="36.1778" />
        <rect fill="#726058" height="3.17341" width="1.92593" x="25.0369" y="36.1778" />
        <rect fill="#726058" height="9.52022" width="17.3333" x="12.5184" y="39.3512" />
      </g>
    </svg>
  );
}

function Taskbar({
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToFriends,
}: {
  onNavigateToHome: () => void;
  onNavigateToJournal: () => void;
  onNavigateToLogMood: () => void;
  onNavigateToFriends: () => void;
}) {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-center left-[22px] top-[793px] z-50">
      <button onClick={onNavigateToHome} className="relative shrink-0 size-[45.962px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
          <circle cx="22.9812" cy="22.9812" fill="#EC9808" r="22.9811" />
          <path d={taskbarSvgPaths.p2442c000} fill="white" />
          <rect fill="white" height="13.1321" width="5.4717" x="14.2264" y="19.698" />
          <rect fill="white" height="13.1321" width="5.4717" x="26.2641" y="19.698" />
        </svg>
      </button>

      <button onClick={onNavigateToFriends} className="relative shrink-0 size-[45.962px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
          <circle cx="22.9811" cy="22.9812" fill="#EC9808" r="22.9811" />
          <circle cx="16.9623" cy="16.9622" fill="white" r="4.92453" />
          <path d={taskbarSvgPaths.p2ebd1b00} fill="white" />
          <circle cx="29.0001" cy="16.9622" fill="white" r="4.92453" />
          <path d={taskbarSvgPaths.p4979600} fill="white" />
        </svg>
      </button>

      <button onClick={onNavigateToLogMood} className="relative shrink-0 size-[45.962px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
          <circle cx="22.9811" cy="22.9812" fill="#EC9808" r="22.9811" />
          <rect fill="white" height="3.28302" width="22.9811" x="12.0377" y="21.8867" />
          <rect fill="white" height="3.28302" transform="rotate(-90 21.8868 36.1133)" width="24.0755" x="21.8868" y="36.1133" />
        </svg>
      </button>

      <button onClick={onNavigateToJournal} className="relative shrink-0 size-[45.962px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
          <circle cx="22.9811" cy="22.9812" fill="#EC9808" r="22.9811" />
          <path d={taskbarSvgPaths.p3d15cc00} fill="white" />
          <path d={taskbarSvgPaths.p23645bf0} fill="#EC9808" />
          <path d={taskbarSvgPaths.p1daa7800} fill="#EC9808" />
        </svg>
      </button>

      <div className="relative shrink-0 size-[45.962px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9623 45.9623">
          <circle cx="22.9811" cy="22.9811" fill="#A2A652" r="22.9811" />
        </svg>
        <div className="absolute top-[3.28px] left-[4.38px] size-[36.936px]">
          <svg className="block size-full" fill="none" viewBox="0 0 36.9364 40.4903">
            <rect fill="black" height="15.7752" rx="7" width="30.4873" x="3.38765" y="14.198" />
            <path d={taskbarSvgPaths.p20215b00} fill="#8C704E" />
            <path d={taskbarSvgPaths.p3eecb280} fill="#D8C59D" />
            <path d={taskbarSvgPaths.p2eda2680} fill="black" />
            <path d={taskbarSvgPaths.pb939980} fill="black" />
            <path d={taskbarSvgPaths.p2c11ca00} fill="#5B4A36" />
            <path d={taskbarSvgPaths.p689fb00} fill="#726058" />
            <ellipse cx="12.7031" cy="19.0178" fill="black" rx="0.846869" ry="1.3146" />
            <ellipse cx="24.5593" cy="19.0178" fill="black" rx="0.846869" ry="1.3146" />
            <path d={taskbarSvgPaths.p2ff23380} fill="black" />
            <rect fill="#D8C59D" height="3.5056" width="5.08121" x="16.0907" y="24.7151" />
            <path d={taskbarSvgPaths.p15c3ed70} fill="#A71515" />
            <rect fill="#726058" height="2.6292" width="1.69374" x="13.55" y="29.9736" />
            <rect fill="#726058" height="2.6292" width="1.69374" x="22.0187" y="29.9736" />
            <rect fill="#726058" height="7.88761" width="15.2436" x="11.0095" y="32.6027" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface AddFriendWithSearchProps {
  onContinue?: () => void;
  onBack?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
}

export default function AddFriendWithSearch({
  onContinue,
  onBack,
  onNavigateToHome = () => {},
  onNavigateToJournal = () => {},
  onNavigateToLogMood = () => {},
  onNavigateToFriends = () => {},
}: AddFriendWithSearchProps) {
  const [searchText, setSearchText] = useState("");
  const [notification, setNotification] = useState<string | null>(null);
  const [sentRequests, setSentRequests] = useState<Set<string>>(new Set());

  const filteredFriends = FRIENDS_LIST.filter(friend =>
    friend.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSendRequest = (friend: string) => {
    setSentRequests(prev => new Set(prev).add(friend));
    setNotification("Friend request sent!");
    setTimeout(() => setNotification(null), 2500);
  };

  return (
    <div className="relative size-full bg-[#f3efd4]">

      {/* TEST */}
      <div className="absolute top-0 left-0 z-[9999] bg-red-500 text-white p-2">
        add friend with search
      </div>

      {/* Notification toast */}
      {notification && (
        <div
          className="absolute top-[60px] left-1/2 z-[9999] bg-[#394648] text-white px-6 py-3 rounded-[10px] text-[16px]"
          style={{ transform: "translateX(-50%)", fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
        >
          {notification}
        </div>
      )}

      {searchText.length === 0 ? (
        <EmptySearch />
      ) : (
        <>
          {/* Taskbar background */}
          <div className="absolute bg-[#bac15b] h-[72px] left-0 top-[780px] w-[393px] z-40" />

          {/* Header */}
          <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[84px] opacity-77 text-[#394648] text-[24px] top-[96px] whitespace-nowrap">Add Friend</p>

          <div className="absolute flex h-[1.994px] items-center justify-center left-[28.5px] top-[88.5px] w-[331.994px]">
            <div className="flex-none rotate-[-0.34deg]">
              <div className="h-0 relative w-[332px]">
                <div className="absolute inset-[-0.5px_-0.15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333 1">
                    <path d="M0.5 0.5H332.5" stroke="black" strokeLinecap="round" strokeOpacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] h-[29px] leading-[normal] left-[106.5px] text-[#646d68] text-[24px] top-[54px] w-[143px]">Friend Requests</p>

          {/* Friend list */}
          {filteredFriends.map((friend, index) => {
            const topPosition = 195 + (index * 67);
            const alreadySent = sentRequests.has(friend);
            return (
              <div
                key={friend}
                className="absolute left-[35px] flex items-center"
                style={{ top: `${topPosition}px` }}
              >
                <div className="relative">
                  <div className="absolute bg-[#5f905a] h-[53.948px] left-0 rounded-[6px] top-0 w-[52px] z-10" />
                  <div className="absolute h-[48.872px] left-[4.81px] top-[5.08px] w-[42px] z-20">
                    <FriendAvatar />
                  </div>
                  <p className="absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[65px] text-[#394648] text-[20px] top-[15px] z-10 w-[180px] text-left">
                    {friend}
                  </p>
                  <div className="w-[260px] h-[53.948px] opacity-0" />
                </div>

                <button
                  onClick={() => handleSendRequest(friend)}
                  disabled={alreadySent}
                  className="-ml-2 px-1 py-0 rounded-[6px] text-white text-[14px] shrink-0"
                  style={{
                    fontFamily: '"Cabin Condensed", sans-serif',
                    fontWeight: 700,
                    backgroundColor: alreadySent ? '#a0a0a0' : '#EC9808',
                  }}
                >
                  {alreadySent ? "sent ✓" : "send request"}
                </button>
              </div>
            );
          })}
        </>
      )}

      {/* Taskbar background — always visible */}
      <div className="absolute bg-[#bac15b] h-[72px] left-0 top-[780px] w-[393px] z-40" />

      {/* Taskbar — always visible */}
      <Taskbar
        onNavigateToHome={onNavigateToHome}
        onNavigateToJournal={onNavigateToJournal}
        onNavigateToLogMood={onNavigateToLogMood}
        onNavigateToFriends={onNavigateToFriends}
      />

{/* Back button */}
{searchText.length > 0 && (
  <div className="absolute left-[35px] top-[740px] z-50">
    <button
      onClick={onBack}
      className="bg-[#f0a500] text-white px-3 py-1 flex items-center gap-2 rounded-[6px]"
      style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
    >
      ← back
    </button>
  </div>
)}

      {/* Search input */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search for friends"
        className="absolute left-[28px] top-[130px] w-[338px] h-[55px] bg-[#EBE4B3] rounded-[6px] px-[20px] font-['Cabin_Condensed:Bold',sans-serif] text-[20px] text-[#394648] outline-none placeholder:text-[#646d68] placeholder:opacity-59 z-50"
      />
    </div>
  );
}