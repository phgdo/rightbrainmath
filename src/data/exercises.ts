import type { Exercise } from './content'

export const exercisesByLesson: Record<string, Exercise[]> = {
  l1c1s1: [
    {
      q: 'Tính: −2 + (−5) = ?',
      options: ['−7', '7', '−3', '3'],
      answer: 0,
      explain: 'Cùng dấu (đều âm): cộng trị tuyệt đối 2 + 5 = 7, giữ dấu âm.',
    },
    {
      q: 'Thang máy đang ở tầng −4, đi lên 6 tầng. Dừng ở tầng nào?',
      options: ['Tầng 2', 'Tầng −2', 'Tầng 4', 'Tầng 10'],
      answer: 0,
      explain: '−4 + 6 = 2: từ tầng hầm 4 đi lên 4 tầng về tầng trệt, còn đi thêm 2 tầng lầu.',
    },
    {
      q: 'Tính: 5 − (−3) = ?',
      options: ['8', '2', '−8', '−2'],
      answer: 0,
      explain: 'Trừ một số âm = hủy lệnh đi xuống = đi lên: 5 + 3 = 8.',
    },
  ],
  l1c2s1: [
    {
      q: 'Tính: 1/2 + 1/3 = ?',
      options: ['5/6', '2/5', '1/5', '2/6'],
      answer: 0,
      explain: 'Quy đồng theo dao cắt 6: 3/6 + 2/6 = 5/6. Không thể cộng miếng to với miếng nhỏ trực tiếp.',
    },
    {
      q: '2/3 của 45 bằng bao nhiêu?',
      options: ['30', '15', '25', '35'],
      answer: 0,
      explain: '45 ÷ 3 = 15 (một phần), × 2 = 30 (hai phần). "Của" = nhân.',
    },
    {
      q: 'Tính: 3/5 ÷ 3 = ?',
      options: ['1/5', '9/5', '3/5', '5/3'],
      answer: 0,
      explain: 'Chia = nhân với số đảo ngược: 3/5 × 1/3 = 3/15 = 1/5.',
    },
  ],
  l1c5s1: [
    {
      q: 'Giải: x + 7 = 12. x = ?',
      options: ['5', '19', '−5', '84'],
      answer: 0,
      explain: 'Bỏ 7 viên kẹo ở CẢ HAI đĩa: x = 12 − 7 = 5.',
    },
    {
      q: 'Giải: 3x = 21. x = ?',
      options: ['7', '18', '24', '63'],
      answer: 0,
      explain: 'Chia đều 3 phần mỗi đĩa: x = 21 ÷ 3 = 7.',
    },
    {
      q: 'Giải: 2x − 4 = 10. x = ?',
      options: ['7', '3', '6', '14'],
      answer: 0,
      explain: 'Trước tiên bỏ cộng trừ: 2x = 14. Sau đó nhân chia: x = 7. Đúng vần "bỏ cộng trừ trước, nhân chia sau".',
    },
  ],
  l1c1s3: [
    {
      q: 'Ước lượng nhanh: 197 + 51 + 28 ≈ ?',
      options: ['280', '180', '476', '400'],
      answer: 0,
      explain: '200 + 50 + 30 = 280. Số dễ đọc cho ra quyết định nhanh — kết quả thật (276) rất gần.',
    },
    {
      q: 'Máy tính hiện 61 × 9 = 549. Nên nghi ngờ không?',
      options: [
        'Có — vì 60 × 9 = 540, gần đúng là 549',
        'Có — kết quả phải trên 1000',
        'Không — 549 hợp lý',
        'Có — 61 × 9 phải là số chẵn',
      ],
      answer: 0,
      explain: 'Ước lượng 61 ≈ 60 → 540. Máy hiện 549 — rất gần → kết quả hợp lý, không phải lỗi gõ.',
    },
  ],
  l1c2s2: [
    {
      q: '0,7 + 0,25 = ?',
      options: ['0,95', '0,32', '0,725', '1,75'],
      answer: 0,
      explain: 'Thẳng hàng phẩy: 0,70 + 0,25 = 0,95. Cột cùng tên (phần 100) thẳng nhau.',
    },
    {
      q: '0,4 × 0,3 = ?',
      options: ['0,12', '1,2', '0,7', '0,4'],
      answer: 0,
      explain: '4 × 3 = 12; tổng 2 chữ số sau phẩy → 0,12. Tức 4/10 × 3/10 = 12/100.',
    },
  ],
  l1c5s3: [
    {
      q: 'Mở ngoặc: 4(2x − 3) = ?',
      options: ['8x − 12', '8x − 3', '6x − 12', '8x + 12'],
      answer: 0,
      explain: 'Rắc 4 vào từng số hạng: 4 · 2x = 8x và 4 · (−3) = −12.',
    },
    {
      q: 'Mở ngoặc: −5(x − 2) = ?',
      options: ['−5x + 10', '−5x − 10', '−5x − 2', '5x − 10'],
      answer: 0,
      explain: 'Dấu âm cũng được rắc: −5 · x = −5x và −5 · (−2) = +10 (trừ × trừ = cộng).',
    },
  ],
  l1c6s1: [
    {
      q: 'Sân 8 m × 5 m cần bao nhiêu mét hàng rào?',
      options: ['26 m', '40 m', '13 m', '40 m²'],
      answer: 0,
      explain: 'Hàng rào = chu vi = 2(8 + 5) = 26 m. Kiến bò quanh mép — đơn vị mét, không phải mét vuông.',
    },
    {
      q: 'Bể 2 m × 2 m × 2 m chứa được bao nhiêu lít nước?',
      options: ['8.000 lít', '8 lít', '800 lít', '6 lít'],
      answer: 0,
      explain: 'Thể tích = 8 m³; 1 m³ = 1.000 lít → 8.000 lít. Nước rót — ba chiều.',
    },
  ],
  l1c6s2: [
    {
      q: 'Điểm (2, 5) nghĩa là?',
      options: ['Đi ngang 2, dọc 5', 'Đi ngang 5, dọc 2', 'Đi ngang 2 rồi ngang 5', 'Đi dọc 5 rồi ngang 5'],
      answer: 0,
      explain: 'Ngang trước (x), dọc sau (y) — như “dãy C, hàng 3” ở sân trường.',
    },
    {
      q: 'Đồ thị doanh thu có đường đi lên đều đặn nghĩa là?',
      options: ['Doanh thu tăng đều', 'Doanh thu giảm', 'Doanh thu đứng yên', 'Doanh thu tăng nhanh dần'],
      answer: 0,
      explain: 'Dốc lên đều = tăng đều. Dốc càng đứng càng tăng nhanh; đường phẳng = không đổi.',
    },
  ],
  l2c1s1: [
    {
      q: 'Khai triển (x + 5)² = ?',
      options: ['x² + 10x + 25', 'x² + 25', 'x² + 5x + 25', 'x² + 10x + 10'],
      answer: 0,
      explain: 'Đầu bình x², hai dải hành lang 2·5·x = 10x, cuối bình 25. Nhầm x² + 25 là quên hai dải!',
    },
    {
      q: 'Tính nhẩm: 102² = ?',
      options: ['10 404', '10 204', '10 400', '10 444'],
      answer: 0,
      explain: '(100 + 2)² = 10 000 + 400 + 4 = 10 404.',
    },
    {
      q: 'Khai triển (a − b)² = ?',
      options: ['a² − 2ab + b²', 'a² − b²', 'a² + 2ab + b²', 'a² − 2ab − b²'],
      answer: 0,
      explain: 'Vẫn là hình vuông 4 mảnh, nhưng hai dải ab bị trừ đi: đầu bình, cuối bình, TRỪ hai lần đầu nhân cuối.',
    },
  ],
  l2c2s1: [
    {
      q: 'Cho f(x) = 3x − 2. f(4) = ?',
      options: ['10', '12', '8', '6'],
      answer: 0,
      explain: 'Cỗ máy: nhân 3 → 12, trừ 2 → 10.',
    },
    {
      q: 'Cho f(x) = x². f(−3) = ?',
      options: ['9', '−9', '6', '−6'],
      answer: 0,
      explain: '(−3)² = 9. Hai viên bi khác nhau (3 và −3) ra cùng loại nước — vẫn là hàm hợp lệ.',
    },
    {
      q: 'Quan hệ nào dưới đây KHÔNG phải hàm?',
      options: [
        'Input 1 → output 4; input 2 → output 8',
        'Input 1 → output 2; input 1 → output 3',
        'Input 1 → output 2; input 2 → output 2',
        'Input −1 → output 1; input 1 → output 1',
      ],
      answer: 1,
      explain: 'Một vào HAI ra — cỗ máy hỏng. Ba quan hệ còn lại đều "một vào một ra" (trùng output giữa các input khác nhau vẫn hợp lệ).',
    },
  ],
  l2c4s1: [
    {
      q: 'sin 90° = ?',
      options: ['1', '0', '1/2', '√2/2'],
      answer: 0,
      explain: 'Điểm trên vòng tròn đơn vị tại 90° đứng đúng hướng Bắc: tọa độ (0, 1) → cos = 0, sin = 1.',
    },
    {
      q: 'cos 0° = ?',
      options: ['1', '0', '1/2', '−1'],
      answer: 0,
      explain: 'Khởi hành tại hướng Đông: (1, 0) → cos = 1, sin = 0.',
    },
    {
      q: 'Mái nhà dốc 30° dài 6 m. Cao hơn tường bao nhiêu?',
      options: ['3 m', '6 m', '2 m', '√3 m'],
      answer: 0,
      explain: 'h = 6 · sin 30° = 6 · 1/2 = 3 m.',
    },
  ],
  l3c0s1: [
    {
      q: 'Để bẻ gãy định lý dạng "với mọi số…", cần bao nhiêu phản ví dụ?',
      options: ['1', '2', '10', 'Vô hạn'],
      answer: 0,
      explain: 'Chỉ cần MỘT phản ví dụ. Ví dụ: số 9 bẻ gãy câu "mọi số lẻ đều nguyên tố" vì 9 = 3 × 3.',
    },
    {
      q: 'Tổng của hai số lẻ luôn là số gì?',
      options: ['Số chẵn', 'Số lẻ', 'Số nguyên tố', 'Không xác định'],
      answer: 0,
      explain: '(2m+1) + (2n+1) = 2(m+n+1) — có dạng 2k nên chẵn.',
    },
    {
      q: 'Nếu n² lẻ thì n lẻ hay chẵn?',
      options: ['Lẻ', 'Chẵn', 'Cả hai đều có thể', 'Không suy ra được'],
      answer: 0,
      explain: 'Phản chứng: nếu n chẵn thì n² chẵn — mâu thuẫn. Vậy n phải lẻ.',
    },
  ],
  l3c1s1: [
    {
      q: 'lim(x→3) (x² − 9)/(x − 3) = ?',
      options: ['6', '0', '3', 'Không tồn tại'],
      answer: 0,
      explain: 'Phân tích (x−3)(x+3)/(x−3) = x + 3, hủy rồi thay: 3 + 3 = 6. Tại x = 3 là 0/0 nhưng xu hướng là 6.',
    },
    {
      q: 'Giới hạn lim(x→a) f(x) trả lời câu hỏi nào?',
      options: [
        'f(x) đi VỀ ĐÂU khi x tiến gần a',
        'f(a) bằng bao nhiêu',
        'f(x) có bằng 0 tại a không',
        'f(x) tăng hay giảm ở a',
      ],
      answer: 0,
      explain: 'Giới hạn không hỏi "tới đâu" (giá trị tại chỗ) mà hỏi "về đâu" (xu hướng) — f(a) có thể chưa tồn tại.',
    },
    {
      q: '1/2 + 1/4 + 1/8 + 1/16 + … = ?',
      options: ['1', 'Vô cực', '0', '2'],
      answer: 0,
      explain: 'Mỗi bước đi nửa quãng còn lại: không bước nào chạm 1 nhưng tổng hội tụ về đúng 1.',
    },
  ],
  l3c2s1: [
    {
      q: 'Đạo hàm của x⁴ là?',
      options: ['4x³', 'x³', '4x⁴', '3x⁴'],
      answer: 0,
      explain: 'Mũ ra trước (4), mũ bớt một (x³): 4x³.',
    },
    {
      q: 'Đạo hàm của hằng số 7 là?',
      options: ['0', '7', '1', '7x'],
      answer: 0,
      explain: 'Đường nằm ngang dốc 0 — không đổi thì xu hướng là 0.',
    },
    {
      q: 'Xe chạy s(t) = t² (m). Tốc độ tại t = 5 giây?',
      options: ['10 m/s', '25 m/s', '5 m/s', '2 m/s'],
      answer: 0,
      explain: "s'(t) = 2t → s'(5) = 10 m/s. Lưu ý khác tốc độ trung bình s(5)/5 = 5 m/s.",
    },
  ],
  l4c1s1: [
    {
      q: 'Ma trận [[2, 0], [0, 3]] biến vector (1, 1) thành?',
      options: ['(2, 3)', '(3, 2)', '(2, 2)', '(1, 1)'],
      answer: 0,
      explain: 'Cột 1 nói (1,0) → (2,0); cột 2 nói (0,1) → (0,3). Kéo ngang ×2, kéo dọc ×3 → (2, 3).',
    },
    {
      q: 'Phép xoay 90° biến (0, 1) thành?',
      options: ['(−1, 0)', '(1, 0)', '(0, −1)', '(1, 1)'],
      answer: 0,
      explain: 'Vector hướng Bắc xoay 90° ngược kim đồng hồ thành hướng Tây (−1, 0).',
    },
    {
      q: 'Quy tắc "hàng gặp cột, nhân rồi cộng" là của phép tính nào?',
      options: ['Nhân hai ma trận', 'Cộng hai ma trận', 'Định thức', 'Chuyển vị'],
      answer: 0,
      explain: 'Nhân ma trận: hàng của A gặp cột của B — nghĩa là nối phép biến hình B rồi A.',
    },
  ],
  l4c3s1: [
    {
      q: 'Chứng minh quy nạp cần hai điều kiện nào?',
      options: [
        'Cơ sở (bậc đầu đúng) + bước quy nạp (n đúng ⟹ n+1 đúng)',
        'Hai ví dụ kiểm tra',
        'Một phản ví dụ',
        'Định nghĩa + giả thiết',
      ],
      answer: 0,
      explain: 'Dựng bậc đầu + nối bậc sau = trèo được thang vô tận.',
    },
    {
      q: 'Công thức tổng 1 + 2 + ⋯ + n = ?',
      options: ['n(n+1)/2', 'n²', 'n(n−1)/2', '(n+1)²/2'],
      answer: 0,
      explain: 'Chứng minh bằng quy nạp: cơ sở n = 1, bước cộng (n+1) vào giả thiết.',
    },
    {
      q: 'Trong ẩn dụ hàng domino, "viên đầu không đổ" tương ứng lỗi gì?',
      options: [
        'Cơ sở quy nạp sai',
        'Bước quy nạp sai',
        'Kết luận sai',
        'Giả thiết quy nạp thừa',
      ],
      answer: 0,
      explain: 'Thiếu viên đầu: không có gì bắt đầu dù bước nối tốt. Viên quá xa nhau thì ngược lại — bước quy nạp hỏng.',
    },
  ],
  l5c1s1: [
    {
      q: '√2 thuộc tập số nào?',
      options: ['Số vô tỉ (ℝ ∖ ℚ)', 'Số hữu tỉ (ℚ)', 'Số tự nhiên', 'Số nguyên'],
      answer: 0,
      explain: 'Chứng minh phản chứng: nếu √2 = p/q tối giản thì p, q cùng chẵn — mâu thuẫn.',
    },
    {
      q: 'Tập số hữu tỉ ℚ vẫn "còn lỗ" vì sao?',
      options: [
        'Vì √2 không là tỉ số của hai số nguyên',
        'Vì ℚ vô hạn',
        'Vì ℚ không có số 0',
        'Vì giữa 1 và 2 không còn số nào',
      ],
      answer: 0,
      explain: 'ℚ dày đặc nhưng √2, π… chui qua mắt lưới. Giữa hai hữu tỉ nào cũng vô hạn hữu tỉ — dày nhưng chưa kín.',
    },
    {
      q: 'Giải tích hiện đại được xây trên ℝ chứ không trên ℚ, vì?',
      options: [
        'ℝ có tính đầy đủ (completeness) — mọi dãy Cauchy hội tụ',
        'ℝ nhiều số hơn nên dễ tính',
        'ℚ khó viết dưới dạng thập phân',
        'ℝ có số âm còn ℚ không',
      ],
      answer: 0,
      explain: 'Tính đầy đủ lấp mọi lỗ: giới hạn, liên tục, cực trị đều an toàn trên ℝ.',
    },
  ],
  l5c2s1: [
    {
      q: 'Trong trò chơi ε-δ, ai chọn ε và ai chọn δ?',
      options: [
        'Đối thủ chọn ε (thách), bạn chọn δ (đáp)',
        'Bạn chọn cả hai',
        'Đối thủ chọn cả hai',
        'ε và δ chọn ngẫu nhiên',
      ],
      answer: 0,
      explain: 'ε là mức sai lệch đối thủ thách; bạn phải tìm δ để f(x) nằm trong dải. Thắng MỌI ván = chứng minh xong.',
    },
    {
      q: 'Với lim(x→2) (3x − 1) = 5, nên chọn δ = ?',
      options: ['ε/3', 'ε', '3ε', 'ε²'],
      answer: 0,
      explain: '|3x − 1 − 5| = 3|x − 2| < ε ⟺ |x − 2| < ε/3 → chọn δ = ε/3.',
    },
    {
      q: '|3x − 1 − 5| rút gọn thành?',
      options: ['3|x − 2|', '|x − 2|', '3|x − 5|', '|x + 2|'],
      answer: 0,
      explain: '3x − 6 = 3(x − 2), kéo ra ngoài trị tuyệt đối thành 3|x − 2|.',
    },
  ],
  l6c2s1: [
    {
      q: 'Số nguyên tố là số nào?',
      options: [
        'Chỉ chia hết cho 1 và chính nó (và > 1)',
        'Mọi số chia hết cho nó',
        'Có nhiều ước nhất',
        'Số lẻ bất kỳ',
      ],
      answer: 0,
      explain: 'Nguyên tố = viên gạch không thể phá: 2, 3, 5, 7, 11… Số 1 bị loại để giữ tính duy nhất của phân tích.',
    },
    {
      q: 'Phân tích 60 thành thừa số nguyên tố?',
      options: ['2² · 3 · 5', '2 · 3 · 10', '4 · 15', '2³ · 5'],
      answer: 0,
      explain: '60 = 2 · 30 = 2 · 2 · 15 = 2² · 3 · 5 — và đây là cách lắp ráp DUY NHẤT (Định lý cơ bản của số học).',
    },
    {
      q: 'Trong chứng minh Euclid, N = p₁p₂⋯pₖ + 1 có đặc điểm gì?',
      options: [
        'Chia cho mọi pᵢ đều dư 1 → buộc tồn tại nguyên tố mới',
        'Luôn là số chẵn',
        'Luôn là số nguyên tố',
        'Chia hết cho mọi pᵢ',
      ],
      answer: 0,
      explain: 'Dư 1 với mọi pᵢ → không nguyên tố nào trong danh sách chia hết N → nguyên tố nằm ngoài danh sách → mâu thuẫn với "hữu hạn".',
    },
  ],
  l6c3s1: [
    {
      q: 'Một bước dựng hình bằng thước – compa chỉ có thể sinh ra số gì mới?',
      options: ['Căn bậc hai', 'Căn bậc ba', 'Căn bậc n bất kỳ', 'Chỉ số nguyên mới'],
      answer: 0,
      explain: 'Giao đường thẳng/đường tròn chỉ giải phương trình bậc nhất và bậc hai → chỉ sinh căn bậc hai.',
    },
    {
      q: 'Bậc mở rộng của các trường dựng được bằng thước – compa có dạng nào?',
      options: ['2ⁿ', 'n!', '3ⁿ', 'Bất kỳ số nguyên nào'],
      answer: 0,
      explain: 'Mỗi tầng tháp nhân bậc ×2 → bậc tổng là lũy thừa của 2. Đây là "luật sắt" bẻ gãy các thử thách hình học cổ.',
    },
    {
      q: 'Vì sao KHÔNG dựng được khối lập phương gấp đôi thể tích?',
      options: [
        'Cần ∛2 — đòi bậc 3, không chia hết cho 2',
        'Vì compa không đủ dài',
        'Vì 2 không phải số chính phương',
        'Vì chưa ai tìm ra cách',
      ],
      answer: 0,
      explain: 'x³ = 2 → x = ∛2 cần mở rộng bậc 3. 3 ∤ 2ⁿ → ∛2 không nằm trên tầng nào của tháp.',
    },
  ],
  l1c1s2: [
    {
      q: 'Tính: 2 + 3 × 4 − (5 − 2) = ?',
      options: ['11', '20', '17', '9'],
      answer: 0,
      explain: 'Ngoặc trước (3), nhân chia trước (3 × 4 = 12), cộng trừ sau: 2 + 12 − 3 = 11.',
    },
    {
      q: 'Thứ tự ưu tiên đúng là?',
      options: ['Ngoặc → nhân chia → cộng trừ', 'Cộng trừ → nhân chia → ngoặc', 'Trái sang phải, bỏ qua ngoặc', 'Cộng trừ → ngoặc → nhân chia'],
      answer: 0,
      explain: '“Ngoặc là vua, nhân chia quý tộc, cộng trừ dân thường” — ai cao quý làm trước.',
    },
  ],
  l1c3s1: [
    {
      q: 'Áo 800.000đ giảm 20%. Giá mới là?',
      options: ['640.000đ', '780.000đ', '720.000đ', '600.000đ'],
      answer: 0,
      explain: 'Phần giảm = 800.000 × 20/100 = 160.000 → giá mới = 800.000 − 160.000 = 640.000.',
    },
    {
      q: '15 là 30% của số nào?',
      options: ['50', '45', '5', '150'],
      answer: 0,
      explain: 'Che góc Tổng → chia: 15 ÷ 30% = 15 ÷ 0,3 = 50.',
    },
  ],
  l1c4s1: [
    {
      q: 'Bản đồ tỉ lệ 1:50.000. Hai điểm cách 4 cm trên bản đồ cách nhau ngoài đời?',
      options: ['2 km', '20 km', '500 m', '200 km'],
      answer: 0,
      explain: '4 cm × 50.000 = 200.000 cm = 2 km — giữ nguyên “tỷ giá” giữa hai thế giới.',
    },
    {
      q: '3 máy in xong việc trong 8 giờ. 6 máy (năng suất đều) xong trong?',
      options: ['4 giờ', '16 giờ', '6 giờ', '2 giờ'],
      answer: 0,
      explain: 'Tỷ lệ NGHỊCH: 3 × 8 = 6 × x → x = 4. Thợ gấp đôi, thời gian giảm nửa.',
    },
  ],
  l1c5s2: [
    {
      q: '“Minh kém Mai 7 điểm, Mai có 19 điểm.” Minh có bao nhiêu?',
      options: ['12', '26', '7', '13'],
      answer: 0,
      explain: '“Kém” → trừ: Minh = 19 − 7 = 12. Mã dịch: kém là −.',
    },
    {
      q: '“Hương gấp 2 lần Hà. Cả hai có 36 quyển vở.” Hà có bao nhiêu?',
      options: ['12', '18', '24', '9'],
      answer: 0,
      explain: 'Hà = x, Hương = 2x → 3x = 36 → x = 12. Đặt x cho người ít hơn.',
    },
  ],
  l2c1s2: [
    {
      q: 'Rút gọn √72 = ?',
      options: ['6√2', '2√6', '8√3', '36√2'],
      answer: 0,
      explain: '72 = 36 × 2 → √72 = √36 × √2 = 6√2. Hunt nhân tử chính phương trước.',
    },
    {
      q: 'a⁵ · a² = ?',
      options: ['a⁷', 'a¹⁰', 'a³', 'a²·⁵'],
      answer: 0,
      explain: 'Nối sổ đếm: kéo trục 5 lần rồi 2 lần = 7 lần → a^(5+2) = a⁷.',
    },
  ],
  l2c2s2: [
    {
      q: 'Parabol y = −2x² + 8x − 5 có miệng hướng nào?',
      options: ['Mở xuống (nón) vì a = −2 < 0', 'Mở lên (bát úp)', 'Là đường thẳng', 'Không xác định'],
      answer: 0,
      explain: 'a = −2 < 0 → nón úp: có giá trị LỚN NHẤT tại đỉnh.',
    },
    {
      q: 'Đỉnh của y = x² − 6x + 5 tại x = ?',
      options: ['3', '−3', '6', '5'],
      answer: 0,
      explain: 'x = −b/2a = −(−6)/2 = 3. Điểm bóng “do dự” giữa đi lên và đi xuống.',
    },
  ],
  l2c3s1: [
    {
      q: 'Tam giác vuông có hai cạnh góc vuông 9 và 12. Cạnh huyền?',
      options: ['15', '13', '14', '21'],
      answer: 0,
      explain: 'c² = 81 + 144 = 225 → c = 15. Là bộ 3–4–5 phình ×3 (đồng dạng).',
    },
    {
      q: 'Cột 1,5 m đổ bóng 2 m. Tháp đổ bóng 40 m. Tháp cao?',
      options: ['30 m', '60 m', '26,7 m', '20 m'],
      answer: 0,
      explain: 'Đồng dạng bóng trời: x/40 = 1,5/2 → x = 30 m — trick của Thales.',
    },
  ],
  l2c5s1: [
    {
      q: 'Đường thẳng qua (0, 2) và dốc 3 có phương trình?',
      options: ['y = 3x + 2', 'y = 2x + 3', 'y = 3x − 2', 'y = −3x + 2'],
      answer: 0,
      explain: 'b = 2 (chạm trục dọc tại 2), m = 3 → y = 3x + 2.',
    },
    {
      q: 'Khoảng cách từ (0, 0) đến (5, 12)?',
      options: ['13', '17', '12', '√17'],
      answer: 0,
      explain: '√(25 + 144) = √169 = 13 — bộ 5–12–13 nằm nghiêng.',
    },
  ],
  l3c0s2: [
    {
      q: 'Phủ định của “∀ số thực x, x² ≥ 0” là?',
      options: ['∃ x, x² < 0', '∀ x, x² < 0', '∃ x, x² ≥ 0', 'Không thể phủ định'],
      answer: 0,
      explain: 'Đảo cờ: ∀ → ∃ và phủ định mệnh đề (≥ → <).',
    },
    {
      q: 'Câu “∃ số nguyên tố chẵn” đúng hay sai?',
      options: ['Đúng — số 2', 'Sai — mọi nguyên tố đều lẻ', 'Đúng — mọi số chẵn', 'Sai — không kiểm chứng được'],
      answer: 0,
      explain: '∃ chỉ cần MỘT nhân chứng: số 2 là nguyên tố và chẵn → câu đúng ngay lập tức.',
    },
  ],
  l3c2s2: [
    {
      q: 'f(x) = x² − 8x đạt giá trị nhỏ nhất tại x = ?',
      options: ['4', '8', '0', '−4'],
      answer: 0,
      explain: 'f′ = 2x − 8 = 0 → x = 4. f″ = 2 > 0 (trái − phải +) → đáy trũng, min.',
    },
    {
      q: 'Ở đỉnh đồi / đáy trũng, điều gì xảy ra với đạo hàm?',
      options: ['f′ = 0 — tiếp tuyến nằm ngang', 'f′ lớn nhất', 'f = 0', 'f không tồn tại'],
      answer: 0,
      explain: 'Mặt đất phẳng tạm: đi trái hay phải cũng xuống/lên → dốc 0. Đó là chỗ săn cực trị.',
    },
  ],
  l3c3s1: [
    {
      q: '∫₀³ 2x dx = ?',
      options: ['9', '6', '3', '18'],
      answer: 0,
      explain: 'Nguyên hàm x² → 3² − 0² = 9. Kiểm tra hình: tam giác 3 × 6 / 2 = 9 ✓.',
    },
    {
      q: '∫ v dt với v là vận tốc cho ta?',
      options: ['Quãng đường (diện tích dưới đường vận tốc)', 'Vận tốc trung bình', 'Gia tốc', 'Thời gian'],
      answer: 0,
      explain: 'Cộng dồn vận tốc theo thời gian = quãng đường — tích phân là phép “tổng lũy kế”.',
    },
  ],
  l3c4s1: [
    {
      q: 'Chuỗi 1 + 1/2 + 1/4 + 1/8 + … hội tụ về?',
      options: ['2', '1', 'Vô cực', '0'],
      answer: 0,
      explain: 'Chuỗi hình học bắt đầu 1, công bội 1/2: S = 1/(1 − 1/2) = 2. (Riêng phần 1/2 + 1/4 + … không có số 1 đầu tiên thì tổng = 1 — như Achilles.)',
    },
    {
      q: 'Chuỗi 1 + 1/2 + 1/3 + 1/4 + … (điều hòa) có hội tụ không?',
      options: ['Phân kỳ — số hạng nhỏ dần nhưng chưa đủ nhanh', 'Hội tụ về 1', 'Hội tụ về 2', 'Hội tụ về vô cực'],
      answer: 0,
      explain: 'Gom nhóm mỗi nhóm vượt 1/2 → tổng trôi ra ∞. Nhỏ dần ĐỦ NHANH mới hội tụ.',
    },
  ],
  l4c1s2: [
    {
      q: 'Các vector (1, 0), (0, 1), (2, 3) trong ℝ² có độc lập không?',
      options: ['Không — (2, 3) = 2(1,0) + 3(0,1) pha ra được', 'Có — 3 vector khác nhau', 'Không — vì có số 0', 'Không xác định'],
      answer: 0,
      explain: 'Nguyên liệu thứ ba THỪA — pha từ hai cái đầu được → phụ thuộc. Cơ sở ℝ² đúng 2 vector.',
    },
    {
      q: 'Số chiều của không gian = ?',
      options: ['Số vector trong một cơ sở', 'Số vector có trong tập', 'Số lớn nhất trong tập', 'Số phần tử khác 0'],
      answer: 0,
      explain: 'Chiều = đếm “nguyên liệu tối thiểu” của cơ sở — không phụ thuộc chọn bộ nào.',
    },
  ],
  l4c2s1: [
    {
      q: 'A = [[4, 0], [0, −1]]. Eigenvalue ứng với eigenvector (0, 1) là?',
      options: ['−1', '4', '1', '0'],
      answer: 0,
      explain: 'Cột 2: (0,1) → (0,−1) = −1·(0,1) — bị LẬT ngược chiều, λ = −1 (vẫn là eigenvector!).',
    },
    {
      q: 'Phát biểu đúng về eigenvector:',
      options: ['Bị phép biến hình kéo dọc theo chính nó', 'Bị xoay 90°', 'Bị đưa về 0 luôn', 'Không bị tác động gì'],
      answer: 0,
      explain: 'A·v = λv: đi vào đúng hướng bất biến, chỉ thay đổi độ dài hệ số λ.',
    },
  ],
  l4c3s2: [
    {
      q: 'Có 6 bạn, chọn 2 đi trực nhật (không phân biệt vai trò). Số cách?',
      options: ['15', '30', '12', '36'],
      answer: 0,
      explain: 'C(6,2) = 6×5/2 = 15 — nhân dần rồi chia 2! vì mỗi cặp bị đếm 2 lần.',
    },
    {
      q: 'Mật khẩu 3 chữ số KHÁC nhau có bao nhiêu khả năng?',
      options: ['720', '1000', '999', '504'],
      answer: 0,
      explain: 'Thứ tự quan trọng → hoán vị: 10 × 9 × 8 = 720.',
    },
  ],
  l5c2s2: [
    {
      q: 'Định lý Weierstrass cần 3 điều kiện nào?',
      options: ['Liên tục + đoạn đóng + bị chặn', 'Liên tục + khả vi + dương', 'Đoạn mở + đơn điệu + bị chặn', 'Liên tục đều + đơn điệu + đóng'],
      answer: 0,
      explain: 'Ba viên domino: thiếu “đoạn đóng” thì 1/x trên (0,1) trốn lên vô cực — không đạt max.',
    },
    {
      q: 'f(x) = 1/x trên (0, 1) KHÔNG đạt max vì?',
      options: ['Khoảng mở — hàm chạy về ∞ không chạm', 'f không liên tục', 'f âm', 'Vì f đạt min thay max'],
      answer: 0,
      explain: 'Cửa mở: ứng viên nào cũng bị đánh bại bằng x nhỏ hơn nửa. Đóng cửa là tất cả.',
    },
  ],
  l5c3s1: [
    {
      q: 'Trên đồng hồ 12 số: 8 + 7 = ?',
      options: ['3', '15', '7', '1'],
      answer: 0,
      explain: '15 − 12 = 3 — đi qua 12 thì vòng lại. Cộng giờ mod 12.',
    },
    {
      q: 'Điều nào KHÔNG phải tiên đề nhóm?',
      options: ['Giao hoán a·b = b·a', 'Đóng kín', 'Kết hợp', 'Có phần tử trung hòa và nghịch đảo'],
      answer: 0,
      explain: 'Giao hoán KHÔNG bắt buộc — nhóm không giao hoán tồn tại khắp nơi (hoán vị, ma trận).',
    },
  ],
  l5c4s1: [
    {
      q: 'Theo topology, chiếc cốc cà phê “giống” vật nào?',
      options: ['Bánh donut — cùng 1 lỗ (ở quai cốc)', 'Quả bóng — mặt kín', 'Cà vạt — 2 lỗ', 'Không giống vật gì'],
      answer: 0,
      explain: 'Nặn mềm: cốc chảy thành donut vì cùng 1 lỗ — nhưng không bao giờ thành quả bóng.',
    },
    {
      q: 'Hai hành động BỊ CẤM khi “co giãn” trong topology là?',
      options: ['Xé rách và dán dính', 'Uốn cong và xoay', 'Kéo dài và nén', 'Cắt và đo'],
      answer: 0,
      explain: 'Xé tạo lỗ mới, dán bịt lỗ — đổi loài. Uốn, xoay, kéo, nén đều tự do.',
    },
  ],
  l6c1s1: [
    {
      q: 'Bốn tiên đề nhóm là?',
      options: ['Đóng kín, kết hợp, trung hòa, nghịch đảo', 'Đóng kín, giao hoán, trung hòa, nghịch đảo', 'Kết hợp, phân phối, trung hòa, đơn vị', 'Đóng kín, kết hợp, giao hoán, phân phối'],
      answer: 0,
      explain: '“Đóng, kết, hòa, nghịch”. Giao hoán không bắt buộc — đó là nhóm giao hoán (abelian).',
    },
    {
      q: 'Trong Z₆, nghịch đảo của 4 là?',
      options: ['2', '4', '1', '5'],
      answer: 0,
      explain: '4 + 2 = 6 ≡ 0 (mod 6) → nghịch đảo của 4 là 2.',
    },
  ],
  l6c4s1: [
    {
      q: 'Phương trình x² + y² = 1 mô tả hình nào?',
      options: ['Đường tròn bán kính 1', 'Parabol', 'Đường thẳng', 'Hyperbol'],
      answer: 0,
      explain: 'Bản thiết kế → tòa nhà: mọi điểm cách gốc đúng 1 đơn vị = đường tròn đơn vị.',
    },
    {
      q: '“Nghiệm của hệ phương trình” trong hình học đại số tương ứng với?',
      options: ['Giao điểm của các đường cong', 'Diện tích hình', 'Chu vi hình', 'Độ dốc đường cong'],
      answer: 0,
      explain: 'Điểm thỏa mọi phương trình = nằm trên mọi đường = chỗ các đường cắt nhau.',
    },
  ],
}
