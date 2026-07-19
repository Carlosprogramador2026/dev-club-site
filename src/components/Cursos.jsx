import { useRef } from "react"
import { Link } from "react-router-dom"
import { CURSOS } from "../data/cursos"

export default function Cursos() {
  const stageRef = useRef(null)
  const trackRef = useRef(null)

  function handleMove(e) {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return
    const maxScroll = track.scrollWidth - stage.clientWidth
    if (maxScroll <= 0) return
    const rect = stage.getBoundingClientRect()
    const percent = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    track.style.transition = "transform 0.1s linear"
    track.style.transform = `translateX(-${percent * maxScroll}px)`
  }

  function handleLeave() {
    const track = trackRef.current
    if (!track) return
    track.style.transition = "transform 0.5s ease"
    track.style.transform = "translateX(0)"
  }

  return (
    <section id="cursos">
      <div className="container">
        <span className="section-tag">O que você aprende</span>
        <h2 className="section-title">
          Trilha completa pra sair do zero e chegar contratável
        </h2>
        <p className="section-subtitle">
          Cada curso foi desenhado pra resolver o gargalo real de quem quer
          entrar em tech: prática, portfólio e direção.
        </p>
      </div>

      <div
        className="cursos-marquee"
        ref={stageRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="cursos-marquee-track" ref={trackRef}>
          {CURSOS.map((curso) => (
            <Link
              key={curso.slug}
              to={`/cursos/${curso.slug}`}
              className="curso-card"
            >
              <span className="curso-tag">{curso.tag}</span>
              <h3>{curso.title}</h3>
              <p>{curso.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
