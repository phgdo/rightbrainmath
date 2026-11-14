import { Link, NavLink, useLocation } from 'react-router-dom'
import { type ReactNode } from 'react'
import { Icon } from './Icon'
import { flatLessons, levels, themes } from '../data/content'
import { useProgress } from '../hooks/useProgress'

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white">
        <Icon name="geo" className="h-5 w-5" />
      </span>
      <span className="hidden text-lg font-extrabold tracking-tight text-stone-900 sm:block">
        RightBrain<span className="text-stone-500">Math</span>
      </span>
    </Link>
  )
}

const shortNames: Record<string, string> = {
  l1: 'Nền móng',
  l2: 'Đại số',
  l3: 'Giải tích',
  l4: 'Tuyến tính',
  l5: 'Giải tích thực',
  l6: 'Galois',
}

function LevelTabs() {
  const { done } = useProgress()
  const { pathname } = useLocation()
  return (
    <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto px-1 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {levels.map((lv) => {
        const th = themes[lv.theme]
        const ls = flatLessons().filter((x) => x.level.id === lv.id)
        const pct = ls.length ? Math.round((ls.filter((x) => done.has(x.lesson.id)).length / ls.length) * 100) : 0
        const active = pathname === `/level/${lv.id}`
        return (
          <NavLink
            key={lv.id}
            to={`/level/${lv.id}`}
            className={`relative shrink-0 rounded-xl px-3 py-1.5 text-sm font-bold transition ${
              active ? 'bg-stone-900 text-white' : `text-stone-600 hover:bg-stone-100 ${th.text}`
            }`}
            title={`Level ${lv.num} — ${lv.name}`}
          >
            L{lv.num}
            <span className={`ml-1.5 hidden font-semibold md:inline ${active ? 'text-stone-300' : 'text-stone-400'}`}>
              {shortNames[lv.id]}
            </span>
            <span className="absolute inset-x-2.5 bottom-0.5 h-0.5 overflow-hidden rounded-full bg-stone-200/70">
              <span
                className={`block h-full rounded-full ${active ? 'bg-white/80' : th.bar}`}
                style={{ width: `${pct}%` }}
              />
            </span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4">
          <Logo />
          <LevelTabs />
          <NavLink
            to="/phuong-phap"
            className={({ isActive }) =>
              `shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-100 ${isActive ? 'text-stone-900' : ''}`
            }
          >
            Phương pháp
          </NavLink>
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
