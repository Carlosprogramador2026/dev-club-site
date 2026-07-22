import { useEffect, useState } from "react"
import { asset } from "../utils/asset"

const TEXTO = "seu primeiro emprego em tech"
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const ESPACO = " " // nbsp - um <span> so' com espaco normal colapsa e some
const SCRAMBLE_TICK = 45 // ms - velocidade da cintilacao das letras ainda por decifrar
const REVEAL_TICK = 70 // ms - intervalo entre cada letra "assentando"
const PAUSA_FINAL = 2200 // ms parado com a frase decifrada antes de reiniciar

function charAleatorio() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]
}

function gerarExibido(revelados) {
  return TEXTO.split("").map((c, i) => {
    if (c === " ") return ESPACO
    return i < revelados ? c : charAleatorio()
  })
}

export default function NotebookShowcase() {
  const [revelados, setRevelados] = useState(0)
  const [exibido, setExibido] = useState(() => gerarExibido(0))

  // Avanca quantas letras (da esquerda pra direita) ja' "decifraram".
  useEffect(() => {
    const atraso = revelados < TEXTO.length ? REVEAL_TICK : PAUSA_FINAL
    const id = setTimeout(() => {
      setRevelados((r) => (r < TEXTO.length ? r + 1 : 0))
    }, atraso)
    return () => clearTimeout(id)
  }, [revelados])

  // Cintila caracteres aleatorios so' nas posicoes ainda nao decifradas.
  useEffect(() => {
    const id = setInterval(() => setExibido(gerarExibido(revelados)), SCRAMBLE_TICK)
    return () => clearInterval(id)
  }, [revelados])

  return (
    <div className="notebook-showcase" aria-hidden="true">
      <div className="notebook-showcase-bg" />

      <div className="notebook-avatar-glow">
        <img src={asset("logo-devclub.jpeg")} alt="" className="notebook-avatar" />
      </div>

      <p className="notebook-typewriter">
        {exibido.map((letra, i) => (
          <span
            key={i}
            className={`notebook-letter ${i < revelados ? "notebook-letter--on" : ""}`}
          >
            {letra}
          </span>
        ))}
      </p>
    </div>
  )
}
