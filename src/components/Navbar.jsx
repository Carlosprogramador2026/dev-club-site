import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CURSOS } from "../data/cursos"
import { asset } from "../utils/asset"

const OBSERVED_IDS = [
  "cursos",
  "sobre",
  "depoimentos",
  "ias-ilimitadas",
  "vitrine",
  "equipe",
]

export default function Navbar() {
  const location = useLocation()
  const [activeId, setActiveId] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = OBSERVED_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    )
    if (!sections.length) {
      setActiveId(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const isCursoPage = location.pathname.startsWith("/cursos/")
  const isDepoimentoPage = location.pathname.startsWith("/depoimentos/")
  const isHomeTop = location.pathname === "/" && !activeId

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/#top" className="logo">
          <img src={asset("logo.png")} alt="" className="logo-icon" />
          <span className="logo-text">
            <span className="logo-d">D</span>EV <span className="gradient-text">CLUB</span>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " nav-toggle--open" : ""}`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${menuOpen ? " nav-links--open" : ""}`}>
          <Link to="/#top" className={isHomeTop ? "active" : undefined}>
            Home
          </Link>

          <Link
            to="/#sobre"
            className={activeId === "sobre" ? "active" : undefined}
          >
            Sobre
          </Link>

          <div className="nav-dropdown">
            <Link
              to="/#cursos"
              className={`nav-dropdown-trigger${
                activeId === "cursos" || isCursoPage ? " active" : ""
              }`}
            >
              Formações
              <span className="nav-dropdown-caret">▾</span>
            </Link>
            <div className="nav-dropdown-menu">
              {CURSOS.map((curso) => (
                <Link key={curso.slug} to={`/cursos/${curso.slug}`}>
                  <strong>{curso.title}</strong>
                  <span>{curso.tag}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/#vitrine"
            className={activeId === "vitrine" ? "active" : undefined}
          >
            Resultado real
          </Link>

          <Link
            to="/#ias-ilimitadas"
            className={activeId === "ias-ilimitadas" ? "active" : undefined}
          >
            I.A
          </Link>

          <Link
            to="/mba"
            className={location.pathname === "/mba" ? "active" : undefined}
          >
            MBA
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : undefined}
          >
            Blog
          </Link>
          <Link
            to="/newsletter"
            className={
              location.pathname === "/newsletter" ? "active" : undefined
            }
          >
            Newsletter
          </Link>

          <Link
            to="/#equipe"
            className={activeId === "equipe" ? "active" : undefined}
          >
            Equipe
          </Link>

          <Link
            to="/#depoimentos"
            className={
              activeId === "depoimentos" || isDepoimentoPage
                ? "active"
                : undefined
            }
          >
            Nossos Alunos
          </Link>

          <div className="nav-cta-group nav-cta-group--mobile">
            <a
              href="https://aulas.devclub.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta"
            >
              Login
            </a>
            <a
              href="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta"
            >
              Matricule-se
            </a>
          </div>
        </nav>

        <div className="nav-cta-group nav-cta-group--desktop">
          <a
            href="https://aulas.devclub.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta"
          >
            Login
          </a>

          <a
            href="https://rodolfomori.typeform.com/formulario-mba?typeform-source=lp.devclub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta"
          >
            Matricule-se
          </a>
        </div>
      </div>
    </header>
  )
}
