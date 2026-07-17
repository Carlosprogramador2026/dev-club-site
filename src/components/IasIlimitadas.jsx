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
        <span className="section-tag">IAs ilimitadas</span>
        <h2 className="section-title">
          Modelos <span className="gradient-text">realmente ilimitados</span>,
          <br />
          sem créditos, sem travas
        </h2>
        <p className="section-subtitle">
          Na dev club, você tem acesso a todos os principais modelos de IA de
          forma ilimitada — sem precisar comprar créditos, e seu chat nunca
          trava no meio da conversa.
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
      </div>
    </section>
  )
}
