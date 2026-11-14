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
}
