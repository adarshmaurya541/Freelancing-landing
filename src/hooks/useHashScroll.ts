import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function scrollToHash(hash: string, instant = false) {
  const id = hash.replace('#', '')
  if (!id) {
    return
  }
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' })
}

export function useHashScroll() {
  const location = useLocation()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!location.hash) {
      return
    }
    const frame = window.requestAnimationFrame(() => {
      scrollToHash(location.hash, reducedMotion)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [location.hash, location.pathname, reducedMotion])
}
