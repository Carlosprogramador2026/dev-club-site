import Reveal from "./Reveal"
import { asset } from "../utils/asset"

const MODELOS = [
  { nome: "ChatGPT (OpenAI)", arquivo: "openai.webp" },
  { nome: "Claude (Anthropic)", arquivo: "claude.webp" },
  { nome: "Gemini (Google)", arquivo: "gemini.webp" },
  { nome: "DeepSeek", arquivo: "deepseek.webp" },
  { nome: "Grok (xAI)", arquivo: "grok.webp" },
  { nome: "Meta AI", arquivo: "meta.webp" },
  { nome: "Perplexity", arquivo: "perplexity.webp" },
  { nome: "Mistral", arquivo: "mistral.webp" },
  { nome: "Qwen", arquivo: "qwen.webp" },
]

export default function IasIlimitadas() {
  return (
    <section id="ias-ilimitadas">
      <div className="container">
        <span className="section-tag">Inteligência artificial</span>
        <h2 className="section-title">
          Domine as{" "}
          <span className="gradient-text">Inteligências Artificiais</span>{" "}
          que estão transformando o mercado
        </h2>
        <p className="section-subtitle">
          Aprenda a utilizar as principais plataformas de Inteligência
          Artificial para acelerar seu aprendizado, desenvolver projetos com
          mais eficiência e aumentar sua produtividade como desenvolvedor.
        </p>

        <Reveal>
          <div className="ias-grid">
            {MODELOS.map((m) => (
              <div key={m.nome} className="ias-icone">
                <img src={asset(`ia-logos/${m.arquivo}`)} alt={m.nome} title={m.nome} />
              </div>
            ))}
          </div>
        </Reveal>

        <a
          href="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: 40 }}
        >
          Quero Aprender I.A.
        </a>
      </div>
    </section>
  )
}
