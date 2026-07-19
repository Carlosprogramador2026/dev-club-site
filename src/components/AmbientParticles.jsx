import { useEffect, useRef } from "react"

const COLORS = ["#00ffa3", "#39ff88", "#a879ff", "#7c4dff", "#ffffff"]

export default function AmbientParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let width = 0
    let height = 0
    let particles = []
    let frame = 0
    let frameId
    const mouse = { x: -99999, y: -99999 }

    function resize() {
      width = canvas.width = canvas.offsetWidth * dpr
      height = canvas.height = canvas.offsetHeight * dpr
      const count = Math.round((width * height) / (18000 * dpr * dpr))
      particles = Array.from({ length: Math.min(count, 90) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (0.6 + Math.random() * 1.8) * dpr,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.03,
        driftX: (Math.random() - 0.5) * 0.12 * dpr,
        riseSpeed: (0.08 + Math.random() * 0.18) * dpr,
      }))
    }

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * dpr
      mouse.y = (e.clientY - rect.top) * dpr
    }

    function handleLeave() {
      mouse.x = -99999
      mouse.y = -99999
    }

    resize()
    window.addEventListener("resize", resize)
    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMove)
      window.addEventListener("mouseleave", handleLeave)
    }

    function tick() {
      frame += 1
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.driftX
        p.y -= p.riseSpeed
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        let px = p.x
        let py = p.y
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        const radius = 130 * dpr
        if (dist < radius) {
          const push = (1 - dist / radius) * 22 * dpr
          const angle = Math.atan2(dy, dx)
          px += Math.cos(angle) * push
          py += Math.sin(angle) * push
        }

        const twinkle = 0.25 + 0.55 * Math.sin(frame * p.twinkleSpeed + p.phase)
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, twinkle)
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      frameId = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-particles" aria-hidden="true" />
}
