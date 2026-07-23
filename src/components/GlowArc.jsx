import { lazy, Suspense, useEffect, useRef, useState } from "react"
import AmbientParticles from "./AmbientParticles"

// Carregado sob demanda — o Globe traz o three.js junto (~500kb), nao vale
// a pena empurrar isso no bundle inicial do site so' por causa de uma
// secao decorativa.
const Globe = lazy(() => import("./Globe"))

const SPARKLE_COUNT = 10

const REDUCED_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

export default function GlowArc() {
  const stageRef = useRef(null)
  // So' monta o globo (chunk + fetch de geojson + WebGL) quando a secao
  // realmente estiver perto da tela — no carregamento inicial da pagina
  // isso fica parado, sem competir com o resto do site por CPU/rede.
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          io.disconnect()
        }
      },
      { rootMargin: "200px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="glow-arc-stage" ref={stageRef} aria-hidden="true">
      <AmbientParticles />
      <div className="glow-arc-globe">
        {visivel && (
          <Suspense fallback={null}>
            <Globe
              oceanColor="#050307"
              outlineColor="#00ffa3"
              graticuleColor="#1c3a2c"
              dots={{ color: "#00ffa3", size: 4, density: 6, allDots: false }}
              scale={9}
              detail={4}
              speed={REDUCED_MOTION ? 0 : 2}
              stopOnHover
              showGrid
              showOutline
            />
          </Suspense>
        )}
      </div>
      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => (
        <span key={i} className={`glow-sparkle glow-sparkle--${i}`} />
      ))}
    </div>
  )
}
