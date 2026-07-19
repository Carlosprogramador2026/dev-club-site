import { Link } from "react-router-dom"
import { CURSOS } from "../data/cursos"

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
      </div>

      <div className="cursos-marquee">
        <div className="cursos-marquee-track">
          {[...CURSOS, ...CURSOS].map((curso, i) => (
            <Link
              key={`${curso.slug}-${i}`}
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
