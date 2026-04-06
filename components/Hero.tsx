// ─── Hero Position ────────────────────────────────────────────────────────────
const BOTTOM_OFFSET_MOBILE  = '110px'
const BOTTOM_OFFSET_DESKTOP = '200px'

const IMAGE = '/bg2.png'         // image file in /public
const IMAGE_OPACITY   = 1.0     // 0.0–1.0
const OVERLAY_OPACITY = 0.55    // 0.0–1.0, higher = darker
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end px-8 lg:px-16 overflow-hidden"
      style={{ paddingBottom: BOTTOM_OFFSET_MOBILE }}
    >
      <style>{`@media (min-width: 1024px) { #top { padding-bottom: ${BOTTOM_OFFSET_DESKTOP} !important; } }`}</style>

      {/* Background image — scrolls with the page */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE})`, opacity: IMAGE_OPACITY }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a1a1a]" style={{ opacity: OVERLAY_OPACITY }} />
      {/* Gradient fade to body color at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#1a1a1a]" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col gap-8">
        <p className="text-neutral-300 text-lg leading-relaxed">
          We build the software, integrations, and automation that organizations actually need. Not the kind that requires a committee to explain.
        </p>
        <a href="#contact" className="self-start inline-block bg-white text-black text-sm font-semibold px-7 py-3 hover:bg-neutral-200 transition-colors tracking-wide">
          Start a Conversation
        </a>
      </div>
    </section>
  )
}
