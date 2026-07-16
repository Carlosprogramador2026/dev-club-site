import {
  DIFERENCIAIS,
  DIFERENCIAIS_TITULO,
  DIFERENCIAIS_SUBTITULO,
} from "../data/diferenciais"
import Reveal from "./Reveal"

export default function Diferenciais() {
  return (
    <section id="diferenciais">
      <div className="container">
        <span className="section-tag">Diferenciais [exemplo]</span>
        <h2 className="section-title">{DIFERENCIAIS_TITULO}</h2>
        <p className="section-subtitle">{DIFERENCIAIS_SUBTITULO}</p>

        <div className="diferenciais-grid">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 80}>
              <div className="diferencial-card">
                <h3>{d.titulo}</h3>
                <p>{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
