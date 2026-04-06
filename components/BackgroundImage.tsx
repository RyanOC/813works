// ─── Background Image Settings ───────────────────────────────────────────────
const IMAGE = '/bg2.png'       // filename in /public — swap to whatever you drop in

const IMAGE_OPACITY   = 1.0  // 0.0 (invisible) → 1.0 (full)
const OVERLAY_OPACITY = 0.7  // flat dark overlay. Try 0.3–0.7
// ─────────────────────────────────────────────────────────────────────────────

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Image layer */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGE})`,
          backgroundSize: '60%',  // increase % to zoom in, decrease to zoom out
          opacity: IMAGE_OPACITY,
        }}
      />
      {/* Flat dark overlay */}
      <div
        className="absolute inset-0 bg-[#1a1a1a]"
        style={{ opacity: OVERLAY_OPACITY }}
      />
      {/* Gradient — transparent at top, solid dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </div>
  )
}
