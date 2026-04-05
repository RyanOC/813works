// ─── Hero Position ────────────────────────────────────────────────────────────
const BOTTOM_OFFSET_MOBILE  = '220px'
const BOTTOM_OFFSET_DESKTOP = '160px'
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-8 lg:px-16"
      style={{ paddingBottom: BOTTOM_OFFSET_MOBILE }}
    >
      <style>{`@media (min-width: 1024px) { #hero { padding-bottom: ${BOTTOM_OFFSET_DESKTOP} !important; } }`}</style>
      <div className="max-w-2xl w-full flex flex-col gap-8">
        <p className="text-neutral-400 text-lg leading-relaxed">
          We build the software, integrations, and automation that organizations actually need. Not the kind that requires a committee to explain.
        </p>
        <a href="#contact" className="self-start inline-block bg-white text-black text-sm font-semibold px-7 py-3 hover:bg-neutral-200 transition-colors tracking-wide">
          Start a Conversation
        </a>
      </div>
    </section>
  )
}
