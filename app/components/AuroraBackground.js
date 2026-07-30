/**
 * Fixed, non-interactive page backdrop.
 * Layers (bottom → top):
 *   1. warm sand base gradient
 *   2. four slowly drifting colour blobs (the "aurora")
 *   3. faint grid so large empty areas still have texture
 *   4. top spotlight + bottom vignette
 *   5. film grain
 * Render once in app/layout.jsx — every section then sits on top of it.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-sand"
    >
      {/* 2 — aurora blobs */}
      <div className="absolute -left-[15%] -top-[20%] h-[70vmax] w-[70vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle_at_center,rgba(3,61,74,0.30),transparent_65%)] blur-[60px]" />
      <div className="absolute -right-[18%] top-[-10%] h-[60vmax] w-[60vmax] animate-drift-med rounded-full bg-[radial-gradient(circle_at_center,rgba(240,162,75,0.28),transparent_65%)] blur-[70px]" />
      <div className="absolute -left-[10%] top-[42%] h-[55vmax] w-[55vmax] animate-drift-fast rounded-full bg-[radial-gradient(circle_at_center,rgba(232,111,91,0.20),transparent_65%)] blur-[80px]" />
      <div className="absolute -right-[12%] bottom-[-15%] h-[65vmax] w-[65vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle_at_center,rgba(46,140,140,0.26),transparent_65%)] blur-[70px]" />

      {/* 3 — hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(3,61,74,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(3,61,74,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 100% 60% at 50% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 60% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />

      {/* 4 — light shaping */}
      <div className="absolute inset-x-0 top-0 h-[45vh] bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,rgba(255,255,255,0.75),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-[#E8DFD1]/70 to-transparent" />

      {/* 5 — grain */}
      <div className="absolute inset-0 opacity-[0.22] mix-blend-soft-light [background-image:url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
    </div>
  );
}
