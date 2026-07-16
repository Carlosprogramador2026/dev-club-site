import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"

const BENEFICIOS = [
  {
    titulo: "Dicas práticas",
    desc: "Conteúdo direto sobre HTML, CSS, JavaScript, React e o que mais importa pra quem tá aprendendo.",
  },
  {
    titulo: "Novidades do mercado",
    desc: "O que tá mudando em tecnologia e como isso afeta quem busca a primeira vaga.",
  },
  {
    titulo: "Conteúdo da dev club",
    desc: "Avisos de novas trilhas, eventos e materiais antes de qualquer outro lugar.",
  },
]

export default function NewsletterPage() {
  return (
    <section className="curso-page">
      <div className="container">
        <Link to="/#top" className="curso-back">
          ← Voltar pro início
        </Link>

        <span className="section-tag">Newsletter</span>
        <h1 className="section-title">
          Fique por dentro do que rola em{" "}
          <span className="gradient-text">tecnologia</span>
        </h1>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Inscreva-se pra receber conteúdo da dev club direto no seu e-mail.
        </p>

        <div className="diferenciais-grid" style={{ marginBottom: 56 }}>
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 80}>
              <div className="diferencial-card">
                <h3>{b.titulo}</h3>
                <p>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <a
          href="https://rodolfomori.typeform.com/to/rQb1MBt5?typeform-source=devclub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary curso-cta"
        >
          Agendar minha call
        </a>
      </div>
    </section>
  )
}
