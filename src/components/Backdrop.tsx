export default function Backdrop() {
  return (
    <div className="grid-backdrop">
      <div
        className="glow-blob h-72 w-72 bg-red top-[-4rem] left-[-4rem]"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="glow-blob h-80 w-80 bg-blue bottom-[-6rem] right-[-4rem]"
        style={{ animationDelay: "-6s" }}
      />
      <div className="scanline" />
    </div>
  );
}
