import { Link } from "react-router-dom"
import {
  MBA_MENTORES,
  MBA_INVESTIMENTO,
  MBA_BENEFICIOS,
  MBA_TRIMESTRES,
  MBA_PUBLICO,
  MBA_FAQ,
} from "../data/mba"
import FaqAccordion from "../components/FaqAccordion"
import MecBadge from "../components/MecBadge"

const TYPEFORM_URL =
  "https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"

export default function MbaPage() {
  return (
    <section className="curso-page mba-page">
      <div className="container">
        <Link to="/#top" className="curso-back">
          ← Voltar pro início
        </Link>

        <span className="section-tag">MBA</span>
        <h1 className="mba-title">
          MBA em Inteligência Artificial
          <span className="gradient-text"> + Certificações Internacionais</span>
        </h1>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Pós-graduação reconhecida pelo MEC que une diploma, certificações
          internacionais e acesso às principais ferramentas de IA do
          mercado — ministrada por Rodolfo Mori, embaixador da OpenAI no
          Brasil, e outros profissionais da área.
        </p>

        <MecBadge />

        <h2 className="curso-section-title">Quem vai te ensinar</h2>
        <div className="mba-mentores">
          {MBA_MENTORES.map((m) => (
            <div key={m.nome} className="mba-mentor-card">
              {m.foto ? (
                <img src={m.foto} alt={m.nome} className="mba-mentor-foto" />
              ) : (
                <div className="mba-mentor-foto mba-mentor-avatar" aria-hidden="true" />
              )}
              <strong>{m.nome}</strong>
              <span>{m.cargo}</span>
            </div>
          ))}
        </div>

        <div className="mba-beneficios">
          {MBA_BENEFICIOS.map((b) => (
            <div key={b.titulo} className="diferencial-card">
              <h3>{b.titulo}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="curso-section-title">Estrutura do curso (18 meses)</h2>
        <div className="curso-modulos-grid">
          {MBA_TRIMESTRES.map((t, i) => (
            <div key={t.titulo} className="curso-modulo-card">
              <span className="curso-modulo-numero">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong style={{ display: "block", marginBottom: 4 }}>
                  {t.titulo}
                </strong>
                <p style={{ margin: 0 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="curso-section-title">Pra quem é esse MBA</h2>
        <div className="curso-publico-grid">
          {MBA_PUBLICO.map((p) => (
            <div key={p.titulo} className="curso-publico-card">
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="curso-section-title">{MBA_INVESTIMENTO.titulo}</h2>
        <p className="section-subtitle" style={{ marginBottom: 24 }}>
          {MBA_INVESTIMENTO.subtitulo}
        </p>
        <div className="mba-investimento">
          <div className="mba-investimento-beneficios">
            {MBA_INVESTIMENTO.beneficios.map((b) => (
              <p key={b}>
                <span aria-hidden="true">✓</span> {b}
              </p>
            ))}
          </div>
          <div className="mba-investimento-preco">
            <span className="mba-investimento-bolsas">
              {MBA_INVESTIMENTO.bolsas}
            </span>
            <p className="mba-investimento-de">
              De {MBA_INVESTIMENTO.precoDe} por apenas:
            </p>
            <strong className="mba-investimento-parcela">
              {MBA_INVESTIMENTO.parcelas}
            </strong>
            <span className="mba-investimento-avista">
              {MBA_INVESTIMENTO.avista}
            </span>
            <span className="mba-investimento-pagamento">
              {MBA_INVESTIMENTO.pagamento}
            </span>
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Quero garantir minha pré-matrícula
            </a>
            <span className="mba-investimento-seguro">🔒 Compra segura</span>
          </div>
        </div>

        <h2 className="curso-section-title">Perguntas frequentes</h2>
        <FaqAccordion items={MBA_FAQ} />

        <a
          href={TYPEFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary curso-cta"
        >
          Garantir minha pré vaga
        </a>
      </div>
    </section>
  )
}
