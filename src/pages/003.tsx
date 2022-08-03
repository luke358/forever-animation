import { useMouse } from 'ahooks'
import React, { useEffect, useRef, useState } from 'react'
import Paper from '../components/Paper'
import { useWindowSize } from '../hooks/useWindowSize'

export default function $003() {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const { clientX, clientY } = useMouse()
  const { width, height } = useWindowSize()
  const [inner, setInner] = useState({ top: '0px', left: '0px' })

  useEffect(() => {
    boxRef.current!.style.left = clientX - 200 < 0
      ? '0px'
      : (clientX + 200 > width
          ? `${width - 400}px`
          : `${clientX - 200}px`)
    boxRef.current!.style.top = clientY - 200 < 0
      ? '0px'
      : (clientY + 200 > height
          ? `${height - 400}px`
          : `${clientY - 200}px`)

    const inner = { left: `-${boxRef.current!.style.left}`, top: `-${boxRef.current!.style.top}` }
    setInner(inner)
  }, [clientX, clientY])

  return (
    <Paper className="w-[100%] h-[100%] flex items-center justify-center bg-gray-400">
      <div ref={boxRef} className="box w-[400px] h-[400px] fixed overflow-hidden border-2 border-gray-400">
        <div className="inner absolute" style={{ width: `${width}px`, height: `${height}px`, ...inner }}>
          <img className="w-[100%] h-[100%]" src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"></img>
        </div>
      </div>
    </Paper>
  )
}
