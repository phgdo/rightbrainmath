import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, type ReactNode } from 'react'
import { Icon } from './Icon'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white">
        <Icon name="geo" className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-stone-900">
        RightBrain<span className="text-stone-500">Math</span>
      </span>
    </Link>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Logo />
          <nav className="flex items-center gap-1 text-sm font-semibold text-stone-600">
            <NavLink to="/" className={({ isActive }) => `rounded-lg px-3 py-2 hover:bg-stone-100 ${isActive ? 'text-stone-900' : ''}`}>
              Lộ trình
            </NavLink>
            <a href="/#phuong-phap" className="rounded-lg px-3 py-2 hover:bg-stone-100">
              Phương pháp
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-500">
          <p className="font-semibold text-stone-700">RightBrainMath — lộ trình 6 levels cho người thuận não phải</p>
          <p className="mt-1">
            Nội dung tham chiếu từ giáo trình mở: OpenStax Prealgebra, Serge Lang, Stewart, Axler (LADR 4e miễn phí),
            Abbott, Dummit &amp; Foote. Mọi tiến độ học được lưu ngay trên máy bạn (localStorage).
          </p>
        </div>
      </footer>
    </div>
  )
}
