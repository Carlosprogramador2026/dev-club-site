import { Link } from "react-router-dom"
import { CURSOS } from "../data/cursos"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo">
            dev<span className="gradient-text">club</span>
          </span>
          <p>Formação em tecnologia do zero à primeira vaga.</p>
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
            <span aria-hidden="true">📧</span> contato@rodolfomori.com
          </a>
          <a
            href="https://wa.me/5511951957674"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">💬</span> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/devclubescola?igsh=MXEwZHpvZnIybWJ6dg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">📷</span> Instagram
          </a>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Receba novidades da dev club no seu e-mail.</p>
          <form
            action="https://www.devclub.com.br/newsletter"
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
      </div>
    </footer>
  )
}
