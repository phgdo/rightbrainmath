import { Link, useParams } from 'react-router-dom'
import { flatLessons, levels, themes } from '../data/content'
import { Icon } from '../components/Icon'
import { useProgress } from '../hooks/useProgress'

export default function LevelPage() {
  const { levelId } = useParams()
  const level = levels.find((l) => l.id === levelId)
  const { done, isDone, toggle } = useProgress()

  if (!level) {
    return <div className="mx-auto max-w-3xl px-4 py-20 text-center text-stone-500">Không tìm thấy level.</div>
  }

  const th = themes[level.theme]
  const ls = flatLessons().filter((x) => x.level.id === level.id)
  const pct = ls.length ? Math.round((ls.filter((x) => done.has(x.lesson.id)).length / ls.length) * 100) : 0

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-stone-500">
        <Link to="/" className="hover:text-stone-800">Lộ trình</Link>
        <span className="mx-1.5">/</span>
        <span className="font-semibold text-stone-800">Level {level.num}</span>
      </nav>

      <header className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-extrabold text-white ${th.solid}`}>
          {level.num}
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">{level.name}</h1>
          <p className={`text-lg font-semibold ${th.text}`}>{level.nameEn}</p>
          <p className="mt-2 text-stone-600">{level.tagline}</p>
        </div>
      </header>

      <div className="card mt-6 border-l-4" style={{ borderLeftColor: th.stroke }}>
        <p className="text-xs font-bold uppercase tracking-wide text-stone-500">Sau level này bạn làm được gì</p>
        <p className="mt-1.5 leading-relaxed text-stone-700">{level.outcome}</p>
      </div>

      <div className="card mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg ${th.soft} ${th.text}`}>
            <Icon name="book" className="h-5 w-5" />
          </span>
          <div>
            <p className="font-bold text-stone-900">{level.textbook.title}</p>
            <p className="text-sm text-stone-500">
              {level.textbook.author}
              {level.textbook.note ? ` — ${level.textbook.note}` : ''}
            </p>
          </div>
        </div>
        <a
          href={level.textbook.url}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white ${th.solid}`}
        >
          Mở giáo trình PDF <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 space-y-8">
        {level.chapters.map((ch, ci) => (
          <section key={ch.id}>
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-extrabold text-stone-900">
                <span className={th.text}>{level.num}.{ci + 1}</span> {ch.title}
              </h2>
            </div>
            <p className={`mt-1 rounded-lg px-3 py-2 text-sm leading-relaxed text-stone-600 ${th.soft}`}>
              <span className={`font-semibold ${th.text}`}>Ý chính: </span>
              {ch.bigIdea}
            </p>
            <ul className="mt-3 space-y-2">
              {ch.lessons.map((lsn) => {
                const full = lsn.status === 'full'
                const checked = isDone(lsn.id)
                const body = (
                  <>
                    <div className="min-w-0 flex-1">
                      <p className={`font-semibold ${full ? 'text-stone-900' : 'text-stone-500'}`}>{lsn.title}</p>
                      <p className="mt-0.5 line-clamp-2 text-sm text-stone-500">{lsn.bigPicture}</p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="text-xs text-stone-400">{lsn.minutes} phút</span>
                        {full ? (
                          <span className={`chip ${th.badge}`}>bài trực quan</span>
                        ) : (
                          <span className="chip border border-stone-200 bg-stone-100 text-stone-500">bản đồ ý tưởng</span>
                        )}
                      </div>
                    </div>
                    {checked && <Icon name="check" className="h-5 w-5 shrink-0 text-emerald-600" />}
                  </>
                )
                return (
                  <li key={lsn.id} className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 transition hover:shadow-sm">
                    {full && (
                      <button
                        onClick={() => toggle(lsn.id)}
                        aria-label="Đánh dấu hoàn thành"
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${checked ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-stone-300 bg-white text-transparent hover:border-stone-400'}`}
                      >
                        <Icon name="check" className="h-4 w-4" />
                      </button>
                    )}
                    {full ? (
                      <Link to={`/lesson/${lsn.id}`} className="flex min-w-0 flex-1 items-start gap-3">
                        {body}
                      </Link>
                    ) : (
                      <div className="flex min-w-0 flex-1 items-start gap-3">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5">
        <div className="flex items-center justify-between text-sm font-semibold text-stone-700">
          <span>Tiến độ level {level.num}</span>
          <span className={th.text}>{pct}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-100">
          <div className={`h-full rounded-full ${th.bar}`} style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-4 flex justify-between">
          {level.num > 1 && (
            <Link to={`/level/l${level.num - 1}`} className="text-sm font-semibold text-stone-500 hover:text-stone-800">
              ← Level {level.num - 1}
            </Link>
          )}
          {level.num < 6 && (
            <Link to={`/level/l${level.num + 1}`} className="ml-auto text-sm font-semibold text-stone-500 hover:text-stone-800">
              Level {level.num + 1} →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
