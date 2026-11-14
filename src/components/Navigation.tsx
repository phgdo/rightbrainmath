import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LEVEL_KEY = 'rightbrainmath-level-v1'

export function saveLastLevel(levelId: string) {
  try {
    localStorage.setItem(LEVEL_KEY, levelId)
  } catch {
    /* ignore */
  }
}

export function getLastLevel(): string {
  try {
    return localStorage.getItem(LEVEL_KEY) ?? 'l1'
  } catch {
    return 'l1'
  }
}

export function HomeRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`/level/${getLastLevel()}`, { replace: true })
  }, [navigate])
  return null
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
