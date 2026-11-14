import { useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { flatLessons, levels, themes } from '../data/content'
import { exercisesByLesson } from '../data/exercises'
import { sourcesByLesson } from '../data/sources'
import { Icon } from '../components/Icon'
import { Visual } from '../components/Visuals'
import { useProgress } from '../hooks/useProgress'
import { saveLastLevel } from '../components/Navigation'

export default function LevelPage() {
  const { levelId } = useParams()
  const level = levels.find((l) => l.id === levelId)
  const { done, isDone, toggle } = useProgress()
  const refs = useRef<Record<string, HTMLElement | null>>({})
  const scrolled = useRef(false)
  const lastLevelId = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (level) saveLastLevel(level.id)
  }, [level])

  useEffect(() => {
    if (!level) return
    if (lastLevelId.current !== level.id) {
      lastLevelId.current = level.id
      scrolled.current = false
    }
    if (scrolled.current) return
    scrolled.current = true
    const firstUndone = flatLessons().find(
      (x) => x.level.id === level.id && x.lesson.status === 'full' && !done.has(x.lesson.id),
    )
    const target = firstUndone?.lesson.id ?? level.chapters[0]?.lessons[0]?.id
    const el = target ? refs.current[target] : undefined
    if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior })
  }, [level, done])

  if (!level) return <Navigate to="/level/l1" replace />
  const th = themes[level.theme]
  const ls = flatLessons().filter((x) => x.level.id === level.id)
  const fullCount = ls.filter((x) => x.lesson.status === 'full').length
  const pct = ls.length ? Math.round((ls.filter((x) => done.has(x.lesson.id)).length / ls.length) * 100) : 0

  return (
    <div className="h-[calc(100vh-4rem)] snap-y snap-mandatory overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <section className="mx-auto flex min-h-full max-w-6xl flex-col px-4 py-10">
        <div className="card my-auto border-l-4" style={{ borderLeftColor: th.stroke }}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-extrabold text-white ${th.solid}`}>
                  {level.num}
                </span>
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight text-stone-900">Level {level.num} · {level.name}</h1>
                  <p className={`text-sm font-semibold ${th.text}`}>{level.nameEn}</p>
                </div>
              </div>
              <p className="mt-3 leading-relaxed text-stone-600">{level.tagline}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                <span className="font-semibold text-stone-700">Mục tiêu: </span>{level.outcome}
              </p>
            </div>
            <div className="shrink-0 space-y-3 lg:w-72">
              <div>
                <div className="flex justify-between text-xs font-semibold text-stone-500">
                  <span>Tiến độ</span>
                  <span className={th.text}>{pct}%</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-stone-100">
                  <div className={`h-full rounded-full ${th.bar}`} style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-1 text-xs text-stone-400">{fullCount} bài trực quan · lăn chuột để học tiếp</p>
              </div>
              <a
                href={level.textbook.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-stone-200 p-3 transition hover:bg-stone-50"
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${th.soft} ${th.text}`}>
                  <Icon name="book" className="h-5 w-5" />
                </span>
                <span className="min-w-0 text-xs leading-snug text-stone-500">
                  <span className="block font-bold text-stone-800">{level.textbook.title}</span>
                  {level.textbook.author} — mở PDF
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {level.chapters.map((ch) => (
        <div key={ch.id}>
          {ch.lessons.map((lsn) => {
            const full = lsn.status === 'full'
            const checked = isDone(lsn.id)
            const hasQuiz = (exercisesByLesson[lsn.id]?.length ?? 0) > 0
            if (!full) {
              return (
                <section key={lsn.id} className="mx-auto flex min-h-full w-full max-w-6xl snap-start flex-col px-4 py-4">
                  <div className="card my-auto border-dashed">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="font-bold text-stone-500">{lsn.title}</p>
                        <p className="mt-0.5 text-sm text-stone-500">{lsn.bigPicture}</p>
                      </div>
                      <a
                        href={level.textbook.url}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-sm font-semibold text-stone-500 hover:text-stone-800"
                      >
                        Đọc trong PDF →
                      </a>
                    </div>
                  </div>
                </section>
              )
            }
            return (
              <section
                key={lsn.id}
                ref={(el) => {
                  refs.current[lsn.id] = el
                }}
                className="mx-auto flex min-h-full w-full max-w-6xl snap-start flex-col px-4 py-8"
              >
                <div className="card my-auto grid gap-6 lg:grid-cols-[1fr_280px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`chip ${th.badge}`}>{ch.title}</span>
                      <span className="text-xs text-stone-400">{lsn.minutes} phút</span>
                    </div>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900">{lsn.title}</h3>
                    <p className="mt-2 leading-relaxed text-stone-600">{lsn.bigPicture}</p>
                    {lsn.visual && (
                      <div className="mt-4 h-[28vh] max-h-[380px] md:h-[32vh] lg:h-[36vh] lg:max-h-[460px] overflow-hidden rounded-xl border border-stone-100 bg-white [&_svg]:h-full [&_svg]:w-full">
                        <Visual kind={lsn.visual} color={th.stroke} />
                      </div>
                    )}
                    {lsn.rhythm && (
                      <p className="mt-4 rounded-xl bg-stone-900 px-4 py-3 text-center text-sm font-bold leading-relaxed text-stone-100">
                        “{lsn.rhythm.verse}”
                      </p>
                    )}
                  </div>
                  <aside className="flex flex-row flex-wrap items-start gap-3 lg:sticky lg:top-20 lg:flex-col">
                    <div className="flex w-full flex-col gap-2">
                      <Link
                        to={`/lesson/${lsn.id}`}
                        className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white ${th.solid} hover:opacity-90`}
                      >
                        Chi tiết <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                      {hasQuiz && (
                        <Link
                          to={`/lesson/${lsn.id}#bai-tap`}
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
                        >
                          <Icon name="target" className="h-4 w-4" /> Bài tập ({exercisesByLesson[lsn.id].length})
                        </Link>
                      )}
                      <button
                        onClick={() => toggle(lsn.id)}
                        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                          checked
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                            : 'border-stone-300 bg-white text-stone-500 hover:bg-stone-50'
                        }`}
                      >
                        <Icon name="check" className="h-4 w-4" />
                        {checked ? 'Đã hoàn thành' : 'Đánh dấu xong'}
                      </button>
                      <p className="text-center text-xs text-stone-400 lg:text-left">cuộn xuống để sang bài sau</p>
                      {sourcesByLesson[lsn.id] && (
                        <p className="text-center text-[11px] leading-snug text-stone-400 lg:text-left">Sách: {sourcesByLesson[lsn.id]}</p>
                      )}
                    </div>
                  </aside>
                </div>
              </section>
            )
          })}
        </div>
      ))}

      {level.num < 6 && (
        <section className="mx-auto flex min-h-full w-full max-w-6xl snap-start flex-col px-4 py-10">
          <Link
            to={`/level/l${level.num + 1}`}
            className={`my-auto flex items-center justify-between rounded-2xl p-5 text-white ${themes[levels[level.num].theme].solid}`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Level tiếp theo</p>
              <p className="text-lg font-extrabold">Level {level.num + 1} · {levels[level.num].name}</p>
            </div>
            <Icon name="arrow" className="h-6 w-6" />
          </Link>
        </section>
      )}
    </div>
  )
}
