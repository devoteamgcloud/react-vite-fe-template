import { useLayoutEffect, useRef, useState } from 'react'

export function useElementHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return

    const updateHeight = () => setHeight(ref.current?.offsetHeight || 0)

    updateHeight()

    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return { ref, height }
}
