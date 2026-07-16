import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CURSOS } from "../data/cursos"

const OBSERVED_IDS = ["cursos", "sobre", "depoimentos"]

export default function Navbar() {
  const location = useLocation()
  const [activeId, setActiveId] = useState(null)

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

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/#top" className="logo">
          <img src="/logo.png" alt="" className="logo-icon" />
          dev<span className="gradient-text">club</span>
        </Link>

        <nav className="nav-links">
          <Link to="/#top">Home</Link>

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
                activeId === "cursos" ? " active" : ""
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

          <Link to="/mba">MBA</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/newsletter">Newsletter</Link>

          <Link
            to="/#depoimentos"
            className={activeId === "depoimentos" ? "active" : undefined}
          >
            Nossos Alunos
          </Link>

          <a
            href="https://aulas.devclub.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </nav>

        <a
          href="https://www.devclub.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          Matricule-se
        </a>
      </div>
    </header>
  )
}
