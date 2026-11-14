# RightBrainMath

Trang web học toán 6 levels cho người thuận não phải (mất gốc → cử nhân toán học).
Mọi khái niệm được dạy theo nguyên tắc trực quan: hình học hóa, kể chuyện, tô màu, nhịp điệu, kỹ thuật Feynman.

Frontend thuần (React + TypeScript + Tailwind + KaTeX), không backend, deploy miễn phí trên Vercel.
Tiến độ học lưu bằng `localStorage` ngay trên máy người dùng.

## Lộ trình nội dung

| Level | Nội dung | Giáo trình |
|---|---|---|
| 1. Foundation | Số học, phân số, phần trăm, đại số cơ bản | Prealgebra — OpenStax |
| 2. Intermediate | Hằng đẳng thức, hàm số, hình học, lượng giác | Basic Mathematics — Serge Lang |
| 3. Calculus & Reasoning | Logic, chứng minh, giới hạn, đạo hàm, tích phân | Calculus — Stewart |
| 4. Core Undergraduate | Đại số tuyến tính, toán rời rạc, quy nạp | Linear Algebra Done Right — Axler |
| 5. Advanced Undergraduate | Giải tích thực (ε-δ, completeness), nhóm | Understanding Analysis — Abbott |
| 6. Specialization | Số nguyên tố, trường mở rộng, Galois | Abstract Algebra — Dummit & Foote |

## Chạy máy local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build production vào dist/
npm run preview  # xem thử bản build
```

## Deploy lên Vercel (free)

### Cách 1 — qua GitHub (khuyên dùng)
1. Push repo này lên GitHub:
   ```bash
   git init && git add . && git commit -m "RightBrainMath" && git push
   ```
2. Vào [vercel.com/new](https://vercel.com/new) → import repo.
3. Vercel tự nhận Vite — giữ mặc định, nhấn **Deploy**. Xong.

File `vercel.json` đã cấu hình sẵn rewrite SPA nên mọi route (`/level/l1`, `/lesson/...`) hoạt động ngay.

### Cách 2 — qua Vercel CLI
```bash
npm i -g vercel
vercel        # lần đầu: trả lời vài câu, xong nhận URL
vercel --prod # deploy production
```

## Mở rộng nội dung

Toàn bộ nội dung nằm trong `src/data/content.ts` (một file duy nhất).

- **Thêm bài học đầy đủ**: copy 1 object `lesson` có `status: 'full'` và điền các mục:
  `bigPicture` (tổng thể) → `visual` (hình SVG, chọn 1 trong 15 loại có sẵn) → `story` (câu chuyện)
  → `colorExample` (giải có màu) → `rhythm` (vần điệu) → `representative` (ví dụ đại diện) → `feynman` (câu hỏi tự giảng).
- **Thêm hình trực quan mới**: thêm 1 hàm SVG trong `src/components/Visuals.tsx` và 1 giá trị `VisualKind`.
- **Nâng bài outline thành full**: đổi `status` từ `'outline'` thành `'full'` và điền nội dung.
