import { useEffect, useRef } from "react"

const PALETTES = [
  ["#8b2fce"],
  ["#1e88ff"],
  ["#ffd700"],
  ["#ff3b3b"],
  ["#00ffa3"],
]
const MAX_PARTICLES = 5000
const AMBIENT_DENSITY = 0.00022
const LETTERS = "D"
const LETTER_Y_RATIO = 0.22
const SETTLE_RATE = 0.06
const RELAUNCH_CHANCE = 0.00008
const ARRIVE_DISTANCE = 8
const MAX_ROTATION = 0.24
const MAX_SKEW = 0.36
const TILT_EASE = 0.035
const SPARK_RADIUS = 170
const SPARK_CHANCE = 0.6
const SPARK_LIFE = 55
const SPIN_DURATION = 100

function hexToRgb(hex) {
  const value = parseInt(hex.slice(1), 16)
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`
}

function fitFontSize(ctx, text, width, height) {
  const maxWidth = width * 0.82
  const maxHeight = height * 0.4
  ctx.font = `800 ${maxHeight}px "Segoe UI", system-ui, sans-serif`
  const textWidth = ctx.measureText(text).width
  return textWidth > maxWidth ? maxHeight * (maxWidth / textWidth) : maxHeight
}

function sampleLetterPoints(width, height) {
  const off = document.createElement("canvas")
  off.width = width
  off.height = height
  const octx = off.getContext("2d")

  const fontSize = fitFontSize(octx, LETTERS, width, height)
  octx.font = `800 ${fontSize}px "Segoe UI", system-ui, sans-serif`
  octx.textAlign = "center"
  octx.textBaseline = "middle"
  octx.fillStyle = "#fff"
  octx.fillText(LETTERS, width / 2, height * LETTER_Y_RATIO)

  const { data } = octx.getImageData(0, 0, width, height)
  const step = Math.max(1, Math.round(width / 800))
  let points = []

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const alpha = data[(y * width + x) * 4 + 3]
      if (alpha > 128) points.push({ x, y })
    }
  }

  if (points.length > MAX_PARTICLES) {
    const ratio = Math.ceil(points.length / MAX_PARTICLES)
    points = points.filter((_, i) => i % ratio === 0)
  }

  return points
}

function randomStart(width, height) {
  const edge = Math.random()
  if (edge < 0.5) {
    return { x: Math.random() * width, y: height * (0.95 + Math.random() * 0.3) }
  }
  return {
    x: Math.random() < 0.5 ? -width * 0.05 : width * 1.05,
    y: Math.random() * height,
  }
}

function createParticle(point, width, height, colors) {
  const start = randomStart(width, height)
  return {
    tx: point.x,
    ty: point.y,
    x: start.x,
    y: start.y,
    prevDrawX: start.x,
    prevDrawY: start.y,
    size: 0.8 + Math.random() * 1.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    phase: Math.random() * Math.PI * 2,
    speed: 0.015 + Math.random() * 0.02,
  }
}

const AMBIENT_COLORS = ["#5b6b8c", "#7d5a9e", "#3c4a68", "#ffffff"]

function createAmbientParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 0.5 + Math.random() * 1.3,
    color: AMBIENT_COLORS[Math.floor(Math.random() * AMBIENT_COLORS.length)],
    phase: Math.random() * Math.PI * 2,
    speed: 0.008 + Math.random() * 0.015,
    driftX: (Math.random() - 0.5) * 0.06,
    driftY: (Math.random() - 0.5) * 0.06,
  }
}

function createSpark(origin, cx, cy, color, dpr) {
  const angle = Math.atan2(origin.y - cy, origin.x - cx) + (Math.random() - 0.5) * 0.9
  const speed = (1.2 + Math.random() * 2.2) * dpr
  return {
    x: origin.x,
    y: origin.y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: 0.6 + Math.random() * 1.4,
    color,
    life: 0,
    maxLife: SPARK_LIFE * (0.6 + Math.random() * 0.7),
  }
}

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0
    let particles = []
    let ambientParticles = []
    let sparks = []
    let frame = 0
    let frameId
    let paletteIndex = 0
    let spinActive = false
    let spinProgress = 0
    let spinDirection = 1
    let wasNear = false
    const mouse = { x: -99999, y: -99999 }
    const tilt = { rotation: 0, skewX: 0, skewY: 0 }

    function resize() {
      width = canvas.width = canvas.offsetWidth * dpr
      height = canvas.height = canvas.offsetHeight * dpr

      const points = sampleLetterPoints(width, height)
      particles = points.map((pt) =>
        createParticle(pt, width, height, PALETTES[paletteIndex])
      )

      const ambientCount = Math.round(
        (width * height * AMBIENT_DENSITY) / (dpr * dpr)
      )
      ambientParticles = Array.from({ length: ambientCount }, () =>
        createAmbientParticle(width, height)
      )
    }

    function handlePointerMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * dpr
      mouse.y = (e.clientY - rect.top) * dpr
    }

    function handlePointerLeave() {
      mouse.x = -99999
      mouse.y = -99999
    }

    function handleClick() {
      paletteIndex = (paletteIndex + 1) % PALETTES.length
      const colors = PALETTES[paletteIndex]
      for (const p of particles) {
        p.color = colors[Math.floor(Math.random() * colors.length)]
      }
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handlePointerMove)
    window.addEventListener("mouseleave", handlePointerLeave)
    window.addEventListener("click", handleClick)

    function tick() {
      frame += 1
      ctx.clearRect(0, 0, width, height)

      const glowRgb = hexToRgb(PALETTES[paletteIndex][0])
      const glow = ctx.createRadialGradient(
        width / 2,
        height * LETTER_Y_RATIO,
        0,
        width / 2,
        height * LETTER_Y_RATIO,
        width * 0.32
      )
      glow.addColorStop(0, `rgba(${glowRgb}, 0.18)`)
      glow.addColorStop(1, `rgba(${glowRgb}, 0)`)
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      for (const a of ambientParticles) {
        a.x += a.driftX
        a.y += a.driftY
        if (a.x < 0) a.x = width
        if (a.x > width) a.x = 0
        if (a.y < 0) a.y = height
        if (a.y > height) a.y = 0

        const twinkle = 0.25 + 0.55 * Math.sin(frame * a.speed + a.phase)
        ctx.beginPath()
        ctx.fillStyle = a.color
        ctx.globalAlpha = Math.max(twinkle, 0)
        ctx.arc(a.x, a.y, a.size * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      const cx = width / 2
      const cy = height * LETTER_Y_RATIO

      let nx = 0
      let ny = 0
      if (mouse.x > -10000) {
        nx = Math.max(-1, Math.min(1, (mouse.x - cx) / (width * 0.5)))
        ny = Math.max(-1, Math.min(1, (mouse.y - cy) / (height * 0.6)))
      }

      tilt.rotation += (nx * MAX_ROTATION - tilt.rotation) * TILT_EASE
      tilt.skewX += (nx * MAX_SKEW - tilt.skewX) * TILT_EASE
      tilt.skewY += (ny * MAX_SKEW - tilt.skewY) * TILT_EASE

      const mouseNearLetter =
        mouse.x > -10000 && Math.hypot(mouse.x - cx, mouse.y - cy) < width * 0.4

      if (mouseNearLetter && !wasNear && !spinActive) {
        spinActive = true
        spinProgress = 0
        spinDirection *= -1
      }
      wasNear = mouseNearLetter

      let spinAngle = 0
      let turbulence = 0
      if (spinActive) {
        spinProgress += 1 / SPIN_DURATION
        if (spinProgress >= 1) {
          spinProgress = 1
          spinActive = false
        }
        const eased =
          spinProgress < 0.5
            ? 2 * spinProgress * spinProgress
            : 1 - Math.pow(-2 * spinProgress + 2, 2) / 2
        spinAngle = eased * Math.PI * 2 * spinDirection
        turbulence = Math.sin(spinProgress * Math.PI)
      }

      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(tilt.rotation + spinAngle)
      ctx.transform(1, tilt.skewY, tilt.skewX, 1, 0, 0)
      ctx.translate(-cx, -cy)

      for (const p of particles) {
        const distToTarget = Math.hypot(p.tx - p.x, p.ty - p.y)

        if (
          distToTarget < ARRIVE_DISTANCE * dpr &&
          Math.random() < RELAUNCH_CHANCE
        ) {
          const start = randomStart(width, height)
          p.x = start.x
          p.y = start.y
        }

        p.x += (p.tx - p.x) * SETTLE_RATE
        p.y += (p.ty - p.y) * SETTLE_RATE

        const travel = Math.min(distToTarget / (60 * dpr), 1)

        const jitterX = Math.sin(frame * p.speed + p.phase) * 1.1 * dpr
        const jitterY = Math.cos(frame * p.speed * 1.3 + p.phase) * 1.1 * dpr
        const twinkle =
          (0.55 + 0.45 * Math.sin(frame * 0.03 + p.phase * 2)) *
          (1 - travel * 0.3)

        const turbX = Math.sin(p.phase * 7 + frame * 0.4) * turbulence * 26 * dpr
        const turbY = Math.cos(p.phase * 5 + frame * 0.35) * turbulence * 26 * dpr

        const drawX = p.x + jitterX * (1 - travel) + turbX
        const drawY = p.y + jitterY * (1 - travel) + turbY

        if (travel > 0.2) {
          ctx.beginPath()
          ctx.strokeStyle = p.color
          ctx.globalAlpha = travel * 0.35
          ctx.lineWidth = p.size * dpr * 0.8
          ctx.moveTo(p.prevDrawX, p.prevDrawY)
          ctx.lineTo(drawX, drawY)
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(twinkle, travel * 0.9)
        ctx.arc(drawX, drawY, p.size * dpr * (1 + travel * 1.4), 0, Math.PI * 2)
        ctx.fill()

        p.prevDrawX = drawX
        p.prevDrawY = drawY

        if (
          mouseNearLetter &&
          travel < 0.05 &&
          Math.hypot(drawX - mouse.x, drawY - mouse.y) < SPARK_RADIUS * dpr &&
          Math.random() < SPARK_CHANCE * 0.02
        ) {
          sparks.push(createSpark({ x: drawX, y: drawY }, cx, cy, p.color, dpr))
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vx *= 0.97
        s.vy *= 0.97
        s.life += 1

        const t = s.life / s.maxLife
        if (t >= 1) {
          sparks.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.fillStyle = s.color
        ctx.globalAlpha = (1 - t) * 0.9
        ctx.arc(s.x, s.y, s.size * dpr * (1 - t * 0.5), 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
      ctx.globalAlpha = 1
      frameId = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handlePointerMove)
      window.removeEventListener("mouseleave", handlePointerLeave)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
