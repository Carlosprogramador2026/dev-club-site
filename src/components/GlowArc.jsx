import AmbientParticles from "./AmbientParticles"

const SPARKLE_COUNT = 10

export default function GlowArc() {
  return (
    <div className="glow-arc-stage" aria-hidden="true">
      <AmbientParticles />
      <div className="glow-arc" />
      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => (
        <span key={i} className={`glow-sparkle glow-sparkle--${i}`} />
      ))}
    </div>
  )
}
