import { useState } from "react";
import IPhone16RemindersDetail from "../../imports/IPhone16Reminders-3/IPhone16Reminders";

interface SelectableRemindScreenProps {
  onContinue?: () => void;
}

const REMINDERS = [
  { name: "Reminder 0", top: 90 },
  { name: "Reminder 1", top: 160 },
  { name: "Reminder 2", top: 230 },
  { name: "Reminder 3", top: 300 },
  { name: "Reminder 4", top: 370 },
  { name: "Reminder 5", top: 440 },
  { name: "Reminder 6", top: 510 },
  { name: "Reminder 7", top: 580 },
  { name: "Reminder 8", top: 650 },
];

export default function SelectableRemindScreen({ onContinue }: SelectableRemindScreenProps) {
  const [selectedReminder, setSelectedReminder] = useState<string | null>(null);

  return (
    <div className="relative size-full">
      {/* Background boxes - beige by default, orange when selected */}
      {REMINDERS.map((reminder) => {
        const isSelected = selectedReminder === reminder.name;
        return (
          <div key={`bg-${reminder.name}`} className="absolute left-[19px]" style={{ top: `${reminder.top}px`, zIndex: 1 }}>
            <div className="absolute left-0 w-[355px] h-[63px] rounded-[6px]" style={{ backgroundColor: isSelected ? '#EC9808' : '#ebe4b3' }} />
          </div>
        );
      })}

      {/* Imported component with beige/orange backgrounds hidden via CSS */}
      <div className="relative" style={{ zIndex: 10 }}>
        <style>{`
          .bg-\\[\\#ec9808\\][class*="top-\\[90px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[160px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[230px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[300px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[370px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[440px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[510px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[580px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[650px\\]"] {
            opacity: 0 !important;
          }
        `}</style>
        <IPhone16RemindersDetail />
      </div>

      {/* Clickable overlays */}
      {REMINDERS.map((reminder) => {
        const isSelected = selectedReminder === reminder.name;
        return (
          <button
            key={reminder.name}
            onClick={() => setSelectedReminder(isSelected ? null : reminder.name)}
            className="absolute left-[19px] w-[355px] h-[63px] rounded-[6px]"
            style={{ top: `${reminder.top}px`, zIndex: 50 }}
            aria-label={`Select ${reminder.name}`}
          />
        );
      })}

      {/* Continue button */}
      {selectedReminder && (
        <div className="absolute left-[222px] top-[731px] z-50">
          <button
            onClick={onContinue}
            className="bg-[#ec9808] h-[31px] rounded-[6px] w-[157px] flex items-center justify-center"
          >
            <p className="font-['Cabin_Condensed:Bold',sans-serif] text-[20px] text-white">send</p>
          </button>
        </div>
      )}
    </div>
  );
}
