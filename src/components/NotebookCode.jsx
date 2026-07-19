import { useMemo } from "react"

const TOKENS = [
  "const", "function", "return", "if (", "} else {", "import", "export default",
  "async", "await", "=>", "useState(", "useEffect(() => {", "class", "extends Component",
  "props.", "render()", "api.get('/users')", "for (let i = 0; i < n; i++)",
  "console.log(", "try {", "} catch (e) {", ".map((item) =>", "fetch('/api')",
  "<div className=", "</div>", "git commit -m", "SELECT * FROM users",
  "npm run build", "export const", "type Props = {", "interface User {",
]

const LINE_COUNT = 30
const MAX_LINE_LEN = 34

function randomLine() {
  let line = ""
  while (line.length < MAX_LINE_LEN - 10) {
    const next = TOKENS[Math.floor(Math.random() * TOKENS.length)]
    line = line ? `${line} ${next}` : next
  }
  return line
}

export default function NotebookCode() {
  const lines = useMemo(() => Array.from({ length: LINE_COUNT }, randomLine), [])

  return (
    <div className="notebook-code" aria-hidden="true">
      <div className="notebook-code-track">
        {lines.map((line, i) => (
          <div key={`a-${i}`} className="notebook-code-line">
            {line}
          </div>
        ))}
        {lines.map((line, i) => (
          <div key={`b-${i}`} className="notebook-code-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
