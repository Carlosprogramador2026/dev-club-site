import { useEffect, useState } from "react"
import { asset } from "../utils/asset"

// Cada segmento decifra na sequencia (tag -> titulo -> subtitulo),
// como no video de referencia: uma unica "onda" de decodificacao
// passando por varias linhas de texto.
const SEGMENTOS = [
  { texto: "0xA13F9D2C", classe: "notebook-tag" },
  { texto: "seu primeiro emprego", classe: "notebook-titulo" },
  { texto: "em tech comeca aqui", classe: "notebook-subtitulo" },
]

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const ESPACO = " " // nbsp - um <span> so' com espaco normal colapsa e some
const SCRAMBLE_TICK = 45 // ms - velocidade da cintilacao das letras ainda por decifrar
const REVEAL_TICK = 55 // ms - intervalo entre cada letra "assentando"
const PAUSA_FINAL = 2200 // ms parado com o texto decifrado antes de reiniciar

let offset = 0
const SEGMENTOS_COM_RANGE = SEGMENTOS.map((seg) => {
  const inicio = offset
  offset += seg.texto.length
  return { ...seg, inicio, fim: offset }
})
const LETRAS = SEGMENTOS.flatMap((seg) => seg.texto.split(""))
const TOTAL = LETRAS.length

function charAleatorio() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]
}

function gerarExibido(revelados) {
  return LETRAS.map((c, i) => {
    if (c === " ") return ESPACO
    return i < revelados ? c : charAleatorio()
  })
}

export default function NotebookShowcase() {
  const [revelados, setRevelados] = useState(0)
  const [exibido, setExibido] = useState(() => gerarExibido(0))

  // Avanca quantas letras (na ordem tag -> titulo -> subtitulo) ja' "decifraram".
  useEffect(() => {
    const atraso = revelados < TOTAL ? REVEAL_TICK : PAUSA_FINAL
    const id = setTimeout(() => {
      setRevelados((r) => (r < TOTAL ? r + 1 : 0))
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

      {SEGMENTOS_COM_RANGE.map((seg) => (
        <p key={seg.classe} className={seg.classe}>
          {exibido.slice(seg.inicio, seg.fim).map((letra, i) => {
            const idx = seg.inicio + i
            return (
              <span
                key={idx}
                className={`notebook-letter ${idx < revelados ? "notebook-letter--on" : ""}`}
              >
                {letra}
              </span>
            )
          })}
        </p>
      ))}
    </div>
  )
}
