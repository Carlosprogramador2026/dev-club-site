import { useParams, Link, Navigate } from "react-router-dom"
import { getDepoimentoBySlug } from "../data/depoimentos"

export default function DepoimentoPage() {
  const { slug } = useParams()
  const depoimento = getDepoimentoBySlug(slug)

  if (!depoimento) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="curso-page">
      <div className="container">
        <Link to="/#depoimentos" className="curso-back">
          ← Voltar pros depoimentos
        </Link>

        <div className="depoimento-header">
          {depoimento.foto ? (
            <img
              src={depoimento.foto}
              alt={depoimento.nome}
              className="depoimento-foto-grande"
            />
          ) : (
            <div className="depoimento-avatar depoimento-avatar-grande" aria-hidden="true" />
          )}
          <div>
            <span className="section-tag">Antes: {depoimento.antes}</span>
            <h1 className="section-title">{depoimento.nome}</h1>
          </div>
        </div>

        <p className="section-subtitle">&ldquo;{depoimento.texto}&rdquo;</p>
        <p className="depoimento-data">{depoimento.data}</p>

        {depoimento.videoId ? (
          <div className="curso-video curso-video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${depoimento.videoId}`}
              title={`Depoimento — ${depoimento.nome}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : depoimento.videoSrc ? (
          <div className="curso-video curso-video-embed">
            <video src={depoimento.videoSrc} controls playsInline />
          </div>
        ) : (
          <div className="curso-video">
            <div className="curso-video-play">▶</div>
            <span>Vídeo do depoimento em breve</span>
          </div>
        )}

        <Link to="/#cta" className="btn btn-primary curso-cta">
          Quero começar minha trilha também
        </Link>
      </div>
    </section>
  )
}
