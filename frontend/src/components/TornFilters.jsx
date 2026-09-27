// Global SVG filter definitions for the organic torn-paper edges.
// feTurbulence + feDisplacementMap produce irregular, hand-torn edges.
// Applied only to the solid paper BACKGROUND layer, so text stays crisp.

export default function TornFilters() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* Desktop / tablet — deeper, more dramatic tears */}
        <filter id="torn-edge" x="-6%" y="-3%" width="112%" height="106%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="4" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="26" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Mobile — shallower tears so text is never clipped */}
        <filter id="torn-edge-sm" x="-4%" y="-2%" width="108%" height="104%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.016 0.03" numOctaves="3" seed="4" result="noise2" />
          <feDisplacementMap in="SourceGraphic" in2="noise2" scale="9" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
