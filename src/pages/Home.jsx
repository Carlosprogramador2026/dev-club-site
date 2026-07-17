import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "../components/Hero"
import Sobre from "../components/Sobre"
import Cursos from "../components/Cursos"
import Mercado from "../components/Mercado"
import Diferenciais from "../components/Diferenciais"
import Equipe from "../components/Equipe"
import Depoimentos from "../components/Depoimentos"
import FaqGeral from "../components/FaqGeral"
import Cta from "../components/Cta"

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, [hash])

  return (
    <>
      <Hero />
      <Sobre />
      <Cursos />
      <Mercado />
      <Diferenciais />
      <Equipe />
      <Depoimentos />
      <FaqGeral />
      <Cta />
    </>
  )
}
