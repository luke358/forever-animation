import React, { useEffect, useRef, useState } from 'react'

const DEFAULT_ITEMS = Array(50).fill(0).map((_, index) => ({ id: String(index) }))
export default function $002() {

  const [items, setItems] = useState([...DEFAULT_ITEMS]);
  const container = useRef<HTMLDivElement>(null);
  // 保存上一次状态
  const prevSrcRectMap = useRef(null);

  const update = () => {
    const shuffleItems = shuffle(items.slice());
    setItems(shuffleItems)
  }

  const reset = () => {
    setItems(DEFAULT_ITEMS)
  }

  useEffect(() => {
    if(prevSrcRectMap.current === null)  {
      prevSrcRectMap.current = createSrcRectMap(container.current!)
      return
    }
    const currentSrcRectMap = createSrcRectMap(container.current!);
    Object.keys(prevSrcRectMap.current!).forEach((id) => {
      const currentRect = currentSrcRectMap[id]
      const prevRect: any = prevSrcRectMap.current![id]
      
      const invert = {
        left: prevRect.left - currentRect.left,
        top: prevRect.top - currentRect.top,
      }

      const keyframes = [
        { transform: `translate(${invert.left}px, ${invert.top}px)` },
        { transform: `translate(0, 0)` }
      ]
      
      const options = {
        duration: 300,
        easing: "cubic-bezier(0,0,0.32,1)",
      }
      currentRect.ele.animate(keyframes, options)
    })
    prevSrcRectMap.current = currentSrcRectMap
  }, [items])

  const shuffle = (items: any[]) => {
    let n = items.length;
    for (let i = n - 1; i >= 0; i--) {
      const rand = Math.floor(Math.random() * n)
      let tmp = items[i]
      items[i] = items[rand];
      items[rand] = tmp;
    }
    return items
  }

  const createSrcRectMap = (prevContainer: HTMLElement) => {
    return Array.from(prevContainer.children).reduce((prev: any, ele) => {
      const rect = ele.getBoundingClientRect()
      const { left, top } = rect
      prev[ele.id] = { left, top, id: ele.id, ele }
      return prev
    }, {})
  }

  return (
    <div className="w-[400px] h-[400px]">
      <button className="btn-primary mb-4" onClick={update}>update</button>
      <button className="btn-gray mb-4 ml-4" onClick={reset}>rest</button>
      <div className="continer h-full w-full flex flex-wrap" ref={container}>
        {items.map((_, index) => <div id={_.id} key={index} className='w-8 h-8 bg-slate-400 text-center mx-2 leading-8'>{_.id}</div>)}
      </div>
    </div>
  )
}
