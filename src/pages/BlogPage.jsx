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

        <span className="section-tag">Blog</span>
        <h1 className="section-title">Conteúdo da Dev Club</h1>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Conteúdo técnico produzido pela Dev Club, direto pra você aplicar no
          dia a dia.
        </p>

        <div className="blog-grid">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <div className="blog-card">
                <span className="curso-tag">{post.categoria}</span>
                <h3>{post.titulo}</h3>
                <p>{post.resumo}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <a
          href="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary curso-cta"
        >
          Quero conhecer devclub
        </a>
      </div>
    </section>
  )
}
