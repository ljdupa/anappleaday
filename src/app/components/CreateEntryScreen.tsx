import { useState } from 'react';

interface CreateEntryScreenProps {
  onSave: (title: string, content: string, mood: string) => void;
  onCancel: () => void;
  selectedMood: string;
  onChangeMood: (mood: string) => void;
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

const MOODS = ['rotten', 'bad', 'okay', 'good', 'great'];
const MAX_CHARS_PER_PAGE = 500;

export default function CreateEntryScreen({
  onSave,
  onCancel,
  selectedMood,
  onChangeMood
}: CreateEntryScreenProps) {
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState(['']);
  const [currentPage, setCurrentPage] = useState(0);
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  const cabin = { fontFamily: 'Cabin Condensed, sans-serif' };
  const cabinBold = { fontFamily: 'Cabin Condensed, sans-serif', fontWeight: 700 };

  const handleSave = () => {
    const fullContent = pages.join('\n\n').trim();
    if (title.trim() || fullContent) {
      onSave(title, fullContent, selectedMood);
    }
  };

  const handleContentChange = (text: string) => {
    if (text.length <= MAX_CHARS_PER_PAGE) {
      const newPages = [...pages];
      newPages[currentPage] = text;
      setPages(newPages);
    }
  };

  const addPage = () => {
    const newPages = [...pages, ''];
    setPages(newPages);
    setCurrentPage(newPages.length - 1);
  };

  const charsLeft = MAX_CHARS_PER_PAGE - (pages[currentPage]?.length || 0);
  const isLastPage = currentPage === pages.length - 1;

  return (
    <div className="bg-[#b3ba5d] relative size-full" style={cabin}>
      {/* Journal card */}
      <div className="absolute bg-[#f3efd4] border border-[#cac6af] border-solid shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] left-[20px] right-[20px] top-[80px] bottom-[100px] rounded-[8px]" />

      {/* Apple icon */}
      <button
        onClick={() => setShowMoodPicker(!showMoodPicker)}
        className="absolute left-[36px] top-[96px] w-[60px] h-[60px] cursor-pointer z-10"
      >
        <img src={getMoodApple(selectedMood)} className="w-full h-full object-contain" alt={selectedMood} />
      </button>

      {/* Mood picker */}
      {showMoodPicker && (
        <div className="absolute left-[36px] top-[165px] bg-white rounded-[10px] p-3 shadow-lg z-20 flex gap-2">
          {MOODS.map((mood) => (
            <button key={mood} onClick={() => { onChangeMood(mood); setShowMoodPicker(false); }}
              className="w-[44px] h-[44px] hover:scale-110 transition-transform">
              <img src={getMoodApple(mood)} className="w-full h-full object-contain" alt={mood} />
            </button>
          ))}
        </div>
      )}

      {/* Public/Private toggle */}
      <button
        onClick={() => setIsPublic(!isPublic)}
        className="absolute right-[36px] top-[96px] w-[36px] h-[36px] rounded-full z-10 flex items-center justify-center"
        style={{ backgroundColor: "#DFDFDF" }}
      >
        {isPublic ? (
          <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
            <ellipse cx="5.67" cy="3.6" fill="#394648" rx="3.4" ry="3.6" />
            <path d="M0 16C0 11.6 2.5 8.7 5.67 8.7C8.84 8.7 11.34 11.6 11.34 16H0Z" fill="#394648" />
            <ellipse cx="13.99" cy="3.6" fill="#394648" rx="3.4" ry="3.6" />
            <path d="M8.32 16C8.32 11.6 10.82 8.7 13.99 8.7C17.16 8.7 19.66 11.6 19.66 16H8.32Z" fill="#394648" />
          </svg>
        ) : (
          <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
            <ellipse cx="5.67" cy="3.6" fill="#394648" rx="3.4" ry="3.6" opacity="0.4" />
            <path d="M0 16C0 11.6 2.5 8.7 5.67 8.7C8.84 8.7 11.34 11.6 11.34 16H0Z" fill="#394648" opacity="0.4" />
            <ellipse cx="13.99" cy="3.6" fill="#394648" rx="3.4" ry="3.6" opacity="0.4" />
            <path d="M8.32 16C8.32 11.6 10.82 8.7 13.99 8.7C17.16 8.7 19.66 11.6 19.66 16H8.32Z" fill="#394648" opacity="0.4" />
            <line x1="1" y1="1" x2="19" y2="15" stroke="#394648" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Title input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        className="absolute left-[104px] top-[104px] right-[80px] bg-transparent text-[20px] text-[#394648] placeholder:text-[#aeaa89] outline-none border-none z-10"
        style={cabinBold}
      />

      {/* Date */}
      <p className="absolute left-[104px] top-[132px] z-10 text-[11px]"
        style={{ ...cabin, color: "rgba(57,70,72,0.7)" }}>
        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      {/* Divider */}
      <div className="absolute left-[30px] right-[30px] h-[1px] bg-[#cac6af] z-10" style={{ top: "165px" }} />

      {/* Page indicator */}
      <div className="absolute right-[30px] z-10 flex items-center gap-2" style={{ top: "172px" }}>
        <p style={{ ...cabin, fontSize: "11px", color: "rgba(57,70,72,0.5)" }}>
          Page {currentPage + 1} of {pages.length}
        </p>
      </div>

      {/* How was today */}
      <p className="absolute left-[36px] z-10 text-[13px]"
        style={{ ...cabin, color: "#aeaa89", top: "172px" }}>
        How was today?
      </p>

      {/* Content textarea */}
      <textarea
        value={pages[currentPage]}
        onChange={(e) => handleContentChange(e.target.value)}
        placeholder="Write about your day..."
        className="absolute left-[37px] right-[30px] bg-transparent text-[14px] text-[#394648] placeholder:text-[#c9c5a9] outline-none border-none resize-none z-10"
        style={{ ...cabin, top: "200px", bottom: "145px", wordBreak: 'break-word', overflowWrap: 'break-word' }}
      />

      {/* Chars left + page nav */}
      <div className="absolute left-[30px] right-[30px] flex items-center justify-between z-10" style={{ bottom: "120px" }}>
        <div className="flex gap-2">
          {currentPage > 0 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 rounded-[6px] text-[12px]"
              style={{ ...cabinBold, backgroundColor: "#e0dac0", color: "#394648" }}
            >
              ← prev
            </button>
          )}
          {!isLastPage && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 rounded-[6px] text-[12px]"
              style={{ ...cabinBold, backgroundColor: "#e0dac0", color: "#394648" }}
            >
              next →
            </button>
          )}
          {isLastPage && (
            <button
              onClick={addPage}
              className="px-3 py-1 rounded-[6px] text-[12px]"
              style={{ ...cabinBold, backgroundColor: "#EC9808", color: "white" }}
            >
              + add page
            </button>
          )}
        </div>
        <p style={{ ...cabin, fontSize: "11px", color: charsLeft < 50 ? "#E03838" : "rgba(57,70,72,0.4)" }}>
          {charsLeft} left
        </p>
      </div>

      {/* Cancel + Save */}
      <div className="absolute left-0 right-0 flex justify-center gap-[20px] z-10" style={{ bottom: "30px" }}>
        <button onClick={onCancel}
          className="bg-[#ebebea] h-[40px] w-[110px] rounded-[8px] hover:opacity-80"
          style={{ ...cabinBold, color: "#394648", fontSize: "15px" }}>
          Cancel
        </button>
        <button onClick={handleSave}
          className="bg-[#EC9808] h-[40px] w-[110px] rounded-[8px] hover:opacity-80"
          style={{ ...cabinBold, color: "white", fontSize: "15px" }}>
          Save
        </button>
      </div>
    </div>
  );
}