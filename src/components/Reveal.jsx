import useReveal from "../hooks/useReveal"; // Ensure this path matches the file above

const DELAY_MAP = {
  1: "delay-1",
  2: "delay-2",
  3: "delay-3",
  4: "delay-4",
};

export default function Reveal({ children, delay = 0, style: s = {}, className = "" }) {
  const ref = useReveal();
  const delayClass = DELAY_MAP[delay] ?? "";

  return (
    <div
      ref={ref}
      className={`reveal-el ${delayClass} ${className}`.trim()}
      style={{ width: "100%", ...s }}
    >
      {children}
    </div>
  );
}