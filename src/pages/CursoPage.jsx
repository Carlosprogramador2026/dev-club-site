import { useParams, Link, Navigate } from "react-router-dom"
import { getCursoBySlug, PUBLICO_ALVO, FAQ_CURSO } from "../data/cursos"
import FaqAccordion from "../components/FaqAccordion"

export default function CursoPage() {
  const { slug } = useParams()
  const curso = getCursoBySlug(slug)

  if (!curso) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="curso-page">
      <div className="container">
        <Link to="/#cursos" className="curso-back">
          ← Voltar pros cursos
        </Link>

        <span className="section-tag">{curso.tag}</span>
        <h1 className="section-title">{curso.title}</h1>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          {curso.intro}
        </p>

        {curso.videoId ? (
          <div className="curso-video curso-video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${curso.videoId}`}
              title={`Vídeo de apresentação — ${curso.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          curso.temVideo && (
            <div className="curso-video">
              <div className="curso-video-play">▶</div>
              <span>Vídeo de apresentação em breve</span>
            </div>
          )
        )}

        <h2 className="curso-section-title">Módulos do curso</h2>
        <div className="curso-modulos-grid">
          {curso.topicos.map((topico, i) => (
            <div key={topico} className="curso-modulo-card">
              <span className="curso-modulo-numero">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{topico}</p>
            </div>
          ))}
        </div>

        <h2 className="curso-section-title">Pra quem é essa trilha</h2>
        <div className="curso-publico-grid">
          {PUBLICO_ALVO.map((p) => (
            <div key={p.titulo} className="curso-publico-card">
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="curso-section-title">Instrutor</h2>
        <div className="curso-instrutor-card">
          <div className="curso-instrutor-avatar" aria-hidden="true" />
          <div>
            <strong>Instrutor a definir</strong>
            <p>
              Essa trilha ainda não tem instrutor confirmado publicamente —
              assim que a dev club definir, entra aqui foto, nome e bio.
            </p>
          </div>
        </div>

        <h2 className="curso-section-title">Perguntas frequentes</h2>
        <FaqAccordion items={FAQ_CURSO} />

        <Link to="/#cta" className="btn btn-primary curso-cta">
          Quero fazer esse curso
        </Link>
      </div>
    </section>
  )
}
