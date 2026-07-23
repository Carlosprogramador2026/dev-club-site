import ParticleField from "./ParticleField"
import Counter from "./Counter"
import BlackHole from "./BlackHole"
import { asset } from "../utils/asset"

const ALUNOS_FOTOS = [
  { src: asset("aristoteles-aguiar.png"), alt: "Aristoteles Aguiar" },
  { src: asset("raphael-bonadia.png"), alt: "Raphael Bonadia de Oliveira" },
  { src: asset("vanessa-lebrao.png"), alt: "Vanessa Lebrão Quintilhano" },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg-overlay" />
      <ParticleField />

      <div className="hero-blackhole" aria-hidden="true">
        <BlackHole
          colors={["#00ffa3", "#39ff88", "#1e88ff"]}
          particleCount={350}
          particleSize={3}
          outerRadius={85}
          orbitSpeed={3}
          trail={45}
          tilt={35}
          tiltSideway={140}
          style={{ background: "transparent" }}
        />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            Aprenda a programar e conquiste
            <br />
            <span className="gradient-text">sua primeira vaga em tech</span>
          </h1>

          <p className="hero-subtitle">
            A Dev Club forma devs júnior do zero ao primeiro emprego, com
            cursos práticos de front-end, back-end, cloud, mobile e IA — e
            uma equipe de verdade acompanhando cada etapa.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/5516990482444"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Quero começar
            </a>
            <a href="#cursos" className="btn btn-ghost">
              Ver cursos
            </a>
          </div>

          <div className="hero-alunos">
            <div className="hero-alunos-fotos">
              {ALUNOS_FOTOS.map((aluno) => (
                <img key={aluno.alt} src={aluno.src} alt={aluno.alt} />
              ))}
              <span className="hero-alunos-mais">+</span>
            </div>
            <p>
              +25 mil alunos e alunas no Brasil e no mundo.
              <br />
              Junte-se a eles.
            </p>
          </div>

          <div className="hero-stats">
            <div>
              <Counter target={25} suffix=" mil+" />
              <span>alunos e alunas no Brasil e no mundo</span>
            </div>
            <div>
              <Counter target={100} suffix="+" />
              <span>profissionais diretos e indiretos</span>
            </div>
            <div>
              <Counter target={8} />
              <span>trilhas de tecnologia</span>
            </div>
            <div>
              <Counter target={100} suffix="%" />
              <span>foco no primeiro emprego</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
