import svgPaths from "../../imports/IPhone16Apple5/svg-x76tlvujva";

type AppleType = "rotten" | "bad" | "okay" | "good" | "great";

interface ChooseAppleScreenProps {
  onSelectApple: (appleType: AppleType) => void;
}

const applePositions: { type: AppleType; left: number; top: number; stemLeft: number; stemTop: number; color1: string; color2: string; x1: string; x2: string; y1: string; y2: string }[] = [
  { type: "rotten", left: 68,  top: 603, stemLeft: 78,     stemTop: 593, color1: "#2B3233", color2: "#3C3F3F", x1: "28.5", x2: "5.5",  y1: "25.5", y2: "6.5" },
  { type: "bad",    left: 116, top: 632, stemLeft: 125.43, stemTop: 623, color1: "#836F49", color2: "#412F0D", x1: "16.5", x2: "16.5", y1: "0",    y2: "29"  },
  { type: "okay",   left: 180, top: 646, stemLeft: 189.43, stemTop: 636, color1: "#F0D418", color2: "#AC9A1E", x1: "16.5", x2: "16.5", y1: "0",    y2: "29"  },
  { type: "good",   left: 244, top: 632, stemLeft: 253.43, stemTop: 623, color1: "#E68D06", color2: "#B77107", x1: "16.5", x2: "16.5", y1: "0",    y2: "29"  },
  { type: "great",  left: 291, top: 603, stemLeft: 300.43, stemTop: 593, color1: "#E03838", color2: "#841414", x1: "16.5", x2: "16.5", y1: "0",    y2: "29"  },
];

export default function ChooseAppleScreen({ onSelectApple }: ChooseAppleScreenProps) {
  return (
    <div className="bg-[#f1eed9] relative w-full h-full overflow-hidden">

      {/* Header — centered */}
      <p className="absolute left-1/2 -translate-x-1/2 text-[#394648] text-[20px] top-[162px] whitespace-nowrap text-center"
        style={{ fontFamily: "Cabin Condensed, sans-serif" }}>
        Hi Lauren!
      </p>
      <p className="absolute left-1/2 -translate-x-1/2 text-[32px] text-black top-[186px] w-[306px] text-center leading-tight"
        style={{ fontFamily: "Cabin Condensed, sans-serif" }}>
        How are you feeling today?
      </p>

      {/* Static label */}
      <p className="absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-[20px]"
        style={{ top: "560px", fontFamily: "Cabin Condensed, sans-serif", color: "#394648" }}>
        choose an apple
      </p>

      {/* Mini apples — clicking goes directly to that apple's screen */}
      {applePositions.map((apple) => (
        <button
          key={apple.type}
          onClick={() => onSelectApple(apple.type)}
          className="absolute bg-transparent border-none p-0 cursor-pointer hover:scale-110 transition-transform"
          style={{ left: apple.left, top: apple.top - 20, width: 43, height: 49 }}
        >
          {/* Stem */}
          <span className="absolute flex items-center justify-center"
            style={{ width: "9.756px", height: "15.244px", left: apple.stemLeft - apple.left, top: apple.stemTop - (apple.top - 20) }}>
            <span className="flex-none" style={{ transform: "rotate(-21.52deg)", display: "block" }}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 4.76621 14.5065"
                style={{ width: "4.766px", height: "14.507px", display: "block" }}>
                <path d={svgPaths.p24027740} fill="#272525" />
              </svg>
            </span>
          </span>

          {/* Apple body */}
          <svg className="absolute" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29"
            style={{ width: "33px", height: "29px", left: 0, top: 20 }}>
            <path d={svgPaths.p886f580} fill={`url(#paint_choose_${apple.type})`} />
            <defs>
              <linearGradient id={`paint_choose_${apple.type}`} gradientUnits="userSpaceOnUse"
                x1={apple.x1} x2={apple.x2} y1={apple.y1} y2={apple.y2}>
                <stop stopColor={apple.color1} />
                <stop offset="1" stopColor={apple.color2} />
              </linearGradient>
            </defs>
          </svg>
        </button>
      ))}
    </div>
  );
}