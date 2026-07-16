import { Link } from "react-router-dom"
import { POSTS } from "../data/blog"
import Reveal from "../components/Reveal"

export default function BlogPage() {
  return (
    <section className="curso-page">
      <div className="container">
        <Link to="/#top" className="curso-back">
          ← Voltar pro início
        </Link>

        <span className="section-tag">Blog [exemplo]</span>
        <h1 className="section-title">Conteúdo da dev club</h1>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Posts de exemplo aguardando os títulos e resumos reais do blog.
        </p>

        <div className="blog-grid">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <div className="diferencial-card">
                <span className="curso-tag">{post.categoria}</span>
                <h3>{post.titulo}</h3>
                <p>{post.resumo}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <a
          href="https://www.devclub.com.br/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary curso-cta"
        >
          Ver blog completo
        </a>
      </div>
    </section>
  )
}
