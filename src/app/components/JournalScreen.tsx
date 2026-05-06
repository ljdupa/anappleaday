import { useState } from 'react';
import SharedTaskbar from './SharedTaskbar';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
}

interface JournalScreenProps {
  onNavigateToHome: () => void;
  onNavigateToFriends: () => void;
  onNavigateToLogMood: () => void;
  onNavigateToProfile?: () => void;
  onCreateEntry: () => void;
  entries: JournalEntry[];
  onEditEntry: (id: string, title: string, content: string, mood: string) => void;
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

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEARS = [2023, 2024, 2025, 2026, 2027, 2028];

const parseEntryDate = (dateStr: string): { month: number; year: number } => {
  for (let i = 0; i < MONTHS.length; i++) {
    if (dateStr.startsWith(MONTHS[i])) {
      const yearMatch = dateStr.match(/\d{4}/);
      const year = yearMatch ? parseInt(yearMatch[0]) : new Date().getFullYear();
      return { month: i, year };
    }
  }
  const d = new Date(dateStr);
  return { month: d.getMonth(), year: d.getFullYear() };
};

const cardStyle = "absolute bg-[#f3efd4] border border-[#cac6af] left-[20px] right-[20px] top-[40px] bottom-[100px] rounded-[8px] shadow-md";

export default function JournalScreen({
  onNavigateToHome,
  onNavigateToFriends,
  onNavigateToLogMood,
  onNavigateToProfile,
  onCreateEntry,
  entries,
  onEditEntry,
}: JournalScreenProps) {
  const now = new Date();
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const filteredEntries = entries.filter((entry) => {
    const { month, year } = parseEntryDate(entry.date);
    return month === selectedMonth && year === selectedYear;
  });

  const startEditing = (entry: JournalEntry) => {
    setEditTitle(entry.title);
    setEditContent(entry.content);
    setIsEditing(true);
  };

  const saveEdit = () => {
    if (selectedEntry) {
      onEditEntry(selectedEntry.id, editTitle, editContent, selectedEntry.mood);
      setSelectedEntry(null);
      setIsEditing(false);
    }
  };

  // Edit view
  if (selectedEntry && isEditing) {
    return (
      <div className="relative size-full bg-[#b3ba5d]" style={{ fontFamily: '"Cabin Condensed", sans-serif' }}>
        <div className={cardStyle} />
        <img src={getMoodApple(selectedEntry.mood)} className="absolute left-[36px] top-[56px] w-[60px] h-[60px] object-contain z-10" alt={selectedEntry.mood} />
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="absolute left-[108px] top-[66px] right-[36px] text-[20px] z-10 text-[#394648] bg-transparent outline-none border-none"
          style={{ fontWeight: 700 }}
        />
        <p className="absolute left-[108px] top-[94px] text-[11px] z-10 text-[#394648] opacity-70">
          {selectedEntry.date}
        </p>
        <div className="absolute left-[30px] right-[30px] top-[128px] h-[1px] bg-[#cac6af] z-10" />
        <p className="absolute left-[36px] top-[142px] text-[13px] z-10 text-[#aeaa89]">How was today?</p>
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="absolute left-[36px] right-[36px] top-[168px] bottom-[110px] text-[14px] z-10 text-[#394648] bg-transparent outline-none border-none resize-none"
          style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
        />
        <button
          onClick={() => setIsEditing(false)}
          className="absolute left-[60px] bottom-[30px] z-10 bg-[#ebebea] h-[36px] w-[100px] rounded-[6px] text-[#394648] text-[14px]"
          style={{ fontWeight: 700 }}
        >
          cancel
        </button>
        <button
          onClick={saveEdit}
          className="absolute right-[60px] bottom-[30px] z-10 bg-[#EC9808] h-[36px] w-[100px] rounded-[6px] text-white text-[14px]"
          style={{ fontWeight: 700 }}
        >
          save
        </button>
      </div>
    );
  }

  // Single entry view
  if (selectedEntry) {
    return (
      <div className="relative size-full bg-[#b3ba5d]" style={{ fontFamily: '"Cabin Condensed", sans-serif' }}>
        <div className={cardStyle} />
        <img src={getMoodApple(selectedEntry.mood)} className="absolute left-[36px] top-[56px] w-[60px] h-[60px] object-contain z-10" alt={selectedEntry.mood} />
        <p className="absolute left-[108px] top-[66px] text-[20px] z-10 text-[#394648]" style={{ fontWeight: 700 }}>
          {selectedEntry.title || 'Untitled'}
        </p>
        <p className="absolute left-[108px] top-[94px] text-[11px] z-10 text-[#394648] opacity-70">
          {selectedEntry.date}
        </p>
        <div className="absolute left-[30px] right-[30px] top-[128px] h-[1px] bg-[#cac6af] z-10" />
        <p className="absolute left-[36px] top-[142px] text-[13px] z-10 text-[#aeaa89]">How was today?</p>
        <p
          className="absolute left-[36px] right-[36px] top-[168px] bottom-[110px] text-[14px] z-10 text-[#394648] leading-relaxed overflow-y-auto"
          style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'break-word' }}
        >
          {selectedEntry.content || 'No content written.'}
        </p>
        <button
          onClick={() => setSelectedEntry(null)}
          className="absolute left-[60px] bottom-[30px] z-10 bg-[#ebebea] h-[36px] w-[100px] rounded-[6px] text-[#394648] text-[14px]"
          style={{ fontWeight: 700 }}
        >
          ← back
        </button>
        <button
          onClick={() => startEditing(selectedEntry)}
          className="absolute right-[60px] bottom-[30px] z-10 bg-[#EC9808] h-[36px] w-[100px] rounded-[6px] text-white text-[14px]"
          style={{ fontWeight: 700 }}
        >
          edit
        </button>
      </div>
    );
  }

  // Main journal list — matches Figma
  return (
    <div className="relative size-full bg-[#a5ab4e]" style={{ fontFamily: '"Cabin Condensed", sans-serif' }}>

      {/* Title */}
      <p className="absolute left-[20px] top-[52px] text-white text-[32px]" style={{ fontWeight: 700 }}>
        My Journal
      </p>

      {/* Month pills */}
      <div
        className="absolute left-0 top-[100px] w-full h-[48px] flex gap-[8px] items-center px-[16px] z-20 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {MONTHS.map((month, index) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(index)}
            className="shrink-0 px-[16px] py-[6px] rounded-[10px] text-[15px]"
            style={{
              fontFamily: '"Cabin Condensed", sans-serif',
              fontWeight: 700,
              backgroundColor: selectedMonth === index ? '#f3efd4' : '#d6dc8578',
              color: selectedMonth === index ? '#394648' : '#2e393b',
            }}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="absolute left-[16px] right-[16px] top-[154px] h-[1.5px] bg-black opacity-20 z-20" />

      {/* Year pills */}
      <div
        className="absolute left-0 top-[160px] w-full h-[40px] flex gap-[8px] items-center px-[16px] z-20 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {YEARS.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className="shrink-0 px-[16px] py-[4px] rounded-[10px] text-[14px]"
            style={{
              fontFamily: '"Cabin Condensed", sans-serif',
              fontWeight: 700,
              backgroundColor: selectedYear === year ? '#f3efd4' : '#d6dc8578',
              color: selectedYear === year ? '#394648' : '#2e393b',
            }}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Month + Year label */}
      <p className="absolute left-[20px] top-[208px] text-white text-[18px] z-20" style={{ fontWeight: 700 }}>
        {MONTHS[selectedMonth]} {selectedYear}
      </p>

      {/* Entry list */}
      <div
        className="absolute left-[16px] right-[16px] top-[236px] z-20 overflow-y-auto"
        style={{ bottom: '80px', scrollbarWidth: 'none' }}
      >
        {filteredEntries.length === 0 ? (
          <p className="text-white opacity-55 mt-10 text-[16px] text-center">
            No entries for {MONTHS[selectedMonth]} {selectedYear}
          </p>
        ) : (
          <div className="flex flex-col gap-[12px]">
            {filteredEntries.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedEntry(entry)}
                className="w-full bg-[#f3efd4] h-[72px] rounded-[12px] flex items-center px-[14px] gap-[12px] text-left"
              >
                <img
                  src={getMoodApple(entry.mood)}
                  className="w-[46px] h-[46px] shrink-0 object-contain"
                  alt={entry.mood}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[16px] text-[#394648] truncate" style={{ fontWeight: 700 }}>
                    {entry.title || 'Untitled'}
                  </p>
                  <p className="text-[12px] text-[#394648] opacity-60">{entry.date}</p>
                </div>
                <span className="text-[#394648] opacity-40 text-[24px]">›</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[72px] z-50">
        <SharedTaskbar
          onNavigateToHome={onNavigateToHome}
          onNavigateToFriends={onNavigateToFriends}
          onNavigateToLogMood={onNavigateToLogMood}
          onNavigateToJournal={() => {}}
          onNavigateToProfile={onNavigateToProfile}
        />
      </div>
    </div>
  );
}