interface BeginScreenProps {
  onGetStarted: () => void;
}

export default function BeginScreen({ onGetStarted }: BeginScreenProps) {
  return (
    <div
      className="relative h-[852px] w-[393px] overflow-hidden"
      style={{
        backgroundImage: "url('/figma-screens/iPhone16Begin.svg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        type="button"
        onClick={onGetStarted}
        className="absolute left-[71px] top-[756px] w-[250px] h-[52px] bg-transparent border-0 cursor-pointer z-[9999]"
      />
    </div>
  );
}