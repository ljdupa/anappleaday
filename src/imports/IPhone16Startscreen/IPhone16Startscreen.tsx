interface SignInButtonProps {
  onClick: () => void;
}

function SignInButton({ onClick }: SignInButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[44px] top-[470px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-80"
      data-name="Sign in button"
    >
      <div className="absolute bg-[#f1eed9] h-[48px] left-0 rounded-[12px] top-0 w-[306px]" />
      <p className="-translate-x-1/2 absolute font-[‘Cabin_Condensed:Regular’,sans-serif] leading-[normal] left-[153px] not-italic text-[#394648] text-[22px] text-center top-[9px] whitespace-nowrap pointer-events-none">Sign in</p>
    </button>
  );
}

interface IPhone16StarScreenProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export default function IPhone16Startscreen({ onSignIn, onSignUp }: IPhone16StarScreenProps) {
  return (
    <div className="bg-[#c61919] relative size-full" data-name="iPhone 16 - startscreen">
      <div className="-translate-x-1/2 absolute font-[‘Cabin_Condensed:Bold’,sans-serif] h-[171px] leading-[0] left-[calc(50%-0.5px)] not-italic text-[#f1eed9] text-[48px] text-center top-[329px] w-[306px]">
        <p className="leading-[normal] mb-0">An Apple</p>
        <p className="leading-[normal]">A Day</p>
      </div>
      <div className="-translate-x-1/2 absolute left-1/2 top-[549px] font-[‘Cabin_Condensed:Regular’,sans-serif] text-[15px] leading-[normal] whitespace-nowrap">
        <span className="text-[#d9d9d9]">Don’t have an account? </span>
        <button
          onClick={onSignUp}
          className="text-white underline cursor-pointer hover:opacity-80 transition-opacity"
        >
          Sign up
        </button>
      </div>
      <SignInButton onClick={onSignIn} />
    </div>
  );
}