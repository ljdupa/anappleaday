import { useState } from 'react';
import SharedTaskbar from './SharedTaskbar';

const INITIAL_REQUESTS = [
  { id: '1', username: 'amy2321', icon: '/figma-screens/icon7.svg' },
  { id: '2', username: 'janesdoes781', icon: '/figma-screens/icon2.svg' },
  { id: '3', username: 'jaondoes781', icon: '/figma-screens/icon6.svg' },
  { id: '4', username: 'jaondoes22781', icon: '/figma-screens/icon4.svg' },
];

const AVATAR_ICONS = [
  '/figma-screens/icon1.svg',
  '/figma-screens/icon2.svg',
  '/figma-screens/icon3.svg',
  '/figma-screens/icon4.svg',
  '/figma-screens/icon5.svg',
  '/figma-screens/icon6.svg',
  '/figma-screens/icon7.svg',
];

const FRIENDS_LIST = [
  "Amelie312", "Amelie3122", "Amelie3124", "Amelie3125",
  "Anni", "Annie2323", "Anni292", "Anni888",
  "Beatriz_89", "Beatriz_892", "Beatriz_893", "Beatriz_894",
  "CharlesD", "CharlesD2", "CharlesD3", "CharlesD4",
  "Diana_P", "Diana_P2", "Diana_P3", "Diana_P4",
  "EthanM", "EthanM2", "EthanM3", "EthanM4",
  "Leo9022", "Lauren92728", "Leo93843", "Lauren99228",
  "Mia_777", "Mia_7772", "Mia_7773", "Mia_7774",
  "Noah_S", "Noah_S2", "Noah_S3", "Noah_S4",
  "OliviaG", "OliviaG2", "OliviaG3", "OliviaG4",
  "Sophia_123", "Sophia_1234", "Sophia_1235", "Sophia_1236",
  "William_B", "William_B2", "William_B3", "William_B4",
  "Zoe_456", "Zoe_4562", "Zoe_4563", "Zoe_4564",
];

const FRIEND_ICONS: Record<string, string> = {};
FRIENDS_LIST.forEach((name, i) => {
  FRIEND_ICONS[name] = AVATAR_ICONS[i % AVATAR_ICONS.length];
});

interface AddFriendsScreenProps {
  onContinue: (selectedFriends: string[]) => void;
  onBack: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJournal?: () => void;
  onNavigateToLogMood?: () => void;
  onNavigateToFriends?: () => void;
  onNavigateToProfile?: () => void;
  userAvatar?: string;
}

export default function AddFriendsScreen({
  onContinue,
  onBack,
  onNavigateToHome,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToFriends,
  onNavigateToProfile,
  userAvatar
}: AddFriendsScreenProps) {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [searchText, setSearchText] = useState('');
  const [sentRequests, setSentRequests] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleDecline = (id: string) => {
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  const handleAccept = (id: string, username: string) => {
    setRequests(prev => prev.filter(r => r.id !== id));
    showToast(`You are now friends with ${username}!`);
  };

  const handleSendRequest = (username: string) => {
    setSentRequests(prev => new Set(prev).add(username));
    showToast('Friend request sent!');
  };

  const filteredFriends = FRIENDS_LIST.filter(f =>
    f.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative size-full bg-[#f3efd4] overflow-hidden">

      {/* Toast — pinned to top */}
      {toast && (
        <div
          className="absolute top-[16px] left-[16px] right-[16px] z-[9999] bg-[#394648] text-white px-6 py-3 rounded-[10px] text-[16px] text-center"
          style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
        >
          {toast}
        </div>
      )}

      {/* Scrollable content */}
      <div className="absolute top-0 left-0 w-full bottom-[72px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="px-[20px] pt-[24px] pb-[20px]">

          {/* Friend Requests */}
          {requests.length > 0 && (
            <>
              <p className="text-[24px] text-[#394648] mb-[14px]"
                style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}>
                Friend Requests
              </p>
              <div className="flex flex-col gap-[10px] mb-[24px]">
                {requests.map((req) => (
                  <div key={req.id} className="flex items-center bg-[#EBE4B3] rounded-[10px] px-[12px] py-[8px]">
                    <div className="relative shrink-0 w-[52px] h-[52px] mr-[14px] bg-[#B1AE68] rounded-[8px] overflow-hidden">
                      <img
                        src={req.icon}
                        alt="avatar"
                        className="w-full h-full object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <p className="flex-1 text-[18px] text-[#394648]"
                      style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}>
                      {req.username}
                    </p>
                    <button
                      onClick={() => handleDecline(req.id)}
                      className="w-[38px] h-[38px] rounded-full bg-[#C0392B] flex items-center justify-center mr-[8px] shrink-0"
                    >
                      <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none">
                        <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleAccept(req.id, req.username)}
                      className="w-[38px] h-[38px] rounded-full bg-[#5f905a] flex items-center justify-center shrink-0"
                    >
                      <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none">
                        <path d="M5 12L10 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Divider */}
          <div className="w-full h-[1px] bg-black opacity-20 mb-[20px]" />

          {/* Add Friend */}
          <p className="text-[24px] text-[#394648] mb-[14px]"
            style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}>
            Add Friend
          </p>

          <div className="relative mb-[16px]">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="search for friends"
              className="w-full h-[52px] bg-[#EBE4B3] rounded-[8px] px-[16px] pr-[48px] text-[18px] text-[#394648] outline-none placeholder:text-[#646d68]"
              style={{ fontFamily: '"Cabin Condensed", sans-serif' }}
            />
            <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="#EC9808" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="#EC9808" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Search results */}
          {searchText.length > 0 && (
            <div className="flex flex-col gap-[10px]">
              {filteredFriends.map((friend) => {
                const sent = sentRequests.has(friend);
                return (
                  <div key={friend} className={`flex items-center rounded-[10px] px-[12px] py-[8px] ${sent ? 'bg-[#EBE4B3]' : 'bg-[#EBE4B3]'}`}>
                    <div className="relative shrink-0 w-[52px] h-[52px] mr-[14px] rounded-[8px] overflow-hidden"
                      style={{ backgroundColor: sent ? '#B1AE68' : 'rgba(255,255,255,0.2)' }}>
                      <img
                        src={FRIEND_ICONS[friend]}
                        alt="avatar"
                        className="w-full h-full object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <p className={`flex-1 text-[18px] ${sent ? 'text-[#394648]' : 'text-#394648'}`}
                      style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}>
                      {friend}
                    </p>
                    <button
                      onClick={() => !sent && handleSendRequest(friend)}
                      disabled={sent}
                      className="px-[12px] py-[4px] rounded-[6px] text-[14px] shrink-0"
                      style={{
                        fontFamily: '"Cabin Condensed", sans-serif',
                        fontWeight: 700,
                        backgroundColor: sent ? '#a0a0a0' : 'white',
                        color: sent ? 'white' : '#394648',
                      }}
                    >
                      {sent ? 'sent ✓' : 'send request'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute left-[26px] bottom-[85px] z-20 bg-[#f0a500] text-white px-3 py-1 flex items-center gap-2 rounded-[6px]"
        style={{ fontFamily: '"Cabin Condensed", sans-serif', fontWeight: 700 }}
      >
        ← back
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