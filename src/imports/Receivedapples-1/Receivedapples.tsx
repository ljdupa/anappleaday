import svgPaths from "./svg-qu05o27zi7";

function Basket() {
  return (
    <div className="absolute h-[185px] left-[61px] top-[12px] w-[203px]" data-name="basket">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 185">
        <g id="basket">
          <path d={svgPaths.p31afee80} fill="url(#paint0_linear_5_1525)" id="Ellipse 122" />
          <path d={svgPaths.p3a851d00} fill="var(--fill-0, #402204)" id="Ellipse 124" />
          <path d={svgPaths.p1cee0d00} fill="url(#paint1_linear_5_1525)" id="Ellipse 135" />
          <path d={svgPaths.p1303a900} fill="url(#paint2_linear_5_1525)" id="Ellipse 123" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1525" x1="101.5" x2="101.5" y1="61.7236" y2="185">
            <stop stopColor="#794500" />
            <stop offset="1" stopColor="#4B2602" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1525" x1="100" x2="100" y1="0" y2="75">
            <stop stopColor="#782A03" />
            <stop offset="1" stopColor="#4A1900" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_5_1525" x1="5" x2="197" y1="83.5" y2="83.5">
            <stop stopColor="#653300" />
            <stop offset="1" stopColor="#301800" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Receivedapples() {
  return (
    <div className="relative size-full" data-name="receivedapples">
      <div className="absolute bg-[#c7cf5d] h-[215px] left-0 rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[333px]" />
      <Basket />
    </div>
  );
}