import AmbientParticles from "./AmbientParticles"
import NotebookShowcase from "./NotebookShowcase"

const SPARKLE_COUNT = 10

export default function NotebookGlow() {
  return (
    <div className="notebook-stage" aria-hidden="true">
      <AmbientParticles />

      <div className="notebook">
        <div className="notebook-screen">
          <span className="notebook-cam" />
          <NotebookShowcase />
        </div>
        <div className="notebook-base">
          <span className="notebook-trackpad" />
        </div>
      </div>

      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => (
        <span key={i} className={`glow-sparkle glow-sparkle--${i}`} />
      ))}
    </div>
  )
}
