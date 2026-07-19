import NotebookGlow from "./NotebookGlow"
import CodeBackdrop from "./CodeBackdrop"

export default function CtaRoxo() {
  return (
    <section id="cta-roxo" className="cta-roxo">
      <CodeBackdrop />
      <NotebookGlow />
      <div className="container cta-roxo-content">
        <a
          href="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-roxo-btn"
        >
          Quero começar
        </a>
      </div>
    </section>
  )
}
