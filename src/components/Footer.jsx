import { Link } from "react-router-dom"
import { CURSOS } from "../data/cursos"
import {
  EmailIcon,
  InstagramIcon,
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
} from "./Icons"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo">
            DEV <span className="gradient-text">CLUB</span>
          </span>
          <p>Formação em tecnologia do zero à primeira vaga.</p>

          <p className="footer-institucional">
            CNPJ 35.775.053/0001-69
            <br />
            Al. Rio Negro, 503 - Conj 2301 - Alphaville Industrial
            <br />
            Barueri - SP, 06454-000
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Al.+Rio+Negro%2C+503+-+Conj+2301+-+Alphaville+Industrial%2C+Barueri+-+SP%2C+06454-000"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            📍 Ver no mapa
          </a>
        </div>

        <div className="footer-col">
          <h4>Cursos</h4>
          {CURSOS.map((curso) => (
            <Link key={curso.slug} to={`/cursos/${curso.slug}`}>
              {curso.title}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Navegação</h4>
          <Link to="/#sobre">Sobre</Link>
          <Link to="/#equipe">Equipe</Link>
          <Link to="/#depoimentos">Depoimentos</Link>
          <Link to="/#faq">Perguntas frequentes</Link>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <a href="mailto:contato@rodolfomori.com">
            <span className="contato-icone contato-icone--email" aria-hidden="true">
              <EmailIcon />
            </span>
            contato@rodolfomori.com
          </a>
          <a
            href="https://wa.me/5511951957674"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contato-icone contato-icone--whatsapp" aria-hidden="true">
              <WhatsappIcon />
            </span>
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/devclubescola?igsh=MXEwZHpvZnIybWJ6dg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contato-icone contato-icone--instagram" aria-hidden="true">
              <InstagramIcon />
            </span>
            Instagram
          </a>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Receba novidades da dev club no seu e-mail.</p>
          <form
            action="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
            target="_blank"
            className="footer-newsletter-form"
          >
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              aria-label="Seu e-mail"
            />
            <button type="submit" aria-label="Inscrever-se">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} dev club. Todos os direitos reservados.</p>

        <div className="footer-dev-credit">
          <span>Site desenvolvido por Carlos</span>
          <a
            href="https://github.com/Carlosprogramador2026"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Carlos"
            className="footer-dev-icone"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-alberto-sanches-bonito-a9023a3ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Carlos"
            className="footer-dev-icone"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://wa.me/5519992352168"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Carlos"
            className="footer-dev-icone"
          >
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
