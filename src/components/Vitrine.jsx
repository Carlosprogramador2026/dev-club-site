import Reveal from "./Reveal"

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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
