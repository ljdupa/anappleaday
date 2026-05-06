import { useState } from "react";
import IPhone16CheckUp from "../../imports/IPhone16CheckUp/IPhone16CheckUp";

<div className="absolute top-0 left-0 z-[9999] bg-red-500 text-white p-2">
  selectable check-up screen
</div>

interface SelectableCheckUpScreenProps {
  onContinue?: () => void;
}

const QUESTIONS = [
  { name: "Question 0", top: 91 },
  { name: "Question 1", top: 161 },
  { name: "Question 2", top: 231 },
  { name: "Question 3", top: 301 },
  { name: "Question 4", top: 371 },
  { name: "Question 5", top: 441 },
  { name: "Question 6", top: 511 },
  { name: "Question 7", top: 581 },
  { name: "Question 8", top: 651 },
];

export default function SelectableCheckUpScreen({ onContinue }: SelectableCheckUpScreenProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return (
    <div className="relative size-full">
      {/* Background boxes - beige by default, orange when selected */}
      {QUESTIONS.map((question) => {
        const isSelected = selectedQuestion === question.name;
        return (
          <div key={`bg-${question.name}`} className="absolute left-[19px]" style={{ top: `${question.top}px`, zIndex: 1 }}>
            <div className="absolute left-0 w-[355px] h-[63px] rounded-[6px]" style={{ backgroundColor: isSelected ? '#EC9808' : '#ebe4b3' }} />
          </div>
        );
      })}

      {/* Imported component with beige/orange backgrounds hidden via CSS */}
      <div className="relative" style={{ zIndex: 10 }}>
        <style>{`
          .bg-\\[\\#ec9808\\][class*="top-\\[91px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[161px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[231px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[301px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[371px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[441px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[511px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[581px\\]"],
          .bg-\\[\\#ebe4b3\\][class*="top-\\[651px\\]"] {
            opacity: 0 !important;
          }
        `}</style>
        <IPhone16CheckUp />
      </div>

      {/* Clickable overlays */}
      {QUESTIONS.map((question) => {
        const isSelected = selectedQuestion === question.name;
        return (
          <button
            key={question.name}
            onClick={() => setSelectedQuestion(isSelected ? null : question.name)}
            className="absolute left-[19px] w-[355px] h-[63px] rounded-[6px]"
            style={{ top: `${question.top}px`, zIndex: 50 }}
            aria-label={`Select ${question.name}`}
          />
        );
      })}

      {/* Continue button */}
      {selectedQuestion && (
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
