import SharedTaskbar from './SharedTaskbar';

interface SentApplesScreenProps {
  onNavigateToHome: () => void;
  onNavigateToFriends: () => void;
  onNavigateToJournal: () => void;
  onNavigateToLogMood: () => void;
  onNavigateToProfile: () => void;
  onNavigateToReceivedApples: () => void;
}

const sentApples = [
  { id: '1', date: 'Sat, May 2', username: 'amy2321', message: 'make sure to hydrate!' },
  { id: '2', date: 'Sun, May 3', username: 'janesdoes781', message: 'love you!' },
  { id: '3', date: 'Sun, May 3', username: 'jaon2278', message: 'you’ve been doing really well!' },
  { id: '4', date: 'Sun, May 3', username: 'Jakey306', message: 'make sure to hydrate!' },
  { id: '5', date: 'Mon, May 4', username: 'GinaLin2015', message: 'make sure to hydrate!' },
  { id: '6', date: 'Mon, May 4', username: 'pamwig', message: 'I hope you feel better!' },
  { id: '7', date: 'Tue, May 5', username: 'john567', message: 'take a break!' },
];

const getAvatarIcon = (username: string, index: number) => {
  const iconNumber = (index % 5) + 1;
  return `/figma-screens/icon${iconNumber}.svg`;
};


export default function SentApplesScreen({
  onNavigateToHome,
  onNavigateToFriends,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToProfile,
  onNavigateToReceivedApples,
}: SentApplesScreenProps) {
  return (
    <div className="relative h-[852px] w-[393px] mx-auto bg-[#bac15b] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[140px] bg-[#efebd1] z-30">
        <div className="absolute left-[20px] top-[80px] w-[244px]">
          <p className="text-[32px] font-[700] text-black leading-[normal]" style={{ fontFamily: 'Cabin Condensed, sans-serif' }}>
            Sent apples
          </p>
        </div>
        <button
          type="button"
          onClick={onNavigateToReceivedApples}
          className="absolute right-[20px] top-[65px] rounded-[18px] bg-[#F4A208] px-[14px] py-[10px] text-[12px] font-[700] text-[#2D2323] hover:opacity-90 transition-opacity"
          style={{ fontFamily: 'Cabin Condensed, sans-serif' }}
        >
          Received apples
        </button>
      </div>

      <div className="absolute inset-x-0 top-[120px] bottom-[72px] bg-[#f3efd4] px-[20px] pb-[20px] pt-[18px] overflow-y-auto">
        <div className="rounded-[18px] bg-[#F8D150] px-[16px] py-[14px] shadow-[0px_4px_10px_rgba(0,0,0,0.12)]">
          <p className="text-[14px] font-[700] text-[#394648]" style={{ fontFamily: 'Cabin Condensed, sans-serif' }}>
            You’ve sent 7 apples this week!
          </p>
        </div>

        <div className="mt-[16px] space-y-[13px]">
          {sentApples.map((item, index) => (
            <div key={item.id} className="rounded-[18px] bg-white px-[14px] py-[14px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-[700] uppercase text-[#394648] opacity-90" style={{ fontFamily: 'Cabin Condensed, sans-serif' }}>
                  {item.date}
                </p>
                <div className="rounded-[12px] bg-[#F3E9B4] px-[10px] py-[5px] text-[11px] font-[700] text-[#394648]" style={{ fontFamily: 'Cabin Condensed, sans-serif' }}>
                  sent
                </div>
              </div>
              <div className="mt-[12px] flex items-start gap-[12px]">
                <img
                  src={getAvatarIcon(item.username, index)}
                  alt={item.username}
                  className="h-[40px] w-[40px] flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-[16px] font-[700] text-[#394648]" style={{ fontFamily: 'Cabin Condensed, sans-serif' }}>
                    {item.username}
                  </p>
                  <p className="text-[13px] text-[#394648] opacity-85 leading-[1.4]">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[72px] z-50">
        <SharedTaskbar
          onNavigateToHome={onNavigateToHome}
          onNavigateToFriends={onNavigateToFriends}
          onNavigateToJournal={onNavigateToJournal}
          onNavigateToLogMood={onNavigateToLogMood}
          onNavigateToProfile={onNavigateToProfile}
        />
      </div>
    </div>
  );
}