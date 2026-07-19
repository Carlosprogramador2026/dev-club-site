import { useEffect, useState } from "react"

const TOKENS = [
  "const", "function", "return", "if (", "} else {", "import", "export default",
  "async", "await", "=>", "useState(", "useEffect(() => {", "class", "extends Component",
  "props.", "render()", "api.get('/users')", "for (let i = 0; i < n; i++)",
  "console.log(", "try {", "} catch (e) {", ".map((item) =>", "fetch('/api')",
  "<div className=", "</div>", "git commit -m", "SELECT * FROM users",
  "npm run build", "export const", "type Props = {", "interface User {",
]

const MAX_LINES = 10
const MAX_LINE_LEN = 34

export default function NotebookCode() {
  const [completed, setCompleted] = useState([])
  const [typing, setTyping] = useState("")

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setCompleted([
        "const dev = new Programmer()",
        "dev.learn('React', 'Node.js')",
        "dev.conquerFirstJob()",
      ])
      return
    }

    let line = ""
    const id = setInterval(() => {
      const next = TOKENS[Math.floor(Math.random() * TOKENS.length)]
      line = line ? `${line} ${next}` : next
      if (line.length > MAX_LINE_LEN) {
        setCompleted((prev) => [...prev, line].slice(-MAX_LINES))
        setTyping("")
        line = ""
      } else {
        setTyping(line)
      }
    }, 130)

    return () => clearInterval(id)
  }, [])

  return (
    <pre className="notebook-code">
      {completed.map((l) => `${l}\n`).join("")}
      {typing}
      <span className="notebook-cursor">▍</span>
    </pre>
  )
}
