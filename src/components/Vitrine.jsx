import { Link } from "react-router-dom"
import Reveal from "./Reveal"
import { FREELA_DEPOIMENTOS } from "../data/depoimentos"

export default function Vitrine() {
  return (
    <section id="vitrine">
      <div className="container">
        <span className="section-tag">Resultado real</span>
        <h2 className="section-title">
          O que acontece quando você{" "}
          <span className="gradient-text">entra na trilha</span>
        </h2>

        <Reveal>
          <div className="vitrine-stage">
            <div className="vitrine-card vitrine-card--1">
              <span className="vitrine-card-label">Formações</span>
              <strong>8 trilhas</strong>
              <span>de tecnologia completas</span>
            </div>

            <div className="vitrine-card vitrine-card--2">
              <span className="vitrine-card-label">Comunidade</span>
              <strong>25 mil+</strong>
              <span>alunos e alunas no Brasil e no mundo</span>
            </div>

            <div className="vitrine-card vitrine-card--3">
              <span className="vitrine-card-label">Depoimento</span>
              <p>
                &ldquo;A dev club me ajudou a montar currículo, LinkedIn e me
                preparar de verdade pra entrevista.&rdquo;
              </p>
            </div>

            <div className="vitrine-card vitrine-card--4">
              <span className="vitrine-card-label">Foco</span>
              <strong>100%</strong>
              <span>no primeiro emprego em tech</span>
            </div>

            <div className="vitrine-card vitrine-card--5">
              <span className="vitrine-card-label">Freelas</span>
              <strong>R$ 100 mil</strong>
              <span>
                faturados por alunos em 1 mês com freelas de sistemas, sites,
                front-end e back-end
              </span>
            </div>
          </div>
        </Reveal>

        <h3 className="vitrine-freelas-titulo">
          Quem já ganhou dinheiro com freelas na dev club
        </h3>

        <div className="depoimentos-grid vitrine-freelas-grid">
          {FREELA_DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.slug} delay={i * 80}>
              <Link
                to={`/depoimentos/${d.slug}`}
                className="depoimento-card depoimento-card--video"
              >
                {d.videoSrc ? (
                  <div className="depoimento-card-video-wrap">
                    <video
                      src={d.videoSrc}
                      poster={d.foto || undefined}
                      className="depoimento-card-video"
                      muted
                      playsInline
                      preload="none"
                    />
                    <span className="depoimento-card-play" aria-hidden="true">
                      ▶
                    </span>
                  </div>
                ) : d.foto ? (
                  <img
                    src={d.foto}
                    alt={d.nome}
                    className="depoimento-card-video"
                  />
                ) : (
                  <div className="depoimento-card-video depoimento-avatar" aria-hidden="true" />
                )}
                <div className="depoimento-card-body">
                  <strong>{d.nome}</strong>
                  <span>{d.antes}</span>
                  <p>&ldquo;{d.texto}&rdquo;</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
