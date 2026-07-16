import { Link } from "react-router-dom"
import { CURSOS } from "../data/cursos"
import Reveal from "./Reveal"

export default function Cursos() {
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

        <div className="cursos-grid">
          {CURSOS.map((curso, i) => (
            <Reveal key={curso.slug} delay={i * 80}>
              <Link to={`/cursos/${curso.slug}`} className="curso-card">
                <span className="curso-tag">{curso.tag}</span>
                <h3>{curso.title}</h3>
                <p>{curso.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
