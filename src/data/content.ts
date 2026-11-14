export type ThemeKey = 'sky' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan'
export type ColorKey = 'blue' | 'green' | 'amber' | 'rose' | 'slate'
export type VisualKind =
  | 'numberline' | 'pizza' | 'balance' | 'absquare' | 'machine'
  | 'unitcircle' | 'domino' | 'zeno' | 'tangent' | 'matrix'
  | 'ladder' | 'realline' | 'epsband' | 'sieve' | 'tower'

export interface Step { label?: string; color: ColorKey; text: string; math?: string }

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
            id: 'l1c1s2', title: 'Bốn phép tính & thứ tự ưu tiên', minutes: 15, status: 'outline',
            bigPicture: 'Cộng, trừ là đi trên trục; nhân, chia là “phóng to/thu nhỏ” trục. Thứ tự ưu tiên (nhân chia trước, cộng trừ sau) có lý do hình học riêng.',
          },
        ],
      },
      {
        id: 'l1c2', title: 'Phân số & Số hỗn hợp', bigIdea: 'Phân số là phép chia chưa làm xong: 3/4 vừa là “3 miếng trên 4 miếng” vừa là 3 ÷ 4. Mẫu số giống nhau = cùng đơn vị đo.',
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
        ],
      },
      {
        id: 'l1c3', title: 'Số thập phân & Phần trăm', bigIdea: 'Phần trăm là ngôn ngữ của tiền bạc: “trên mỗi 100”. Mọi bài phần trăm đều là một tam giác: phần – tổng – tỉ số.',
        lessons: [
          {
            id: 'l1c3s1', title: 'Phần trăm: tam giác phần – tổng – tỉ số', minutes: 20, status: 'outline',
            bigPicture: 'Ba đại lượng khóa nhau: Phần = Tổng × Tỉ số. Biết hai cái luôn tìm được cái thứ ba — vẽ tam giác, che một góc.',
          },
        ],
      },
      {
        id: 'l1c4', title: 'Tỷ lệ & Tỉ lệ thức', bigIdea: 'Tỷ lệ là bản dịch giữa hai thế giới cùng đơn vị: bản đồ–địa thật, công thức–nguyên liệu.',
        lessons: [
          {
            id: 'l1c4s1', title: 'Tỷ lệ: công thức dịch thế giới', minutes: 20, status: 'outline',
            bigPicture: 'Nhân chéo để kiểm tra tỉ lệ thức. Tỷ lệ thuận: hai bên cùng “phình to”; tỷ lệ nghịch: một bên phình, bên kia thu.',
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
            id: 'l1c5s2', title: 'Dịch đề bài thành phương trình', minutes: 20, status: 'outline',
            bigPicture: 'Đề bài là câu chuyện; phương trình là bản dịch. Đánh dấu “tổng, hơn, kém, gấp” là các mã dịch cố định.',
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
            id: 'l2c1s2', title: 'Căn thức & lũy thừa', minutes: 20, status: 'outline',
            bigPicture: 'Căn bậc hai là “đường kẻ dọc” của bình phương: √ kéo dài hai chiều vuông góc. Lũy thừa là nhân lặp; quy tắc mũ là bản tóm tắt của việc đếm.',
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
            id: 'l2c2s2', title: 'Parabol & tam thức bậc hai', minutes: 25, status: 'outline',
            bigPicture: 'Parabol là đường ném bóng: đỉnh là điểm cao nhất/thấp nhất, hai nghiệm là chỗ chạm đất. Delta là “kiểm tra va chạm”.',
          },
        ],
      },
      {
        id: 'l2c3', title: 'Hình học phẳng', bigIdea: 'Hình học là nơi đại số “ngủ” trong hình vẽ: định lý Pythagoras là kiểm tra góc vuông bằng diện tích.',
        lessons: [
          {
            id: 'l2c3s1', title: 'Pythagoras & tam giác đồng dạng', minutes: 20, status: 'outline',
            bigPicture: 'a² + b² = c² là câu so sánh ba mảnh vuông ghép trên ba cạnh. Đồng dạng = “bản sao co giãn”: góc giữ nguyên, cạnh phình theo cùng tỷ lệ.',
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
            id: 'l2c5s1', title: 'Đường thẳng & khoảng cách', minutes: 20, status: 'outline',
            bigPicture: 'Độ dốc m = “đi phải 1, lên m”. Phương trình đường thẳng chỉ là công thức của độ dốc đó.',
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
            id: 'l3c0s2', title: 'Tập hợp & lượng từ ∀, ∃', minutes: 20, status: 'outline',
            bigPicture: 'Tập hợp là “chiếc túi có ranh giới rõ”. ∀ (với mọi) và ∃ (tồn tại) là hai từ khóa điều khiển mọi định lý giải tích.',
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
            id: 'l3c2s2', title: 'Cực trị & bài toán tối ưu', minutes: 25, status: 'outline',
            bigPicture: 'Tìm giá trị lớn nhất/nhỏ nhất = tìm chỗ đạo hàm bằng 0, rồi phân loại đỉnh đồi hay đáy trũng bằng dấu đạo hàm hai bên.',
          },
        ],
      },
      {
        id: 'l3c3', title: 'Tích phân', bigIdea: 'Tích phân là cắt–đếm–ghép: cắt vật thể thành mảnh nhỏ vô hạn, cộng lại chính xác.',
        lessons: [
          {
            id: 'l3c3s1', title: 'Tích phân: cắt mì, đếm sợi', minutes: 25, status: 'outline',
            bigPicture: 'Di diện tích dưới đường cong = cắt thành dải chữ nhật mảnh, cộng dồn. Cắt càng mảnh, sai số càng tan biến. Định lý cơ bản: tích phân và đạo hàm là hai chiều của cùng một phép tính.',
          },
        ],
      },
      {
        id: 'l3c4', title: 'Chuỗi & Hàm nhiều biến', bigIdea: 'Cộng vô hạn số hạng có thể ra một số hữu hạn; hàm nhiều biến có “độ dốc” theo từng phương riêng.',
        lessons: [
          {
            id: 'l3c4s1', title: 'Chuỗi số & Taylor', minutes: 20, status: 'outline',
            bigPicture: 'Khi nào tổng vô hạn hội tụ? So sánh với chuỗi mấu chốt (địa chất, nhân, mũ). Taylor: xấp xỉ mọi hàm “mượt” bằng đa thức.',
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
            id: 'l4c1s2', title: 'Tổ hợp tuyến tính, độc lập & cơ sở', minutes: 25, status: 'outline',
            bigPicture: 'Mọi vector trong không gian đều là “công thức pha chế” từ một bộ nguyên liệu tối thiểu — bộ đó là cơ sở. Số nguyên liệu tối thiểu = số chiều.',
          },
        ],
      },
      {
        id: 'l4c2', title: 'Phép biến đổi tuyến tính sâu hơn', bigIdea: 'Eigenvector: những hướng bất biến của phép biến hình — chìa khóa của phân tích dữ liệu.',
        lessons: [
          {
            id: 'l4c2s1', title: 'Eigenvector & trị riêng', minutes: 25, status: 'outline',
            bigPicture: 'Tìm v ≠ 0 để A·v = λv: phép biến hình chỉ kéo–co vector theo chính nó. Nghĩa hình học: trục không xoay.',
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
            id: 'l4c3s2', title: 'Hoán vị & tổ hợp', minutes: 20, status: 'outline',
            bigPicture: 'Đếm = không sót, không trùng. Hoán vị: quan tâm thứ tự; tổ hợp: chỉ quan tâm đội hình.',
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
            id: 'l5c2s2', title: 'Tính liên tục & định lý Weierstrass', minutes: 25, status: 'outline',
            bigPicture: 'Liên tục = “vẽ không nhấc bút”. Trên đoạn đóng bị chặn, hàm liên tục chắc chắn đạt max và min — phần thưởng đầu tiên của tính đầy đủ.',
          },
        ],
      },
      {
        id: 'l5c3', title: 'Đại số trừu tượng: Nhóm', bigIdea: 'Nhóm = một phép hợp + bốn luật chơi. Mọi “đối xứng” trong tự nhiên đều là một nhóm.',
        lessons: [
          {
            id: 'l5c3s1', title: 'Nhóm: khi đối xứng thành toán học', minutes: 25, status: 'outline',
            bigPicture: 'Bốn luật: đóng kín, kết hợp, có phần tử trung hòa, mọi phần tử có nghịch đảo. Bảng Cayley của nhóm là “bàn cờ” nhìn thấy được cấu trúc.',
          },
        ],
      },
      {
        id: 'l5c4', title: 'Topology & Hình học vi phân', bigIdea: 'Topology học về những gì còn lại khi co giãn (nhưng không xé); hình học vi phân tính toán trên bề mặt cong.',
        lessons: [
          {
            id: 'l5c4s1', title: 'Topology: hình học của cao su', minutes: 20, status: 'outline',
            bigPicture: 'Không gian mở, liên tục, compact — ba từ khóa mô tả “hình dạng” mà không cần đo đạc.',
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
            id: 'l6c1s1', title: 'Bốn luật chơi của nhóm', minutes: 20, status: 'outline',
            bigPicture: 'Từ giờ phút chỉ, hoán vị, số phức đơn vị đều là “cùng một vật” dưới ánh sáng của tiên đề nhóm. Đồng cấu = bản dịch giữ nguyên luật chơi.',
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
            id: 'l6c4s1', title: 'Đường cong & đa thức', minutes: 20, status: 'outline',
            bigPicture: 'Tập nghiệm của các đa thức tạo thành đường cong, bề mặt. Vòng xoắn Grothendieck: chiến lược vượt qua khó khăn bằng cách dựng “mặt trăng”.',
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
