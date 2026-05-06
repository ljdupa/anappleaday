import svgPaths from "./svg-hz19embly6";

export default function Rectangle() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-1.17%_-1.9%_-0.74%_-1.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 452.654 947.8">
          <g filter="url(#filter0_d_5_892)" id="Rectangle 81">
            <path d={svgPaths.pbe8be00} fill="var(--fill-0, #F3EFD4)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="947.8" id="filter0_d_5_892" width="452.654" x="-5.96046e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-2" />
              <feGaussianBlur stdDeviation="4.45" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_892" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_892" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}