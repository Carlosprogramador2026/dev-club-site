import ParticleField from "./ParticleField"
import Counter from "./Counter"

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg-overlay" />
      <ParticleField />

      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            Aprenda a programar e conquiste
            <br />
            <span className="gradient-text">sua primeira vaga em tech</span>
          </h1>

          <p className="hero-subtitle">
            A dev club forma devs júnior do zero ao primeiro emprego, com
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
