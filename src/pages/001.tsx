import React, { useEffect } from 'react'
import { Ball } from '../canvas/Ball'
import { getOffset, rp } from '../canvas/utils'
import { initCanvas } from '../utils'

export default function $001() {
  useEffect(() => {
    const canvas = document.getElementById('canvas')! as HTMLCanvasElement
    const { ctx } = initCanvas(canvas)

    const W = canvas.width = 400
    const H = canvas.height = 400

    const mouse = getOffset(canvas)
    let dx = 0; let dy = 0

    let isMouseMove = false
    let vx = rp([-10, 10]); let vy = -10
    const g = 0.2
    const bounce = -0.7
    let startX = 0; let startY = 0

    const ball = new Ball({
      x: W / 2,
      y: H / 2,
      r: 25,
    }).render(ctx)

    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault()
      if (ball.isPoint(mouse)) {
        isMouseMove = true
        dx = mouse.x - ball.x
        dy = mouse.y - ball.y
        startX = ball.x
        startY = ball.y
        canvas.addEventListener('mousemove', moveBallFn)
        canvas.addEventListener('mouseup', upBallFn)
      }
    })

    function moveBallFn() {
      ball.x = mouse.x - dx
      ball.y = mouse.y - dy
    }

    function upBallFn() {
      isMouseMove = false
      canvas.removeEventListener('mousemove', moveBallFn)
      canvas.removeEventListener('mouseup', upBallFn)
    }

    function bounceMove() {
      vy += g
      ball.x += vx
      ball.y += vy

      if (ball.x + ball.r >= W) {
        ball.x = W - ball.r
        vx *= bounce
      }
      else if (ball.x - ball.r <= 0) {
        ball.x = ball.r
        vx *= bounce
      }

      if (ball.y + ball.r >= H) {
        ball.y = H - ball.r
        vy *= bounce
      }
      else if (ball.y - ball.r <= 0) {
        ball.y = ball.r
        vy *= bounce
      }
    }

    function setSpeed() {
      vx = ball.x - startX
      vy = ball.y - startY
      startX = ball.x
      startY = ball.y
    }

    (function move() {
      window.requestAnimationFrame(move)
      ctx.clearRect(0, 0, W, H)

      if (!isMouseMove)
        bounceMove()

      else
        setSpeed()

      ball.render(ctx)
    })()
  }, [])

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* <canvas ref={ctxRef} className='border-2 border-grey' id='canvas'>001</canvas> */}
      <canvas className="border-2 border-grey" id="canvas">001</canvas>
    </div>
  )
}
