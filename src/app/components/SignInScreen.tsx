import { useState } from "react";

interface SignInScreenProps {
  onSignIn: (email: string) => void;
  onSignUp: () => void;
}

export default function SignInScreen({ onSignIn, onSignUp }: SignInScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cabin = { fontFamily: "Cabin Condensed, sans-serif" };
  const cabinBold = { fontFamily: "Cabin Condensed, sans-serif", fontWeight: 700 };

  return (
    <div className="relative h-[852px] w-[393px] overflow-hidden" style={cabin}>
      <div
        className="absolute top-0 left-0 w-full h-[200px]"
        style={{ background: "linear-gradient(135deg, #C61919 0%, #600C0C 100%)" }}
      />
      <div
        className="absolute top-[160px] left-0 w-full bg-[#F1EED9]"
        style={{ borderTopLeftRadius: "38px", borderTopRightRadius: "38px", bottom: 0 }}
      >
        <div className="flex flex-col items-center pt-[48px] pb-[40px]">
          <p style={{ ...cabinBold, fontSize: "48px", color: "#D31E1E" }}>Sign In</p>
        </div>

        <div className="mx-[27px] mb-[28px] relative">
          <label style={{ ...cabinBold, fontSize: "13px", color: "#394648", background: "#F1EED9" }}
            className="absolute -top-[9px] left-[14px] px-[4px] z-10">
            Email
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[52px] rounded-[13px] border border-[#39464852] bg-transparent px-[16px] text-[#394648] text-[15px] outline-none"
            placeholder="Enter Email"
            style={cabin} />
        </div>

        <div className="mx-[27px] mb-[28px] relative">
          <label style={{ ...cabinBold, fontSize: "13px", color: "#394648", background: "#F1EED9" }}
            className="absolute -top-[9px] left-[14px] px-[4px] z-10">
            Password
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[52px] rounded-[13px] border border-[#39464852] bg-transparent px-[16px] text-[#394648] text-[15px] outline-none"
            placeholder="Enter Password"
            style={cabin} />
        </div>

        <div className="mx-[27px] mb-[16px]">
          <button
            onClick={() => onSignIn(email)}
            className="w-full h-[52px] rounded-[13px] text-white text-[20px] cursor-pointer"
            style={{ ...cabinBold, background: "linear-gradient(135deg, #C61919 0%, #C61919 100%)" }}>
            Sign In
          </button>
        </div>

        <div className="flex justify-center">
          <p style={{ ...cabin, color: "#394648", fontSize: "15px" }}>
            Don't have an account?{" "}
<button onClick={onSignUp}
  style={{ ...cabinBold, color: "#a9b336", textDecoration: "underline" }}>
  Sign Up
</button>
          </p>
        </div>
      </div>
    </div>
  );
}