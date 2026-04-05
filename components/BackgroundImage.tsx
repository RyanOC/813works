// ─── Background Image Settings ───────────────────────────────────────────────
const IMAGE = '/bg2.png'       // filename in /public — swap to whatever you drop in

const IMAGE_OPACITY  = 1.0  // 0.0 (invisible) → 1.0 (full). Try 0.05–0.20
const OVERLAY_OPACITY = 0.91 // dark overlay on top of image. Try 0.4–0.8
// ─────────────────────────────────────────────────────────────────────────────

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* The image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGE})`,
          opacity: IMAGE_OPACITY,
        }}
      />
      {/* Dark overlay to keep contrast */}
      <div
        className="absolute inset-0 bg-[#1a1a1a]"
        style={{ opacity: OVERLAY_OPACITY }}
      />
    </div>
  )
}
