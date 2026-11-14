import { Icon } from '../components/Icon'
import { methods } from '../data/content'

export default function MethodsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">8 phương pháp cho não phải</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
        Toàn bộ bài học trong RightBrainMath đều được thiết kế theo 8 nguyên tắc dưới đây. Ở mỗi level: lăn chuột để lướt
        qua các bài cô đọng với hoạt ảnh — bấm <strong>Chi tiết</strong> để đọc sâu — bấm <strong>Bài tập</strong> để kiểm
        tra ngay. Tiến độ và level bạn đang học được tự động lưu trên máy.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {methods.map((m) => (
          <div key={m.title} className="card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white">
              <Icon name={m.icon} className="h-5 w-5" />
            </span>
            <h2 className="mt-3 font-bold text-stone-900">{m.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
