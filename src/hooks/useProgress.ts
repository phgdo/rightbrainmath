import { useCallback, useEffect, useState } from 'react'

const KEY = 'rightbrainmath-progress-v1'
const LAST = 'rightbrainmath-last-v1'

function readSet(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY)
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

export function useProgress() {
  const [done, setDone] = useState<Set<string>>(readSet)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify([...done]))
  }, [done])

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const isDone = useCallback((id: string) => done.has(id), [done])

  return { done, toggle, isDone, count: done.size }
}

export function saveLastLesson(lessonId: string) {
  try {
    localStorage.setItem(LAST, lessonId)
  } catch {
    /* ignore */
  }
}

export function getLastLesson(): string | null {
  try {
    return localStorage.getItem(LAST)
  } catch {
    return null
  }
}
