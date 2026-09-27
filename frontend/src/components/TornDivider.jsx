// Discreet horizontal torn line — suggests one sheet overlapping another.
// Kept subtle: same paper tone, only a soft shadow hints the tear.
export default function TornDivider({ flip = false }) {
  return (
    <div className="relative w-full select-none" aria-hidden="true" style={{ height: 26, transform: flip ? "scaleY(-1)" : "none" }}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 26"
        width="100%"
        height="26"
        style={{ display: "block", filter: "drop-shadow(0 -3px 4px rgba(23,20,17,0.10))" }}
      >
        <path
          d="M0,19 L48,13 L96,18 L150,11 L214,17 L268,10 L330,18 L392,12 L452,19 L516,13 L578,18 L642,11 L706,17 L764,12 L828,18 L890,13 L952,19 L1014,12 L1078,17 L1136,11 L1200,17 L1200,26 L0,26 Z"
          fill="var(--paper)"
        />
      </svg>
    </div>
  );
}
