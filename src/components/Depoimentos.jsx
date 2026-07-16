import { Link } from "react-router-dom"
import { DEPOIMENTOS } from "../data/depoimentos"
import Reveal from "./Reveal"

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="container">
        <span className="section-tag">Depoimentos</span>
        <h2 className="section-title">Quem passou pela dev club</h2>
        <p className="section-subtitle">
          Relatos reais de quem trocou de carreira e conseguiu a primeira
          vaga como programador.
        </p>

        <div className="depoimentos-grid">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.slug} delay={i * 80}>
              <Link to={`/depoimentos/${d.slug}`} className="depoimento-card">
                <div className="depoimento-topo">
                  {d.foto ? (
                    <img src={d.foto} alt={d.nome} className="depoimento-foto" />
                  ) : (
                    <div className="depoimento-avatar" aria-hidden="true" />
                  )}
                  <div>
                    <strong>{d.nome}</strong>
                    <span>Antes: {d.antes}</span>
                  </div>
                </div>
                <p>&ldquo;{d.texto}&rdquo;</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
