export type ThemeKey = 'sky' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan'
export type ColorKey = 'blue' | 'green' | 'amber' | 'rose' | 'slate'
export type VisualKind =
  | 'numberline' | 'pizza' | 'balance' | 'absquare' | 'machine'
  | 'unitcircle' | 'domino' | 'zeno' | 'tangent' | 'matrix'
  | 'ladder' | 'realline' | 'epsband' | 'sieve' | 'tower'
  | 'stretch' | 'tripercent' | 'cross' | 'translate' | 'parabola'
  | 'similar' | 'slope' | 'quantify' | 'extrema' | 'riemann'
  | 'basis' | 'eigen' | 'clock' | 'donut' | 'permute' | 'distribute'
  | 'rounding' | 'staircase'

export interface Step { label?: string; color: ColorKey; text: string; math?: string }

export interface Exercise { q: string; math?: string; options: string[]; answer: number; explain: string }

export interface Lesson {
  id: string
  title: string
  minutes: number
  status: 'full' | 'outline'
  bigPicture: string
  visual?: VisualKind
  visualCaption?: string
  story?: { title: string; body: string }
  colorExample?: { intro: string; steps: Step[] }
  rhythm?: { verse: string; note?: string }
  representative?: { problem: string; steps: Step[] }
  feynman?: string[]
}

export interface Chapter { id: string; title: string; bigIdea: string; lessons: Lesson[] }
export interface Textbook { title: string; author: string; url: string; note?: string }

export interface Level {
  id: string
  num: number
  name: string
  nameEn: string
  tagline: string
  outcome: string
  theme: ThemeKey
  textbook: Textbook
  chapters: Chapter[]
}

export const themes: Record<ThemeKey, { badge: string; solid: string; text: string; soft: string; bar: string; ring: string; stroke: string }> = {
  sky:     { badge: 'bg-sky-100 text-sky-700 border border-sky-200',     solid: 'bg-sky-600',     text: 'text-sky-700',     soft: 'bg-sky-50',     bar: 'bg-sky-500',     ring: 'hover:ring-sky-300',     stroke: '#0284c7' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700 border border-emerald-200', solid: 'bg-emerald-600', text: 'text-emerald-700', soft: 'bg-emerald-50', bar: 'bg-emerald-500', ring: 'hover:ring-emerald-300', stroke: '#059669' },
  amber:   { badge: 'bg-amber-100 text-amber-700 border border-amber-200', solid: 'bg-amber-500', text: 'text-amber-700', soft: 'bg-amber-50', bar: 'bg-amber-500', ring: 'hover:ring-amber-300', stroke: '#d97706' },
  rose:    { badge: 'bg-rose-100 text-rose-700 border border-rose-200', solid: 'bg-rose-600', text: 'text-rose-700', soft: 'bg-rose-50', bar: 'bg-rose-500', ring: 'hover:ring-rose-300', stroke: '#e11d48' },
  violet:  { badge: 'bg-violet-100 text-violet-700 border border-violet-200', solid: 'bg-violet-600', text: 'text-violet-700', soft: 'bg-violet-50', bar: 'bg-violet-500', ring: 'hover:ring-violet-300', stroke: '#7c3aed' },
  cyan:    { badge: 'bg-cyan-100 text-cyan-700 border border-cyan-200', solid: 'bg-cyan-600', text: 'text-cyan-700', soft: 'bg-cyan-50', bar: 'bg-cyan-500', ring: 'hover:ring-cyan-300', stroke: '#0891b2' },
}

export const stepColors: Record<ColorKey, { dot: string; text: string; bg: string }> = {
  blue:  { dot: 'bg-blue-500',  text: 'text-blue-700',  bg: 'bg-blue-50 border-blue-200' },
  green: { dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
  amber: { dot: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
  rose:  { dot: 'bg-rose-500',  text: 'text-rose-700',  bg: 'bg-rose-50 border-rose-200' },
  slate: { dot: 'bg-stone-500', text: 'text-stone-700', bg: 'bg-stone-100 border-stone-200' },
}

const R = String.raw

export const levels: Level[] = [
  {
    id: 'l1', num: 1,
    name: 'Foundation', nameEn: 'Nền móng',
    tagline: 'Từ con số đầu tiên đến phương trình — xây móng cho cả tòa nhà toán học.',
    outcome: 'Tính thành thạo số nguyên, phân số, phần trăm, tỷ lệ; tự tin giải phương trình bậc nhất một ẩn và đọc được đề bài thành phương trình.',
    theme: 'sky',
    textbook: { title: 'Prealgebra', author: 'OpenStax', url: 'https://assets.openstax.org/oscms-prodcms/media/documents/Prealgebra-OP_oYhyXVE.pdf', note: 'Miễn phí, tiếng Anh, cực kỳ nhiều ví dụ từng bước.' },
    chapters: [
      {
        id: 'l1c1', title: 'Số & Số nguyên', bigIdea: 'Số là điểm trên trục số. Mọi phép tính đều là một hành động di chuyển trên trục đó.',
        lessons: [
          {
            id: 'l1c1s1', title: 'Số âm: tầng hầm của tòa nhà số', minutes: 20, status: 'full',
            bigPicture: 'Trước khi cộng trừ thành thạo, bạn chỉ cần một bức tranh: trục số vô tận về hai phía. Số âm không phải “số ít hơn 0” mà là CHỈ HƯỚNG — bước sang trái thay vì phải. Cộng trừ số âm = đi thang máy trong tòa nhà số.',
            visual: 'numberline',
            visualCaption: 'Phép tính 3 + (−5): đi phải 3 bước, rồi đi trái 5 bước — dừng ở −2.',
            story: {
              title: 'Tòa thang máy số',
              body: 'Hãy tưởng tượng một tòa nhà có tầng trệt là 0, tầng lầu là số dương, tầng hầm là số âm. Thang máy chỉ biết hai động tác: đi lên (cộng số dương) và đi xuống (cộng số âm). Bạn đang ở tầng −2, đi lên 7 tầng → tầng 5. “Trừ một số âm” nghe lạ, nhưng nghĩa là “hủy lệnh đi xuống” — tức đi lên. Đó là lý do −2 − (−5) = −2 + 5 = 3.',
            },
            colorExample: {
              intro: 'Tính: (−3) + (−5) + (+8). Mẹo não phải: gom cùng màu lại trước khi tính.',
              steps: [
                { label: 'Gom nhóm số âm', color: 'rose', text: 'Hai số âm là “hai lệnh đi xuống”:', math: R`(-3) + (-5) = -8` },
                { label: 'Gom nhóm số dương', color: 'blue', text: 'Chỉ có một số dương:', math: R`(+8)` },
                { label: 'Khác dấu → lấy hiệu', color: 'amber', text: 'Đi xuống 8 tầng rồi đi lên 8 tầng — huề:', math: R`(-8) + 8 = 0` },
              ],
            },
            rhythm: { verse: 'Cùng dấu: cộng lại, giữ nguyên dấu. Khác dấu: lấy hiệu, dấu theo “đứa to”.', note: '“Đứa to” = số có trị tuyệt đối lớn hơn. Đọc nhịp 4/4: cùng-dấu cộng-lại / giữ-nguyên-dấu.' },
            representative: {
              problem: 'Nhiệt độ lúc sáng sớm là −4°C. Buổi trưa tăng 9°C, tối lại giảm 7°C. Nhiệt độ tối là bao nhiêu?',
              steps: [
                { color: 'blue', text: 'Viết thành một dòng trên trục số:', math: R`-4 + 9 - 7` },
                { color: 'green', text: 'Đi phải 9 từ −4 → đạt 5.', math: R`-4 + 9 = 5` },
                { color: 'rose', text: 'Đi trái 7 từ 5 → đạt −2.', math: R`5 - 7 = -2` },
              ],
            },
            feynman: [
              'Giải thích cho “em cùng lớp” tại sao −3 LỚN HƠN −8, chỉ dùng hình trục số, không được dùng chữ “nhỏ hơn”.',
              'Thang máy khởi hành ở tầng −2, đi lên 3 tầng rồi đi xuống 5 tầng. Kể thành câu chuyện và nêu tầng đến.',
              'Tại sao “trừ một số âm” lại biến thành “cộng”? Hãy dùng lời hủy lệnh đi xuống để nói lại.',
            ],
          },
          {
            id: 'l1c1s2', title: 'Bốn phép tính & thứ tự ưu tiên', minutes: 20, status: 'full',
            bigPicture: 'Cộng, trừ là đi bộ trên trục số; nhân, chia là PHÓNG TO / THU NHỎ cả trục. Thứ tự ưu tiên (ngoặc → nhân chia → cộng trừ) là quy ước giao thông toàn cầu: xử lý “độ lớn biến đổi” trước, rồi mới “đi bộ”.',
            visual: 'stretch',
            visualCaption: 'Nhân 2 là phóng to trục gấp đôi: 2 × 2 × 2 = 2³ = 8.',
            story: {
              title: 'Đi bộ và phóng to',
              body: 'Trên trục số, cộng 3 nghĩa là đi bộ 3 bước. Nhưng nhân 3 nghĩa là KÉO CẢ TRỤC phóng to gấp 3 — mọi mốc cùng dãn ra. Khi biểu thức có cả hai loại hành động, phải “kéo trục” (nhân chia) trước rồi mới “đi bộ” (cộng trừ), nếu không kết quả tùy tiện mỗi người một kiểu. Vì thế thế giới thống nhất thứ tự: NGOẶC là ông vua, NHÂN CHIA là quý tộc, CỘNG TRỪ là dân thường — ai “cao quý” làm trước.',
            },
            colorExample: {
              intro: 'Tính: 2 + 3 × 4 − (5 − 2). Ba màu = ba tầng ưu tiên.',
              steps: [
                { label: 'Tầng 1: NGOẶC', color: 'amber', text: 'Giải trong ngoặc trước tiên:', math: R`(5 - 2) = 3` },
                { label: 'Tầng 2: NHÂN CHIA', color: 'green', text: 'Kéo trục trước khi đi bộ:', math: R`3 \times 4 = 12` },
                { label: 'Tầng 3: CỘNG TRỪ', color: 'blue', text: 'Đi bộ trái–phải:', math: R`2 + 12 - 3 = 11` },
              ],
            },
            rhythm: { verse: 'Ngoặc là vua, nhân chia quý tộc, cộng trừ dân thường.', note: 'Đọc nhịp 3 nhát: vua → quý tộc → dân thường. Cùng tầng thì tính trái sang phải.' },
            representative: {
              problem: 'Mua 2 hộp sữa giá 24.000đ/hộp và 1 cái bánh 15.000đ. Tổng bao nhiêu?',
              steps: [
                { color: 'green', text: 'Nhân trước (2 hộp):', math: R`2 \times 24\,000 = 48\,000` },
                { color: 'blue', text: 'Cộng sau (thêm bánh):', math: R`48\,000 + 15\,000 = 63\,000` },
                { color: 'amber', text: 'Viết một dòng: 2 × 24.000 + 15.000 — thứ tự ưu tiên đảm bảo ai tính cũng ra 63.000.' },
              ],
            },
            feynman: [
              'Giải thích vì sao 2 + 3 × 4 KHÔNG phải 20, dùng hình ảnh “kéo trục trước, đi bộ sau”.',
              'Đọc to vần 3 tầng ưu tiên và tự cho 1 ví dụ có cả ngoặc.',
              'Vì sao cùng tầng cộng trừ phải tính trái sang phải? Thử 10 − 4 + 3 hai cách.',
            ],
          },
          {
            id: 'l1c1s3', title: 'Ước lượng & làm tròn: toán của siêu thị', minutes: 15, status: 'full',
            bigPicture: 'Đời thực không cần chính xác từng xu — cần ĐỦ GẦN để ra quyết định. Làm tròn = thay số bằng “số dễ đọc” gần nó (47 → 50). Ước lượng = tính nhẩm với số đã làm tròn, để biết trước kết quả “nằm đâu” — rồi kiểm tra xem đáp án chính xác có hợp lý không.',
            visual: 'rounding',
            visualCaption: '47 đứng gần 50 hơn 40 — làm tròn lên. ≥ 5 thì lên, < 5 thì xuống.',
            story: {
              title: 'Người mua không bao giờ bị mất tiền',
              body: 'Mẹ dặn “chỉ được tiêu 300 nghìn”. Giỏ hàng: 47k + 92k + 118k + 65k. Trước khi bấm máy tính, làm tròn tới chục: 50 + 90 + 120 + 70 = 330 nghìn — HƠN 300! Bỏ bớt một món ngay, không cần tính chính xác. Ước lượng còn là “cảnh sát giao thông” cho đáp án: máy tính hiện 29 × 12 = 3 480 — bạn bắn ngay: “sai, vì 29 ≈ 30 và 30 × 12 = 360!”. Người làm tròn giỏi hiếm khi bị số đùa cợt.',
            },
            colorExample: {
              intro: 'Ước lượng: 47 + 92 + 118 + 65.',
              steps: [
                { label: 'Làm tròn tới chục', color: 'blue', text: 'Chọn số dễ đọc gần nhất:', math: R`47 \to 50,\; 92 \to 90,\; 118 \to 120,\; 65 \to 70` },
                { label: 'Cộng nhẩm', color: 'green', text: 'Số dễ đọc cộng như chơi:', math: R`50 + 90 + 120 + 70 = 330` },
                { label: 'Kết luận', color: 'amber', text: 'Kết quả thật sẽ “rất gần” 330 — dùng để ra quyết định hoặc kiểm tra máy tính.' },
              ],
            },
            rhythm: { verse: 'Làm tròn số dễ nhớ, cộng nhẩm nhanh gọn lỏn — chênh đôi chút không sao, đủ chắc để ra tay.', note: 'Quy tắc 5: ≥ 5 làm tròn lên, < 5 làm tròn xuống. 47 → 50, 92 → 90.' },
            representative: {
              problem: 'Máy tính hiện 29 × 12 = 3 480. Sai ở đâu mà nghi ngờ?',
              steps: [
                { color: 'blue', text: 'Ước lượng:', math: R`29 \approx 30,\quad 30 \times 12 = 360` },
                { color: 'rose', text: 'Máy hiện 3 480 — lớn gấp ~10 lần ước lượng → gần như chắc chắn gõ thừa một chữ số.' },
                { color: 'green', text: 'Thực tế 29 × 12 = 348. Ước lượng đã cứu bạn khỏi trả lời sai vì lỗi gõ.' },
              ],
            },
            feynman: [
              'Kể lại chuyện giỏ hàng siêu thị và giải thích vì sao ước lượng đủ để quyết định.',
              'Nêu quy tắc làm tròn 5 và làm tròn 4 số bất kỳ bạn thấy quanh phòng.',
              'Giải thích “cảnh sát giao thông cho đáp án” — ước lượng bắt lỗi máy tính thế nào?',
            ],
          },
          {
            id: 'l1c1s4', title: 'Ước lượng × Độ lớn: làm quen “triệu – tỷ”', minutes: 10, status: 'full',
            bigPicture: 'Trước khi tính, hãy CÂN ĐO độ lớn: 1 nghìn = 10 × 1 trăm; 1 triệu = 1.000 × 1 nghìn; 1 tỷ = 1.000 × 1 triệu. Não phải cần thang bậc: số to hơn bao nhiêu so với số nhỏ? Nhân 10 là “thêm một chữ số 0”, nhân 1.000 là “thêm ba”.',
            visual: 'staircase',
            visualCaption: 'Thang bậc của tiền: mỗi bậc nhân 10 — nghìn, triệu, tỷ.',
            story: {
              title: 'Thang bậc của tiền',
              body: 'Hãy đứng đầu thang: 1 đơn vị → 10 → 100 → 1 nghìn → 10 nghìn → 100 nghìn → 1 TRIỆU → 10 triệu → 100 triệu → 1 TỶ. Mỗi bậc là nhân 10 — thêm một “sàn nhà”. Trăm nghìn là tiền mua điện thoại; 10 triệu là tiền mua xe máy; 1 tỷ là tiền mua căn nhà nhỏ. Khi đọc tin tức “cán bộ chiếm đoạt 30 tỷ”, não phải của bạn hình dung được: bằng 30 căn nhà. Không cần tính chính xác — chỉ cần THANG BẬC để số không còn là những con chữ vô nghĩa.',
            },
            colorExample: {
              intro: 'Sắp theo độ lớn: 2.500.000; 250.000; 2 tỷ; 25 triệu.',
              steps: [
                { label: 'Đếm số “sàn nhà”', color: 'blue', text: 'Đếm nhóm 3 chữ số: 250.000 (trăm nghìn) < 2.500.000 (2,5 triệu) < 25 triệu < 2 tỷ.' },
                { label: 'Đổi thước so sánh', color: 'green', text: '2 tỷ = 2.000 triệu; 25 triệu = 0,025 tỷ — cùng một thang, khác đơn vị.' },
                { label: 'Gắn đời thực', color: 'amber', text: '250k ≈ điện thoại cũ; 2,5 triệu ≈ xe đạp điện; 25 triệu ≈ laptop cao cấp; 2 tỷ ≈ căn hộ.' },
              ],
            },
            rhythm: { verse: 'Nhân 10 thêm một sàn — nghìn, triệu, tỷ leo thang.', note: 'Mỗi “sàn” = nhóm 3 chữ số. Đếm nhóm là biết độ lớn, không cần đọc từng chữ số.' },
            representative: {
              problem: 'Một chiếc xe máy 40 triệu và một căn nhà 4 tỷ. Nhà đắt gấp bao nhiêu lần xe?',
              steps: [
                { color: 'blue', text: 'Đổi cùng thang: 4 tỷ = 4.000 triệu.' },
                { color: 'green', text: 'Chia:', math: R`4\,000 \div 40 = 100` },
                { color: 'amber', text: 'Nhà đắt gấp 100 lần — cảm giác độ lớn này chính xác hơn mọi con số viết dài.' },
              ],
            },
            feynman: [
              'Đọc to thang bậc: nghìn → triệu → tỷ, mỗi bậc nhân bao nhiêu?',
              'Gắn 5 con số tiền vào đồ vật thật quanh bạn để “cảm” độ lớn.',
              'Vì sao 2.500.000 và 250.000 chênh nhau đúng một “sàn nhà”?',
            ],
          },
        ],
      },
      {
        id: 'l1c2', title: 'Phân số & Số thập phân', bigIdea: 'Phân số là phép chia chưa làm xong: 3/4 vừa là “3 miếng trên 4 miếng” vừa là 3 ÷ 4. Thập phân là phân số với mẫu “đẹp” (10, 100, 1000). Mẫu số giống nhau = cùng đơn vị đo.',
        lessons: [
          {
            id: 'l1c2s1', title: 'Phân số: cái bánh và ý nghĩa trên–dưới', minutes: 25, status: 'full',
            bigPicture: 'Quy tắc phân số toàn bộ nằm trong một hình pizza: mẫu số là “dao cắt” (cắt càng vụn, miếng càng nhỏ), tử số là “số miếng lấy”. Cộng trừ cần cùng mẫu vì không thể cộng miếng to với miếng nhỏ.',
            visual: 'pizza',
            visualCaption: '1/2 của chiếc bánh tròn = 2/4 của chiếc bánh cắt 4 — cùng lượng, khác cách cắt.',
            story: {
              title: 'Hai anh em cắt bánh',
              body: 'Anh cắt bánh làm 2, em cắt bánh làm 4. Miếng của anh TO, miếng của em NHỎ, nên lấy 2 miếng của em mới bằng 1 miếng của anh: 2/4 = 1/2. Khi cộng bánh của hai người, phải cắt lại theo cùng một dao (quy đồng): 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Nhân phân số thì dễ nhất — chỉ cần “miếng của miếng”: 1/2 của 3/4 là cắt nhỏ thêm lần nữa.',
            },
            colorExample: {
              intro: 'Tính: 2/3 + 1/4. Tử và mẫu có vai trò màu sắc riêng: mẫu (dao cắt) tô xanh, tử (số miếng) tô đỏ.',
              steps: [
                { label: 'Quy đồng mẫu số', color: 'green', text: 'Cùng dùng dao cắt 12:', math: R`\frac{2}{3} = \frac{8}{12}, \quad \frac{1}{4} = \frac{3}{12}` },
                { label: 'Cộng các miếng', color: 'blue', text: 'Giờ mọi miếng đều cùng kích thước:', math: R`\frac{8}{12} + \frac{3}{12} = \frac{11}{12}` },
                { label: 'Kiểm tra bằng mắt', color: 'amber', text: '11 miếng trên 12 — còn thiếu đúng 1 miếng nhỏ. Hợp lý!' },
              ],
            },
            rhythm: { verse: 'Cộng trừ phân số, đừng vội vàng — quy đồng mẫu trước, tử tính sau. Nhân thì trên nhân trên, dưới nhân dưới. Chia thì lật ngược rồi nhân.', note: 'Vần điệu 4 câu, đọc to 3 lần là nhớ đời.' },
            representative: {
              problem: '3/4 cái bánh giá 45.000đ. Cả cái bánh giá bao nhiêu?',
              steps: [
                { color: 'blue', text: '3/4 bánh = 3 miếng → 1 miếng = 45.000 ÷ 3 = 15.000đ.' },
                { color: 'green', text: 'Cả bánh = 4 miếng → 15.000 × 4 = 60.000đ.', math: R`45\,000 \div \frac{3}{4} = 60\,000` },
                { color: 'amber', text: 'Mấu chốt: chia cho phân số = nhân với số đảo ngược.' },
              ],
            },
            feynman: [
              'Vẽ pizza giải thích tại sao 2/3 + 1/4 KHÔNG phải 3/7.',
              'Giải thích “chia cho phân số thì lật ngược” bằng ý “bao nhiêu miếng 1/4 nằm trong 3 miếng”?',
              'Nói to vần điệu quy tắc cộng–nhân–chia phân số mà không nhìn tài liệu.',
            ],
          },
          {
            id: 'l1c2s2', title: 'Số thập phân: phân số với mẫu số “đẹp”', minutes: 20, status: 'full',
            bigPicture: 'Số thập phân chỉ là phân số có mẫu 10–100–1000: 0,3 = 3/10; 0,07 = 7/100. Nhờ mẫu “đẹp”, cộng trừ dễ như số nguyên — điều kiện duy nhất: THẲNG HÀNG dấu phẩy (cột cùng tên thẳng nhau). Nhân thì tính như số nguyên rồi “trả lãi” dấu phẩy theo tổng số chữ số sau phẩy.',
            visual: 'pizza',
            visualCaption: '0,5 = 5/10 = 1/2 — thập phân và phân số là cùng một lượng, khác cách viết.',
            story: {
              title: 'Tiền Việt là thầy dạy thập phân',
              body: '1.500đ = 1 nghìn rưỡi = 1,5 nghìn. Khi bạn cộng hóa đơn, bạn tự động thẳng hàng: nghìn với nghìn, trăm với trăm, chục với chục. Dấu phẩy thập phân chỉ là “biên giới” — bên trái là phần nguyên, bên phải là các phần “miếng vụn” theo mũ của 10. Nhân thập phân có mẹo: 0,3 × 0,2 — bỏ phẩy, tính 3 × 2 = 6, rồi đếm tổng 2 chữ số sau phẩy ở hai thừa số để “gắn phẩy lại”: 0,06. Đó chính là nhân phân số: 3/10 × 2/10 = 6/100.',
            },
            colorExample: {
              intro: 'Tính: 12,5 + 3,75 + 0,4.',
              steps: [
                { label: 'Thẳng hàng phẩy', color: 'blue', text: 'Cột cùng tên thẳng nhau (chục–đơn vị–phần 10–phần 100):' },
                { label: 'Cộng như số nguyên', color: 'green', text: 'Bỏ qua phẩy, cộng từng cột từ phải sang trái, có nhớ.' },
                { label: 'Trả phẩy về đúng hàng', color: 'amber', text: 'Dấu phẩy xếp thẳng cột với các số gốc:', math: R`12{,}5 + 3{,}75 + 0{,}4 = 16{,}65` },
              ],
            },
            rhythm: { verse: 'Cộng trừ: phẩy thẳng hàng — cột cùng tên gặp nhau. Nhân: nhân như thường, đếm phẩy rồi gắn lại.', note: 'Chia thập phân: dời phẩy của số chia sao cho thành số nguyên, dời phẩy số bị chia Y HỆT bao nhiêu bước.' },
            representative: {
              problem: '0,3 × 0,2 = ? — câu hỏi đánh lừa cả lớp học.',
              steps: [
                { color: 'rose', text: 'Trực giác sai thường gặp: “0,06? nhỏ quá — chắc 0,6!”' },
                { color: 'blue', text: 'Phân số soi đường:', math: R`\frac{3}{10} \times \frac{2}{10} = \frac{6}{100} = 0{,}06` },
                { color: 'green', text: 'Quy tắc: 3 × 2 = 6, tổng 2 chữ số sau phẩy → gắn phẩy → 0,06. Nhân hai số nhỏ hơn 1 cho kết quả CÒN NHỎ HƠN nữa — hợp lý!' },
              ],
            },
            feynman: [
              'Giải thích vì sao 0,5 và 1/2 là “cùng một lượng, khác cách viết”.',
              'Kể quy tắc “đếm phẩy rồi gắn lại” khi nhân thập phân, kèm ví dụ 1,2 × 0,3.',
              'Vì sao cộng thập phân phải thẳng hàng phẩy mà nhân thì không?',
            ],
          },
        ],
      },
      {
        id: 'l1c3', title: 'Số thập phân & Phần trăm', bigIdea: 'Phần trăm là ngôn ngữ của tiền bạc: “trên mỗi 100”. Mọi bài phần trăm đều là một tam giác: phần – tổng – tỉ số.',
        lessons: [
          {
            id: 'l1c3s1', title: 'Phần trăm: tam giác phần – tổng – tỉ số', minutes: 20, status: 'full',
            bigPicture: 'Phần trăm = “trên mỗi 100” — 20% là lấy 20 trên mỗi 100. Mọi bài toán phần trăm chỉ quay quanh tam giác: Phần = Tổng × Tỉ số. Biết 2 góc luôn tìm góc thứ ba — che góc nào, giải góc ấy.',
            visual: 'tripercent',
            visualCaption: 'Tam giác phần trăm: che góc nào, công thức ở hai góc còn lại chỉ cách giải.',
            story: {
              title: 'Ngôn ngữ của tiền bạc',
              body: 'Cửa hàng niêm yết “GIẢM 25%” — nghĩa là trên mỗi 100.000đ, họ trả lại bạn 25.000đ. Mua 1.200.000đ được giảm 12 lần 25.000 = 300.000. Khi hiểu phần trăm là “tỷ giá trên mỗi 100”, mọi bài giảm giá, lãi suất, thuế VAT đều là cùng một tam giác: biết Tổng và Tỉ số → nhân ra Phần; biết Phần và Tỉ số → chia ra Tổng; biết Phần và Tổng → chia ra Tỉ số.',
            },
            colorExample: {
              intro: 'Giày giá 1.200.000đ được giảm 25%. Giá mới?',
              steps: [
                { label: 'Nhận diện tam giác', color: 'blue', text: 'Tổng = 1.200.000, Tỉ số = 25/100, cần tìm Phần (số tiền giảm).' },
                { label: 'Che góc “Phần” → nhân', color: 'green', text: 'Phần = Tổng × Tỉ số:', math: R`1\,200\,000 \times \frac{25}{100} = 300\,000` },
                { label: 'Kết luận', color: 'amber', text: 'Giá mới = Tổng − Phần:', math: R`1\,200\,000 - 300\,000 = 900\,000` },
              ],
            },
            rhythm: { verse: 'Phần bằng tổng nhân tỉ số — che góc nào, giải góc ấy.', note: 'Che Tổng → chia. Che Tỉ số → phần chia tổng. Một tam giác giải mọi bài phần trăm.' },
            representative: {
              problem: 'Hóa đơn 220.000đ ĐÃ GỒM VAT 10%. Giá trước VAT là bao nhiêu?',
              steps: [
                { color: 'rose', text: 'Cái bẫy kinh điển: 220.000 KHÔNG phải Tổng, mà là Tổng × 110%.' },
                { color: 'blue', text: 'Che Tổng → chia:', math: R`220\,000 \div 1{,}1 = 200\,000` },
                { color: 'green', text: 'Kiểm tra: 200.000 + 10% = 220.000. Đúng!' },
              ],
            },
            feynman: [
              'Kể lại “25% giảm giá” bằng ngôn ngữ “trên mỗi 100” cho người chưa học.',
              'Vẽ tam giác phần trăm từ trí nhớ và nói cách giải khi che từng góc.',
              'Giải thích cái bẫy “đã gồm VAT 10%” — vì sao không được lấy 220.000 × 10%.',
            ],
          },
          {
            id: 'l1c3s2', title: 'Lãi đơn, giảm giá & thuế: phần trăm đi làm', minutes: 20, status: 'full',
            bigPicture: 'Tam giác Phần–Tổng–Tỉ số giải cả bốn ứng dụng tiền bạc: GIẢM GIÁ (trừ phần), THUẾ (cộng phần), LÃI ĐƠN (gốc × suất × năm), GIẢM LIÊN TIẾP (lần sau tính trên giá ĐÃ GIẢM — không cộng dồn phần trăm!).',
            visual: 'tripercent',
            visualCaption: 'Cùng một tam giác, bốn chiếc áo: giảm giá, thuế, lãi đơn, giảm liên tiếp.',
            story: {
              title: 'Cái bẫy giảm giá kép',
              body: 'Cửa hàng treo biển: “GIẢM 20%, CUỐI TUẦN GIẢM THÊM 10%”. Não vội vàng tính: 30% — SAI! Hàng 200.000: giảm 20% còn 160.000. Giảm 10% LẦN SAU tính trên 160.000 (giá đã giảm), trừ 16.000 → còn 144.000. Tổng giảm 56.000 = 28%, không phải 30%. Vì lần sau dùng “tổng mới” — cái bánh bị cắt hai lần, lần hai cắt trên cái bánh đã nhỏ. Ngược lại, lãi đơn ngân hàng là người tử tế: gửi 1 triệu lãi 5%/năm thì MỖI năm đều lấy 5% của 1 triệu gốc = 50.000đ — năm thứ ba vẫn tính trên gốc.',
            },
            colorExample: {
              intro: 'Mua hàng 500.000đ, giảm 20%, rồi cộng thuế 10%. Tổng trả?',
              steps: [
                { label: 'Giảm trước', color: 'blue', text: 'Phần giảm = 500.000 × 20/100 = 100.000 → còn 400.000.' },
                { label: 'Thuế tính trên giá MỚI', color: 'green', text: 'Thuế = 400.000 × 10/100 = 40.000.' },
                { label: 'Tổng', color: 'amber', text: '400.000 + 40.000 = 440.000 — thuế KHÔNG tính trên giá gốc 500.000.' },
              ],
            },
            rhythm: { verse: 'Lãi đơn: gốc × suất × năm. Giảm liên tiếp: cắt trên giá đã cắt — đừng cộng dồn phần trăm.', note: 'Thứ tự giảm–thuế quan trọng: mỗi bước tính trên kết quả của bước trước.' },
            representative: {
              problem: 'Gửi tiết kiệm 2.000.000đ, lãi suất 6%/năm, lãi đơn. Sau 2 năm nhận bao nhiêu lãi?',
              steps: [
                { color: 'blue', text: 'Lãi 1 năm:', math: R`2\,000\,000 \times \frac{6}{100} = 120\,000` },
                { color: 'green', text: 'Lãi đơn = mỗi năm như nhau:', math: R`120\,000 \times 2 = 240\,000` },
                { color: 'amber', text: 'Công thức gọn: gốc × suất × năm = 2 triệu × 6% × 2.' },
              ],
            },
            feynman: [
              'Kể lại cái bẫy “giảm 20% + 10%” và chứng minh tổng giảm là 28% chứ không phải 30%.',
              'Giải thích lãi đơn bằng câu “mỗi năm đều cắt trên cái bánh gốc”.',
              'Tính hóa đơn của bạn: giảm trước hay thuế trước — kết quả có khác nhau không? Vì sao?',
            ],
          },
        ],
      },
      {
        id: 'l1c4', title: 'Tỷ lệ & Tỉ lệ thức', bigIdea: 'Tỷ lệ là bản dịch giữa hai thế giới cùng đơn vị: bản đồ–địa thật, công thức–nguyên liệu.',
        lessons: [
          {
            id: 'l1c4s1', title: 'Tỷ lệ: công thức dịch thế giới', minutes: 20, status: 'full',
            bigPicture: 'Tỷ lệ là bản dịch giữa hai thế giới cùng “tỷ giá”: bản đồ–địa thật, nguyên liệu–món ăn. Tỉ lệ thức a/b = c/d kiểm tra bằng NHÂN CHÉO: ad = bc. Tỷ lệ thuận: hai bên cùng phình to; tỷ lệ nghịch: một bên phình, bên kia thu.',
            visual: 'cross',
            visualCaption: 'Nhân chéo: 3/12 = 5/x ⟺ 3x = 60 — dấu X chính là cách nhớ.',
            story: {
              title: 'Bản đồ kho báu',
              body: 'Bản đồ ghi “1 cm = 1 km”. Trên giấy kho báu cách 7,5 cm — ngoài đời cách bao xa? Hai thế giới (giấy và đất) được khóa với nhau bởi tỷ giá 1/100.000. Muốn dịch, chỉ cần giữ nguyên tỷ giá: 7,5 × 100.000 = 750.000 cm = 7,5 km. Kiểm tra mọi tỉ lệ thức bằng cách NHÂN CHÉO — hình chữ X. Và phân biệt hai loại: càng nhiều thợ thì xong càng NHANH (nghịch), càng mua nhiều tiền càng NHIỀU (thuận).',
            },
            colorExample: {
              intro: '3 cây bút giá 12.000đ. 5 cây bút giá bao nhiêu?',
              steps: [
                { label: 'Lập tỉ lệ thức', color: 'blue', text: 'Hai thế giới: số cây và số tiền giữ cùng tỷ giá:', math: R`\frac{3}{12\,000} = \frac{5}{x}` },
                { label: 'Nhân chéo', color: 'green', text: 'Dấu X hiện ra:', math: R`3x = 5 \times 12\,000 = 60\,000` },
                { label: 'Giải', color: 'amber', text: 'x = 20.000đ cho 5 cây — mỗi cây vẫn 4.000đ, tỷ giá không đổi.' },
              ],
            },
            rhythm: { verse: 'Thuận thì cùng to cùng nhỏ, nghịch thì một to một nhỏ — nghi ngờ hãy nhân chéo.', note: 'Thợ–ngày, tốc độ–thời gian: nghịch. Số lượng–tiền, bản đồ–địa thật: thuận.' },
            representative: {
              problem: '4 thợ lát gạch xong nhà trong 6 ngày. 8 thợ thì bao lâu? (năng suất đều)',
              steps: [
                { color: 'rose', text: 'Nhận dạng: càng nhiều thợ, càng ÍT ngày → tỷ lệ NGHỊCH.' },
                { color: 'green', text: 'Nghịch thì nhân chéo ngược — tích hai bên bằng nhau:', math: R`4 \times 6 = 8 \times x` },
                { color: 'amber', text: 'x = 24/8 = 3 ngày. Kiểm tra bằng mắt: thợ gấp đôi thì thời gian giảm nửa.' },
              ],
            },
            feynman: [
              'Giải thích bản đồ 1:100.000 bằng “tỷ giá” giữa hai thế giới.',
              'Vẽ chữ X nhân chéo và phát biểu tỉ lệ thức bằng đó.',
              'Tự nghĩ ra 1 ví dụ thuận và 1 ví dụ nghịch trong nhà bếp, giải thích dấu hiệu nhận biết.',
            ],
          },
        ],
      },
      {
        id: 'l1c5', title: 'Biểu thức & Phương trình', bigIdea: 'Dấu “=” là điểm cân bằng của cây cân. Mọi biến đổi phải làm CẢ HAI bên, cây cân mới không đổ.',
        lessons: [
          {
            id: 'l1c5s1', title: 'Phương trình: cây cân hai bên', minutes: 25, status: 'full',
            bigPicture: 'Giải phương trình = tìm khối lượng của hộp quà bí ẩn (x). Quy tắc vàng duy nhất: bất cứ việc gì làm bên trái thì phải làm Y HỆT bên phải. Trừ bớt, cộng thêm, chia đều hai đĩa — cây cân luôn thẳng.',
            visual: 'balance',
            visualCaption: 'Cây cân 2x + 3 = 11: bỏ 3 khối mỗi đĩa, còn 2x = 8; chia đôi mỗi đĩa → x = 4.',
            story: {
              title: 'Quầy cân của bà bán kẹo',
              body: 'Bà bán kẹo có một cây cân: đĩa trái đặt hộp quà bí ẩn và 3 viên kẹo, đĩa phải đặt 11 viên kẹo. Cân thẳng. Bạn muốn biết trong hộp có bao nhiêu? Bỏ 3 viên kẹo khỏi CẢ HAI đĩa (bây giờ trái chỉ còn hộp, phải còn 8). Hộp chứa bằng 2 hộp nhỏ, nên chia đôi bên phải: mỗi hộp nhỏ 4 viên. Bạn chưa hề mở hộp — nhưng đã biết bên trong là 4.',
            },
            colorExample: {
              intro: 'Giải: 2x + 3 = 11. Màu sắc = vai trò: hồng là bước “bỏ bớt”, xanh là bước “chia đều”, vàng là đáp án.',
              steps: [
                { label: 'Bỏ 3 viên mỗi đĩa', color: 'rose', text: 'Trừ 3 cả hai bên:', math: R`2x + 3 - 3 = 11 - 3 \;\Rightarrow\; 2x = 8` },
                { label: 'Chia đều mỗi đĩa', color: 'blue', text: 'Chia 2 cả hai bên:', math: R`\frac{2x}{2} = \frac{8}{2} \;\Rightarrow\; x = 4` },
                { label: 'Đóng cân lại', color: 'amber', text: 'Thử lại: 2·4 + 3 = 11. Cân thẳng — chuẩn!' },
              ],
            },
            rhythm: { verse: 'Trước tiên bỏ cộng trừ, sau đó mới nhân chia. Chuyển vế sang bên kia — đổi dấu theo bên kia.', note: 'Hai câu vần đúng thứ tự giải mọi phương trình bậc nhất.' },
            representative: {
              problem: 'Taxi tính tiền mở cửa 12.000đ và 11.000đ/km. Cuộc đi trả 89.000đ. Đi quãng đường bao nhiêu km?',
              steps: [
                { color: 'blue', text: 'Dịch đề thành cân:', math: R`12\,000 + 11\,000x = 89\,000` },
                { color: 'rose', text: 'Bỏ phần cố định hai bên:', math: R`11\,000x = 77\,000` },
                { color: 'amber', text: 'Chia đều:', math: R`x = 7\ \text{km}` },
              ],
            },
            feynman: [
              'Kể lại quy tắc “làm cả hai bên” cho người chưa từng học, bằng câu chuyện cây cân.',
              'Giải 5x − 4 = 16 vừa viết vừa nói to từng bước (kỹ thuật Feynman).',
              'Tại sao chia hai bên cho 2 là hợp lệ mà “cộng 2 vào bên trái thôi” là sai? Nói bằng hình cây cân.',
            ],
          },
          {
            id: 'l1c5s2', title: 'Dịch đề bài thành phương trình', minutes: 20, status: 'full',
            bigPicture: 'Đề bài là câu chuyện, phương trình là BẢN DỊCH. Bốn mã dịch cố định: “tổng/hơn” → +, “kém” → −, “gấp” → ×, “bằng” → =. Đặt x cho đại lượng nhỏ nhất (không biết càng ít, phương trình càng gọn), còn lại dịch từng câu.',
            visual: 'translate',
            visualCaption: 'Câu chuyện → phương trình: mỗi từ khóa là một mã dịch cố định.',
            story: {
              title: 'Phiên dịch viên số học',
              body: 'Hãy tưởng tượng một phiên dịch viên chỉ biết 4 từ: cộng, trừ, nhân, bằng. Khi đọc “Lan có nhiều hơn Hùng 5 viên bi”, nó dịch: Lan = Hùng + 5. Khi đọc “cả hai có 27 viên”, nó dịch: Lan + Hùng = 27. Nhiệm vụ của bạn chỉ là: (1) chọn ai làm “đại diện” x — nên chọn người ÍT viên bi hơn; (2) đọc chậm, dừng ở mỗi từ khóa, dịch đúng mã. Sai một từ khóa là cả bản dịch sụp — nên luôn kiểm tra lại bằng cách thay đáp án vào câu chuyện gốc.',
            },
            colorExample: {
              intro: '“Lan nhiều hơn Hùng 5 viên bi. Cả hai có 27 viên. Mỗi người bao nhiêu?”',
              steps: [
                { label: 'Chọn x cho người ít hơn', color: 'blue', text: 'Đặt Hùng = x → Lan = x + 5 (dịch từ “nhiều hơn”).' },
                { label: 'Dịch câu “tổng”', color: 'green', text: '“Cả hai có 27” →:', math: R`x + (x + 5) = 27` },
                { label: 'Giải', color: 'amber', text: '2x + 5 = 27 → 2x = 22 → x = 11. Vậy Hùng 11, Lan 16.' },
                { label: 'Đối chiếu câu chuyện', color: 'rose', text: '16 − 11 = 5 (đúng “nhiều hơn”), 16 + 11 = 27 (đúng “tổng”). Bản dịch chuẩn!' },
              ],
            },
            rhythm: { verse: 'Tổng–hơn là cộng, kém là trừ, gấp là nhân, “bằng” là dấu bằng.', note: 'Ghi 4 mã vào sổ tay. Đọc đề chậm như đọc hợp đồng, dừng ở từng từ khóa.' },
            representative: {
              problem: '“An có gấp 3 lần Bình. Cả hai có 48 viên kẹo.” Mỗi người bao nhiêu?',
              steps: [
                { color: 'blue', text: 'Chọn người ít hơn làm x: Bình = x, An = 3x.' },
                { color: 'green', text: 'Dịch “cả hai”:', math: R`x + 3x = 48 \Rightarrow 4x = 48` },
                { color: 'amber', text: 'Bình = 12, An = 36. Kiểm tra: 36 = 3 × 12 ✓, 36 + 12 = 48 ✓.' },
              ],
            },
            feynman: [
              'Kể lại 4 mã dịch và vì sao nên đặt x cho người “ít hơn”.',
              'Tự viết một đề bài từ phương trình 2x − 3 = 15 (dịch ngược!).',
              'Giải thích bước “đối chiếu câu chuyện gốc” — vì sao nó cứu bạn khỏi sai dịch.',
            ],
          },
          {
            id: 'l1c5s3', title: 'Phân phối: mở ngoặc là cắt hình chữ nhật', minutes: 20, status: 'full',
            bigPicture: 'Phân phối a(b + c) = ab + ac là chuyện CẮT HÌNH: hình chữ nhật 3 × (b + c) cắt đôi thành 3 × b và 3 × c. Nhân “rắc” vào TỪNG số hạng trong ngoặc — kể cả dấu trừ. Trừ × trừ = cộng, vì “hủy lệnh trừ”.',
            visual: 'distribute',
            visualCaption: '3 × (b + c): cắt dọc tấm sàn thành hai mảnh — tổng diện tích không đổi.',
            story: {
              title: 'Sảnh trường 30 chiếc ghế',
              body: 'Sảnh có 3 khu, mỗi khu 2 dãy, mỗi dãy 5 ghế: tổng = 3 × (2 × 5) = 30. Cách khác: đếm theo dọc — 3 × 2 ghế khu A cộng 3 × 5 ghế khu B? Số nói khác thì sao? Hãy vẽ: tấm sàn 3 hàng × (2 + 5) cột. Cắt DỌC giữa: mảnh trái 3 × 2, mảnh phải 3 × 5 — ghép lại vẫn là tấm sàn cũ. Phân phối chỉ là cắt hình. Cảnh báo cuối: dấu trừ cũng được “rắc”: −3(x − 4) = −3x + 12, vì −3 × (−4) = +12 — trừ × trừ là hủy lệnh trừ.',
            },
            colorExample: {
              intro: 'Mở ngoặc: −2(3x − 5).',
              steps: [
                { label: 'Rắc −2 vào số hạng đầu', color: 'blue', text: 'Mỗi số hạng đều nhận một bản sao của −2:', math: R`-2 \cdot 3x = -6x` },
                { label: 'Rắc vào số hạng sau — cẩn thận dấu', color: 'amber', text: 'Trừ × trừ ra cộng:', math: R`-2 \cdot (-5) = +10` },
                { label: 'Ghép lại', color: 'green', text: 'Kết quả:', math: R`-2(3x - 5) = -6x + 10` },
              ],
            },
            rhythm: { verse: 'Nhân rắc đều từng hạng tử — trừ nhân trừ, hóa cộng thôi.', note: 'Lỗi kinh điển: quên rắc dấu âm vào số hạng thứ hai. Đếm số mũi tên: a ngoài ngoặc phải “chạm” cả b và c.' },
            representative: {
              problem: 'Tính nhẩm 5 × 28 bằng phân phối.',
              steps: [
                { color: 'blue', text: 'Tách 28 = 20 + 8:', math: R`5 \times (20 + 8)` },
                { color: 'green', text: 'Rắc:', math: R`5 \times 20 + 5 \times 8 = 100 + 40` },
                { color: 'amber', text: '= 140 — nhẩm nhanh hơn 5 × 28 trực tiếp nhiều.' },
              ],
            },
            feynman: [
              'Vẽ tấm sàn 3 × (2 + 5) cắt đôi để giải thích phân phối, không dùng chữ “công thức”.',
              'Giải thích vì sao −3(x − 4) = −3x + 12 chứ không phải −3x − 12.',
              'Dùng phân phối để nhẩm 7 × 41 thành tiếng.',
            ],
          },
          {
            id: 'l1c5s4', title: 'Đa thức sơ khai: hộp nhiều ngăn', minutes: 20, status: 'full',
            bigPicture: 'Đa thức là biểu thức “nhiều ngăn”: 3x² + 5x + 2 — mỗi ngăn (hạng tử) có BẬC riêng. Cộng trừ đa thức = gom hạng tử ĐỒNG DẠNG (cùng bậc) — nguyên lý “mẫu số giống nhau” trở lại. Nhân đơn thức với đa thức = phân phối đã học. Số không: −7 luôn là “ngăn tự do”.',
            visual: 'distribute',
            visualCaption: '2x(3x + 5): rắc 2x vào từng ngăn — 6x² + 10x.',
            story: {
              title: 'Tủ đồ có ngăn',
              body: 'Tủ đồ có ba ngăn: ngăn áo, ngăn quần, ngăn đồ rác tự do. 3x² + 5x + 2 nghĩa là 3 chiếc áo, 5 chiếc quần, 2 thứ lặt vặt. Đến tủ thứ hai: 2x² − x. Hợp hai tủ: áo với áo (3 + 2 = 5 chiếc x²), quần với quần (5 − 1 = 4 chiếc x), đồ rác với đồ rác → 5x² + 4x. Còn ai dám gộp áo với quần — 3x + x² = 4x³? TUYỆT ĐỐI KHÔNG: khác bậc là khác loại đồ, chúng chỉ ĐỨNG CẠNH nhau trong biểu thức, không hòa vào nhau.',
            },
            colorExample: {
              intro: 'Cộng: (3x² + 5x + 2) + (2x² − x). Tô màu theo ngăn.',
              steps: [
                { label: 'Ngăn x² (màu xanh)', color: 'blue', text: 'Gom áo:', math: R`3x^2 + 2x^2 = 5x^2` },
                { label: 'Ngăn x (màu xanh lá)', color: 'green', text: 'Gom quần:', math: R`5x - x = 4x` },
                { label: 'Ngăn tự do', color: 'amber', text: 'Chỉ có 2 một mình — giữ nguyên.' },
                { label: 'Kết quả', color: 'rose', text: 'Xếp lại tủ:', math: R`5x^2 + 4x + 2` },
              ],
            },
            rhythm: { verse: 'Cùng bậc mới gộp chung — khác bậc đứng cạnh thôi. Nhân rắc từng ngăn, mũ cộng khi nhân cùng gốc.', note: 'Nhân hai đơn thức: nhân hệ số, cộng mũ: 2x · 3x² = 6x³.' },
            representative: {
              problem: 'Nhân: 2x(3x + 5).',
              steps: [
                { color: 'blue', text: 'Phân phối — rắc 2x vào từng ngăn:', math: R`2x \cdot 3x + 2x \cdot 5` },
                { color: 'green', text: 'Nhân hệ số, cộng mũ:', math: R`= 6x^2 + 10x` },
                { color: 'amber', text: 'Kết quả 2 ngăn mới: ngăn x² và ngăn x — không dám gộp chung!' },
              ],
            },
            feynman: [
              'Kể chuyện tủ đồ 3 ngăn và giải thích vì sao 3x + x² ≠ 4x³.',
              'Rút gọn 4x² + 3x − x² + 5x thành tiếng theo từng ngăn.',
              'Nối lại: phân phối (bài trước) xuất hiện ở đâu trong nhân đa thức?',
            ],
          },
        ],
      },
      {
        id: 'l1c6', title: 'Hình học & Đồ thị đầu đời', bigIdea: 'Toán có ba “chiều” đo: chạy quanh mép (chu vi), lót sàn (diện tích), đổ nước (thể tích) — và một bản đồ hai chiều gọi là đồ thị.',
        lessons: [
          {
            id: 'l1c6s1', title: 'Diện tích – chu vi – thể tích: ba chiều đo', minutes: 20, status: 'full',
            bigPicture: 'Ba câu hỏi, ba chiều: “bao nhiêu mét hàng rào?” = CHU VI (một chiều, m); “bao nhiêu gạch để lát?” = DIỆN TÍCH (hai chiều, m²); “bao nhiêu nước đầy bể?” = THỂ TÍCH (ba chiều, m³). Nhầm đơn vị giữa ba tầng này là lỗi kinh điển nhất của level 1.',
            visual: 'absquare',
            visualCaption: 'Diện tích hình vuông s × s = s²: “lũy thừa 2” chính là chuyện lót sàn.',
            story: {
              title: 'Kiến bò, thợ lát, nước rót',
              body: 'Một mảnh vườn, ba nhân vật, ba câu hỏi khác nhau. Con KIẾN bò sát mép vườn — nó quan tâm chu vi: bao nhiêu mét hàng rào. Người THỢ LÁT nằm rải gạch trên sàn — quan tâm diện tích: mỗi hàng dài viên gạch, nhân số hàng. Chai NƯỚC rót vào bể — quan tâm thể tích: lấp cả ba chiều. Vườn 6 m × 4 m: kiến bò 2 × (6 + 4) = 20 m; thợ lát 6 × 4 = 24 m²; nếu là bể sâu 2 m thì nước cần 24 × 2 = 48 m³ = 48.000 lít. Ba phép tính, một mảnh đất — và mỗi phép tính có đơn vị riêng: m, m², m³.',
            },
            colorExample: {
              intro: 'Vườn 6 m × 4 m. Hàng rào, gạch lát, và bể sâu 2 m.',
              steps: [
                { label: 'Kiến bò mép', color: 'blue', text: 'Chu vi:', math: R`2 \times (6 + 4) = 20\ \text{m}` },
                { label: 'Thợ lót sàn', color: 'green', text: 'Diện tích:', math: R`6 \times 4 = 24\ \text{m}^2` },
                { label: 'Nước rót bể', color: 'amber', text: 'Thể tích:', math: R`24 \times 2 = 48\ \text{m}^3 = 48\,000\ \text{lít}` },
              ],
            },
            rhythm: { verse: 'Kiến bò chu vi, thợ lót diện tích, nước rót thể tích — mét, mét vuông, mét khối.', note: 'Tam giác vuông: S = đáy × cao / 2 (nửa hình chữ nhật). Hình tròn: S ≈ 3,14 × r² (chờ level 2 nói kỹ π).' },
            representative: {
              problem: 'Sàn 24 m² lát gạch mỗi viên 0,5 m × 0,5 m. Cần bao nhiêu viên?',
              steps: [
                { color: 'blue', text: 'Diện tích 1 viên:', math: R`0{,}5 \times 0{,}5 = 0{,}25\ \text{m}^2` },
                { color: 'green', text: 'Số viên = sàn ÷ viên:', math: R`24 \div 0{,}25 = 96` },
                { color: 'amber', text: 'Kiểm tra bằng mắt: viên gạch nhỏ 4 viên/m² → 24 × 4 = 96 ✓' },
              ],
            },
            feynman: [
              'Kể lại ba nhân vật kiến–thợ–nước và gắn đúng ba đơn vị m, m², m³.',
              'Giải thích vì sao diện tích dùng “mét vuông” mà không phải “mét”.',
              'Tính chu vi + diện tích phòng bạn đang ngồi, bằng bước chân làm thước đo.',
            ],
          },
          {
            id: 'l1c6s2', title: 'Đọc đồ thị: trục số hai chiều', minutes: 20, status: 'full',
            bigPicture: 'Trục số là con đường một chiều; ghép hai trục vuông góc thành BẢN ĐỒ hai chiều — mặt phẳng tọa độ. Mọi điểm có địa chỉ (x, y): đi ngang trước, dọc sau. Đồ thị là câu chuyện kể bằng hình: dốc lên = tăng, dốc xuống = giảm, phẳng = đứng yên — càng đứng càng thay đổi nhanh.',
            visual: 'slope',
            visualCaption: 'Địa chỉ (x, y): đi ngang x trước, dọc y sau. Đường đi lên = dữ liệu đang tăng.',
            story: {
              title: 'Sân trường và bảng tăng trưởng',
              body: 'Tìm bạn ở sân trường: “dãy C, hàng 3” — bạn tự động đi NGANG tới dãy C rồi DỌC tới hàng 3. Mặt phẳng tọa độ làm đúng thao tác đó: địa chỉ (x, y) = (ngang, dọc). Giờ kể chuyện bằng điểm: bảng theo dõi cây — tháng 1 cao 10 cm, tháng 2 cao 15 cm, tháng 3 cao 19 cm. Chấm (1, 10), (2, 15), (3, 19) rồi nối: đường đi lên đều = “cây lớn đều mỗi tháng”. Nếu đường phẳng: cây ngừng lớn. Nếu đường đứng sừng sững: tăng vọt bất thường. Đọc đồ thị = đọc nhật ký bằng mắt, trước cả khi đọc số.',
            },
            colorExample: {
              intro: 'Tìm điểm có địa chỉ (3, 4).',
              steps: [
                { label: 'Đi ngang trước', color: 'blue', text: 'Từ gốc, đi phải 3 bước trên trục hoành.' },
                { label: 'Đi dọc sau', color: 'green', text: 'Leo lên 4 bước song song trục dọc — chạm đích.' },
                { label: 'Ghi địa chỉ', color: 'amber', text: '(3, 4) — nhớ thứ tự: ngang trước, dọc sau. (3, 4) và (4, 3) là hai địa chỉ KHÁC nhau!' },
              ],
            },
            rhythm: { verse: 'Ngang trước, dọc sau — (x, y) là địa chỉ; dốc lên là tăng, dốc xuống là giảm.', note: 'Gốc tọa độ (0, 0) là “cổng vào sân trường” — mọi địa chỉ đếm từ đó.' },
            representative: {
              problem: 'Nhiệt độ: 6h = 20°, 12h = 30°, 18h = 24°. Vẽ và đọc câu chuyện.',
              steps: [
                { color: 'blue', text: 'Chấm 3 điểm: (6, 20), (12, 30), (18, 24).' },
                { color: 'green', text: 'Đường 6h→12h đi lên, 12h→18h đi xuống nhẹ — “lên đỉnh giữa trưa”.' },
                { color: 'amber', text: 'Chưa tính được gì phức tạp, nhưng chỉ nhìn hình bạn đã biết: trưa nóng nhất. Đó là sức mạnh của đồ thị.' },
              ],
            },
            feynman: [
              'Kể lại ví dụ sân trường và giải thích vì sao (3, 4) ≠ (4, 3).',
              'Vẽ đồ thị nhiệt độ một ngày của bạn từ trí nhớ và “đọc câu chuyện”.',
              'Nói 3 trạng thái đường đồ thị: dốc lên, dốc xuống, phẳng — mỗi trạng thái một ví dụ đời thực.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l2', num: 2,
    name: 'Intermediate Mathematics', nameEn: 'Đại số nâng cao & Tiền giải tích',
    tagline: 'Từ con số đến chữ, từ hình vẽ đến hàm số — cây cầu vào giải tích.',
    outcome: 'Làm chủ hằng đẳng thức, căn thức, hàm số và đồ thị, hình học phẳng, lượng giác với vòng tròn đơn vị, hệ tọa độ — sẵn sàng cho giải tích.',
    theme: 'emerald',
    textbook: { title: 'Basic Mathematics', author: 'Serge Lang', url: 'https://dn760100.eu.archive.org/0/items/basic-mathematics-serge-lang_20240418/Basic%20Mathematics%20-%20Serge%20Lang.pdf', note: 'Kinh điển của giáo sư Yale — chặt chẽ mà tinh gọn.' },
    chapters: [
      {
        id: 'l2c1', title: 'Đại số: Hằng đẳng thức & Căn thức', bigIdea: 'Hằng đẳng thức không cần học thuộc — mỗi công thức là một bức hình.',
        lessons: [
          {
            id: 'l2c1s1', title: '(a+b)² nhìn bằng mắt: hình học hóa đại số', minutes: 20, status: 'full',
            bigPicture: 'Hằng đẳng thức (a+b)² = a² + 2ab + b² chỉ là một hình vuông được cắt 4 mảnh: sàn cũ a², hai dải hành lang ab, góc mới b². Nhớ hình thì không bao giờ quên công thức — và không bao giờ nhầm thành a² + b².',
            visual: 'absquare',
            visualCaption: 'Cạnh (a+b) chia làm hai phần: hình vuông lớn gồm a² (xanh), hai dải ab (vàng), và b² (hồng).',
            story: {
              title: 'Căn phòng được mở rộng',
              body: 'Bạn có căn phòng vuông a × a. Muốn mở rộng thêm b mét mỗi chiều: sàn cũ còn a², hai dải hành lang mỗi cái rộng b dài a (tổng 2ab), và góc mới là b². Ai nói diện tích mới là a² + b² là đã QUÊN hai dải hành lang — lỗi kinh điển của vô số học sinh. Toán học chỉ là chuyện… cải tạo nhà.',
            },
            colorExample: {
              intro: 'Khai triển (x + 3)². Mỗi màu là một mảnh trong hình vuông.',
              steps: [
                { label: 'Mảnh xanh: sàn cũ', color: 'blue', text: 'Bình phương số đầu:', math: R`x^2` },
                { label: 'Mảnh vàng: hai hành lang', color: 'amber', text: 'Hai lần tích giữa:', math: R`2 \cdot x \cdot 3 = 6x` },
                { label: 'Mảnh hồng: góc mới', color: 'rose', text: 'Bình phương số sau:', math: R`3^2 = 9` },
                { label: 'Ghép lại', color: 'green', text: 'Diện tích tổng:', math: R`(x+3)^2 = x^2 + 6x + 9` },
              ],
            },
            rhythm: { verse: 'Đầu bình, cuối bình, hai lần đầu nhân cuối.', note: '8 chữ úp mở cho cả (a+b)² và (a−b)² (đổi dấu của 2ab).' },
            representative: {
              problem: 'Tính nhẩm 101² không dùng máy tính.',
              steps: [
                { color: 'blue', text: 'Viết lại theo hình vuông:', math: R`101^2 = (100+1)^2` },
                { color: 'amber', text: 'Áp hằng đẳng thức:', math: R`= 100^2 + 2 \cdot 100 \cdot 1 + 1^2` },
                { color: 'green', text: 'Cộng mảnh:', math: R`= 10\,000 + 200 + 1 = 10\,201` },
              ],
            },
            feynman: [
              'Vẽ lại hình vuông (a+b)² từ trí nhớ và tô màu 4 mảnh.',
              'Giải thích tại sao (a+b)² ≠ a² + b² bằng câu chuyện căn phòng — không dùng công thức.',
              'Áp vần điệu để khai triển (2x+5)² thành tiếng trước khi viết.',
            ],
          },
          {
            id: 'l2c1s2', title: 'Căn thức & lũy thừa', minutes: 20, status: 'full',
            bigPicture: 'Lũy thừa là nhân lặp — phóng to trục liên tiếp: 2³ = kéo trục ×2 ba lần = 8. Căn là đi NGƯỢC: √9 hỏi “số nào tự nhân ra 9?”. Toàn bộ quy tắc mũ chỉ là cách ĐẾM số lần kéo trục.',
            visual: 'stretch',
            visualCaption: '2 × 2 × 2 = 2³ = 8: mỗi lần nhân là một lần phóng to trục gấp đôi.',
            story: {
              title: 'Sổ đếm lần kéo trục',
              body: 'Khi nhân hai lũy thừa cùng số gốc, bạn chỉ đang NỐI DÀI sổ đếm: a^m × a^n = a^(m+n) — kéo m lần rồi kéo n lần, tổng là m+n lần. Khi lũy thừa của lũy thừa, bạn PHOTO cả sổ: (a^m)^n = a^(mn). Căn bậc hai là “kéo ngược”: đang biết kết quả 8 và số lần 3, tìm số gốc 2. Vì vậy √(a²) = |a| — đi ngược phải cẩn thận dấu!',
            },
            colorExample: {
              intro: 'Rút gọn √50. Chiến thuật: tách nhân tử CHÍNH PHƯƠNG ra ngoài.',
              steps: [
                { label: 'Hunting chính phương', color: 'blue', text: 'Tìm số chính phương ẩn trong 50:', math: R`50 = 25 \times 2` },
                { label: 'Tách căn', color: 'green', text: 'Căn của tích = tích hai căn:', math: R`\sqrt{50} = \sqrt{25} \times \sqrt{2}` },
                { label: 'Kéo số chính phương ra', color: 'amber', text: 'Kết quả gọn:', math: R`= 5\sqrt{2}` },
              ],
            },
            rhythm: { verse: 'Nhân cùng gốc, mũ cộng lại; lũy thừa chồng lũy thừa, mũ nhân nhau.', note: 'Hai quy tắc này sinh ra mọi quy tắc mũ còn lại — hiểu sổ đếm là nhớ luôn.' },
            representative: {
              problem: 'Rút gọn: 2√12 + √27.',
              steps: [
                { color: 'blue', text: 'Tách chính phương:', math: R`\sqrt{12} = 2\sqrt{3}, \quad \sqrt{27} = 3\sqrt{3}` },
                { color: 'green', text: 'Thay vào:', math: R`2 \cdot 2\sqrt{3} + 3\sqrt{3} = 4\sqrt{3} + 3\sqrt{3}` },
                { color: 'amber', text: 'Cùng “loại miếng” √3 — cộng như cộng phân số cùng mẫu:', math: R`= 7\sqrt{3}` },
              ],
            },
            feynman: [
              'Kể lại “sổ đếm lần kéo trục” và từ đó suy ra a^m · a^n.',
              'Giải thích vì sao √(a²) = |a| chứ không phải a, với ví dụ a = −3.',
              'Rút gọn √72 thành tiếng theo 3 bước: hunt chính phương → tách → kéo ra.',
            ],
          },
        ],
      },
      {
        id: 'l2c2', title: 'Hàm số & Đồ thị', bigIdea: 'Hàm là cỗ máy: mỗi input chỉ ra đúng một output. Đồ thị là hồ sơ nhân dạng của cỗ máy.',
        lessons: [
          {
            id: 'l2c2s1', title: 'Hàm số: cỗ máy biến đổi', minutes: 20, status: 'full',
            bigPicture: 'Hàm f là quy tắc biến đầu vào thành đầu ra. Định nghĩa cốt lõi chỉ một câu: MỘT input vào — đúng MỘT output ra. Đồ thị y = f(x) là bảng ghi chép mọi cặp (input, output) trên mặt phẳng.',
            visual: 'machine',
            visualCaption: 'Cỗ máy f(x) = 2x + 1: viên bi x = 3 đi vào, ra viên bi y = 7.',
            story: {
              title: 'Máy ép trái cây',
              body: 'Cỗ máy ép trái cây: dâu vào thì nước dâu ra, cam vào thì nước cam ra. Luật của nó: mỗi loại quả vào, chỉ ra đúng MỘT loại nước — không thể cùng lúc ra cả nước dâu lẫn nước cam với cùng một quả. Cỗ máy vi phạm luật này là hỏng (không phải hàm). Nhưng hai quả KHÁC nhau cùng ra một loại nước thì vẫn hợp lệ — như f(x) = x² đưa cả 2 và −2 về 4.',
            },
            colorExample: {
              intro: 'Cho f(x) = x² − 3x + 2, tính f(−1). Màu xanh là “thay vào”, vàng là “tính theo thứ tự”.',
              steps: [
                { label: 'Thay viên bi vào máy', color: 'blue', text: 'Mọi chỗ có x đều thay bằng −1:', math: R`f(-1) = (-1)^2 - 3(-1) + 2` },
                { label: 'Máy xử lý', color: 'amber', text: 'Tính từng phần:', math: R`= 1 + 3 + 2` },
                { label: 'Viên bi ra', color: 'green', text: 'Kết quả:', math: R`f(-1) = 6` },
              ],
            },
            rhythm: { verse: 'Một vào một ra mới là hàm — hai ra một vào, cỗ máy hỏng rồi.', note: 'Câu “kiểm tra đường thẳng đứng”: bất kỳ đường đứng cắt đồ thị nhiều hơn 1 điểm thì không phải hàm.' },
            representative: {
              problem: 'Vẽ bằng tay đồ thị f(x) = 2x + 1 chỉ từ 3 điểm.',
              steps: [
                { color: 'blue', text: 'Bảng giá trị:', math: R`f(0) = 1,\; f(1) = 3,\; f(-1) = -1` },
                { color: 'green', text: 'Chấm 3 điểm (0,1), (1,3), (−1,−1) rồi kẻ thẳng — vì hàm bậc nhất luôn là đường thẳng.' },
                { color: 'amber', text: 'Đọc đồ thị: đi phải 1, lên 2 — đó chính là hệ số 2 (độ dốc).' },
              ],
            },
            feynman: [
              'Giải thích “một vào một ra” cho em nhỏ bằng máy ép trái cây, tự lấy 2 ví dụ hàm và 1 ví dụ không phải hàm.',
              'Cho f(x) = x². Vì sao f(2) = f(−2) = 4 không vi phạm định nghĩa hàm? Nói to.',
              'Vẽ từ trí nhớ 3 điểm của y = −x + 2 và nêu độ dốc.',
            ],
          },
          {
            id: 'l2c2s2', title: 'Parabol & tam thức bậc hai', minutes: 25, status: 'full',
            bigPicture: 'Parabol là đường BÓNG BAY: y = ax² + bx + c. Hệ số a quyết định “miệng”: a > 0 như bát úp (mở lên), a < 0 như nón (mở xuống). Đỉnh là chỗ bóng đổi chiều: x = −b/2a. Hai nghiệm là chỗ chạm đất — delta là “máy dò va chạm”: Δ > 0 chạm 2 chỗ, Δ = 0 chạm 1, Δ < 0 bay qua.',
            visual: 'parabola',
            visualCaption: 'a > 0: bát úp. Đỉnh tại x = −b/2a, hai nghiệm là chỗ cắt trục hoành.',
            story: {
              title: 'Cú ném của cầu thủ',
              body: 'Ném bóng lên trời: bóng bay theo parabol MỞ XUỐNG (a < 0 — trọng lực kéo xuống). Đỉnh parabol là điểm cao nhất — khoảnh khắc bóng “do dự” giữa đi lên và đi xuống, vận tốc dọc bằng 0. Học sinh hay hỏi “học parabol để làm gì?” — trả lời: kỹ sư tính cầu vòm, lập trình viên mô phỏng game, kinh tế học tìm lợi nhuận tối đa — tất cả đều đang tìm ĐỈNH của một parabol.',
            },
            colorExample: {
              intro: 'Phân tích y = x² − 4x + 3 bằng mắt, không cần vẽ từng điểm.',
              steps: [
                { label: 'Đọc hệ số a', color: 'blue', text: 'a = 1 > 0 → bát úp, có giá trị NHỎ NHẤT.' },
                { label: 'Tìm đỉnh', color: 'green', text: 'x_đỉnh = −b/2a = 4/2 = 2; y = 4 − 8 + 3 = −1 → đỉnh (2, −1).' },
                { label: 'Delta dò nghiệm', color: 'amber', text: 'Δ = 16 − 12 = 4 > 0 → hai nghiệm:', math: R`x = \frac{4 \pm 2}{2} = 1,\ 3` },
                { label: 'Kết hợp', color: 'rose', text: 'Vẽ được cả parabol: đỉnh (2,−1), cắt trục hoành tại 1 và 3, cắt trục tung tại 3.' },
              ],
            },
            rhythm: { verse: 'a dương bát úp, a âm cái nón; đỉnh là âm b, chia hai a.', note: 'Delta: dương hai nghiệm, không một nghiệm, âm trôi qua — “dò va chạm đất”.' },
            representative: {
              problem: 'Ném đá lên: h(t) = −5t² + 20t (mét, giây). Chạm đất lúc nào? Cao nhất bao nhiêu?',
              steps: [
                { color: 'rose', text: 'a = −5 < 0 → nón úp ngược — đúng vị物理 của ném lên.' },
                { color: 'blue', text: 'Chạm đất: h = 0 → −5t(t − 4) = 0 → t = 4 giây.' },
                { color: 'green', text: 'Đỉnh: t = −20/(2·(−5)) = 2 → h(2) = −20 + 40 = 20 m.' },
              ],
            },
            feynman: [
              'Giải thích vì sao a > 0 thì parabol có “đáy” chứ không có “đỉnh đồi”.',
              'Nói vai trò delta bằng ngôn ngữ “máy dò va chạm đất”.',
              'Phân tích y = −x² + 2x + 3 bằng 4 bước trên, không nhìn tài liệu.',
            ],
          },
        ],
      },
      {
        id: 'l2c3', title: 'Hình học phẳng', bigIdea: 'Hình học là nơi đại số “ngủ” trong hình vẽ: định lý Pythagoras là kiểm tra góc vuông bằng diện tích.',
        lessons: [
          {
            id: 'l2c3s1', title: 'Pythagoras & tam giác đồng dạng', minutes: 20, status: 'full',
            bigPicture: 'Pythagoras: a² + b² = c² là chuyện DIỆN TÍCH — hai hình vuông trên hai cạnh vuông lấp đúng hình vuông trên cạnh huyền. Đồng dạng: hai hình “giống hệt nhau nhưng khác cỡ” — góc giữ nguyên, mọi cạnh phình theo CÙNG một tỉ số.',
            visual: 'similar',
            visualCaption: 'Cạnh gấp đôi tất cả → tam giác to gấp đôi, góc không đổi: đó là đồng dạng.',
            story: {
              title: 'Đo kim tự tháp bằng cái bóng',
              body: 'Thales đo cao độ kim tự tháp mà không trèo: cùng một lúc, ông đo cái bóng của mình (2 m khi cao 1,7 m) và bóng của kim tự tháp (300 m). Bóng trời chiếu tạo hai tam giác ĐỒNG DẠNG — góc mặt trời như nhau, góc đất vuông như nhau. Vậy: chiều cao/chiều dài bóng là cùng một tỉ số cho mọi vật. Từ đó: x/300 = 1,7/2 → x = 255 m. Không cần thang máy, chỉ cần một buổi nắng và tư duy tỉ lệ.',
            },
            colorExample: {
              intro: 'Tam giác vuông có hai cạnh góc vuông 6 và 8. Cạnh huyền?',
              steps: [
                { label: 'Viết Pythagoras', color: 'blue', text: 'Cạnh huyền đối diện góc vuông:', math: R`c^2 = 6^2 + 8^2 = 36 + 64` },
                { label: 'Cộng', color: 'green', text: 'Hai mảnh vuông nhỏ lấp đúng mảnh lớn:', math: R`c^2 = 100` },
                { label: 'Kéo căn', color: 'amber', text: 'c = 10 — bộ ba “6–8–10”, anh em của 3–4–5 phình ×2 (đồng dạng!).' },
              ],
            },
            rhythm: { verse: 'Vuông thì bình phương cộng rồi kéo căn; đồng dạng: góc bằng, cạnh cùng tỉ lệ.', note: 'Bộ ba quen thuộc: 3–4–5, 5–12–13, 8–15–17 — và mọi bản phình to của chúng.' },
            representative: {
              problem: 'Cột cao 2 m đổ bóng 3 m. Cây đổ bóng 15 m. Cây cao bao nhiêu?',
              steps: [
                { color: 'blue', text: 'Cùng một mặt trời → hai tam giác bóng ĐỒNG DẠNG.' },
                { color: 'green', text: 'Tỉ số cao/bóng bằng nhau:', math: R`\frac{x}{15} = \frac{2}{3}` },
                { color: 'amber', text: 'x = 10 m — Thales đã dùng đúng trick này 2.600 năm trước.' },
              ],
            },
            feynman: [
              'Kể lại chuyện Thales và chỉ ra hai cặp góc bằng nhau trong đó.',
              'Giải thích a² + b² = c² bằng HÌNH VUÔNG ghép, không bằng công thức.',
              'Vì sao 6–8–10 và 3–4–5 là hai tam giác đồng dạng?',
            ],
          },
        ],
      },
      {
        id: 'l2c4', title: 'Lượng giác', bigIdea: 'sin, cos, tan không phải bảng tra — chúng là tọa độ của một điểm chạy trên vòng tròn bán kính 1.',
        lessons: [
          {
            id: 'l2c4s1', title: 'Vòng tròn đơn vị: chiếc đồng hồ lượng giác', minutes: 25, status: 'full',
            bigPicture: 'Đặt một điểm chạy trên vòng tròn bán kính 1. Chiều ngang từ tâm là cos, chiều dọc là sin, độ dốc của tia là tan. Mọi giá trị sin/cos của góc đặc biệt đều “đọc” được từ hình — không cần học thuộc bảng.',
            visual: 'unitcircle',
            visualCaption: 'Điểm ở góc 60°: cos 60° = 1/2 (ngang), sin 60° = √3/2 (dọc).',
            story: {
              title: 'Người đi dạo quanh hồ tròn',
              body: 'Một người đi dạo quanh hồ tròn bán kính 1 km, bắt đầu tại điểm hướng Đông, đi ngược chiều kim đồng hồ. Bất cứ lúc nào, vị trí của anh ta so với tâm đều là (cos θ, sin θ) — đông–tây và bắc–nam. Đi được 1/4 vòng (90°): đứng đúng hướng Bắc → (0, 1), cos về 0. Đi nửa vòng: (−1, 0), sin đổi dấu. Chiếc đồng hồ này quay mãi: sin và cos lặp lại sau mỗi 360° — đó là bản chất “chu kỳ” của sóng, âm nhạc, ánh sáng.',
            },
            colorExample: {
              intro: 'Đọc giá trị góc 30° từ tam giác 30–60–90 trong vòng tròn. Xanh: cạnh kề, đỏ: cạnh đối.',
              steps: [
                { label: 'Tam giác vàng trong hình', color: 'amber', text: 'Tam giác nửa đều: cạnh đối 30° bằng nửa cạnh huyền = 1/2.' },
                { label: 'Đọc sin (chiều dọc)', color: 'rose', text: 'Cạnh đối / huyền:', math: R`\sin 30° = \frac{1}{2}` },
                { label: 'Đọc cos (chiều ngang)', color: 'blue', text: 'Pythagoras cho cạnh còn lại √3/2:', math: R`\cos 30° = \frac{\sqrt{3}}{2}` },
              ],
            },
            rhythm: { verse: 'Sin đối, cos kề, huyền — tan là đối chia kề. (SOH – CAH – TOA)', note: 'Đọc nhịp: sin-đối-cos-kề-huyền / tan-là-đối-chia-kề. Trong tam giác vuông trước, trong vòng tròn sau.' },
            representative: {
              problem: 'Mái nhà dốc 30°, dài 4 m. Mái cao hơn tường bao nhiêu mét?',
              steps: [
                { color: 'blue', text: 'Hình tam giác vuông: mái là cạnh huyền 4, cần chiều cao (cạnh đối 30°).' },
                { color: 'rose', text: 'Dùng sin:', math: R`h = 4 \cdot \sin 30° = 4 \cdot \frac{1}{2} = 2\ \text{m}` },
                { color: 'green', text: 'Kiểm tra bằng mắt: 30° là dốc thoải, cao nửa chiều dài — hợp lý.' },
              ],
            },
            feynman: [
              'Vẽ vòng tròn đơn vị từ trí nhớ, đánh dấu 0°, 90°, 180°, 270° với tọa độ (cos, sin).',
              'Giải thích vì sao sin 90° = 1 mà sin 180° = 0, dùng người đi quanh hồ.',
              'Đọc to vần “sin đối, cos kề, huyền” và chỉ đúng cạnh trên một hình tự vẽ.',
            ],
          },
        ],
      },
      {
        id: 'l2c5', title: 'Tiền giải tích: Hệ tọa độ', bigIdea: 'Hệ tọa độ biến hình học thành đại số: đường cong trở thành phương trình.',
        lessons: [
          {
            id: 'l2c5s1', title: 'Đường thẳng & khoảng cách', minutes: 20, status: 'full',
            bigPicture: 'Đường thẳng chỉ cần 2 thông tin: ĐỘ DỐC m (“đi phải 1, lên m”) và ĐIỂM XUẤT PHÁT b (chạm trục dọc ở đâu) → y = mx + b. Khoảng cách hai điểm là Pythagoras với hai cạnh Δx, Δy.',
            visual: 'slope',
            visualCaption: 'Đi phải 1, lên m — m là độ dốc; b là chỗ đường thẳng “khởi hành” trên trục dọc.',
            story: {
              title: 'Con dốc và chỗ khởi hành',
              body: 'C-người kể chuyện: một con đường núi được mô tả trọn vẹn bằng 2 con số. Độ dốc m: mỗi bước sang phải đi lên bao nhiêu — dốc 2 là leo dốc thoải, dốc −1 là trượt xuống thoải mái (m âm = dốc xuống). Chỗ khởi hành b: nếu đi đến chỗ đường cắt cột mốc dọc (x = 0), bạn đang ở độ cao b. Hai con số này định đoạt TOÀN BỘ con đường — nên phương trình y = mx + b mới gọn đến vậy. Còn khoảng cách giữa hai điểm? Vẽ Δx và Δy thành hai cạnh vuông — Pythagoras lo phần còn lại.',
            },
            colorExample: {
              intro: 'Tìm phương trình đường thẳng qua A(1, 2) và B(4, 11).',
              steps: [
                { label: 'Tính độ dốc', color: 'blue', text: '“Lên bao nhiêu trên mỗi đi phải 1”:', math: R`m = \frac{11 - 2}{4 - 1} = 3` },
                { label: 'Tìm chỗ khởi hành', color: 'green', text: 'Thay A vào y = mx + b:', math: R`2 = 3 \cdot 1 + b \Rightarrow b = -1` },
                { label: 'Kết luận', color: 'amber', text: 'y = 3x − 1. Kiểm tra B: 3·4 − 1 = 11 ✓.' },
              ],
            },
            rhythm: { verse: 'm là dốc, b là chốt khởi hành; khoảng cách là Pythagoras hai chênh.', note: 'd = √(Δx² + Δy²) — đọc như “bình phương cộng rồi kéo căn”.' },
            representative: {
              problem: 'Khoảng cách A(0, 0) đến B(3, 4)?',
              steps: [
                { color: 'blue', text: 'Hai cạnh vuông:', math: R`\Delta x = 3, \quad \Delta y = 4` },
                { color: 'green', text: 'Pythagoras:', math: R`d = \sqrt{9 + 16} = \sqrt{25}` },
                { color: 'amber', text: 'd = 5 — lại gặp bộ ba 3–4–5, lúc này “nằm nghiêng”.' },
              ],
            },
            feynman: [
              'Giải thích m và b bằng con đường núi cho người chưa học tọa độ.',
              'Vì sao khoảng cách hai điểm lại chính là Pythagoras? Vẽ hình nói lại.',
              'Tìm phương trình đường thẳng qua (0, 3) và (2, 7) bằng 2 bước trên.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l3', num: 3,
    name: 'Calculus & Reasoning', nameEn: 'Giải tích & Tư duy chứng minh',
    tagline: 'Logic, giới hạn, đạo hàm, tích phân — ngôn ngữ của sự thay đổi.',
    outcome: 'Tự viết chứng minh đơn giản, hiểu sâu giới hạn; tính đạo hàm, tích phân thành thạo và giải bài toán tối ưu thực tế.',
    theme: 'amber',
    textbook: { title: 'Calculus: Early Transcendentals', author: 'James Stewart', url: 'https://dzackgarza.com/assets/books/Stewart.pdf', note: 'Chuẩn giáo trình đại học năm nhất, nhiều bài tập từ dễ đến khó.' },
    chapters: [
      {
        id: 'l3c0', title: 'Logic, Tập hợp & Chứng minh', bigIdea: 'Toán cao cấp là trò chơi xây lập luận không thể phản bác: một chứng minh là chuỗi domino, mỗi mảnh đứng trên mảnh trước.',
        lessons: [
          {
            id: 'l3c0s1', title: 'Chứng minh: chuỗi domino logic', minutes: 25, status: 'full',
            bigPicture: 'Chứng minh không phải “ghi chú giải thích” — nó là chuỗi suy luận A ⟹ B ⟹ C mà không mắt xích nào gãy. Bất đối xứng quan trọng: để chứng minh câu “với mọi số” thì một ví dụ không đủ; nhưng để BẺ GÃY nó thì chỉ cần MỘT phản ví dụ.',
            visual: 'domino',
            visualCaption: 'Định nghĩa ⟹ Bổ đề ⟹ Bổ đề ⟹ Định lý: cả chuỗi đứng vững nhờ từng mắt xích.',
            story: {
              title: 'Luật sư và mắt xích yếu',
              body: 'Luật sư bảo vệ xây lập luận: “Nếu camera ghi thấy A thì nghi phạm ở quán; nếu ở quán thì không thể ở hiện trường…” Chỉ cần MỘT mắt xích sụp là toàn bộ vụ án đổ. Toán học cũng vậy. Nhưng có một luật ngược cực đoan: nếu ai tuyên bố “mọi số lẻ đều là số nguyên tố”, bạn không cần xem xét vô hạn số — chỉ cần chỉ ra số 9: 9 = 3 × 3. Một phản ví dụ, cả định lý sụp.',
            },
            colorExample: {
              intro: 'Chứng minh: tổng của hai số lẻ là số chẵn. Ba màu = ba mắt xích.',
              steps: [
                { label: 'Dịch “số lẻ” thành đại số', color: 'blue', text: 'Số lẻ luôn viết được dạng 2m + 1:', math: R`(2m+1) + (2n+1)` },
                { label: 'Gom nhóm', color: 'green', text: 'Tách phần chẵn và phần lẻ:', math: R`= 2m + 2n + 2 = 2(m + n + 1)` },
                { label: 'Đọc kết luận', color: 'amber', text: 'Có dạng 2k với k = m+n+1 — đúng định nghĩa số chẵn. Kết thúc.' },
              ],
            },
            rhythm: { verse: 'Bẻ một định lý: một phản ví dụ là đủ. Dựng một định lý: nghìn ví dụ chưa xong.', note: 'Câu này phân biệt tư duy chứng minh với tư duy “thử thử xem”.' },
            representative: {
              problem: 'Chứng minh: nếu n² chẵn thì n chẵn.',
              steps: [
                { color: 'rose', text: 'Phản chứng: giả sử n lẻ, tức n = 2k + 1.' },
                { color: 'blue', text: 'Khi đó:', math: R`n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1` },
                { color: 'amber', text: 'n² có dạng 2m + 1 → lẻ — mâu thuẫn với giả thiết n² chẵn. Vậy n phải chẵn.' },
              ],
            },
            feynman: [
              'Kể cho người khác sự khác nhau giữa “chứng minh cho mọi số” và “kiểm tra vài số”, kèm ví dụ 9 = 3 × 3.',
              'Tự viết lại chứng minh “tổng hai số lẻ là chẵn” bằng lời của bạn, chỉ định nghĩa số lẻ/chẵn.',
              'Phát minh một phản ví dụ cho câu sai: “mọi số nguyên tố đều lẻ”.',
            ],
          },
          {
            id: 'l3c0s2', title: 'Tập hợp & lượng từ ∀, ∃', minutes: 20, status: 'full',
            bigPicture: 'Tập hợp là chiếc túi có ranh giới rõ ràng: một phần tử hoặc nằm trong (∈) hoặc không. Hai lượng từ điều khiển mọi định lý: ∀ (“với mọi” — phải đúng với TẤT CẢ) và ∃ (“tồn tại” — chỉ cần MỘT). Phủ định một câu = ĐẢO lượng từ và phủ định mệnh đề.',
            visual: 'quantify',
            visualCaption: '∀ quét sạch mọi chấm; ∃ chỉ cần một chấm nổi bật là thắng.',
            story: {
              title: 'Kiểm tra chất lượng hai kiểu',
              body: 'Nhà máy có hai câu khẩu hiệu. Kiểu ∀: “MỌI viên kẹo ra lò đều phải đạt chuẩn” — một viên hỏng là cả lô bị bóc. Kiểu ∃: “TỒN TẠI ít nhất một viên vàng” — chỉ cần tìm được 1 viên là câu đã đúng. Nhận ra chưa? Đây chính là luật “một phản ví dụ bẻ gãy ∀” bạn đã học ở bài domino logic. Và khi phủ định: “không phải ∀ đạt chuẩn” = “∃ một viên hỏng”. Đảo cờ lượng từ là kỹ năng sống còn của chứng minh.',
            },
            colorExample: {
              intro: 'Phủ định: “Mọi số tự nhiên đều lẻ”.',
              steps: [
                { label: 'Nhận dạng lượng từ', color: 'blue', text: 'Câu gốc là ∀ (mọi) — phủ định sẽ là ∃.' },
                { label: 'Đảo cờ', color: 'green', text: 'Phủ định:', math: R`\neg(\forall n, n\ \text{lẻ}) \equiv \exists n, \neg(n\ \text{lẻ})` },
                { label: 'Tìm nhân chứng', color: 'amber', text: '∃ n = 2: chẵn. Một nhân chứng là đủ — câu gốc sai.' },
              ],
            },
            rhythm: { verse: '∀ là quét hết, ∃ là chỉ cần một; phủ định thì đảo cờ.', note: '“Đảo cờ” = ∀↔∃ đồng thời phủ định mệnh đề bên trong.' },
            representative: {
              problem: 'Viết bằng lượng từ: “Mọi số thực dương đều có căn bậc hai”.',
              steps: [
                { color: 'blue', text: 'Lượng từ ∀ với điều kiện:', math: R`\forall x > 0` },
                { color: 'green', text: 'Kết luận “có căn” = tồn tại y:', math: R`\exists y,\ y^2 = x` },
                { color: 'amber', text: 'Gộp: ∀x > 0, ∃y: y² = x. Đọc to — đây chính là phong cách viết của giải tích level 5.' },
              ],
            },
            feynman: [
              'Kể lại hai kiểu kiểm tra nhà máy và nối với luật phản ví dụ.',
              'Phủ định câu “∃ số nguyên tố chẵn” bằng cách đảo cờ, rồi kiểm chứng.',
              'Viết “hàm f liên tục tại a” dạng thô bằng ∀ε ∃δ — không cần chính xác, chỉ cần đúng tinh thần.',
            ],
          },
        ],
      },
      {
        id: 'l3c1', title: 'Giới hạn & Liên tục', bigIdea: 'Giới hạn không hỏi “tới đâu” mà hỏi “VỀ ĐÂU”: xu hướng của hàm khi x tiến gần, bất chấp giá trị tại chỗ.',
        lessons: [
          {
            id: 'l3c1s1', title: 'Giới hạn: tiến được 99% mãi mãi?', minutes: 25, status: 'full',
            bigPicture: 'Giới hạn trả lời câu hỏi: f(x) đi về đâu khi x tiến lại gần a? — KHÔNG cần biết f(a) có tồn tại hay không. Đây là viên đá nền: đạo hàm và tích phân đều được xây từ khái niệm này.',
            visual: 'zeno',
            visualCaption: '1/2, 3/4, 7/8, 15/16… không bước nào chạm 1, nhưng xu hướng là chính xác 1.',
            story: {
              title: 'Achilles và con rùa',
              body: 'Achilles chạy đuổi mũi tên bay trước mặt: mỗi bước anh đi được nửa khoảng cách còn lại. Bước 1: 1/2. Bước 2: 3/4. Bước 3: 7/8… Bao giờ chạm vạch đích? Theo cách bước đó — KHÔNG BAO GIỜ. Nhưng tổng tất cả các bước lại chính xác bằng 1. Nghịch lý chỉ tan khi bạn phân biệt: “không bước nào chạm” và “giới hạn của tổng là 1”. Giới hạn là phát minh hạ gục nghịch lý 2000 năm.',
            },
            colorExample: {
              intro: 'Tính lim (x→2) (x² − 4)/(x − 2). Thay thẳng x = 2 thì ra 0/0 — “máy hỏng tại chỗ đó”, nhưng xu hướng thì rõ.',
              steps: [
                { label: 'Phân tích', color: 'blue', text: 'Phá cấu trúc 0/0:', math: R`\frac{x^2-4}{x-2} = \frac{(x-2)(x+2)}{x-2}` },
                { label: 'Hủy mắt xích', color: 'green', text: 'Vì x chỉ TIẾN GẦN 2 chứ không bằng 2, nên x − 2 ≠ 0, được phép hủy:', math: R`= x + 2` },
                { label: 'Đọc xu hướng', color: 'amber', text: 'Giờ thay thoải mái:', math: R`\lim_{x \to 2} (x+2) = 4` },
              ],
            },
            rhythm: { verse: 'Giới hạn không hỏi “tới đâu” — chỉ hỏi “về đâu”.', note: 'Hai chữ “về đâu” là toàn bộ tinh thần của lim.' },
            representative: {
              problem: 'Dùng bảng giá trị “cảm nhận” lim (x→2) (x² − 4)/(x − 2).',
              steps: [
                { color: 'blue', text: 'x = 1.9 → 3.9;  x = 1.99 → 3.99 (từ bên trái).' },
                { color: 'green', text: 'x = 2.1 → 4.1;  x = 2.01 → 4.01 (từ bên phải).' },
                { color: 'amber', text: 'Hai bên cùng bò về 4 — giới hạn là 4, dù tại x = 2 biểu thức là 0/0.' },
              ],
            },
            feynman: [
              'Kể chuyện Achilles bằng lời của bạn và chỉ ra chỗ nào là “không bao giờ chạm”, chỗ nào là “giới hạn bằng 1”.',
              'Giải thích vì sao lim (x→2) được phép hủy (x − 2) mà thay thẳng x = 2 thì không.',
              'Phát biểu định nghĩa trực giác của giới hạn trong một câu, không dùng chữ “đến”.',
            ],
          },
        ],
      },
      {
        id: 'l3c2', title: 'Đạo hàm & Ứng dụng', bigIdea: 'Đạo hàm là độ dốc tức thời: zoom vô hạn vào đường cong, đường cong hóa thẳng.',
        lessons: [
          {
            id: 'l3c2s1', title: 'Đạo hàm: zoom vô hạn vào độ dốc', minutes: 25, status: 'full',
            bigPicture: 'Đạo hàm f′(a) đo ĐỘ DỐC của đường cong tại điểm a — cụ thể: hệ số khuếch đại. Nếu x nhích thêm 1 đơn vị nhỏ, f sẽ nhích khoảng f′(a) đơn vị. Vật lý gọi nó là vận tốc tức thời; hình học gọi là tiếp tuyến.',
            visual: 'tangent',
            visualCaption: 'Cát tuyến (xanh lá) quay dần thành tiếp tuyến (đỏ) khi hai điểm dồn về một.',
            story: {
              title: 'Đồng hồ tốc độ nói dối?',
              body: 'Xe bạn chạy 1 giờ được 60 km — trung bình 60 km/h, ai cũng hiểu. Nhưng đồng hồ tốc độ đang chỉ 80 km/h TẠI MỘT GIÂY: trong giây đó xe đâu có đi được 80 km. Đồng hồ đo gì? Nó đo XU HƯỚNG: “nếu tiếp tục như lúc này, mỗi giờ đi 80 km”. Đó chính là đạo hàm — đo xu hướng tức thời, không đo tổng. Đạo hàm dương: đang tăng; đạo hàm bằng 0: đỉnh đồi hoặc đáy trũng — bí quyết của mọi bài toán tối ưu.',
            },
            colorExample: {
              intro: 'Đạo hàm của f(x) = x³. Quy tắc mũ là công cụ dữ dội nhất giải tích sơ cấp.',
              steps: [
                { label: 'Mũ ra trước', color: 'blue', text: 'Đưa số mũ 3 xuống làm hệ số:', math: R`\frac{d}{dx}x^3 = 3 \cdot x^{\square}` },
                { label: 'Mũ bớt một', color: 'green', text: 'Giảm số mũ đi 1:', math: R`= 3x^2` },
                { label: 'Đọc ý nghĩa', color: 'amber', text: 'Tại x = 2: f′(2) = 12 → đường cong dốc “12 đơn vị trên mỗi 1 đơn vị đi ngang”.' },
              ],
            },
            rhythm: { verse: 'Mũ ra trước, mũ bớt một — hằng số đi rồi, con số một ra đi.', note: 'Câu sau nhắc: đạo hàm hằng số = 0, đạo hàm x = 1.' },
            representative: {
              problem: 'Xe chạy theo s(t) = t² (mét sau t giây). Tốc độ tại đúng giây thứ 3?',
              steps: [
                { color: 'blue', text: 'Tốc độ tức thời là đạo hàm:', math: R`s'(t) = 2t` },
                { color: 'green', text: 'Thay t = 3:', math: R`s'(3) = 6\ \text{m/s}` },
                { color: 'amber', text: 'So với tốc độ trung bình 3 giây đầu: s(3)/3 = 3 m/s. Xu hướng cuối nhanh gấp đôi trung bình — xe đang tăng tốc!' },
              ],
            },
            feynman: [
              'Giải thích vì sao đồng hồ tốc độ là “máy đo đạo hàm” cho người chưa học giải tích.',
              'Vẽ đường cong bất kỳ, vẽ tiếp tuyến tại 2 điểm và đọc dấu đạo hàm ở đó.',
              'Nói quy tắc mũ bằng vần điệu rồi đạo hàm x⁵, 3x⁴ thành tiếng.',
            ],
          },
          {
            id: 'l3c2s2', title: 'Cực trị & bài toán tối ưu', minutes: 25, status: 'full',
            bigPicture: 'Trên đỉnh đồi và đáy trũng, mặt đất PHẲNG tạm thời — đạo hàm bằng 0. Công thức tối ưu: (1) dịch bài toán đời thực thành hàm f(x); (2) giải f′(x) = 0; (3) phân loại đỉnh đồi / đáy trũng bằng dấu đạo hàm hai bên. Đây là công cụ kiếm tiền, tiết kiệm và thiết kế của giải tích.',
            visual: 'extrema',
            visualCaption: 'Chỗ dốc đổi dấu là chỗ tiếp tuyến nằm ngang: f′(x) = 0.',
            story: {
              title: 'Nghề săn đỉnh đồi',
              body: 'Doanh nghiệp hỏi: “Giá bao nhiêu thì lãi cao nhất?”. Kỹ sư hỏi: “Chiếm đất bao nhiêu thì tường ngắn nhất?”. Cả hai đều đang đi SĂN một thứ: chỗ đạo hàm bằng 0. Đứng trên đỉnh đồi, bước trái hay bước phải cũng đều đi XUỐNG — đó là dấu hiệu nhận diện: đạo hàm trái dương, phải âm. Hòm sữa tiết kiệm bìa nhất, ống nước rẻ nhất, quỹ đạo tiết kiệm nhiên liệu nhất — văn minh hiện đại là một tuyển tập các đỉnh đồi và đáy trũng.',
            },
            colorExample: {
              intro: 'Tìm giá trị lớn nhất của f(x) = −x² + 4x.',
              steps: [
                { label: 'Đạo hàm', color: 'blue', text: 'Quy tắc mũ từng số hạng:', math: R`f'(x) = -2x + 4` },
                { label: 'Giải f′ = 0', color: 'green', text: 'Chỗ dốc đổi dấu:', math: R`-2x + 4 = 0 \Rightarrow x = 2` },
                { label: 'Phân loại', color: 'amber', text: 'Trái (x<2): f′ > 0 đi lên; phải: f′ < 0 đi xuống → ĐỈNH ĐỒI.' },
                { label: 'Đọc giá trị', color: 'rose', text: 'f(2) = −4 + 8 = 4 → max = 4.' },
              ],
            },
            rhythm: { verse: 'Săn cực trị: đạo hàm về không; trái lên phải xuống là đỉnh, trái xuống phải lên là đáy.', note: 'Đỉnh/đáy luôn đến trễ hơn “nghiệm của f′=0” một bước phân loại — đừng quên!' },
            representative: {
              problem: 'Có 40 m lưới, rào vườn chữ nhật sát tường (tường thay một cạnh). Rộng bao nhiêu để vườn lớn nhất?',
              steps: [
                { color: 'blue', text: 'Đặt rộng x → dài = 40 − 2x (vì tường đỡ một cạnh dài).' },
                { color: 'green', text: 'Diện tích:', math: R`S(x) = x(40 - 2x) = 40x - 2x^2` },
                { color: 'amber', text: 'S′(x) = 40 − 4x = 0 → x = 10. Vườn 10 × 20 = 200 m² — hình “nửa vuông”.' },
              ],
            },
            feynman: [
              'Giải thích vì sao “đạo hàm bằng 0” ứng với đỉnh đồi/đáy trũng bằng hình mặt đất.',
              'Kể quy trình 3 bước tối ưu và nhấn mạnh bước 3 (phân loại) tránh lỗi nào?',
              'Tự đặt một bài toán tối ưu trong nhà (vd: cắt giấy hộp) và giải bằng 3 bước.',
            ],
          },
        ],
      },
      {
        id: 'l3c3', title: 'Tích phân', bigIdea: 'Tích phân là cắt–đếm–ghép: cắt vật thể thành mảnh nhỏ vô hạn, cộng lại chính xác.',
        lessons: [
          {
            id: 'l3c3s1', title: 'Tích phân: cắt mì, đếm sợi', minutes: 25, status: 'full',
            bigPicture: 'Tích phân trả lời “TỔNG LŨY KẾ là bao nhiêu?”. Diện tích dưới đường cong = cắt thành dải chữ nhật mảnh → cộng dồn. Cắt càng mảnh, sai số càng tan biến. Và Định lý cơ bản (FTOC): tích phân là đạo hàm đi NGƯỢC chiều — nguyên hàm của đạo hàm chính là hàm gốc.',
            visual: 'riemann',
            visualCaption: 'Cắt 6–8 dải: gần đúng. Cắt vô hạn dải: chính xác — đó là tích phân.',
            story: {
              title: 'Cắt sợi mì(t)',
              body: 'Xe chạy với vận tốc ĐỔI DẦN — hỏi đi được bao nhiêu km? Cộng “vận tốc × thời gian” không chạy được vì vận tốc mỗi giây một khác. Giải pháp của Newton và Leibniz: CẮT 5 giây thành những lát cực mỏng — trong mỗi lát, vận tốc gần như KHÔNG ĐỔI, nhân ra một dải chữ nhật nhỏ; cộng tất cả các dải lại. Cắt mảnh vô hạn, tổng các dải chính xác bằng diện tích dưới đường vận tốc — đó là ∫v dt. Đạo hàm cắt nhỏ để đo XU HƯỚNG; tích phân cộng dồn để đo TỔNG — hai chiều của cùng một đồng xu (FTOC).',
            },
            colorExample: {
              intro: 'Tính ∫₀² x dx — diện tích dưới đường thẳng y = x từ 0 đến 2.',
              steps: [
                { label: 'Tìm nguyên hàm', color: 'blue', text: 'Đi ngược quy tắc mũ (“mũ cộng một, chia số mới”):', math: R`\int x\,dx = \frac{x^2}{2} + C` },
                { label: 'Thay cận trên − cận dưới', color: 'green', text: 'FTOC làm việc:', math: R`\int_0^2 x\,dx = \frac{2^2}{2} - \frac{0^2}{2} = 2` },
                { label: 'Kiểm tra hình học', color: 'amber', text: 'Tam giác vuông cạnh 2: S = ½ · 2 · 2 = 2 ✓ — tích phân khớp hình học.' },
              ],
            },
            rhythm: { verse: 'Cắt nhỏ — cộng to — đúng như hình vẽ; đạo hàm đi lên, tích phân đi về.', note: 'Nguyên hàm của xⁿ là x^(n+1)/(n+1): ngược lại của “mũ ra trước, mũ bớt một”.' },
            representative: {
              problem: 'Xe chạy đều 10 m/s trong 5 giây. Vì sao ∫₀⁵ 10 dt = 50 hiển nhiên đúng?',
              steps: [
                { color: 'blue', text: 'Nguyên hàm của 10 là 10t → ∫ = 10·5 − 0 = 50.' },
                { color: 'green', text: 'Hình học: “diện tích” dưới đường ngang y = 10 là hình chữ nhật 5 × 10 = 50.' },
                { color: 'amber', text: 'Nhận ra chưa: quãng đường = diện tích dưới đường vận tốc. Đó là cách nhìn tích phân bằng mắt.' },
              ],
            },
            feynman: [
              'Kể chuyện cắt lát mì/t và vì sao cắt càng mảnh càng chính xác.',
              'Giải thích FTOC (“hai chiều của một đồng xu”) bằng ví dụ vận tốc–quãng đường.',
              'Tính ∫₀³ 2x dx rồi kiểm tra bằng diện tích tam giác.',
            ],
          },
        ],
      },
      {
        id: 'l3c4', title: 'Chuỗi & Hàm nhiều biến', bigIdea: 'Cộng vô hạn số hạng có thể ra một số hữu hạn; hàm nhiều biến có “độ dốc” theo từng phương riêng.',
        lessons: [
          {
            id: 'l3c4s1', title: 'Chuỗi số & Taylor', minutes: 20, status: 'full',
            bigPicture: 'Cộng VÔ HẠN số hạng: có khi hội tụ về một số hữu hạn (1/2 + 1/4 + 1/8 + … = 1 — Achilles!), có khi phân kỳ chạy trốn vô cực (1 + 1 + 1 + …). Taylor là phép màu thứ hai: mọi hàm “mượt” đều bịa lại được gần đúng bằng đa thức — vì sao máy tính tính được sin chỉ bằng cộng nhân chia.',
            visual: 'zeno',
            visualCaption: 'Các bước 1/2, 3/4, 7/8… không bao giờ chạm 1 — nhưng tổng hội tụ đúng bằng 1.',
            story: {
              title: 'Tổng vô hạn không phải chuyện viễn tưởng',
              body: 'Achilles đi từng nửa quãng còn lại: 1/2, 3/4, 7/8… Mỗi bước là một số hạng của chuỗi. Cộng HỮU HẠN bước: chưa tới 1. Cộng tất cả (hội tụ): ĐÚNG 1. Taylor kéo ý tưởng này xa hơn: hàm sin xút “được lắp ráp từ các đa thức” — x − x³/6 + x⁵/120 − …; lấy càng nhiều số hạng, bản sao càng giống thật. Đó là lý do chiếc máy tính bỏ túi của bạn, vốn chỉ biết cộng trừ nhân chia, vẫn “biết” sin, eˣ và ln.',
            },
            colorExample: {
              intro: 'Xấp xỉ sin 0,1 bằng đa thức Taylor bậc 3: sin x ≈ x − x³/6.',
              steps: [
                { label: 'Thay x = 0,1', color: 'blue', text: 'Số nhỏ nên x³ còn nhỏ hơn rất nhiều:', math: R`\sin 0{,}1 \approx 0{,}1 - \frac{(0{,}1)^3}{6}` },
                { label: 'Tính', color: 'green', text: '(0,1)³ = 0,001:', math: R`\approx 0{,}1 - 0{,}000167 = 0{,}099833` },
                { label: 'So với thật', color: 'amber', text: 'sin 0,1 = 0,0998334… — khớp 6 chữ số! Đa thức nhỏ bé “nhại” được sin.' },
              ],
            },
            rhythm: { verse: 'Hội tụ là bò về một số, phân kỳ là chạy trốn vô cực; Taylor nhại hàm bằng đa thức — lấy càng nhiều càng giống.', note: 'Kiểm tra hội tụ nhanh nhất: so sánh với chuỗi mấu chốt 1/2ⁿ (hội tụ) và 1/n (phân kỳ).' },
            representative: {
              problem: 'Tại sao 1 + 1/2 + 1/3 + 1/4 + … (chuỗi điều hòa) PHÂN KỲ dù các số hạng nhỏ dần?',
              steps: [
                { color: 'blue', text: 'Gom nhóm: (1/3 + 1/4) > 1/2; (1/5 + … + 1/8) > 1/2; mỗi nhóm vượt 1/2.' },
                { color: 'green', text: 'Vô hạn nhóm → tổng vượt 1/2 + 1/2 + 1/2 + … → trôi ra vô cực.' },
                { color: 'amber', text: 'Bài học: “các số hạng nhỏ dần” KHÔNG đủ để hội tụ — phải nhỏ dần ĐỦ NHANH.' },
              ],
            },
            feynman: [
              'Kể chuyện Achilles như một chuỗi và phát biểu khi nào chuỗi hình học hội tụ.',
              'Giải thích vì sao máy tính “biết” sin nhờ đa thức Taylor.',
              'Chỉ ra điểm khác nhau giữa 1/2ⁿ (hội tụ) và 1/n (phân kỳ) bằng lời.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l4', num: 4,
    name: 'Core Undergraduate', nameEn: 'Đại số tuyến tính, Rời rạc & Chứng minh',
    tagline: 'Không gian vector, phép biến hình, nghệ thuật quy nạp — xương sống của toán đại học.',
    outcome: 'Nhìn ma trận là một phép biến hình; làm việc với cơ sở và chiều; viết chứng minh quy nạp; đếm bằng hoán vị – tổ hợp.',
    theme: 'rose',
    textbook: { title: 'Linear Algebra Done Right', author: 'Sheldon Axler', url: 'https://linear.axler.net/LADR4e.pdf', note: 'Bản PDF miễn phí trên trang chính thức của tác giả — bản 4e.' },
    chapters: [
      {
        id: 'l4c1', title: 'Vector & Không gian vector', bigIdea: 'Vector là mũi tên; không gian vector là cả “vũ trụ mũi tên” đóng kín với cộng và nhân hệ số.',
        lessons: [
          {
            id: 'l4c1s1', title: 'Ma trận: phép biến hình không gian', minutes: 30, status: 'full',
            bigPicture: 'Ma trận không phải bảng số — nó là PHÉP BIẾN HÌNH: xoay, kéo giãn, lật cả mặt phẳng. Nhân ma trận với vector = ném vector qua phép biến hình. Nhân hai ma trận = nối hai phép biến hình (“xong cái này thì làm cái kia”).',
            visual: 'matrix',
            visualCaption: 'Ma trận [[2,1],[0,1]] kéo hình vuông đơn vị thành hình bình hành.',
            story: {
              title: 'Bàn tay xoay cả thành phố',
              body: 'Hãy tưởng tượng một bàn tay vô hình nắm cả thành phố và xoay, kéo, bóp nó: mọi ngôi nhà (vector) cùng biến dạng theo — không nhà nào tự do lẻ loi. Đó là ma trận. Trong toàn thành phố, đôi khi có những “con phố thần kỳ” không hề bị xoay, chỉ bị kéo dài ngắn lại — đó là EIGENVECTOR, và hệ số kéo dài là EIGENVALUE. Google xếp hạng trang web, máy học nén dữ liệu — đều là đi tìm những con phố không xoay này.',
            },
            colorExample: {
              intro: 'Tính A·v với A = [[2,0],[0,1]], v = (1,1). Nhân ma trận: hàng gặp cột.',
              steps: [
                { label: 'Hàng 1 gặp v', color: 'blue', text: 'Lấy tích có hướng của hàng đầu:', math: R`2 \cdot 1 + 0 \cdot 1 = 2` },
                { label: 'Hàng 2 gặp v', color: 'green', text: 'Tương tự hàng sau:', math: R`0 \cdot 1 + 1 \cdot 1 = 1` },
                { label: 'Đọc ý nghĩa biến hình', color: 'amber', text: 'Kết quả (2, 1): phép biến hình KÉO NGANG gấp đôi, giữ nguyên chiều dọc.' },
              ],
            },
            rhythm: { verse: 'Nhân ma trận: hàng gặp cột, nhân rồi cộng.', note: 'Sáu chữ “hàng gặp cột, nhân rồi cộng” là toàn bộ thuật toán.' },
            representative: {
              problem: 'Phép xoay 90° biến (1, 0) thành đâu? Đọc ma trận xoay.',
              steps: [
                { color: 'blue', text: 'Xoay 90°: (1,0) → (0,1) và (0,1) → (−1,0). Cột của ma trận là hình ảnh của hai vector nền:', math: R`R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}` },
                { color: 'green', text: 'Kiểm tra R·(1,0) = (0,1) — đúng như hình ảnh trực quan.' },
                { color: 'amber', text: 'Bài học lớn: ĐỌC ma trận qua hai cột — mỗi cột cho biết vector nền đi đến đâu.' },
              ],
            },
            feynman: [
              'Giải thích “ma trận là phép biến hình” cho người chưa học, bằng ví dụ kéo giãn một tấm ảnh.',
              'Vẽ hình vuông đơn vị và hình bình hành mà [[2,1],[0,1]] tạo ra.',
              'Nói vì sao nhân ma trận A·B nghĩa là “làm B trước, A sau”.',
            ],
          },
          {
            id: 'l4c1s2', title: 'Tổ hợp tuyến tính, độc lập & cơ sở', minutes: 25, status: 'full',
            bigPicture: 'Cơ sở = bộ nguyên liệu TỐI THIỂU pha được mọi vector trong không gian bằng tổ hợp tuyến tính (cộng các bội). “Độc lập tuyến tính” = không nguyên liệu nào thừa — không cái nào pha ra được từ các cái khác. Số nguyên liệu của cơ sở = SỐ CHIỀU của không gian.',
            visual: 'basis',
            visualCaption: 'e₁, e₂ là hai nguyên liệu gốc: mọi vector (x, y) = x·e₁ + y·e₂.',
            story: {
              title: 'Bộ pha chế tối giản',
              body: 'Quầy cocktail có hàng nghìn món, nhưng kho chỉ cần 2 nguyên liệu gốc. Trong ℝ², mọi vector (x, y) đều pha được từ e₁ = (1,0) và e₂ = (0,1): múc x phần e₁, y phần e₂ — xong. Bộ gốc đó là CƠ SỞ. Nếu thêm nguyên liệu thứ ba (2, 4) vào kho? Thừa — vì (2,4) = 2·e₁ + 4·e₂ pha ra được rồi. Ba vector này “phụ thuộc tuyến tính”. Ngược lại, nếu chỉ có e₁ một mình — thiếu, pha không ra (0,1). “Đủ mà không thừa” chính là độc lập + phủ = cơ sở, và ĐẾM số nguyên liệu là đếm chiều của thế giới.',
            },
            colorExample: {
              intro: 'Cho v = (3, 5). Pha v từ e₁ = (1, 0) và e₂ = (0, 1).',
              steps: [
                { label: 'Đọc hệ số', color: 'blue', text: 'Mỗi tọa độ là một “liều lượng”:', math: R`v = 3e_1 + 5e_2` },
                { label: 'Kiểm tra phụ thuộc', color: 'green', text: 'e₁, e₂ độc lập: không pha e₂ từ e₁ được (e₁ luôn nằm ngang).' },
                { label: 'Đếm chiều', color: 'amber', text: 'Cơ sở có 2 nguyên liệu → ℝ² có chiều 2. Bạn đã biết từ lâu: 1 điểm mặt phẳng cần đúng 2 con số.' },
              ],
            },
            rhythm: { verse: 'Đủ pha mọi vector, không ai thay ai — đó là cơ sở; đếm nguyên liệu là đếm chiều.', note: 'Kiểm tra độc lập nhanh: các vector không cùng nằm trên một đường thẳng (ℝ²) / một mặt phẳng (ℝ³).' },
            representative: {
              problem: 'Các vector (1, 2) và (2, 4) có độc lập không?',
              steps: [
                { color: 'rose', text: 'Thử pha chéo — cái này pha ra được cái kia:', math: R`(2, 4) = 2 \cdot (1, 2)` },
                { color: 'green', text: '→ PHỤ THUỘC tuyến tính: một nguyên liệu thừa, chỉ vẽ được đúng một đường thẳng.' },
                { color: 'amber', text: 'Kết luận: hai vector chỉ tạo “không gian 1 chiều” — không đủ làm cơ sở của ℝ².' },
              ],
            },
            feynman: [
              'Kể lại quầy cocktail: vì sao (2, 4) là nguyên liệu thừa?',
              'Phát biểu định nghĩa độc lập tuyến tính bằng ngôn ngữ “pha chế”.',
              'Vì sao mọi cơ sở của ℝ² đều có đúng 2 vector? Nói bằng đếm chiều.',
            ],
          },
        ],
      },
      {
        id: 'l4c2', title: 'Phép biến đổi tuyến tính sâu hơn', bigIdea: 'Eigenvector: những hướng bất biến của phép biến hình — chìa khóa của phân tích dữ liệu.',
        lessons: [
          {
            id: 'l4c2s1', title: 'Eigenvector & trị riêng', minutes: 25, status: 'full',
            bigPicture: 'Phép biến hình A xoay, kéo cả không gian — nhưng thường còn những hướng ĐẶC BIỆT không bị xoay, chỉ bị kéo dài λ lần: A·v = λv. v là eigenvector (hướng bất biến), λ là eigenvalue (hệ số kéo dài). Chúng là “xương sống ẩn” của phép biến hình — chìa khóa của PageRank, phân tích dữ liệu, dao động.',
            visual: 'eigen',
            visualCaption: 'Vector xanh đi đúng hướng cũ (chỉ dài ra) — eigenvector. Vector vàng bị xoay lệch.',
            story: {
              title: 'Những con phố không xoay',
              body: 'Ma trận là bàn tay nắm cả thành phố kéo xoay. Hầu hết con phố bị vặn hướng. Nhưng luôn có (một số ít) con phố THẦN KỲ bị kéo dọc theo chính nó — chỉ dài ra hay ngắn đi. Đó là eigenvector, hệ số kéo là eigenvalue. Google xếp hạng web: hàng tỷ trang liên kết nhau là một ma trận khổng lồ; eigenvector của nó chỉ ra “trang nào đứng đầu”. Nén ảnh, phân tích dao động cầu, cơ học lượng tử — toàn là nghề tìm những con phố không xoay này.',
            },
            colorExample: {
              intro: 'A = [[3, 0], [0, 2]]. Đọc eigenvector trực tiếp từ hai cột.',
              steps: [
                { label: 'Thử (1, 0)', color: 'blue', text: 'Cột 1 nói chuyện:', math: R`A \begin{pmatrix}1\\0\end{pmatrix} = \begin{pmatrix}3\\0\end{pmatrix} = 3\begin{pmatrix}1\\0\end{pmatrix}` },
                { label: 'Đọc λ', color: 'green', text: 'Đúng hướng cũ, dài gấp 3 → (1, 0) là eigenvector, λ = 3.' },
                { label: 'Thử (0, 1)', color: 'amber', text: 'Cột 2:', math: R`A \begin{pmatrix}0\\1\end{pmatrix} = \begin{pmatrix}0\\2\end{pmatrix} = 2\begin{pmatrix}0\\1\end{pmatrix}` },
                { label: 'Kết luận', color: 'rose', text: 'Hai hướng bất biến: ngang λ=3, dọc λ=2. Ma trận chéo “tự thú” toàn bộ bí mật.' },
              ],
            },
            rhythm: { verse: 'A·v = λv: vào đúng hướng, chỉ bị kéo dài.', note: 'Tìm eigenvalue: giải det(A − λI) = 0 — “hỏi λ nào làm phép biến hình bị sập”. ' },
            representative: {
              problem: 'A = [[2, 1], [0, 2]] — vector nào không bị xoay?',
              steps: [
                { color: 'blue', text: 'Thử (1, 0):', math: R`A\begin{pmatrix}1\\0\end{pmatrix} = \begin{pmatrix}2\\0\end{pmatrix} = 2\begin{pmatrix}1\\0\end{pmatrix}` },
                { color: 'green', text: '(1, 0) là eigenvector với λ = 2 — hướng ngang bất biến dù có số lệch 1.' },
                { color: 'amber', text: 'Vector khác (vd (0,1) → (1,2)) bị kéo lệch — không phải eigenvector.' },
              ],
            },
            feynman: [
              'Kể lại “con phố không xoay” và nối với A·v = λv.',
              'Vì sao ma trận chéo dễ đọc eigenvector? Nói bằng hai cột.',
              'Giải thích vì sao PageRank là bài toán tìm eigenvector, một câu.',
            ],
          },
        ],
      },
      {
        id: 'l4c3', title: 'Toán rời rạc: Quy nạp & Đếm', bigIdea: 'Quy nạp là trèo thang vô tận: dựng bậc đầu, rồi chứng minh bậc sau đứng trên bậc trước.',
        lessons: [
          {
            id: 'l4c3s1', title: 'Quy nạp: trèo thang vô tận', minutes: 25, status: 'full',
            bigPicture: 'Muốn khẳng định P(n) đúng cho MỌI số tự nhiên n, bạn không thể kiểm tra từng cái. Chỉ cần hai nước: (1) chứng minh P(1) đúng — bậc đầu tiên; (2) chứng minh “nếu P(n) đúng thì P(n+1) đúng” — bậc sau chắc chắn đứng vững trên bậc trước. Hai nước này tự động leo được thang vô tận.',
            visual: 'ladder',
            visualCaption: 'Bậc 1 dựng xong + mỗi bậc đỡ được bậc kế = chạm mọi bậc.',
            story: {
              title: 'Hàng domino vô tận',
              body: 'Bạn đứng trước hàng domino dài vô tận. Hai điều kiện để toàn bộ hàng đổ: đẩy VIÊN ĐẦU, và đảm bảo mỗi viên khi đổ sẽ TRÚNG VIÊN SAU. Thiếu viên đầu — không có gì bắt đầu (cơ sở quy nạp sai). Viên quá xa nhau — dù bạn đẩy, sóng lan không tới (bước quy nạp hỏng). Toàn bộ chứng minh quy nạp chỉ là: kiểm tra hai điều kiện của hàng domino.',
            },
            colorExample: {
              intro: 'Chứng minh: 1 + 2 + ⋯ + n = n(n+1)/2 với mọi n. Xanh: bậc đầu; hồng: giả sử; vàng: nối bậc.',
              steps: [
                { label: 'Bậc đầu (n = 1)', color: 'blue', text: 'Vế trái là 1; vế phải:', math: R`\frac{1 \cdot 2}{2} = 1` },
                { label: 'Giả sử bậc n đổ được', color: 'rose', text: 'Giả thiết quy nạp:', math: R`1 + 2 + \cdots + n = \frac{n(n+1)}{2}` },
                { label: 'Nối bậc n+1', color: 'amber', text: 'Cộng thêm (n+1) vào hai vế:', math: R`\frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}` },
                { label: 'Đọc kết luận', color: 'green', text: 'Đúng dạng công thức tại n+1 → hàng domino đổ trọn.' },
              ],
            },
            rhythm: { verse: 'Một là dựng bậc đầu, hai là nối bậc sau — thang dài vô tận cũng trèo.', note: 'Ba nhịp: cơ sở → giả thiết → kết luận.' },
            representative: {
              problem: 'Chứng minh mọi số n ≥ 2 đều có thừa số nguyên tố.',
              steps: [
                { color: 'blue', text: 'Bậc đầu: n = 2 là nguyên tố — đã có thừa số nguyên tố (chính nó).' },
                { color: 'rose', text: 'Giả sử mọi số ≤ n đều có thừa số nguyên tố.' },
                { color: 'amber', text: 'Xét n+1: nếu nguyên tố thì xong; nếu không, n+1 = a·b với a, b ≤ n → theo giả sử, a có thừa số nguyên tố → n+1 cũng vậy.' },
              ],
            },
            feynman: [
              'Kể lại hàng domino và chỉ ra chính xác “viên đầu” và “phép nối” trong một chứng minh bất kỳ.',
              'Vì sao chỉ kiểm tra n = 1, 2, 3, …, 1000 KHÔNG đủ, trong khi quy nạp lại đủ? Nói bằng hình thang.',
              'Tự phát biểu và chứng minh quy nạp một công thức tổng đơn giản (vd: 1 + 3 + 5 + ⋯ + (2n−1) = n²).',
            ],
          },
          {
            id: 'l4c3s2', title: 'Hoán vị & tổ hợp', minutes: 20, status: 'full',
            bigPicture: 'Đếm = không sót, không trùng. Câu hỏi cốt lõi chỉ một: CÓ QUAN TÂM THỨ TỰ không? Quan tâm (xếp đội hình, mật khẩu) → HOÁN VỊ, nhân dần n(n−1)(n−2)… Không quan tâm (chọn đội, chia nhóm) → TỔ HỢP, lấy hoán vị chia đi số lần lặp.',
            visual: 'permute',
            visualCaption: '3 vật xếp thành hàng: 3 × 2 × 1 = 3! = 6 cách — mỗi cách là một hoán vị.',
            story: {
              title: 'Chọn đội hay xếp đội?',
              body: 'Lớp có 5 bạn, cần chọn 2 bạn đi trực nhật — Thứ tự có quan trọng không? Không: An–Bình và Bình–An là cùng một tổ. Nhưng nếu cần chọn MỘT lớp trưởng VÀ một lớp phó? Thứ tự quyết định chức vụ — An làm trưởng, Bình làm phó khác với đảo lại. Cùng “chọn 2 trong 5” nhưng đáp án khác nhau: tổ hợp C(5,2) = 10, hoán vị A(5,2) = 20 — gấp đúng 2! vì mỗi cặp bị đếm 2 lần khi coi thứ tự là khác. Quy tắc vàng: xác định “thứ tự có tiền không?” trước khi đếm.',
            },
            colorExample: {
              intro: 'Lớp 5 người, chọn 2 đi trực nhật (không phân biệt). Đếm bao nhiêu cách?',
              steps: [
                { label: 'Đếm như HOÁN VỊ trước', color: 'blue', text: 'Giả thứ tự quan trọng:', math: R`5 \times 4 = 20` },
                { label: 'Nhận ra lặp', color: 'rose', text: 'Mỗi cặp {An, Bình} bị đếm 2 lần (trưởng–phó đảo nhau).' },
                { label: 'Chia bỏ lặp', color: 'amber', text: 'Tổ hợp:', math: R`C(5,2) = \frac{5 \times 4}{2} = 10` },
              ],
            },
            rhythm: { verse: 'Thứ tự có giá — nhân dần (n!). Thứ tự miễn phí — nhân rồi chia bớt.', note: 'Chia bớt đúng k! (số cách xáo trộn thứ tự của nhóm được chọn).' },
            representative: {
              problem: 'Mật khẩu 4 chữ số KHÁC NHAU có bao nhiêu khả năng?',
              steps: [
                { color: 'blue', text: 'Thứ tự quan trọng (1234 ≠ 4321) → hoán vị.' },
                { color: 'green', text: 'Nhân dần, mỗi chữ số bớt một lựa chọn:', math: R`10 \times 9 \times 8 \times 7 = 5040` },
                { color: 'amber', text: 'Nếu cho phép trùng: 10⁴ = 10.000 — “khác nhau” bớt đi gần nửa không gian.' },
              ],
            },
            feynman: [
              'Kể chuyện “chọn đội” vs “xếp đội” và vì sao C(5,2) = A(5,2)/2.',
              'Phát biểu quy tắc nhân bằng ví dụ mật khẩu.',
              'Tính C(6,2) bằng hai cách: công thức và liệt kê có hệ thống.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l5', num: 5,
    name: 'Advanced Undergraduate', nameEn: 'Giải tích thực & Đại số trừu tượng',
    tagline: 'Đi xuống nền móng: vì sao giải tích đúng? Vì số thực kín lỗ, và cấu trúc có quy tắc.',
    outcome: 'Viết chứng minh ε-δ; hiểu tính đầy đủ (completeness) của ℝ; đọc hiểu cấu trúc nhóm — nền cho topology và đại số trừu tượng.',
    theme: 'violet',
    textbook: { title: 'Understanding Analysis', author: 'Stephen Abbott', url: 'https://eprints.ukh.ac.id/id/eprint/217/1/2015_Book_UnderstandingAnalysis.pdf', note: 'Cuốn giải tích thực dễ đọc nhất thế giới — kể chuyện trong khi chứng minh.' },
    chapters: [
      {
        id: 'l5c1', title: 'Số thực & Dãy số', bigIdea: 'Số hữu tỉ dày đặc mà vẫn còn lỗ (√2). Số thực lấp mọi lỗ — tính chất này là nền của mọi định lý giải tích.',
        lessons: [
          {
            id: 'l5c1s1', title: 'Completeness: lưới số thực không có lỗ', minutes: 30, status: 'full',
            bigPicture: 'Số hữu tỉ tưởng như kín — giữa hai số nào cũng có vô hạn số khác. Nhưng √2 chui qua: không hữu tỉ nào bình phương được thành 2. Số thực (ℝ) là tập “lấp mọi lỗ”: mọi dãy Cauchy hội tụ, mọi tập chặn trên có cận trên nhỏ nhất. Đây là TIỀN ĐỀ duy nhất mà cả giải tích đứng trên.',
            visual: 'realline',
            visualCaption: 'Hữu tỉ: lưới dày nhưng lọt cá; số thực: lấp kín điểm √2.',
            story: {
              title: 'Người phá vỡ tín ngưỡng Pythagoras',
              body: 'Trường phái Pythagoras tin: “Vạn vật là số” — mọi độ dài đều là tỉ số của hai số nguyên. Rồi một học trò chứng minh: đường chéo hình vuông cạnh 1 (tức √2) KHÔNG thể là bất cứ tỉ số nào. Truyền thuyết kể rằng người khám phá bị ném xuống biển. Bài học: một định lý nhỏ cũng từng làm rung chuyển thế giới quan. Số thực ra đời để lấp chỗ trống đó — và giải tích hiện đại sống nhờ việc “không còn lỗ nào nữa”.',
            },
            colorExample: {
              intro: 'Chứng minh √2 không hữu tỉ — phản chứng kinh điển. Xanh: giả sử; hồng: mâu thuẫn chẵn/lẻ.',
              steps: [
                { label: 'Giả sử ngược lại', color: 'blue', text: 'Giả sử phân số tối giản:', math: R`\sqrt{2} = \frac{p}{q}` },
                { label: 'Bình phương & rút gọn', color: 'green', text: 'Khi đó', math: R`p^2 = 2q^2` },
                { label: 'Phân tích chẵn lẻ', color: 'rose', text: 'p² chẵn → p chẵn. Viết p = 2k → 4k² = 2q² → q² = 2k² chẵn → q chẵn. Cả p và q cùng chẵn — mâu thuẫn với rút gọn tối giản.' },
                { label: 'Kết luận', color: 'amber', text: 'Không tồn tại p/q như vậy: √2 nằm ngoài lưới hữu tỉ.' },
              ],
            },
            rhythm: { verse: 'Hữu tỉ dày mà chưa kín — thực số lấp đầy, giải tích yên.', note: '“Yên” = mọi định lý hội tụ, liên tục, cực trị đều an toàn trên ℝ.' },
            representative: {
              problem: 'Tại sao dãy 1; 1.4; 1.41; 1.414; … “đang đi về đâu”?',
              steps: [
                { color: 'blue', text: 'Mỗi số hạng là số hữu tỉ, xấp xỉ √2 ngày càng sát.' },
                { color: 'green', text: 'Trên tập hữu tỉ, dãy này “lơ lửng”: không có số hữu tỉ nào là đích đến.' },
                { color: 'amber', text: 'Trên ℝ, tính đầy đủ bảo đảm đích tồn tại: chính là √2. Đó là lý do giải tích được xây trên ℝ chứ không trên ℚ.' },
              ],
            },
            feynman: [
              'Kể lại câu chuyện trường phái Pythagoras và lý do “√2 gây khủng hoảng”.',
              'Giải thích “dày nhưng còn lỗ” bằng hình ảnh lưới đánh cá cho người chưa học.',
              'Phát lại chứng minh √2 vô tỉ bằng lời, chỉ dùng tính chẵn lẻ.',
            ],
          },
        ],
      },
      {
        id: 'l5c2', title: 'Giới hạn dưới ánh sáng ε-δ', bigIdea: 'ε-δ biến chữ “gần” thành trò chơi thách–đáp: đối thủ ra ε, bạn tìm δ. Thắng mọi ván = định lý được chứng minh.',
        lessons: [
          {
            id: 'l5c2s1', title: 'ε-δ: trò chơi thách thức', minutes: 30, status: 'full',
            bigPicture: 'Định nghĩa ε-δ biến trực giác “hàm đi về L” thành trò chơi có luật: đối thủ chọn ε (dải dung sai quanh L), bạn phải tìm δ (vùng quanh a) sao cho mọi x trong vùng đó đều đưa f(x) vào dải. Bạn thắng với MỌI ε → giới hạn được chứng minh chặt.',
            visual: 'epsband',
            visualCaption: 'Chọn δ sao cho cả đoạn x ∈ (a−δ, a+δ) nằm gọn trong dải ε của L.',
            story: {
              title: 'Kỹ sư và người thách thức',
              body: 'Kỹ sư tuyên bố: “Chiều cao cống này luôn ổn định ở mức 5 m.” Người thách: “Tôi cần sai lệch dưới 0.1 m!” — “Rồi, trong phạm vi 0.05 m quanh vị trí chuẩn, sai lệch dưới 0.1.” — “Thế 0.01 m?” — “Tôi thu phạm vi xuống còn 0.005 m.” Nếu kỹ sư thắng MỌI ván, tuyên bố của anh ta chính xác về mặt toán học. ε là mức dung sai đối thủ ra, δ là phạm vi bạn chọn. Tuyên bố chỉ đúng khi bạn CÓ LUÔN nước đi.',
            },
            colorExample: {
              intro: 'Chứng minh lim (x→2) (3x − 1) = 5. Mục tiêu: với mọi ε > 0, tìm δ.',
              steps: [
                { label: 'Viết sai lệch', color: 'blue', text: 'Tính khoảng cách tới đích:', math: R`|3x - 1 - 5| = 3|x - 2|` },
                { label: 'Giải bất đẳng thức', color: 'green', text: 'Cần 3|x−2| < ε ⟺', math: R`|x - 2| < \frac{\varepsilon}{3}` },
                { label: 'Chọn nước đi', color: 'amber', text: 'Chọn δ = ε/3. Khi đó mọi x trong (2−δ, 2+δ) đều thắng — với MỌI ε. Kết thúc chứng minh.' },
              ],
            },
            rhythm: { verse: 'ε là thách, δ là đáp — thắng mọi ván, định lý xong.', note: 'Quy trình 3 bước: viết sai lệch → giải ra |x−a| < (biểu thức của ε) → chọn δ.' },
            representative: {
              problem: 'Chứng minh lim (x→3) x² = 9 — tại sao phải “khống chế x” trước?',
              steps: [
                { color: 'blue', text: 'Sai lệch:', math: R`|x^2 - 9| = |x-3|\,|x+3|` },
                { color: 'rose', text: 'Nếu x gần 3 thì |x+3| < 7 (giới hạn x trong (2,4)). Giờ sai lệch < 7|x−3|.' },
                { color: 'amber', text: 'Chọn δ = min(1, ε/7): vừa khống chế, vừa thắng mọi ε. Hai việc đi cùng nhau — kỹ thuật kinh điển của giải tích thực.' },
              ],
            },
            feynman: [
              'Kể lại trò chơi kỹ sư – người thách và chỉ rõ ai chọn ε, ai chọn δ.',
              'Giải thích vì sao trong ví dụ x² cần cả hai số: 1 (khống chế) và ε/7.',
              'Viết định nghĩa ε-δ bằng lời của bạn, không nhìn sách, rồi đọc to kiểm tra.',
            ],
          },
          {
            id: 'l5c2s2', title: 'Tính liên tục & định lý Weierstrass', minutes: 25, status: 'full',
            bigPicture: 'Liên tục tại a: giới hạn = giá trị, lim(x→a) f(x) = f(a) — “vẽ không nhấc bút”. Định lý Weierstrass: hàm LIÊN TỤC trên đoạn ĐÓNG [a, b] chắc chắn đạt max và min. “Đoạn đóng” là điều kiện sống còn: bỏ nó, mọi thứ có thể trốn khỏi tay bạn.',
            visual: 'extrema',
            visualCaption: 'Trên đoạn đóng bị chặn, đường không nhấc bút chắc chắn chạm đỉnh cao nhất và đáy thấp nhất.',
            story: {
              title: 'Vì sao phải “đóng cửa”',
              body: 'Hàm f(x) = 1/x trên khoảng MỞ (0, 1): liên tục tuyệt đối — nhưng càng về 0 càng bay lên vô cực, KHÔNG BAO GIỜ đạt max. Cửa mở, hàm trốn được. Đóng cửa lại — làm việc trên [0,001; 1] — ngay lập tức max = 1000 tại x = 0,001. Weierstrass cam kết: đoạn đóng + bị chặn + liên tục = max và min ĐƯỢC CHẮC CHẮN đạt tại điểm nào đó. Định lý này là nền của mọi bài tối ưu trong giải tích — và “đoạn đóng” chính là cái rọ bắt cực trị.',
            },
            colorExample: {
              intro: 'f(x) = x² trên đoạn [0, 2]. Chứng minh Weierstrass “hiện hình” ở đâu?',
              steps: [
                { label: 'Kiểm tra điều kiện', color: 'blue', text: 'Đoạn đóng [0,2] ✓, bị chặn ✓, liên tục ✓ — định lý có hiệu lực.' },
                { label: 'Săn min', color: 'green', text: 'f tăng dần từ 0 → min = f(0) = 0 tại đầu mút trái.' },
                { label: 'Săn max', color: 'amber', text: 'max = f(2) = 4 tại đầu mút phải. Cực trị có thể nằm ĐẦU MÚT — chỗ f′(x) = 0 không bắt được!' },
              ],
            },
            rhythm: { verse: 'Đoạn đóng bị chặn cộng liên tục — đỉnh và đáy chắc chắn về nhà.', note: 'Ba điều kiện như ba viên domino: bỏ viên nào, định lý đổ ngay (thử bỏ “đóng” với 1/x).' },
            representative: {
              problem: 'Vì sao f(x) = 1/x trên khoảng (0, 1) KHÔNG đạt giá trị lớn nhất?',
              steps: [
                { color: 'rose', text: 'Khoảng MỞ: đầu mút 0 không thuộc tập — cửa mở.' },
                { color: 'blue', text: 'Ứng viên max nào cũng bị đánh bại: lấy x nhỏ hơn nửa, f lớn gấp đôi.' },
                { color: 'green', text: 'Hàm chạy về +∞ mà không chạm — Weierstrass lắc đầu. Cửa đóng là tất cả.' },
              ],
            },
            feynman: [
              'Giải thích “liên tục = vẽ không nhấc bút” và nối với lim = f(a).',
              'Kể chuyện “đóng cửa” — vì sao đoạn đóng quan trọng hơn vẻ ngoài tưởng chừng nhỏ.',
              'Phát biểu Weierstrass đủ 3 điều kiện và cho 1 ví dụ mỗi điều kiện bị vi phạm.',
            ],
          },
        ],
      },
      {
        id: 'l5c3', title: 'Đại số trừu tượng: Nhóm', bigIdea: 'Nhóm = một phép hợp + bốn luật chơi. Mọi “đối xứng” trong tự nhiên đều là một nhóm.',
        lessons: [
          {
            id: 'l5c3s1', title: 'Nhóm: khi đối xứng thành toán học', minutes: 25, status: 'full',
            bigPicture: 'Nhóm = một phép hợp + 4 luật chơi: ĐÓNG KÍN, KẾT HỢP, TRUNG HÒA, NGHỊCH ĐẢO. Mọi hiện tượng “đối xứng” — xoay tam giác, cộng giờ trên đồng hồ, hoán vị — đều là một nhóm. Bảng Cayley cho phép NHÌN THẤY cấu trúc trừu tượng.',
            visual: 'clock',
            visualCaption: 'Đồng hồ 12 số: 9 + 4 = 1 (mod 12). Đi qua 12 thì vòng lại — nhóm Z₁₂.',
            story: {
              title: 'Đồng hồ là một nhóm',
              body: 'Trên mặt đồng hồ, 9 giờ + 4 giờ = 1 giờ — vì đi qua 12 thì VÒNG LẠI. Cộng giờ thỏa cả 4 luật: đóng kín (cộng 2 giờ vẫn ra giờ), kết hợp ((9+4)+3 = 9+(4+3)), trung hòa (+0 giờ không đổi gì), nghịch đảo (mọi giờ đều có giờ “đi ngược” hủy được: nghịch đảo của 4 là 8 vì 4+8 = 12 ≡ 0). Vậy số giờ trên đồng hồ là một NHỘP — toán học không quan tâm bạn đang cộng số hay xoay vật thể; cứ đúng 4 luật là cùng một cấu trúc. Đây là sức mạnh lớn nhất của đại số trừu tượng: học một, dùng vạn nơi.',
            },
            colorExample: {
              intro: 'Nhóm Z₄ = {0, 1, 2, 3} với phép cộng mod 4. Kiểm tra 4 luật.',
              steps: [
                { label: 'Đóng kín', color: 'blue', text: 'Mọi tổng đều nằm trong {0,1,2,3}: 3 + 3 = 6 ≡ 2 ✓' },
                { label: 'Kết hợp', color: 'green', text: '(1+2)+3 = 1+(2+3) = 6 ≡ 2 ✓ — thứ tự gom nhóm không quan trọng.' },
                { label: 'Trung hòa + nghịch đảo', color: 'amber', text: '0 là trung hòa: a + 0 = a. Nghịch đảo: 1 ↔ 3, 2 ↔ 2 (vì 2+2 = 4 ≡ 0).' },
              ],
            },
            rhythm: { verse: 'Đóng, kết, hòa, nghịch — bốn luật làm một nhóm.', note: 'Bốn chữ: Đóng kín — Kết hợp — Trung hòa — Nghịch đảo. Thiếu một: không phải nhóm.' },
            representative: {
              problem: 'Trong Z₆, nghịch đảo của 2 là ai?',
              steps: [
                { color: 'blue', text: 'Tìm x sao cho 2 + x ≡ 0 (mod 6), tức 2 + x chia hết 6.' },
                { color: 'green', text: 'x = 4: 2 + 4 = 6 ≡ 0 ✓' },
                { color: 'amber', text: 'Nghịch đảo của 2 là 4. Trong Z₆ còn các cặp: 1↔5, 3↔3, 5↔1.' },
              ],
            },
            feynman: [
              'Kể lại đồng hồ 12 số và chỉ ra đủ 4 luật nhóm trên đó.',
              'Vì sao “cộng số tự nhiên thường” (không mod) KHÔNG phải nhóm? Thiếu luật nào?',
              'Vẽ bảng Cayley của Z₄ từ trí nhớ và chỉ ra tính đối xứng của bảng.',
            ],
          },
        ],
      },
      {
        id: 'l5c4', title: 'Topology & Hình học vi phân', bigIdea: 'Topology học về những gì còn lại khi co giãn (nhưng không xé); hình học vi phân tính toán trên bề mặt cong.',
        lessons: [
          {
            id: 'l5c4s1', title: 'Topology: hình học của cao su', minutes: 20, status: 'full',
            bigPicture: 'Topology hỏi: điều gì CÒN LẠI khi hình được co giãn, uốn cong tự do — nhưng KHÔNG được xé rách hay dán dính. Câu trả lời tinh tế nhất: SỐ LỖ. Quả bóng (0 lỗ), bánh donut (1 lỗ), cà vạt (2 lỗ) là ba loài khác nhau — không cách co giãn nào biến được chúng thành nhau.',
            visual: 'donut',
            visualCaption: 'Co giãn được: cốc ↔ donut (cùng 1 lỗ). Không thể: bóng (0 lỗ) → donut (1 lỗ).',
            story: {
              title: 'Nhà toán học gia và chiếc cốc cà phê',
              body: 'Câu nói nổi tiếng của ngành topology: “Một nhà topology học không phân biệt chiếc cốc cà phê với chiếc bánh donut” — vì cốc CÓ MỘT LỖ (quai cốc), donut CÓ MỘT LỖ (lỗ giữa); chỉ cần nặn mềm hình cao su, cốc chảy thành donut. Nhưng bạn không bao giờ nặn cốc thành quả bóng: lỗ là thứ KHÔNG THỂ tự bịt kín mà không dán. Toán học hóa điều này: không gian mở, liên tục, compact — bộ ngôn ngữ mô tả “hình dạng bằng chất cao su” mà không cần thước đo, và nó trở thành nền của cả giải tích hiện đại lẫn vật lý.',
            },
            colorExample: {
              intro: 'Phân loại ba vật theo số lỗ (bất biến topo).',
              steps: [
                { label: 'Quả bóng', color: 'blue', text: 'Mặt kín, không lỗ → 0 lỗ. Co giãn thành hạt đậu, hộp chữ nhật — vẫn 0 lỗ.' },
                { label: 'Bánh donut', color: 'green', text: '1 lỗ xuyên qua. Cốc cà phê cùng loài (lỗ nằm ở quai).' },
                { label: 'Cà vạt', color: 'amber', text: '2 lỗ — loài thứ ba. Mỗi lần khoan thêm lỗ, “loài” đổi hẳn, không đường về.' },
              ],
            },
            rhythm: { verse: 'Co giãn tự do, xé là mất; đếm lỗ là đủ phân loài.', note: 'Hai hành động bị cấm duy nhất: XÉ (tạo lỗ mới từ không-lỗ) và DÁN (bịt lỗ).' },
            representative: {
              problem: 'Vì sao không thể “co giãn” quả bóng thành bánh donut?',
              steps: [
                { color: 'blue', text: 'Donut có 1 lỗ xuyên; bóng không có lỗ nào.' },
                { color: 'rose', text: 'Tạo lỗ = XÉ rách mặt — hành động bị cấm của topology.' },
                { color: 'amber', text: 'Số lỗ là BẤT BIẾN: phép biến đổi hợp lệ không đổi được nó → hai vật khác loài. Đó chính xác là kiểu lập luận “bất biến” của toàn ngành.' },
              ],
            },
            feynman: [
              'Kể lại câu cốc–donut và nói rõ lỗ của cốc nằm ở đâu.',
              'Phát biểu 2 hành động bị cấm và vì sao số lỗ là bất biến.',
              'Tự xếp 3 vật trong nhà theo “loài topology” (số lỗ).',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l6', num: 6,
    name: 'Advanced & Specialization', nameEn: 'Số học, Galois & Hình học đại số',
    tagline: 'Các cấu trúc lớn: nhóm, vành, trường — và câu trả lời cho thử thách 2000 năm.',
    outcome: 'Phân tích số thành thừa số nguyên tố, làm việc với nhóm–vành–trường, hiểu ý tưởng Galois về tính giải được của phương trình.',
    theme: 'cyan',
    textbook: { title: 'Abstract Algebra', author: 'Dummit & Foote', url: 'https://rksmvv.ac.in/wp-content/uploads/2021/04/David_S_Dummit_Richard_M_Foote_Abstract_Algeb_230928_225848.pdf', note: 'Bách khoa thư của đại số trừu tượng — dùng trọn đời.' },
    chapters: [
      {
        id: 'l6c1', title: 'Nhóm, Vành, Trường', bigIdea: 'Ba cấu trúc, ba mức độ luật chơi: nhóm (một phép hợp), vành (hai phép hợp), trường (hai phép hợp có cả phép chia).',
        lessons: [
          {
            id: 'l6c1s1', title: 'Bốn luật chơi của nhóm', minutes: 20, status: 'full',
            bigPicture: 'Tiên đề nhóm chỉ 4 điều: ĐÓNG KÍN, KẾT HỢP, TRUNG HÒA, NGHỊCH ĐẢO. Sức mạnh: mọi hệ thỏa 4 luật — số mod n, hoán vị, ma trận khả nghịch, đối xứng hình học — đều tự động thừa hưởng CÙNG các định lý. Đồng cấu là “bản dịch” giữ nguyên luật chơi giữa hai nhóm.',
            visual: 'clock',
            visualCaption: 'Z₁₂: cộng giờ mod 12 thỏa đủ 4 luật — một nhóm chuẩn mực để “nhìn” tiên đề.',
            story: {
              title: 'Một tiên đề, vạn cấu trúc',
              body: 'Ở level 5 bạn gặp nhóm lần đầu qua đồng hồ. Bây giờ nhìn rộng ra: phép XOAY hình vuông 90° cũng tạo nhóm (xép xoay rồi xoay tiếp = một xoay tổng — kết hợp; xoay 0° — trung hòa; xoay ngược — nghịch đảo). SỐ PHỨC đơn vị i: i¹ = i, i² = −1, i³ = −i, i⁴ = 1 — vòng lặp 4 bước, cấu trúc Z₄ y hệt đồng hồ 4 số. Toán học hiện đại không hỏi “X là gì?” mà hỏi “X tuân luật gì?” — hai vật cùng luật là hai bản phối khác nhau của cùng một bản nhạc. Đó là lý do Dummit & Foote mở đầu bằng 4 tiên đề và xây cả ngàn trang sau từ đúng 4 câu đó.',
            },
            colorExample: {
              intro: 'Chứng minh nghịch đảo là DUY NHẤT — bài toán kinh điển đầu tiên của mọi giáo trình đại số.',
              steps: [
                { label: 'Giả sử hai nghịch đảo', color: 'blue', text: 'Cả b và c đều nghịch đảo của a:', math: R`ab = e, \quad ac = e` },
                { label: 'Chơi luật kết hợp', color: 'green', text: 'Chèn e = ab vào đầu:', math: R`c = ec = (ab)c = a(bc)` },
                { label: 'Đọc kết quả', color: 'amber', text: 'a(bc) = a·e... suy ra c = b. Nghịch đảo không thể có hai — luật kết hợp cưỡng ép điều đó.' },
              ],
            },
            rhythm: { verse: 'Đóng, kết, hòa, nghịch — bốn luật một nhạc; cùng luật là cùng bản nhạc.', note: 'Ghi: e là trung hòa, a⁻¹ là nghịch đảo. Mọi định lý nhóm sinh ra từ 4 tiên đề + 2 ký hiệu này.' },
            representative: {
              problem: 'Hoán vị trên 3 chữ {A, B, C} với phép “làm rồi làm tiếp” có phải nhóm không?',
              steps: [
                { color: 'blue', text: 'Đóng kín: hoán vị × hoán vị = hoán vị ✓. Kết hợp ✓ (làm tuần tự).' },
                { color: 'green', text: 'Trung hòa: hoán vị “giữ nguyên” (identity) ✓.' },
                { color: 'amber', text: 'Nghịch đảo: hoán vị đảo ngược ✓ → nhóm S₃ có 6 phần tử — chính là 6 dòng trong hình hoán vị.' },
              ],
            },
            feynman: [
              'Liệt kê 4 tiên đề và cho mỗi luật một ví dụ từ đồng hồ 12 số.',
              'Kể lại chứng minh “nghịch đảo duy nhất” — luật nào được dùng?',
              'Giải thích tinh thần “hỏi luật thay vì hỏi bản chất” cho người ngoài ngành.',
            ],
          },
        ],
      },
      {
        id: 'l6c2', title: 'Lý thuyết số', bigIdea: 'Số nguyên tố là nguyên tử: mọi số nguyên được lắp ráp duy nhất từ chúng (Định lý cơ bản của số học).',
        lessons: [
          {
            id: 'l6c2s1', title: 'Số nguyên tố: nguyên tử của số học', minutes: 25, status: 'full',
            bigPicture: 'Số nguyên tố là những viên gạch không thể phá: 60 = 2² × 3 × 5 là cách lắp ráp DUY NHẤT (bỏ qua thứ tự). Hai câu hỏi vĩ đại: có bao nhiêu viên gạch? (Euclid: vô tận) — và phân bố thế nào? (Định lý số nguyên tố,RSA…).',
            visual: 'sieve',
            visualCaption: 'Sàng Eratosthenes trên 1–50: gạch từng bội, sót lại là nguyên tố.',
            story: {
              title: 'Ba dòng chứng minh của Euclid',
              body: 'Hỏi: số nguyên tố có hết không? Euclid trả lời bằng ba dòng, 2300 năm trước. Giả sử chỉ có hữu hạn nguyên tố p₁, p₂, …, pₖ. Lấy N = p₁ × p₂ × … × pₖ + 1. Chia N cho bất kỳ pᵢ nào cũng dư 1 — nên không nguyên tố nào trong danh sách chia hết N. Vậy N hoặc là nguyên tố mới, hoặc có nguyên tố mới ngoài danh sách. Mâu thuẫn! Nghĩa là danh sách vô tận — bằng cách “tự sinh” nguyên tố từ chính giả sử của đối thủ.',
            },
            colorExample: {
              intro: 'Phân tích 84 thành thừa số nguyên tố — và dùng nó để tìm ước chung lớn nhất.',
              steps: [
                { label: 'Phá gạch', color: 'blue', text: 'Chia liên tục số nhỏ nhất:', math: R`84 = 2 \cdot 42 = 2 \cdot 2 \cdot 21 = 2^2 \cdot 3 \cdot 7` },
                { label: 'Phân tích 90', color: 'green', text: 'Làm tương tự:', math: R`90 = 2 \cdot 3^2 \cdot 5` },
                { label: 'Lấy phần chung', color: 'amber', text: 'ƯCLN là tích các viên gạch chung (mũ thấp nhất):', math: R`\gcd(84, 90) = 2 \cdot 3 = 6` },
              ],
            },
            rhythm: { verse: 'Sàng từng bội — sót lại là nguyên.', note: 'Quy trình sàng: gạch bội của 2, 3, 5, 7… những số còn sót là viên gạch gốc.' },
            representative: {
              problem: 'Vì sao 1 không phải số nguyên tố — và vì sao chuyện này quan trọng?',
              steps: [
                { color: 'blue', text: 'Nếu 1 là nguyên tố: 6 = 2 × 3 = 1 × 2 × 3 = 1 × 1 × 2 × 3 — phân tích không còn duy nhất.' },
                { color: 'green', text: 'Loại 1 khỏi đội viên gạch → Định lý cơ bản của số học giữ nguyên vẹn: mỗi số có đúng MỘT bản lắp ráp.' },
                { color: 'amber', text: 'Định nghĩa toán học được “đo ni đóng giày” cho định lý — bài học về cách toán học chọn định nghĩa.' },
              ],
            },
            feynman: [
              'Tái hiện chứng minh Euclid bằng lời, nhấn mạnh chỗ “N chia mọi pᵢ đều dư 1”.',
              'Giải thích vì sao định nghĩa loại 1 giúp phân tích duy nhất, cho người chưa học.',
              'Sàng các số 1–30 ra giấy, gạch bội của 2, 3, 5 và đọc to các số sót lại.',
            ],
          },
        ],
      },
      {
        id: 'l6c3', title: 'Trường mở rộng & Galois', bigIdea: 'Mỗi bước dựng hình bằng compa chỉ “tạo ra” căn bậc hai — nên bậc mở rộng phải là lũy thừa của 2. Một câu đại số bẻ gãy thử thách hình học 2000 năm.',
        lessons: [
          {
            id: 'l6c3s1', title: 'Tháp trường: dựng hình chỉ bằng compa', minutes: 30, status: 'full',
            bigPicture: 'Bài toán Hy Lạp cổ: chỉ bằng thước KHÔNG chia và compa, dựng được gì? Ba thử thách trứ danh (chia ba góc bất kỳ, gấp đôi khối lập phương, vuông hóa hình tròn) treo 2000 năm — được bẻ gãy bằng đại số: mỗi bước dựng hình đưa vào một căn bậc hai, nên trường các số dựng được có bậc là lũy thừa 2. Căn lập phương ∛2 cần bậc 3 — không lên được tháp này.',
            visual: 'tower',
            visualCaption: 'Tháp mở rộng: ℚ → ℚ(√2) → … mỗi tầng nhân bậc ×2.',
            story: {
              title: 'Hai nghìn năm chờ một ý tưởng',
              body: 'Người Hy Lạp dựng tam giác đều, chia đôi góc — vẻ vang. Nhưng chia ba góc 60°? Gấp đôi khối lập phương? Họ không làm được, và tưởng mình thiếu khéo léo. Thật ra họ thiếu cả ngành toán chưa sinh ra. Đến thế kỷ 19, Galois và đồng môn nhìn bài toán bằng MẮT ĐẠI SỐ: dựng hình = sinh ra số mới từ căn bậc hai; mỗi tầng tháp trường gấp đôi “kích cỡ”. ∛2 đòi tầng bậc 3 — chưa từng có tầng như vậy. Câu trả lời: KHÔNG THỂ. Hai nghìn năm cố gắng khéo léo chấm dứt bởi một lập luận cấu trúc.',
            },
            colorExample: {
              intro: 'Trường ℚ(√2) là gì, và vì sao nó “tầng 2” của tháp?',
              steps: [
                { label: 'Tầng mới', color: 'blue', text: 'Gắn thêm √2 vào ℚ, mọi tổ hợp:', math: R`\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} : a, b \in \mathbb{Q}\}` },
                { label: 'Kiểm tra đóng', color: 'green', text: 'Cộng, nhân, chia (không chia 0) đều giữ dạng a + b√2 — đây là một TRƯỜNG đúng nghĩa.' },
                { label: 'Đọc bậc tháp', color: 'amber', text: 'Mỗi số của ℚ(√2) cần đúng 2 con số hữu tỉ để mô tả → bậc mở rộng bằng 2. Lại gắn √3? → bậc 4. Mọi tầng nhân ×2 — luật sắt của thước và compa.' },
              ],
            },
            rhythm: { verse: 'Dựng hình chỉ sinh căn hai — bậc tháp nhất định là 2ⁿ.', note: 'Nếu số cần dựng đòi bậc không chia hết cho 2: tuyên án “không dựng được”.' },
            representative: {
              problem: 'Vì sao gấp đôi khối lập phương là bất khả thi?',
              steps: [
                { color: 'blue', text: 'Lập phương gấp đôi thể tích: cạnh mới x thỏa', math: R`x^3 = 2 \Rightarrow x = \sqrt[3]{2}` },
                { color: 'green', text: '√2 chỉ cần tầng bậc 2, nhưng ∛2 đòi bậc 3 (không thể sinh từ chuỗi căn bậc hai).' },
                { color: 'amber', text: '3 ∤ 2ⁿ → ∛2 không nằm trên bất kỳ tầng nào của tháp → không dựng được. Bẻ gãy bằng cấu trúc, không bằng khéo léo.' },
              ],
            },
            feynman: [
              'Kể lại ba thử thách Hy Lạp và giải thích vì sao đại số “nhìn xuyên” được hình học.',
              'Vẽ tháp ℚ → ℚ(√2) → ℚ(√2,√3) và ghi bậc của mỗi tầng.',
              'Phát biểu “luật lũy thừa 2” bằng lời của bạn và áp dụng vào vuông hóa hình tròn (π là đại số hay siêu việt?).',
            ],
          },
        ],
      },
      {
        id: 'l6c4', title: 'Hình học đại số', bigIdea: 'Hệ phương trình = hình dạng: nghiệm của đa thức nhiều biến là “bề mặt” trong không gian.',
        lessons: [
          {
            id: 'l6c4s1', title: 'Đường cong & đa thức', minutes: 20, status: 'full',
            bigPicture: 'Hình học đại số: phương trình đa thức là BẢN THIẾT KẾ, đường cong là TÒA NHÀ. x² + y² = 1 dựng hình tròn; xy = 1 dựng hyperbol; y = x² − 1 dựng parabol. Nghiệm của hệ phương trình = giao điểm của các “tòa nhà”. Toàn bộ ngành này sống trên một câu: chuyển qua lại giữa ĐẠI SỐ (phương trình) và HÌNH (nghiệm).',
            visual: 'parabola',
            visualCaption: 'y = x² − 1: cắt trục hoành tại x = ±1 — nghiệm của phương trình chính là giao điểm trên hình.',
            story: {
              title: 'Bản thiết kế và tòa nhà',
              body: 'Mỗi phương trình đa thức là một bản vẽ kiến trúc: đọc phương trình, bạn dựng được tòa nhà (đường cong, mặt cong) trong không gian. Ngược lại, nhìn tòa nhà, đoán được bản vẽ. Grothendieck — thiên tài dựng ngành này ở thế kỷ 20 — có phép ẩn dụ nổi tiếng: khi dính một quả hạt dẻ cứng đầu, đừng lấy búa đập; hãy DỰNG MỘT BỂ NƯỚC, đổ nước dần dần, vỏ hạt tự nứt. Trong toán: đừng tấn công bài toán trực diện — hãy mở rộng ngôn ngữ, dựng cấu trúc lớn hơn để bài toán “tự hóa hiển nhiên”. Chiến lược “bể nước” này đã giải được cả những bài toán trăm năm tuổi.',
            },
            colorExample: {
              intro: 'Đọc hình từ phương trình: y = x² − 1 cắt trục hoành ở đâu?',
              steps: [
                { label: 'Giao trục hoành = y = 0', color: 'blue', text: 'Thay y = 0:', math: R`x^2 - 1 = 0` },
                { label: 'Giải', color: 'green', text: 'x = ±1 — hai giao điểm (−1, 0) và (1, 0).' },
                { label: 'Đọc đại số ↔ hình', color: 'amber', text: 'Hai nghiệm = hai chỗ đường cong “chạm đất”. Mỗi thao tác đại số là một cử động hình học.' },
              ],
            },
            rhythm: { verse: 'Phương trình là bản vẽ, đường cong là tòa nhà; nghiệm là chỗ chạm đất.', note: 'Khó khăn trực diện? Dựng “bể nước”: mở rộng cấu trúc cho bài toán tự buông lỏng.' },
            representative: {
              problem: 'Đường tròn x² + y² = 25 và đường thẳng y = x giao nhau ở đâu?',
              steps: [
                { color: 'blue', text: 'Thế y = x:', math: R`x^2 + x^2 = 25 \Rightarrow x = \pm\frac{5}{\sqrt{2}}` },
                { color: 'green', text: 'Hai giao điểm:', math: R`\left(\pm\frac{5}{\sqrt{2}}, \pm\frac{5}{\sqrt{2}}\right)` },
                { color: 'amber', text: 'Mắt hình học: đường thẳng 45° xuyên qua hình tròn — cắt đúng 2 điểm. Đại số và hình học khớp nhau từng milimet.' },
              ],
            },
            feynman: [
              'Kể ẩn dụ “bản thiết kế – tòa nhà” và đổi 2 ví dụ phương trình → hình.',
              'Kể lại chiến lược “bể nước” của Grothendieck bằng lời của bạn.',
              'Giải thích vì sao “nghiệm của hệ” là “giao điểm của các đường”, một câu.',
            ],
          },
        ],
      },
    ],
  },
]

export const methods = [
  { icon: 'geo', title: 'Hình học hóa đại số', desc: 'Biến công thức thành hình vẽ, đồ thị, trục số — công thức là cái bóng của hình.' },
  { icon: 'map', title: 'Từ tổng thể đến chi tiết', desc: 'Xem mục lục, ứng dụng, cấu trúc chương TRƯỚC khi đi sâu từng công thức.' },
  { icon: 'branch', title: 'Sơ đồ tư duy', desc: 'Kiến thức tỏa nhánh từ trung tâm, không chép dòng tuyến tính.' },
  { icon: 'palette', title: 'Mã hóa bằng màu sắc', desc: 'Tô màu phân nhóm hạng tử, đánh dấu điều kiện và lỗi hay gặp.' },
  { icon: 'chat', title: 'Kể chuyện & nhân cách hóa', desc: 'Chuyển vế đổi dấu, số âm… thành tình huống đời thường đáng nhớ.' },
  { icon: 'mic', title: 'Kỹ thuật Feynman', desc: 'Vừa viết vừa nói to như đang giảng cho người khác — kích hoạt thính giác và liên kết.' },
  { icon: 'music', title: 'Gắn công thức với nhịp điệu', desc: 'Đọc quy tắc theo vần, thơ, nhịp 4/4 để ghi nhớ dài hạn.' },
  { icon: 'target', title: 'Ví dụ đại diện', desc: 'Mỗi dạng chỉ cần 1–2 bài tiêu biểu, làm chậm và hiểu sâu — không lặp 20 bài giống nhau.' },
]

const byId = new Map<string, { lesson: Lesson; chapter: Chapter; level: Level }>()
for (const level of levels) {
  for (const chapter of level.chapters) {
    for (const lesson of chapter.lessons) {
      byId.set(lesson.id, { lesson, chapter, level })
    }
  }
}

export function getLesson(id: string) {
  return byId.get(id)
}

export function flatLessons(): { lesson: Lesson; level: Level; chapter: Chapter }[] {
  const out: { lesson: Lesson; level: Level; chapter: Chapter }[] = []
  for (const level of levels)
    for (const chapter of level.chapters)
      for (const lesson of chapter.lessons) out.push({ lesson, level, chapter })
  return out
}

export const totalLessons = flatLessons().length
export const fullLessons = flatLessons().filter((x) => x.lesson.status === 'full').length
