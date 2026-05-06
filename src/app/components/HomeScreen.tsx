import { useState } from "react";
import svgPaths from "../../imports/IPhone16Landingofficial-3/svg-im0bd7ybth";
import ExpandedCalendar from "../../imports/Calendar/Calendar";
import MoodForecast from "../../imports/Group50/Group50";
import ReceivedApplesBasket from "./ReceivedApplesBasket";
import SentApples from "../../imports/Sentapples/Sentapples";
import Taskbar from "./SharedTaskbar";
import Avatar from "../../imports/Avatar/Avatar";

interface HomeScreenProps {
  userName: string;
  onNavigateToHome: () => void;
  onNavigateToFriends: () => void;
  onNavigateToJournal: () => void;
  onNavigateToLogMood: () => void;
  onNavigateToProfile: () => void;
  onNavigateToReceivedApples: () => void;
  onNavigateToSentApples: () => void;
  receivedApples: Array<{ color: string; from: string; date: string }>;
}

export default function HomeScreen({
  userName,
  onNavigateToHome,
  onNavigateToFriends,
  onNavigateToJournal,
  onNavigateToLogMood,
  onNavigateToProfile,
  onNavigateToReceivedApples,
  onNavigateToSentApples,
}: HomeScreenProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const cabinBold = { fontFamily: 'Cabin Condensed, sans-serif', fontWeight: 700 };
  const cabinRegular = { fontFamily: 'Cabin Condensed, sans-serif', fontWeight: 400 };

  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - currentDayOfWeek + i);
    return {
      num: d.getDate().toString(),
      isToday: i === currentDayOfWeek,
      isPast: i < currentDayOfWeek,
      isFuture: i > currentDayOfWeek,
      isCurrentMonth: d.getMonth() === today.getMonth(),
    };
  });

  return (
    <div className="relative h-[852px] w-[393px] mx-auto bg-[#bac15b] overflow-hidden" style={cabinRegular}>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-[165px] bg-[#bac15b] z-30 w-full overflow-hidden">
        <div className="absolute left-[26px] top-[70px] w-[244px]">
          <p style={cabinBold} className="text-[32px] text-white leading-[normal] mb-0">Hello,</p>
          <p style={cabinBold} className="text-[32px] text-white leading-[normal]">{userName}</p>
        </div>
        <div className="absolute right-[20px] top-[50px] w-[94px] h-[104px]">
          <Avatar />
        </div>
      </div>

      {/* Cream background behind collapsed calendar */}
      <div
        className="absolute left-0 right-0 top-[165px] w-full h-[108px] bg-[#f3efd4] z-10"
        style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
      />

      {/* Scrollable content — always at 273px */}
      <div
        className="absolute left-0 right-0 overflow-y-auto pb-[16px] bg-[#f3efd4] w-full"
        style={{ top: "273px", height: "calc(852px - 273px - 72px)" }}
      >
        <div className="relative mt-[16px] mb-[32px]">
          <p style={cabinBold} className="absolute text-[16px] text-black left-[40px] top-[-28px] whitespace-nowrap">Your mood forecast for today</p>
          <div className="h-[163px] mt-[23px] ml-[40px] mr-[20px] max-w-[333px]">
            <MoodForecast />
          </div>
        </div>
        <div className="relative mb-[32px]">
          <p style={cabinBold} className="absolute text-[16px] text-black left-[40px] top-[-18px] whitespace-nowrap">Received apples</p>
          <button onClick={onNavigateToReceivedApples} className="w-full h-[215px] max-w-[333px] mt-[10px] mx-[30px] bg-transparent border-0 p-0">
            <ReceivedApplesBasket />
          </button>
        </div>
        <div className="relative mb-[8px]">
          <p style={cabinBold} className="absolute text-[16px] text-black left-[40px] top-[-18px] whitespace-nowrap">Sent apples</p>
          <button onClick={onNavigateToSentApples} className="w-full h-[215px] max-w-[333px] mt-[10px] mx-[30px] bg-transparent border-0 p-0">
            <SentApples />
          </button>
        </div>
      </div>

      {/* Calendar — overlays content */}
      <div className="absolute top-[165px] left-0 right-0 z-40 w-full">
        {isCalendarOpen ? (
          <div className="relative w-full" style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px', overflow: 'hidden' }}>
            <div className="w-full" style={{ height: "320px" }}>
              <ExpandedCalendar />
            </div>
            <button
              onClick={() => setIsCalendarOpen(false)}
              className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center"
            >
              <div className="rotate-180">
                <svg className="block size-[13px]" fill="none" viewBox="0 0 11.2583 5.25">
                  <path d={svgPaths.pb065340} fill="#F4A208" />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <div className="relative w-full">
            <div className="px-[26px] pt-[12px] pb-[12px]">
              <div className="flex justify-center gap-[42px] mb-[8px]">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <p key={i} style={cabinBold} className="text-[16px] text-[#394648]">{day}</p>
                ))}
              </div>
              <div className="flex justify-between mb-[4px]">
                {weekDays.map((day, i) => {
                  let bgColor = '#BAC15B';
                  let textColor = '#394648';
                  let opacity = 1;
                  let dotColor: string | null = '#F0D41B';

                  if (day.isToday) {
                    bgColor = '#EC9808';
                    textColor = 'white';
                    dotColor = '#B22626';
                  } else if (day.isFuture) {
                    bgColor = '#BDBE97';
                    dotColor = null;
                  } else if (!day.isCurrentMonth) {
                    bgColor = '#BDBE97';
                    opacity = 0.65;
                    dotColor = null;
                  }

                  return (
                    <div key={i} className="relative flex flex-col items-center">
                      <div className="relative size-[31px] mb-[4px]">
                        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 31 31">
                          <circle cx="15.5" cy="15.5" fill={bgColor} r="15.5" />
                        </svg>
                        <p style={{ ...cabinBold, opacity, color: textColor }}
                          className="absolute inset-0 flex items-center justify-center text-[16px]">
                          {day.num}
                        </p>
                      </div>
                      {dotColor ? (
                        <svg className="size-[6px]" fill="none" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" fill={dotColor} r="3" />
                        </svg>
                      ) : (
                        <div className="size-[px]" />
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setIsCalendarOpen(true)}
                className="w-full flex items-center justify-center pt-[4px] pb-[4px]"
              >
                <svg className="block size-[10px]" fill="none" viewBox="0 0 11.2583 5.25">
                  <path d={svgPaths.pb065340} fill="#F4A208" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[72px] z-50">
        <Taskbar
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