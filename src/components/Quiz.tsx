import { useState } from 'react'
import type { Exercise } from '../data/content'
import { Icon } from './Icon'
import { Tex } from './Tex'

export function Quiz({ exercises }: { exercises: Exercise[] }) {
  const [picks, setPicks] = useState<Record<number, number>>({})
  const answered = Object.keys(picks).length
  const correct = exercises.reduce((s, ex, i) => s + (picks[i] === ex.answer ? 1 : 0), 0)
  const allDone = answered === exercises.length

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Chọn đáp án — phản hồi ngay sau mỗi câu, kèm giải thích.
        </p>
        <span
          className={`chip ${
            allDone && correct === exercises.length
              ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border border-stone-200 bg-stone-100 text-stone-600'
          }`}
        >
          {correct}/{exercises.length} đúng
        </span>
      </div>

      <ol className="mt-4 space-y-5">
        {exercises.map((ex, qi) => {
          const picked = picks[qi]
          const revealed = picked !== undefined
          return (
            <li key={qi} className="rounded-xl border border-stone-200 p-4">
              <p className="font-semibold leading-relaxed text-stone-800">
                <span className="mr-1.5 text-stone-400">{qi + 1}.</span>
                {ex.q}
              </p>
              {ex.math && <Tex t={ex.math} block />}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {ex.options.map((opt, oi) => {
                  const isAnswer = oi === ex.answer
                  const isPicked = picked === oi
                  let cls = 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                  if (revealed && isAnswer) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                  else if (revealed && isPicked) cls = 'border-rose-300 bg-rose-50 text-rose-700'
                  else if (revealed) cls = 'border-stone-200 bg-stone-50 text-stone-400'
                  return (
                    <button
                      key={oi}
                      disabled={revealed}
                      onClick={() => setPicks((prev) => ({ ...prev, [qi]: oi }))}
                      className={`flex items-center justify-between gap-2 rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition ${cls}`}
                    >
                      <span>{opt}</span>
                      {revealed && isAnswer && <Icon name="check" className="h-4 w-4 shrink-0 text-emerald-600" />}
                    </button>
                  )
                })}
              </div>
              {revealed && (
                <p
                  className={`mt-3 rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                    picked === ex.answer ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                  }`}
                >
                  <span className="font-bold">{picked === ex.answer ? 'Đúng! ' : 'Chưa đúng. '}</span>
                  {ex.explain}
                </p>
              )}
            </li>
          )
        })}
      </ol>

      {allDone && (
        <div className="mt-5 rounded-xl bg-stone-900 p-4 text-center text-stone-100">
          <p className="font-bold">
            {correct === exercises.length
              ? 'Tuyệt đối — não phải của bạn đã ghi hình xong!'
              : `${correct}/${exercises.length} — lật lại phần trực quan ở trên rồi thử lại nhé.`}
          </p>
          <button
            onClick={() => setPicks({})}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-stone-600 px-4 py-2 text-sm font-semibold text-stone-200 transition hover:bg-stone-800"
          >
            <Icon name="reset" className="h-4 w-4" /> Làm lại
          </button>
        </div>
      )}
    </div>
  )
}
