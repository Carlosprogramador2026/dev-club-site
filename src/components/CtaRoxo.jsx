import GlowArc from "./GlowArc"
import ScrambleText from "./ScrambleText"

const CODE_WORDS = ["<dev/>", "{club}", "01001", "npm run build", "git push"]

export default function CtaRoxo() {
  return (
    <section id="cta-roxo" className="cta-roxo">
      <GlowArc />
      <div className="container cta-roxo-content">
        <ScrambleText words={CODE_WORDS} className="cta-roxo-code" />
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
