import { Link } from 'react-router-dom'
import { flatLessons, fullLessons, levels, methods, themes, totalLessons } from '../data/content'
import { Icon } from '../components/Icon'
import { getLastLesson, useProgress } from '../hooks/useProgress'
import { getLesson } from '../data/content'

function progressOfLevel(levelId: string, done: Set<string>) {
  const ls = flatLessons().filter((x) => x.level.id === levelId)
  return { total: ls.length, done: ls.filter((x) => done.has(x.lesson.id)).length }
}

export default function Home() {
  const { done } = useProgress()
  const lastId = getLastLesson()
  const last = lastId ? getLesson(lastId) : undefined
  const doneCount = done.size

  return (
    <div>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="chip border border-amber-200 bg-amber-50 text-amber-700">
            Dành cho người thuận não phải · bắt đầu từ mất gốc
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-5xl">
            6 chặng đường, từ con số đầu tiên đến cử nhân toán học
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
            Không học vẹt công thức. Mỗi khái niệm được <strong className="text-stone-800">hình học hóa</strong>, được{' '}
            <strong className="text-stone-800">kể thành chuyện</strong>, được <strong className="text-stone-800">tô màu</strong> và
            gắn <strong className="text-stone-800">nhịp điệu</strong> — theo đúng cách não phải tiếp nhận.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/level/l1"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-stone-700"
            >
              Bắt đầu từ Level 1 <Icon name="arrow" className="h-4 w-4" />
            </Link>
            {last && (
              <Link
                to={`/lesson/${last.lesson.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                Tiếp tục: {last.lesson.title}
              </Link>
            )}
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: 'Levels', v: '6' },
              { k: 'Chương', v: String(levels.reduce((s, l) => s + l.chapters.length, 0)) },
              { k: 'Bài học', v: String(totalLessons) },
              { k: 'Bài hoàn thành', v: `${doneCount}/${totalLessons}` },
            ].map((s) => (
              <div key={s.k} className="card">
                <dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">{s.k}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-stone-900">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">Lộ trình 6 levels</h2>
        <p className="mt-2 max-w-2xl text-stone-600">
          Đi theo thứ tự — mỗi chặng là nền móng của chặng sau. Giáo trình chính đi kèm để đọc sâu sau khi học bản đồ.
        </p>
        <ol className="mt-8 space-y-5">
          {levels.map((lv) => {
            const th = themes[lv.theme]
            const p = progressOfLevel(lv.id, done)
            const fullCount = flatLessons().filter((x) => x.level.id === lv.id && x.lesson.status === 'full').length
            return (
              <li key={lv.id}>
                <Link
                  to={`/level/${lv.id}`}
                  className={`card flex flex-col gap-4 ring-2 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center ${th.ring}`}
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold text-white ${th.solid}`}>
                    {lv.num}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-stone-900">Level {lv.num} · {lv.name}</h3>
                      <span className="text-sm text-stone-500">{lv.nameEn}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">{lv.tagline}</p>
                    <p className="mt-1 text-xs text-stone-500">
                      {lv.chapters.length} chương · {fullCount} bài trực quan đầy đủ · giáo trình: {lv.textbook.title} — {lv.textbook.author}
                    </p>
                    <div className="mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-stone-100">
                      <div className={`h-full rounded-full ${th.bar}`} style={{ width: `${p.total ? (p.done / p.total) * 100 : 0}%` }} />
                    </div>
                  </div>
                  <Icon name="arrow" className="h-5 w-5 shrink-0 text-stone-400" />
                </Link>
              </li>
            )
          })}
        </ol>
        <p className="mt-4 text-sm text-stone-500">
          {fullLessons} bài đã được xây dựng đầy đủ theo phương pháp trực quan — các bài còn lại hiển thị bản đồ ý tưởng và
          hướng dẫn đọc giáo trình.
        </p>
      </section>

      <section id="phuong-phap" className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">8 phương pháp cho não phải</h2>
          <p className="mt-2 max-w-2xl text-stone-600">
            Mỗi bài học trong site đều được thiết kế theo các nguyên tắc dưới đây. Khi tự học ngoài site, hãy dùng lại đúng quy trình này.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {methods.map((m) => (
              <div key={m.title} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white">
                  <Icon name={m.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-bold text-stone-900">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
