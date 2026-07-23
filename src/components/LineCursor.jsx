import { useEffect, useRef } from "react"

// Trilha de cursor tipo "corda com mola" (spring-rope) seguindo o mouse.
// Adaptado de um componente Framer (Canvas2D puro, sem dependencia real do
// Framer alem do registro de controles, removido).
//
// Versao leve: a primeira tentativa usava 60 trilhas de 30 nodes (1800
// atualizacoes de fisica + ~1700 segmentos de curva desenhados por frame,
// na tela inteira) e deixou o site lento. Aqui e' 10x8 = 80 nodes e ~60
// segmentos por frame — a mesma sensacao visual de "corda" por uma fracao
// do custo. So' roda em telas com mouse de verdade, pausa quando a aba
// nao esta visivel, e respeita prefers-reduced-motion.

const DEFAULTS = {
  colors: ["#00ffa3", "#39ff88", "#1e88ff", "#ffd700", "#ff3b3b"],
  colorShift: 1,
  opacity: 50,
  thickness: 2,
  trails: 10,
  trailLength: 8,
}

// O maximo de cores que faz sentido usar — passado disso a trilha volta
// pra primeira cor antes de alguem notar a ultima.
const MAX_COLORS = 5
// Quanto da velocidade de um node o proximo da corda herda, e quao rapido
// a mola afrouxa ao longo dela. Formato da propria corda, fixo.
const DAMPENING = 0.1
const TENSION = 0.95
// Fracao da velocidade que um node carrega pro proximo frame.
const FRICTION = 0.5
// Contagem de trilhas contra a qual o dial de Opacidade e' calibrado.
const REFERENCE_TRAILS = 20
// Luminosidade maxima do traco (Oklab L) — blend aditivo so' clareia, entao
// segura a cor antes que vire branco quando duas cordas se cruzam.
const MAX_STROKE_L = 0.7

class TrailNode {
  x = 0
  y = 0
  vx = 0
  vy = 0
}

// Uma trilha "corda com mola" feita de `size` nodes encadeados.
class Line {
  spring
  friction
  nodes = []
  cfg

  constructor(cfg) {
    this.cfg = cfg
    this.spring = cfg.spring + 0.1 * Math.random() - 0.02
    this.friction = cfg.friction + 0.01 * Math.random() - 0.002
    for (let i = 0; i < cfg.size; i++) {
      const node = new TrailNode()
      node.x = cfg.target.x
      node.y = cfg.target.y
      this.nodes.push(node)
    }
  }

  update() {
    let spring = this.spring
    const { target, dampening, tension } = this.cfg
    let node = this.nodes[0]
    node.vx += (target.x - node.x) * spring
    node.vy += (target.y - node.y) * spring
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      node = this.nodes[i]
      if (i > 0) {
        const prev = this.nodes[i - 1]
        node.vx += (prev.x - node.x) * spring
        node.vy += (prev.y - node.y) * spring
        node.vx += prev.vx * dampening
        node.vy += prev.vy * dampening
      }
      node.vx *= this.friction
      node.vy *= this.friction
      node.x += node.vx
      node.y += node.vy
      spring *= tension
    }
  }

  draw(ctx) {
    let a, b
    let x = this.nodes[0].x
    let y = this.nodes[0].y
    ctx.beginPath()
    ctx.moveTo(x, y)
    for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
      a = this.nodes[i]
      b = this.nodes[i + 1]
      x = 0.5 * (a.x + b.x)
      y = 0.5 * (a.y + b.y)
      ctx.quadraticCurveTo(a.x, a.y, x, y)
    }
    a = this.nodes[this.nodes.length - 2]
    b = this.nodes[this.nodes.length - 1]
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y)
    ctx.stroke()
    ctx.closePath()
  }
}

// Cores do Framer chegam como hex ou rgb/rgba; qualquer uma, para 0..1 sRGB.
function parseColor(color) {
  const value = (color ?? "").trim()
  if (value.startsWith("#")) {
    let hex = value.slice(1)
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("")
    if (hex.length >= 6) {
      return [
        parseInt(hex.slice(0, 2), 16) / 255,
        parseInt(hex.slice(2, 4), 16) / 255,
        parseInt(hex.slice(4, 6), 16) / 255,
        hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1,
      ]
    }
    return [1, 1, 1, 1]
  }
  const m = value.match(/rgba?\(([^)]+)\)/i)
  if (m) {
    const p = m[1].split(",").map((s) => parseFloat(s))
    return [(p[0] || 0) / 255, (p[1] || 0) / 255, (p[2] || 0) / 255, p[3] === undefined ? 1 : p[3]]
  }
  return [1, 1, 1, 1]
}

// sRGB e' armazenado com gamma; toda a matematica de cor abaixo quer luz linear.
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
const toGamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)

// sRGB <-> Oklab (matrizes de Bjorn Ottosson).
function srgbToOklab(r, g, b) {
  const lr = toLinear(r)
  const lg = toLinear(g)
  const lb = toLinear(b)
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb)
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb)
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb)
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ]
}

function oklabToSrgb(L, A, B) {
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3
  return [
    toGamma(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    toGamma(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    toGamma(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ]
}

const inGamut = (rgb) => rgb.every((c) => c >= -0.001 && c <= 1.001)

// Uma cor escolhida, como string de traco, segurada numa luminosidade que
// o blend aditivo aguenta sem virar branco.
function strokeFor(color, maxL, alpha) {
  const [r, g, b] = parseColor(color)
  const [L, A, B] = srgbToOklab(r, g, b)
  if (L <= maxL) {
    const rgb = [r, g, b].map((c) => Math.round(c * 255))
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
  }
  const C = Math.hypot(A, B)
  const hue = Math.atan2(B, A)
  const cos = Math.cos(hue)
  const sin = Math.sin(hue)
  let fitted = C
  if (!inGamut(oklabToSrgb(maxL, cos * C, sin * C))) {
    let lo = 0
    let hi = C
    for (let i = 0; i < 16; i++) {
      const mid = (lo + hi) / 2
      if (inGamut(oklabToSrgb(maxL, cos * mid, sin * mid))) lo = mid
      else hi = mid
    }
    fitted = lo
  }
  const rgb = oklabToSrgb(maxL, cos * fitted, sin * fitted).map((c) =>
    Math.round(Math.min(1, Math.max(0, c)) * 255)
  )
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
}

export default function LineCursor(props) {
  const {
    colors = DEFAULTS.colors,
    colorShift = DEFAULTS.colorShift,
    opacity = DEFAULTS.opacity,
    thickness = DEFAULTS.thickness,
    trails = DEFAULTS.trails,
    trailLength = DEFAULTS.trailLength,
    style,
  } = props
  const canvasRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    // So' em telas com mouse de verdade, e so' se o usuario nao pediu pra
    // reduzir animacoes.
    if (!window.matchMedia("(hover: hover)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = canvasRef.current
    const frame = frameRef.current
    if (!canvas || !frame) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const count = Math.max(1, Math.round(trails))
    // Esvaziar a lista de cores no controle nao deixa nada pra desenhar,
    // entao cai pros defaults em vez de pintar uma trilha invisivel.
    const picked = (colors ?? []).filter(Boolean).slice(0, MAX_COLORS)
    const palette = picked.length ? picked : DEFAULTS.colors
    const weight = Math.min(100, Math.max(0, opacity)) / 100
    const fade = Math.min(1, REFERENCE_TRAILS / count)
    const strokes = palette.map((entry) => strokeFor(entry, MAX_STROKE_L, weight * parseColor(entry)[3] * fade))

    let running = true
    let paused = false
    let rafId = 0
    let started = false
    const target = { x: 0, y: 0 }
    let bornAt = 0
    const holdMs = Math.max(0.1, colorShift) * 1000
    const lineCfg = {
      spring: 0.4,
      friction: FRICTION,
      dampening: DAMPENING,
      tension: TENSION,
      size: Math.max(2, Math.round(trailLength)),
      target,
    }
    let lines = []

    function buildLines() {
      lines = []
      for (let i = 0; i < count; i++) {
        lines.push(new Line({ ...lineCfg, spring: 0.4 + (i / count) * 0.025 }))
      }
    }

    function resize() {
      if (!canvas || !frame) return
      canvas.width = Math.max(1, Math.round(frame.clientWidth))
      canvas.height = Math.max(1, Math.round(frame.clientHeight))
    }

    function updatePosition(e) {
      let clientX, clientY
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        clientX = e.clientX
        clientY = e.clientY
      }
      const rect = frame.getBoundingClientRect()
      const sx = rect.width > 0 ? frame.clientWidth / rect.width : 1
      const sy = rect.height > 0 ? frame.clientHeight / rect.height : 1
      target.x = (clientX - rect.left) * sx
      target.y = (clientY - rect.top) * sy
      if (e.cancelable) e.preventDefault()
    }

    // A corda nasce na posicao do cursor em vez de na origem, pra nao
    // chicotear do canto na primeira passada.
    function onFirstMove(e) {
      moveTarget.removeEventListener("mousemove", onFirstMove)
      moveTarget.removeEventListener("touchstart", onFirstMove)
      moveTarget.addEventListener("mousemove", updatePosition)
      moveTarget.addEventListener("touchmove", updatePosition, { passive: false })
      updatePosition(e)
      buildLines()
      started = true
      loop()
    }

    function loop() {
      if (!running || paused || !ctx || !canvas) return
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Aditivo: onde as cordas se cruzam, empilham em luz — e' isso que
      // da o nucleo da trilha.
      ctx.globalCompositeOperation = "lighter"
      if (bornAt === 0) bornAt = performance.now()
      const held = Math.floor((performance.now() - bornAt) / holdMs)
      ctx.strokeStyle = strokes[held % strokes.length]
      ctx.lineWidth = Math.max(0.1, thickness)
      for (let i = 0; i < count; i++) {
        const line = lines[i]
        if (!line) continue
        line.update()
        line.draw(ctx)
      }
      rafId = window.requestAnimationFrame(loop)
    }

    function handleFocus() {
      if (!running) {
        running = true
        if (started) loop()
      }
    }
    function handleBlur() {
      running = false
    }
    // Pausa de verdade quando a aba nao esta visivel (troca de aba, app
    // minimizado) — o rAF do navegador ja' desacelera sozinho em segundo
    // plano, mas parar de vez poupa bateria e evita "explosao" de frames
    // acumulados quando a aba volta a ficar visivel.
    function handleVisibility() {
      paused = document.hidden
      if (!paused && started && running) loop()
    }

    // Sempre no document — escutar so' no frame significa que qualquer
    // coisa que bloqueie eventos de ponteiro por cima mata o efeito.
    const moveTarget = document
    moveTarget.addEventListener("mousemove", onFirstMove)
    moveTarget.addEventListener("touchstart", onFirstMove, { passive: true })
    let ro = null
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize)
      ro.observe(frame)
    }
    window.addEventListener("focus", handleFocus)
    window.addEventListener("blur", handleBlur)
    document.addEventListener("visibilitychange", handleVisibility)
    resize()

    return () => {
      running = false
      window.cancelAnimationFrame(rafId)
      moveTarget.removeEventListener("mousemove", onFirstMove)
      moveTarget.removeEventListener("touchstart", onFirstMove)
      moveTarget.removeEventListener("mousemove", updatePosition)
      moveTarget.removeEventListener("touchmove", updatePosition)
      ro?.disconnect()
      window.removeEventListener("focus", handleFocus)
      window.removeEventListener("blur", handleBlur)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
    // O array de cores e' um objeto novo a cada render — comparar pelo
    // conteudo (JSON.stringify) em vez da identidade, senao a corda seria
    // desmontada e reconstruida em todo render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(colors), colorShift, opacity, thickness, trails, trailLength])

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        // Efeito de cursor: nunca deve engolir um clique de algo por baixo.
        pointerEvents: "none",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", pointerEvents: "none" }}
      />
    </div>
  )
}
