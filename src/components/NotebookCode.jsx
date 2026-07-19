import { useEffect, useState } from "react"

const TOKENS = [
  "const", "function", "return", "if (", "} else {", "import", "export default",
  "async", "await", "=>", "useState(", "useEffect(() => {", "class", "extends Component",
  "props.", "render()", "api.get('/users')", "for (let i = 0; i < n; i++)",
  "console.log(", "try {", "} catch (e) {", ".map((item) =>", "fetch('/api')",
  "<div className=", "</div>", "git commit -m", "SELECT * FROM users",
  "npm run build", "export const", "type Props = {", "interface User {",
]

const BUFFER_LINES = 40
const MAX_LINE_LEN = 34

function randomLine() {
  let line = ""
  while (line.length < MAX_LINE_LEN - 10) {
    const next = TOKENS[Math.floor(Math.random() * TOKENS.length)]
    line = line ? `${line} ${next}` : next
  }
  return line
}

const STATIC_LINES = [
  "const dev = new Programmer()",
  "dev.learn('HTML', 'CSS', 'JS')",
  "dev.learn('React', 'Node.js')",
  "dev.buildPortfolio()",
  "dev.conquerFirstJob()",
]

export default function NotebookCode() {
  const [completed, setCompleted] = useState(() =>
    Array.from({ length: BUFFER_LINES - 1 }, randomLine)
  )
  const [typing, setTyping] = useState("")
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setReduceMotion(true)
      setCompleted(STATIC_LINES)
      return
    }

    let line = ""
    const id = setInterval(() => {
      const next = TOKENS[Math.floor(Math.random() * TOKENS.length)]
      line = line ? `${line} ${next}` : next
      if (line.length > MAX_LINE_LEN) {
        setCompleted((prev) => [...prev, line].slice(-BUFFER_LINES))
        setTyping("")
        line = ""
      } else {
        setTyping(line)
      }
    }, 100)

    return () => clearInterval(id)
  }, [])

  const lines = [...completed, typing]

  return (
    <div className="notebook-code">
      {lines.map((line, i) => (
        <div key={i} className="notebook-code-line">
          {line || " "}
          {i === lines.length - 1 && !reduceMotion && (
            <span className="notebook-cursor">▍</span>
          )}
        </div>
      ))}
    </div>
  )
}
