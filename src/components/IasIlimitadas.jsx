import Reveal from "./Reveal"

const MODELOS = [
  { emoji: "🟨", cor: "linear-gradient(135deg, #f6c945, #f2a93b)" },
  { emoji: "🐋", cor: "linear-gradient(135deg, #5b7cf0, #3f5ac9)" },
  { emoji: "🌌", cor: "linear-gradient(135deg, #2a2a35, #14141c)" },
  { emoji: "✨", cor: "linear-gradient(135deg, #6ea8fe, #4f7fe0)" },
  { emoji: "🌀", cor: "linear-gradient(135deg, #f5c6a5, #d98cc9, #8b6de0)" },
  { emoji: "✴️", cor: "linear-gradient(135deg, #f2704f, #e0492f)" },
  { emoji: "🟦", cor: "linear-gradient(135deg, #2f8f8a, #1f6b68)" },
  { emoji: "♾️", cor: "linear-gradient(135deg, #4f8ff0, #8b5cf6)" },
  { emoji: "🟣", cor: "linear-gradient(135deg, #b34fe0, #7c2fce)" },
]

export default function IasIlimitadas() {
  return (
    <section id="ias-ilimitadas">
      <div className="container">
        <span className="section-tag">Inteligência artificial</span>
        <h2 className="section-title">
          Domine as{" "}
          <span className="gradient-text">Inteligências Artificiais</span>{" "}
          que estão transformando o mercado
        </h2>
        <p className="section-subtitle">
          Aprenda a utilizar as principais plataformas de Inteligência
          Artificial para acelerar seu aprendizado, desenvolver projetos com
          mais eficiência e aumentar sua produtividade como desenvolvedor.
        </p>

        <Reveal>
          <div className="ias-grid">
            {MODELOS.map((m, i) => (
              <div
                key={i}
                className="ias-icone"
                style={{ background: m.cor }}
                aria-hidden="true"
              >
                {m.emoji}
              </div>
            ))}
          </div>
        </Reveal>

        <a
          href="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: 40 }}
        >
          Quero Aprender I.A.
        </a>
      </div>
    </section>
  )
}
