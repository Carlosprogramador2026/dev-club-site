import { useEffect, useState } from "react"
import { asset } from "../utils/asset"

const TEXTO = "seu primeiro emprego em tech"
const INTERVALO_LETRA = 90 // ms entre cada letra aparecendo
const PAUSA_FINAL = 2200 // ms parado com a frase completa antes de reiniciar

export default function NotebookShowcase() {
  const [visiveis, setVisiveis] = useState(0)

  // Orquestra o soletrando: revela uma letra por vez, espera com a frase
  // completa e reinicia — só isso, resto do efeito e' CSS.
  useEffect(() => {
    const atraso = visiveis < TEXTO.length ? INTERVALO_LETRA : PAUSA_FINAL
    const id = setTimeout(() => {
      setVisiveis((v) => (v < TEXTO.length ? v + 1 : 0))
    }, atraso)
    return () => clearTimeout(id)
  }, [visiveis])

  return (
    <div className="notebook-showcase" aria-hidden="true">
      <div className="notebook-showcase-bg" />

      <div className="notebook-avatar-ring">
        <img src={asset("logo-devclub.jpeg")} alt="" className="notebook-avatar" />
      </div>

      <p className="notebook-typewriter">
        {TEXTO.split("").map((letra, i) => (
          <span
            key={i}
            className={`notebook-letter ${i < visiveis ? "notebook-letter--on" : ""}`}
          >
            {letra === " " ? " " : letra}
          </span>
        ))}
      </p>
    </div>
  )
}
