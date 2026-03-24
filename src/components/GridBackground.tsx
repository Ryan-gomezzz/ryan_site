export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(39,39,42,0.45)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <path
          d="M 160 220 H 420 V 320 H 630"
          stroke="rgba(34,211,238,0.25)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M 980 290 H 740 V 430 H 540"
          stroke="rgba(245,158,11,0.18)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
}
