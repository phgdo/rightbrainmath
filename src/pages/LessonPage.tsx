import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { flatLessons, getLesson, stepColors, themes } from '../data/content'
import { exercisesByLesson } from '../data/exercises'
import { sourcesByLesson } from '../data/sources'
import { Icon } from '../components/Icon'
import { Visual } from '../components/Visuals'
import { Tex } from '../components/Tex'
import { Quiz } from '../components/Quiz'
import { saveLastLesson, useProgress } from '../hooks/useProgress'

function Steps({ steps }: { steps: { color: keyof typeof stepColors; label?: string; text: string; math?: string }[] }) {
  return (
    <ol className="mt-3 space-y-2.5">
      {steps.map((s, i) => {
        const c = stepColors[s.color]
        return (
          <li key={i} className={`rounded-xl border p-3.5 ${c.bg}`}>
            <div className="flex items-start gap-3">
              <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${c.dot}`} />
              <div className="min-w-0 flex-1">
                {s.label && <p className={`text-xs font-bold uppercase tracking-wide ${c.text}`}>{s.label}</p>}
                <p className="text-sm leading-relaxed text-stone-700">{s.text}</p>
                {s.math && <Tex t={s.math} block />}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

function BlockTitle({ icon, title, hint }: { icon: string; title: string; hint?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-white">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <h2 className="text-lg font-extrabold text-stone-900">{title}</h2>
      {hint && <span className="text-xs text-stone-400">{hint}</span>}
    </div>
  )
}

function FeynmanCard({ prompts }: { prompts: string[] }) {
  const [ok, setOk] = useState<Set<number>>(new Set())
  return (
    <ol className="mt-4 space-y-2.5">
      {prompts.map((p, i) => {
        const checked = ok.has(i)
        return (
          <li key={i}>
            <button
              onClick={() =>
                setOk((prev) => {
                  const n = new Set(prev)
                  if (n.has(i)) n.delete(i)
                  else n.add(i)
                  return n
                })
              }
              className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition ${checked ? 'border-emerald-300 bg-emerald-50' : 'border-stone-200 bg-white hover:border-stone-300'}`}
            >
              <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-white transition ${checked ? 'border-emerald-600 bg-emerald-600' : 'border-stone-300 bg-white text-transparent'}`}>
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span className="text-sm leading-relaxed text-stone-700">
                <span className={`mr-1.5 font-extrabold ${checked ? 'text-emerald-700' : 'text-stone-400'}`}>{i + 1}.</span>
                {p}
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}

export default function LessonPage() {
  const { lessonId } = useParams()
  const entry = lessonId ? getLesson(lessonId) : undefined
  const { isDone, toggle } = useProgress()

  useEffect(() => {
    if (lessonId) saveLastLesson(lessonId)
  }, [lessonId])

  if (!entry) return <Navigate to="/" replace />
  const { lesson, level, chapter } = entry
  const th = themes[level.theme]
  const flat = flatLessons()
  const idx = flat.findIndex((x) => x.lesson.id === lesson.id)
  const prev = idx > 0 ? flat[idx - 1] : undefined
  const next = idx < flat.length - 1 ? flat[idx + 1] : undefined
  const done = isDone(lesson.id)
  const exercises = exercisesByLesson[lesson.id] ?? []

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-stone-500">
        <Link to="/" className="hover:text-stone-800">Lộ trình</Link>
        <span className="mx-1.5">/</span>
        <Link to={`/level/${level.id}`} className="hover:text-stone-800">Level {level.num}</Link>
        <span className="mx-1.5">/</span>
        <span className="font-semibold text-stone-800">{chapter.title}</span>
      </nav>

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`chip ${th.badge}`}>Level {level.num} · {level.name}</span>
          <span className="text-xs text-stone-400">{lesson.minutes} phút đọc</span>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-stone-900">{lesson.title}</h1>
        {sourcesByLesson[lesson.id] && (
          <p className="mt-2 text-sm text-stone-500">
            Đọc sâu trong giáo trình: <span className={`font-semibold ${th.text}`}>{sourcesByLesson[lesson.id]}</span>
          </p>
        )}
      </header>

      {lesson.status === 'outline' ? (
        <div className="card mt-8">
          <BlockTitle icon="map" title="Bản đồ ý tưởng" hint="bài đầy đủ đang được xây" />
          <p className="mt-3 leading-relaxed text-stone-700">{lesson.bigPicture}</p>
          <div className={`mt-5 rounded-xl p-4 ${th.soft}`}>
            <p className="text-sm font-semibold text-stone-800">Đi tiếp thế nào?</p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              Đọc chương tương ứng trong giáo trình {level.textbook.title} — {level.textbook.author}, rồi dùng 8 phương pháp
              thuận não phải để tự dựng sơ đồ tư duy cho chương đó.
            </p>
            <a
              href={level.textbook.url}
              target="_blank"
              rel="noreferrer"
              className={`mt-3 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white ${th.solid}`}
            >
              Mở giáo trình PDF <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          <section className="card">
            <BlockTitle icon="map" title="Bức tranh lớn" hint="tổng thể trước, chi tiết sau" />
            <p className="mt-3 leading-relaxed text-stone-700">{lesson.bigPicture}</p>
          </section>

          {lesson.visual && (
            <section className="card">
              <BlockTitle icon="geo" title="Nhìn thấy trước khi tính" hint="hình học hóa" />
              <div className="mt-3">
                <Visual kind={lesson.visual} color={th.stroke} />
              </div>
              {lesson.visualCaption && (
                <p className="mt-2 text-center text-sm text-stone-500">{lesson.visualCaption}</p>
              )}
            </section>
          )}

          {lesson.story && (
            <section className="card bg-amber-50/60">
              <BlockTitle icon="chat" title={lesson.story.title} hint="kể chuyện & nhân cách hóa" />
              <p className="mt-3 leading-relaxed text-stone-700">{lesson.story.body}</p>
            </section>
          )}

          {lesson.colorExample && (
            <section className="card">
              <BlockTitle icon="palette" title="Giải có màu sắc" hint="mã hóa bằng màu" />
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{lesson.colorExample.intro}</p>
              <Steps steps={lesson.colorExample.steps} />
            </section>
          )}

          {lesson.rhythm && (
            <section className="card border-l-4 border-l-stone-900">
              <BlockTitle icon="music" title="Mẹo nhớ theo nhịp" hint="gắn với nhịp điệu" />
              <p className="mt-4 text-center text-xl font-bold leading-relaxed text-stone-900">
                “{lesson.rhythm.verse}”
              </p>
              {lesson.rhythm.note && (
                <p className="mt-3 text-center text-sm text-stone-500">{lesson.rhythm.note}</p>
              )}
            </section>
          )}

          {lesson.representative && (
            <section className="card">
              <BlockTitle icon="target" title="Ví dụ đại diện" hint="một bài tiêu biểu, làm chậm" />
              <p className="mt-3 font-semibold leading-relaxed text-stone-800">{lesson.representative.problem}</p>
              <Steps steps={lesson.representative.steps} />
            </section>
          )}

          {lesson.feynman && lesson.feynman.length > 0 && (
            <section className="card bg-stone-900 text-stone-100">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-stone-900">
                  <Icon name="mic" className="h-4 w-4" />
                </span>
                <h2 className="text-lg font-extrabold">Kiểm tra Feynman</h2>
                <span className="text-xs text-stone-400">nói to như đang giảng — tick khi xong</span>
              </div>
              <FeynmanCard prompts={lesson.feynman} />
            </section>
          )}

          {exercises.length > 0 && (
            <section id="bai-tap" className="card scroll-mt-24">
              <BlockTitle icon="target" title="Bài tập" hint="mỗi dạng 2–3 câu tiêu biểu" />
              <div className="mt-4">
                <Quiz exercises={exercises} />
              </div>
            </section>
          )}

          <section className="card">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div>
                <p className="font-bold text-stone-900">{done ? 'Đã hoàn thành bài này' : 'Hoàn thành bài học?'}</p>
                <p className="text-sm text-stone-500">Tiến độ được lưu ngay trên máy bạn.</p>
              </div>
              <button
                onClick={() => toggle(lesson.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition ${done ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-stone-900 hover:bg-stone-700'}`}
              >
                <Icon name={done ? 'reset' : 'check'} className="h-4 w-4" />
                {done ? 'Bỏ đánh dấu' : 'Đánh dấu hoàn thành'}
              </button>
            </div>
          </section>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-stone-200 pt-6">
        {prev ? (
          <Link to={`/lesson/${prev.lesson.id}`} className="group min-w-0">
            <p className="text-xs text-stone-400">← Bài trước</p>
            <p className="truncate text-sm font-semibold text-stone-700 group-hover:text-stone-900">{prev.lesson.title}</p>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/lesson/${next.lesson.id}`} className="group min-w-0 text-right">
            <p className="text-xs text-stone-400">Bài sau →</p>
            <p className="truncate text-sm font-semibold text-stone-700 group-hover:text-stone-900">{next.lesson.title}</p>
          </Link>
        ) : <span />}
      </div>
    </div>
  )
}
