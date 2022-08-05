/**
 * 小球类
 */
interface BallProps {
  x: number
  y: number
  x3d: number
  y3d: number
  z3d: number
  r: number
  vx: number
  vy: number
  scaleX: number
  scaleY: number
  strokeStyle: string
  fillStyle: string
  alpha: number
}

interface Point {
  x: number
  y: number
}

export class Ball implements BallProps {
  x = 0
  y = 0
  x3d = 0
  y3d = 0
  z3d = 0
  r = 20
  vx = 0
  vy = 0
  vz = 0
  scaleX = 1
  scaleY = 1
  strokeStyle = 'rgb(191,191,191)'
  fillStyle = 'rgb(191,191,191)'
  alpha = 1
  constructor(props?: Partial<BallProps>) {
    Object.assign(this, props)
    return this
  }

  render(ctx: CanvasRenderingContext2D) {
    const { x, y, r, scaleX, scaleY, fillStyle, strokeStyle, alpha } = this
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scaleX, scaleY)
    ctx.strokeStyle = strokeStyle
    ctx.fillStyle = fillStyle
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }

  isPoint(pos: Point) {
    const { x, y } = pos
    return this.r >= Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2)
  }
}
