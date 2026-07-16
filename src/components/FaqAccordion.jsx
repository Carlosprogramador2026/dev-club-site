import { useState } from "react"

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.pergunta} className="faq-item">
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.pergunta}
              <span className="faq-icon">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="faq-answer">{item.resposta}</p>}
          </div>
        )
      })}
    </div>
  )
}
