import { useEffect, useRef } from "react"

const TILT_SELECTOR =
  ".curso-card, .equipe-card, .depoimento-card, .blog-card, .fundador-card, " +
  ".diferencial-card, .curso-modulo-card, .curso-publico-card, " +
  ".curso-instrutor-card"

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return

    const glow = glowRef.current

    function handleMove(e) {
      glow.style.setProperty("--x", `${e.clientX}px`)
      glow.style.setProperty("--y", `${e.clientY}px`)
      glow.style.opacity = "1"

      const card = e.target instanceof Element ? e.target.closest(TILT_SELECTOR) : null
      if (!card) return
      const rect = card.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      card.style.setProperty("--rx", `${(-py * 8).toFixed(2)}deg`)
      card.style.setProperty("--ry", `${(px * 8).toFixed(2)}deg`)
    }

    function handleLeaveWindow() {
      glow.style.opacity = "0"
    }

    function handleOut(e) {
      const card = e.target instanceof Element ? e.target.closest(TILT_SELECTOR) : null
      if (!card || card.contains(e.relatedTarget)) return
      card.style.setProperty("--rx", "0deg")
      card.style.setProperty("--ry", "0deg")
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseleave", handleLeaveWindow)
    document.addEventListener("mouseout", handleOut)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeaveWindow)
      document.removeEventListener("mouseout", handleOut)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
