import { useEffect, useRef, useState } from 'react'

/**
 * Dispara una animación de revelado cuando el elemento entra al viewport.
 * @param {number} threshold — Fracción visible del elemento para activar (0-1)
 * @returns {[ref, isVisible]}
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Solo anima una vez
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
