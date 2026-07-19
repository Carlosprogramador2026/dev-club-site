import Reveal from "./Reveal"
import GlowArc from "./GlowArc"

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias-section">
      <div className="container">
        <span className="section-tag tecnologias-tag">Base técnica</span>
        <h2 className="section-title">
          Fundamentos sólidos pra construir{" "}
          <span className="tecnologias-gradient">qualquer coisa</span>
        </h2>
        <p className="section-subtitle">
          A base que sustenta o resto da trilha — do primeiro projeto ao mais
          avançado.
        </p>
      </div>

      <Reveal>
        <GlowArc />
      </Reveal>
    </section>
  )
}
