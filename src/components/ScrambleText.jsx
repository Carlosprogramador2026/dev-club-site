import { useEffect, useRef } from "react"

const CHARS = "01</>{}#$%&*+=~"

export default function ScrambleText({ words, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let frame = 0
    let frameId
    let wordIndex = 0

    function scrambleTo(target, onDone) {
      const from = el.textContent || ""
      const length = target.length
      let progress = 0

      function step() {
        progress += 1
        let out = ""
        for (let i = 0; i < length; i++) {
          if (i < progress - 6) {
            out += target[i]
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)]
          }
        }
        el.textContent = out
        if (progress < length + 6) {
          frameId = requestAnimationFrame(step)
        } else {
          el.textContent = target
          setTimeout(onDone, 1400)
        }
      }
      step()
    }

    function next() {
      wordIndex = (wordIndex + 1) % words.length
      scrambleTo(words[wordIndex], next)
    }

    scrambleTo(words[0], next)

    return () => cancelAnimationFrame(frameId)
  }, [words])

  return <span ref={ref} className={className} />
}
