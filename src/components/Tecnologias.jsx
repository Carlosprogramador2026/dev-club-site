import Reveal from "./Reveal"

const STACK = [
  { nome: "HTML", cor: "#e34f26" },
  { nome: "CSS", cor: "#2965f1" },
  { nome: "JS", cor: "#f7df1e" },
]

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias-section">
      <div className="container">
        <span className="section-tag tecnologias-tag">Base técnica</span>
        <h2 className="section-title">
          Tudo começa com{" "}
          <span className="tecnologias-gradient">HTML, CSS e JavaScript</span>
        </h2>
        <p className="section-subtitle">
          As três tecnologias que sustentam o resto da trilha — do primeiro
          projeto ao mais avançado.
        </p>

        <Reveal>
          <div className="tecnologias-stage">
            <div className="tecnologias-orb" aria-hidden="true" />
            <div className="tecnologias-icones">
              {STACK.map((t) => (
                <div key={t.nome} className="tecnologias-icone">
                  <span
                    className="tecnologias-icone-badge"
                    style={{ color: t.cor, borderColor: t.cor }}
                  >
                    {t.nome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
