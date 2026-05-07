import { useState } from 'react';

interface AvatarCustomizeScreenProps {
  currentAvatar: string;
  currentName: string;
  currentBg: string;
  onSave: (avatar: string, name: string, bg: string) => void;
  onBack: () => void;
}

const AVATARS = [
  '/figma-screens/icon1.svg',
  '/figma-screens/icon2.svg',
  '/figma-screens/icon3.svg',
  '/figma-screens/icon4.svg',
  '/figma-screens/icon5.svg',
  '/figma-screens/icon6.svg',
  '/figma-screens/icon7.svg',
];

const BG_COLORS = [
  '#C7DCEC', '#B1AE68', '#f2d267', '#5f905a', '#EC9808',
];

export default function AvatarCustomizeScreen({
  currentAvatar,
  currentName,
  currentBg,
  onSave,
  onBack,
}: AvatarCustomizeScreenProps) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);
  const [selectedBg, setSelectedBg] = useState(currentBg);
  const [name, setName] = useState(currentName);

  const cabin = { fontFamily: 'Cabin Condensed, sans-serif' };
  const cabinBold = { fontFamily: 'Cabin Condensed, sans-serif', fontWeight: 700 };

  return (
    <div className="relative size-full bg-[#BAC15B] overflow-hidden">

      {/* Title */}
      <p className="absolute left-[26px] top-[52px] text-white text-[28px]" style={cabinBold}>
        Customize Profile
      </p>

      {/* Preview card */}
      <div
        className="absolute rounded-[20px] shadow-lg bg-[#f3efd4]"
        style={{ left: '60px', right: '60px', top: '100px', padding: '16px' }}
      >
        <div
          className="rounded-[16px] overflow-hidden flex items-center justify-center mb-[12px]"
          style={{ backgroundColor: selectedBg, height: '160px' }}
        >
          <img
            src={selectedAvatar}
            alt="avatar preview"
            className="w-[120px] h-[120px] object-contain"
          />
        </div>
        <p className="text-center text-[18px] text-[#394648]" style={cabinBold}>
          {name || 'Your Name'}
        </p>
      </div>

      {/* Name input */}
      <div className="absolute left-[26px] right-[26px]" style={{ top: '360px' }}>
        <p className="text-white text-[16px] mb-[8px]" style={cabinBold}>Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-[48px] bg-[#f3efd4] rounded-[10px] px-[16px] text-[18px] text-[#394648] outline-none"
          style={cabin}
          placeholder="Enter your name"
        />
      </div>

      {/* Avatar picker */}
      <div className="absolute left-[26px] right-[26px]" style={{ top: '440px' }}>
        <p className="text-white text-[16px] mb-[10px]" style={cabinBold}>Choose Avatar</p>
        <div className="flex gap-[10px] justify-between">
          {AVATARS.map((avatar) => (
            <button
              key={avatar}
              onClick={() => setSelectedAvatar(avatar)}
              className="w-[58px] h-[58px] rounded-[10px] overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: '#f3efd4',
                border: selectedAvatar === avatar ? '3px solid #EC9808' : '3px solid transparent',
              }}
            >
              <img src={avatar} alt="avatar option" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      </div>

      {/* Background color picker */}
      <div className="absolute left-[26px] right-[26px]" style={{ top: '540px' }}>
        <p className="text-white text-[16px] mb-[10px]" style={cabinBold}>Card Color</p>
        <div className="flex gap-[14px]">
          {BG_COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedBg(color)}
              className="w-[42px] h-[42px] rounded-full"
              style={{
                backgroundColor: color,
                border: selectedBg === color ? '3px solid white' : '3px solid transparent',
              }}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={onBack}
        className="absolute left-[26px] bottom-[30px] bg-[#f3efd4] text-[#394648] px-6 py-2 rounded-[10px]"
        style={cabinBold}
      >
        ← back
      </button>
      <button
        onClick={() => onSave(selectedAvatar, name, selectedBg)}
        className="absolute right-[26px] bottom-[30px] bg-[#EC9808] text-white px-6 py-2 rounded-[10px]"
        style={cabinBold}
      >
        save →
      </button>
    </div>
  );
}