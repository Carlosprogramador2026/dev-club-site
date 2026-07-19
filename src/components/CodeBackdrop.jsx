import { useEffect, useRef } from "react"

const CHARS = "01</>{}#$%&*+=~;:_"
const COLS = 64
const ROWS = 16

function randomLine() {
  let out = ""
  for (let i = 0; i < COLS; i++) {
    out += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  return out
}

export default function CodeBackdrop() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    function tick() {
      const lines = Array.from({ length: ROWS }, randomLine)
      if (ref.current) ref.current.textContent = lines.join("\n")
    }

    tick()
    const id = setInterval(tick, 200)
    return () => clearInterval(id)
  }, [])

  return <pre className="code-backdrop" ref={ref} aria-hidden="true" />
}
