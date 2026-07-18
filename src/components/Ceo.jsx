import Reveal from "./Reveal"
import { FUNDADOR } from "../data/equipe"

const VIDEO_ID = "oZH9btcdYrE"

export default function Ceo() {
  return (
    <section id="ceo">
      <div className="container">
        <span className="section-tag">Quem lidera a dev club</span>
        <h2 className="section-title">
          Uma mensagem direto do{" "}
          <span className="gradient-text">fundador</span>
        </h2>

        <Reveal>
          <div className="ceo-row">
            <div className="ceo-video-frame">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title={`Apresentação — ${FUNDADOR.nome}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="ceo-texto">
              <strong>{FUNDADOR.nome}</strong>
              <span className="ceo-cargo">{FUNDADOR.cargo}</span>
              {FUNDADOR.bio.map((paragrafo) => (
                <p key={paragrafo.slice(0, 24)}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
