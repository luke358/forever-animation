import React, { useEffect, useRef } from 'react'
import Paper from '../components/Paper'
import { initCanvas } from '../utils'

const H = 400
const W = 400
const D = 10
interface Point { x: number; y: number }
export default function $004() {
  const canvasRef = useRef(null)

  const draw = (point1: Point, point2: Point, point3: Point, point4: Point, ctx: CanvasRenderingContext2D, count = 0) => {
    // (x - x1) / (x2 - x1) = (y - y1) / (y2 - y1)
    if (count > 25)
      return
    const point21 = {
      x: ((point1.y + D - point1.y) / (point4.y - point1.y) * (point4.x - point1.x)) + point1.x,
      y: point1.y + D,
    }

    const point22 = {
      x: point2.x - D,
      y: ((point2.x - D - point2.x) / (point1.x - point2.x) * (point1.y - point2.y)) + point2.y,
    }

    const point23 = {
      x: ((point3.y - D - point3.y) / (point2.y - point3.y) * (point2.x - point3.x)) + point3.x,
      y: point3.y - D,
    }
    const point24 = {
      x: point4.x + D,
      y: ((point4.x + D - point4.x) / (point3.x - point4.x) * (point3.y - point4.y)) + point4.y,
    }
    ctx.moveTo(point21.x, point21.y)
    ctx.lineTo(point22.x, point22.y)
    ctx.lineTo(point23.x, point23.y)
    ctx.lineTo(point24.x, point24.y)
    ctx.lineTo(point21.x, point21.y)
    draw(point21, point22, point23, point24, ctx, count + 1)
  }
  useEffect(() => {
    const { ctx } = initCanvas(canvasRef.current!)
    ctx.beginPath()
    /**
     0, 0 x1,y2
     0, W x2,y2
     W, H x3,y3
     0, H x4,y4
     */
    draw({ x: 0, y: 0 }, { x: W, y: 0 }, { x: W, y: H }, { x: 0, y: H }, ctx)
    ctx.stroke()
  }, [])

  return (
    <Paper>
      <canvas className="border-2" ref={canvasRef}></canvas>
    </Paper>
  )
}
