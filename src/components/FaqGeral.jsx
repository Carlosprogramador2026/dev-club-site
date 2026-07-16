import { FAQ_GERAL } from "../data/faqGeral"
import FaqAccordion from "./FaqAccordion"

export default function FaqGeral() {
  return (
    <section id="faq">
      <div className="container">
        <span className="section-tag">Perguntas frequentes</span>
        <h2 className="section-title">Dúvidas sobre a dev club</h2>
        <p className="section-subtitle">
          O que a maioria pergunta antes de começar.
        </p>

        <FaqAccordion items={FAQ_GERAL} />
      </div>
    </section>
  )
}
