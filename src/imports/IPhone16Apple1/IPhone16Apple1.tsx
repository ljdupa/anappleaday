import svgPaths from "./svg-bijseu210x";

/* ✅ FIXED BUTTON */
function SetMoodButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[44px] top-[764px] w-[306px] h-[48px] bg-[#f2d267] rounded-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[24px] font-bold text-black z-50"
      style={{ fontFamily: "Cabin Condensed, sans-serif" }}
    >
      Set Mood
    </button>
  );
}

function Apple() {
  return (
    <div className="absolute h-[252.5px] left-[87px] top-[285px] w-[222.938px]" data-name="apple1">
      <div className="absolute inset-[-1.44%_-4.93%_-9.11%_-7.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 250.938 279.125">
          <g filter="url(#filter0_d_2_328)" id="apple1">
            <path d={svgPaths.p1d4c5660} fill="url(#paint0_linear_2_328)" id="bigapple" />
            <path d={svgPaths.p195b8a80} fill="var(--fill-0, black)" id="Ellipse 4" />
            <path d={svgPaths.p31ab65c0} fill="var(--fill-0, #272525)" id="Ellipse 5" />
            <path d={svgPaths.p12d2d00} fill="var(--fill-0, #272525)" id="Rectangle 14" />
            <ellipse cx="79" cy="154.125" fill="var(--fill-0, black)" id="Ellipse 16" rx="5" ry="17.5" />
            <ellipse cx="183" cy="154.125" fill="var(--fill-0, black)" id="Ellipse 3" rx="5" ry="17.5" />
            <path d={svgPaths.p33030b00} fill="var(--fill-0, #D9D9D9)" id="Ellipse 19" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="279.125" id="filter0_d_2_328" width="250.938" x="0" y="-1.19209e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-3" dy="9" />
              <feGaussianBlur stdDeviation="7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_328" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_328" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_328" x1="240" x2="42.5" y1="31.6255" y2="266.626">
              <stop stopColor="#FF4747" />
              <stop offset="0.73641" stopColor="#D71A1A" />
              <stop offset="0.96582" stopColor="#991514" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Miniapples() {
  return (
    <div className="absolute contents left-[68px] top-[593px]" data-name="miniapples">
      <div className="absolute h-[29px] left-[68px] top-[603px] w-[33px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
          <path d={svgPaths.p886f580} fill="url(#paint0_linear_2_132)" id="Ellipse 1" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_132" x1="28.5" x2="5.5" y1="25.5" y2="6.5">
              <stop stopColor="#2B3233" />
              <stop offset="1" stopColor="#3C3F3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[15.244px] items-center justify-center left-[78px] top-[593px] w-[9.756px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-21.52deg]">
          <div className="h-[14.507px] relative w-[4.766px]" data-name="miniapplestems">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.76621 14.5065">
              <path d={svgPaths.p24027740} fill="var(--fill-0, #272525)" id="miniapplestems" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[29px] left-[116px] top-[632px] w-[33px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
          <path d={svgPaths.p886f580} fill="url(#paint0_linear_2_128)" id="Ellipse 12" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_128" x1="16.5" x2="16.5" y1="1.30865e-08" y2="29">
              <stop stopColor="#836F49" />
              <stop offset="1" stopColor="#412F0D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[15.244px] items-center justify-center left-[125.43px] top-[623px] w-[9.756px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-21.52deg]">
          <div className="h-[14.507px] relative w-[4.766px]" data-name="miniapplestems">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.76621 14.5065">
              <path d={svgPaths.p24027740} fill="var(--fill-0, #272525)" id="miniapplestems" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[29px] left-[180px] top-[646px] w-[33px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
          <path d={svgPaths.p886f580} fill="url(#paint0_linear_2_126)" id="Ellipse 13" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_126" x1="16.5" x2="16.5" y1="1.30865e-08" y2="29">
              <stop stopColor="#F0D418" />
              <stop offset="1" stopColor="#AC9A1E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[15.244px] items-center justify-center left-[189.43px] top-[636px] w-[9.756px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-21.52deg]">
          <div className="h-[14.507px] relative w-[4.766px]" data-name="miniapplestems">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.76621 14.5065">
              <path d={svgPaths.p24027740} fill="var(--fill-0, #272525)" id="miniapplestems" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[29px] left-[244px] top-[632px] w-[33px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
          <path d={svgPaths.p886f580} fill="url(#paint0_linear_2_124)" id="Ellipse 14" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_124" x1="16.5" x2="16.5" y1="1.30865e-08" y2="29">
              <stop stopColor="#E68D06" />
              <stop offset="1" stopColor="#B77107" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[15.244px] items-center justify-center left-[253.43px] top-[623px] w-[9.756px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-21.52deg]">
          <div className="h-[14.507px] relative w-[4.766px]" data-name="miniapplestems">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.76621 14.5065">
              <path d={svgPaths.p24027740} fill="var(--fill-0, #272525)" id="miniapplestems" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[29px] left-[291px] top-[603px] w-[33px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
          <path d={svgPaths.p191c4a80} fill="url(#paint0_linear_2_326)" id="Ellipse 15" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_326" x1="16.5" x2="16.5" y1="-1.09632e-07" y2="29">
              <stop stopColor="#E03838" />
              <stop offset="1" stopColor="#841414" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[15.244px] items-center justify-center left-[300.43px] top-[593px] w-[9.756px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-21.52deg]">
          <div className="h-[14.507px] relative w-[4.766px]" data-name="miniapplestems">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.76621 14.5065">
              <path d={svgPaths.p24027740} fill="var(--fill-0, #272525)" id="miniapplestems" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopHowAreYou() {
  return (
    <div className="-translate-x-1/2 absolute contents font-['Cabin_Condensed:Regular',sans-serif] leading-[normal] left-[calc(50%-2.5px)] not-italic text-center top-[162px]" data-name="Top how are you">
      <p className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] text-[#394648] text-[20px] top-[162px] whitespace-nowrap">Hi Lauren!</p>
      <p className="-translate-x-1/2 absolute h-[171px] left-[calc(50%-2.5px)] text-[32px] text-black top-[186px] w-[306px]">How are you feeling today?</p>
    </div>
  );
}

export default function IPhone16Apple1({
  onSetMood,
}: {
  onSetMood: () => void;
}) {
  return (
    <div className="bg-[#f1eed9] relative size-full">

      <p className="-translate-x-1/2 absolute left-1/2 top-[162px] text-[#394648] text-[20px] text-center whitespace-nowrap font-cabin">
        Hi Lauren!
      </p>

<p className="-translate-x-1/2 absolute left-1/2 top-[186px] w-[306px] h-[171px] text-black text-[32px] text-center font-cabin font-bold leading-[normal]">
  How are you feeling today?
</p>

      <p className="-translate-x-1/2 absolute left-1/2 top-[569px] text-[20px] text-center font-cabin text-[#394648]">
        I feel{" "}
        <span className="font-bold text-[#D31E1E]">great</span>
      </p>

      <Apple />
      <Miniapples />

      {/* ✅ CLICK WORKS NOW */}
      <SetMoodButton onClick={onSetMood} />

    </div>
  );
}