import { useThrottle } from 'ahooks'
import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const updateSize = useThrottle(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return windowSize
}
