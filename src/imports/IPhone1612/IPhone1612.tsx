import svgPaths from "./svg-xbjwagevbx";

function Apple() {
  return (
    <div className="absolute h-[48px] left-[60px] top-[186px] w-[42.38px]" data-name="apple1">
      <div className="absolute inset-[-12.58%_-19.58%_-21.46%_-19.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.9802 64.3387">
          <g filter="url(#filter0_d_8_937)" id="apple1">
            <path d={svgPaths.p2ca52680} fill="url(#paint0_linear_8_937)" id="bigapple" />
            <path d={svgPaths.p28c88a00} fill="var(--fill-0, black)" id="Ellipse 4" />
            <path d={svgPaths.p2ef6200} fill="var(--fill-0, #272525)" id="Ellipse 5" />
            <path d={svgPaths.p3c16ab00} fill="var(--fill-0, #272525)" id="Rectangle 14" />
            <ellipse cx="20.0861" cy="34.6486" fill="var(--fill-0, black)" id="Ellipse 16" rx="0.950494" ry="3.32673" />
            <ellipse cx="39.8566" cy="34.6486" fill="var(--fill-0, black)" id="Ellipse 3" rx="0.950494" ry="3.32673" />
            <path d={svgPaths.p3f1d8900} fill="var(--fill-0, #D9D9D9)" id="Ellipse 19" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64.3387" id="filter0_d_8_937" width="58.9802" x="0" y="-1.78814e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="4.15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_937" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_937" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_937" x1="50.692" x2="13.1475" y1="11.3615" y2="56.0347">
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

function CancelButton() {
  return (
    <div className="absolute contents left-[107px] top-[737px]" data-name="Cancel button">
      <div className="absolute bg-[#ebebea] h-[22px] left-[107px] rounded-[3px] top-[737px] w-[67px]" />
      <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[141.5px] not-italic text-[#394648] text-[13px] text-center top-[740px] whitespace-nowrap">Cancel</p>
    </div>
  );
}

function FriendsIcon() {
  return (
    <div className="absolute h-[16.02px] left-[312.05px] top-[193.56px] w-[19.659px]" data-name="friends icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6586 16.0204">
        <g id="friends icon">
          <ellipse cx="5.67067" cy="3.60462" fill="var(--fill-0, #394648)" id="Ellipse 150" rx="3.40245" ry="3.60459" />
          <path d={svgPaths.p3cf87df0} fill="var(--fill-0, #394648)" id="Ellipse 151" />
          <ellipse cx="13.9874" cy="3.60462" fill="var(--fill-0, #394648)" id="Ellipse 155" rx="3.40245" ry="3.60459" />
          <path d={svgPaths.p34e8e80} fill="var(--fill-0, #394648)" id="Ellipse 156" />
        </g>
      </svg>
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#b3ba5d] relative size-full" data-name="iPhone 16 - 12">
      <div className="absolute bg-[#f3efd4] border border-[#cac6af] border-solid h-[549px] left-[39px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[168px] w-[315px]" />
      <Apple />
      <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[160px] not-italic text-[#aeaa89] text-[20px] text-center top-[198px] whitespace-nowrap">Enter title</p>
      <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[146px] not-italic text-[8px] text-[rgba(57,70,72,0.7)] text-center top-[221px] whitespace-nowrap">April 26, 2026</p>
      <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[100px] not-italic text-[#aeaa89] text-[13px] text-center top-[262px] whitespace-nowrap">How was today?</p>
      <div className="absolute bg-[#ebebea] h-[22px] left-[214px] rounded-[3px] top-[737px] w-[68px]" />
      <p className="-translate-x-1/2 absolute font-['Cabin_Condensed:Bold',sans-serif] leading-[normal] left-[248px] not-italic text-[#394648] text-[13px] text-center top-[740px] whitespace-nowrap">Save</p>
      <CancelButton />
      <div className="absolute left-[306px] size-[31px] top-[186px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
          <circle cx="15.5" cy="15.5" fill="var(--fill-0, #DFDFDF)" id="Ellipse 197" r="15.5" />
        </svg>
      </div>
      <FriendsIcon />
    </div>
  );
}