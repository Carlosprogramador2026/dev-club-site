import Reveal from "./Reveal"
import { asset } from "../utils/asset"

const MODELOS = Array.from({ length: 9 }, (_, i) => asset(`ia-logos/ia-${i}.png`))

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
            {MODELOS.map((src, i) => (
              <div key={i} className="ias-icone">
                <img src={src} alt="" aria-hidden="true" />
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
