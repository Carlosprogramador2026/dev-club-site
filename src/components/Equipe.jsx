import { EQUIPE, FUNDADOR } from "../data/equipe"
import Reveal from "./Reveal"

export default function Equipe() {
  return (
    <section id="equipe">
      <div className="container">
        <span className="section-tag">Fundador</span>

        <Reveal className="fundador-card">
          <img
            className="fundador-foto"
            src={FUNDADOR.foto}
            alt={FUNDADOR.nome}
          />
          <div className="fundador-texto">
            <strong>{FUNDADOR.nome}</strong>
            <span className="fundador-cargo">{FUNDADOR.cargo}</span>
            {FUNDADOR.bio.map((paragrafo) => (
              <p key={paragrafo.slice(0, 20)}>{paragrafo}</p>
            ))}
          </div>
        </Reveal>

        <div className="equipe-resto-header">
          <span className="section-tag">Equipe</span>
          <h2 className="section-title">Quem tá por trás dos cursos</h2>
          <p className="section-subtitle">
            Mais de 100 profissionais, diretos e indiretos, acompanhando
            cada aluno.
          </p>
        </div>

        <div className="equipe-grid">
          {EQUIPE.map((pessoa, i) => (
            <Reveal key={pessoa.nome + i} delay={i * 80}>
              <div className="equipe-card">
                {pessoa.foto ? (
                  <img
                    src={pessoa.foto}
                    alt={pessoa.nome}
                    className="equipe-foto"
                  />
                ) : (
                  <div className="equipe-avatar" aria-hidden="true" />
                )}
                <strong>{pessoa.nome}</strong>
                <span>{pessoa.cargo}</span>
                {pessoa.bio && <p className="equipe-bio">{pessoa.bio}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
