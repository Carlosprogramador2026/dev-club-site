import { Link } from "react-router-dom"

export default function EmBreve({ titulo }) {
  return (
    <section className="curso-page">
      <div className="container em-breve">
        <Link to="/#top" className="curso-back">
          ← Voltar pro início
        </Link>

        <span className="section-tag">Em breve</span>
        <h1 className="section-title">{titulo}</h1>
        <p className="section-subtitle">
          Essa área ainda está em construção — em breve tem conteúdo aqui.
        </p>

        <Link to="/#cursos" className="btn btn-primary">
          Ver cursos disponíveis
        </Link>
      </div>
    </section>
  )
}
