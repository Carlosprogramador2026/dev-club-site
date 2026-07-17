import Reveal from "./Reveal"
import { asset } from "../utils/asset"

export default function EmpresasAlunos() {
  return (
    <section id="empresas-alunos">
      <div className="container">
        <span className="section-tag">Onde nossos alunos estão</span>
        <h2 className="section-title">
          Empresas que já contrataram{" "}
          <span className="gradient-text">alunos da dev club</span>
        </h2>
        <p className="section-subtitle">
          Indicação real pro mercado de trabalho — alunos que passaram pela
          dev club e conquistaram vaga nessas empresas.
        </p>

        <Reveal>
          <div className="empresas-video-frame">
            <video
              src={asset("video-empresas-alunos.mp4")}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
