import type { ReactElement } from 'react'
import type { VisualKind } from '../data/content'

const ink = '#57534e'
const faint = '#d6d3d1'

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 720 360" className="h-auto w-full" role="img">
      {children}
    </svg>
  )
}

const T = { fontFamily: 'ui-sans-serif, system-ui, sans-serif' } as const

function numberline(c: string): ReactElement {
  const x = (v: number) => 360 + v * 50
  const ticks = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
  return (
    <Frame>
      <text x="360" y="40" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Phép tính 3 + (−5) = −2
      </text>
      <line x1="40" y1="200" x2="680" y2="200" stroke={ink} strokeWidth="2" />
      {ticks.map((v) => (
        <g key={v}>
          <line x1={x(v)} y1="194" x2={x(v)} y2="206" stroke={ink} strokeWidth="1.5" />
          <text x={x(v)} y="228" textAnchor="middle" fontSize="13" fill={ink} style={T}>{v}</text>
        </g>
      ))}
      <path d={`M ${x(0)} 120 Q 435 78 ${x(3)} 120`} fill="none" stroke="#059669" strokeWidth="2.5" className="anim-dash" />
      <polygon points={`${x(3)},120 ${x(3) - 9},111 ${x(3) - 4},125`} fill="#059669" />
      <text x="440" y="70" textAnchor="middle" fontSize="14" fontWeight="600" fill="#059669" style={T}>+3: đi phải</text>
      <path d={`M ${x(3)} 150 Q 385 108 ${x(-2)} 150`} fill="none" stroke="#e11d48" strokeWidth="2.5" className="anim-dash" />
      <polygon points={`${x(-2)},150 ${x(-2) + 9},141 ${x(-2) + 4},155`} fill="#e11d48" />
      <text x="392" y="105" textAnchor="middle" fontSize="14" fontWeight="600" fill="#e11d48" style={T}>−5: đi trái</text>
      <circle cx={x(0)} cy="200" r="6" fill={ink} />
      <text x={x(0)} y="255" textAnchor="middle" fontSize="12" fill={ink} style={T}>khởi hành</text>
      <circle cx={x(3)} cy="200" r="6" fill="#059669" />
      <circle cx={x(-2)} cy="200" r="8" fill={c} />
      <text x={x(-2)} y="180" textAnchor="middle" fontSize="15" fontWeight="800" fill={c} style={T}>−2</text>
    </Frame>
  )
}

function pizza(c: string): ReactElement {
  const half = 'M 200 190 L 290 190 A 90 90 0 0 0 110 190 Z'
  const q1 = 'M 520 190 L 610 190 A 90 90 0 0 0 520 100 Z'
  const q2 = 'M 520 190 L 430 190 A 90 90 0 0 0 520 280 Z'
  return (
    <Frame>
      <text x="360" y="40" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Cùng lượng bánh — khác cách cắt
      </text>
      <circle cx="200" cy="190" r="90" fill="#fffbeb" stroke={ink} strokeWidth="1.5" />
      <path d={half} fill={c} opacity="0.75" />
      <text x="200" y="130" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" style={T}>1/2</text>
      <text x="200" y="310" textAnchor="middle" fontSize="14" fill={ink} style={T}>anh cắt làm 2</text>
      <circle cx="520" cy="190" r="90" fill="#fffbeb" stroke={ink} strokeWidth="1.5" />
      <path d={q1} fill={c} opacity="0.75" />
      <path d={q2} fill={c} opacity="0.75" />
      <text x="520" y="120" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff" style={T}>2/4</text>
      <text x="520" y="310" textAnchor="middle" fontSize="14" fill={ink} style={T}>em cắt làm 4</text>
      <text x="360" y="200" textAnchor="middle" fontSize="34" fontWeight="800" fill={ink} style={T}>=</text>
    </Frame>
  )
}

function pan(cx: number, cy: number, label: string) {
  return (
    <g>
      <line x1={cx - 70} y1={cy} x2={cx + 70} y2={cy} stroke={ink} strokeWidth="2" />
      <ellipse cx={cx - 70} cy={cy + 26} rx="52" ry="14" fill="#fafaf9" stroke={ink} strokeWidth="1.5" />
      <ellipse cx={cx + 70} cy={cy + 26} rx="52" ry="14" fill="#fafaf9" stroke={ink} strokeWidth="1.5" />
      <line x1={cx - 70} y1={cy} x2={cx - 70} y2={cy + 14} stroke={ink} />
      <line x1={cx + 70} y1={cy} x2={cx + 70} y2={cy + 14} stroke={ink} />
      <text x={cx - 70} y={cy + 32} textAnchor="middle" fontSize="17" fontWeight="800" fill={ink} style={T}>{label}</text>
    </g>
  )
}

function balance(c: string): ReactElement {
  return (
    <Frame>
      <text x="360" y="36" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Dấu “=” là điểm cân bằng
      </text>
      <g>
        <polygon points="180,250 165,280 195,280" fill={faint} stroke={ink} />
        <line x1="95" y1="235" x2="265" y2="235" stroke={ink} strokeWidth="3" className="anim-tilt" />
        {pan(180, 235, '2x + 3')}
        <text x="180" y="320" textAnchor="middle" fontSize="15" fill={ink} style={T}>2x + 3 = 11</text>
      </g>
      <g transform="translate(360 0)">
        <text x="0" y="165" textAnchor="middle" fontSize="26" fontWeight="800" fill={c} style={T}>→</text>
        <text x="0" y="195" textAnchor="middle" fontSize="13" fill={c} style={T}>bỏ 3 mỗi bên</text>
      </g>
      <g>
        <polygon points="540,250 525,280 555,280" fill={faint} stroke={ink} />
        <line x1="455" y1="235" x2="625" y2="235" stroke={ink} strokeWidth="3" className="anim-tilt" />
        {pan(540, 235, '2x = 8')}
        <text x="540" y="320" textAnchor="middle" fontSize="15" fill={ink} style={T}>
          chia 2 mỗi bên → <tspan fontWeight="800" fill={c}>x = 4</tspan>
        </text>
      </g>
    </Frame>
  )
}

function absquare(c: string): ReactElement {
  return (
    <Frame>
      <rect x="140" y="60" width="150" height="150" fill={c} opacity="0.28" stroke={ink} className="anim-pulse" />
      <rect x="290" y="60" width="90" height="150" fill="#f59e0b" opacity="0.32" stroke={ink} className="anim-pulse" style={{ animationDelay: '0.4s' }} />
      <rect x="140" y="210" width="150" height="90" fill="#f59e0b" opacity="0.32" stroke={ink} className="anim-pulse" style={{ animationDelay: '0.8s' }} />
      <rect x="290" y="210" width="90" height="90" fill="#e11d48" opacity="0.3" stroke={ink} className="anim-pulse" style={{ animationDelay: '1.2s' }} />
      <text x="215" y="140" textAnchor="middle" fontSize="20" fontWeight="800" fill={ink} style={T}>a²</text>
      <text x="335" y="140" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>ab</text>
      <text x="215" y="262" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>ab</text>
      <text x="335" y="262" textAnchor="middle" fontSize="16" fontWeight="800" fill={ink} style={T}>b²</text>
      <text x="215" y="48" textAnchor="middle" fontSize="14" fill={ink} style={T}>a</text>
      <text x="335" y="48" textAnchor="middle" fontSize="14" fill={ink} style={T}>b</text>
      <text x="128" y="140" textAnchor="end" fontSize="14" fill={ink} style={T}>a</text>
      <text x="128" y="260" textAnchor="end" fontSize="14" fill={ink} style={T}>b</text>
      <text x="360" y="330" textAnchor="middle" fontSize="15" fill={ink} style={T}>
        (a + b)² = a² + 2ab + b²  —  diện tích cả hình vuông
      </text>
    </Frame>
  )
}

function machine(c: string): ReactElement {
  return (
    <Frame>
      <text x="360" y="40" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        f(x) = 2x + 1 — một vào, một ra
      </text>
      <circle cx="110" cy="150" r="26" fill={c} opacity="0.25" stroke={ink} className="anim-float" />
      <text x="110" y="156" textAnchor="middle" fontSize="16" fontWeight="800" fill={ink} style={T}>x = 3</text>
      <line x1="146" y1="150" x2="240" y2="150" stroke={ink} strokeWidth="2" className="anim-dash" />
      <polygon points="240,150 228,144 228,156" fill={ink} />
      <rect x="248" y="100" width="224" height="100" rx="16" fill="#fff" stroke={ink} strokeWidth="2" />
      <text x="360" y="140" textAnchor="middle" fontSize="20" fontWeight="800" fill={ink} style={T}>CỖ MÁY f</text>
      <text x="360" y="172" textAnchor="middle" fontSize="16" fill={ink} style={T}>nhân 2 → cộng 1</text>
      <line x1="482" y1="150" x2="570" y2="150" stroke={ink} strokeWidth="2" className="anim-dash" />
      <polygon points="580,150 568,144 568,156" fill={ink} />
      <circle cx="610" cy="150" r="26" fill="#fef3c7" stroke={ink} className="anim-float" style={{ animationDelay: '1.5s' }} />
      <text x="610" y="156" textAnchor="middle" fontSize="16" fontWeight="800" fill={ink} style={T}>7</text>
      <g style={T} fontSize="13" fill={ink}>
        <text x="150" y="265">f(−1) = −1</text>
        <text x="310" y="265">f(0) = 1</text>
        <text x="460" y="265">f(1) = 3</text>
        <text x="150" y="292" fontSize="12" fill="#78716c">3 viên bi đi vào, 3 cặp (vào, ra) — chấm 3 điểm là một đường thẳng</text>
      </g>
    </Frame>
  )
}

function unitcircle(c: string): ReactElement {
  const cx = 230, cy = 190, r = 120
  const px = cx + r * 0.5, py = cy - r * 0.866
  return (
    <Frame>
      <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={ink} strokeWidth="1.5" />
      <line x1={cx - 150} y1={cy} x2={cx + 150} y2={cy} stroke={faint} strokeWidth="1.5" />
      <line x1={cx} y1={cy - 150} x2={cx} y2={cy + 150} stroke={faint} strokeWidth="1.5" />
      <g className="anim-spin" style={{ transformOrigin: '230px 190px' }}>
        <line x1={cx} y1={cy} x2={px} y2={py} stroke={c} strokeWidth="3" />
        <circle cx={px} cy={py} r="6" fill={c} />
        <line x1={px} y1={py} x2={px} y2={cy} stroke="#e11d48" strokeWidth="2.5" />
        <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#2563eb" strokeWidth="2.5" />
      </g>
      <path d={`M ${cx + 34} ${cy} A 34 34 0 0 0 ${cx + 17} ${cy - 29}`} fill="none" stroke={ink} strokeWidth="1.5" />
      <text x={cx + 62} y={cy - 12} fontSize="13" fill={ink} style={T}>60°</text>
      <text x={px + 12} y={py - 8} fontSize="15" fontWeight="700" fill={c} style={T}>(cos θ, sin θ)</text>
      <text x={px + 14} y={(py + cy) / 2 + 4} fontSize="13" fontWeight="700" fill="#e11d48" style={T}>sin 60° = √3/2</text>
      <text x={cx + 44} y={cy + 22} fontSize="13" fontWeight="700" fill="#2563eb" style={T}>cos 60° = 1/2</text>
      <g style={T} fontSize="13" fill={ink}>
        <text x="470" y="120">sin θ = chiều dọc (bắc–nam)</text>
        <text x="470" y="150">cos θ = chiều ngang (đông–tây)</text>
        <text x="470" y="180">tan θ = độ dốc của tia</text>
        <text x="470" y="222" fontSize="12" fill="#78716c">Bán kính 1 → tọa độ chính là</text>
        <text x="470" y="242" fontSize="12" fill="#78716c">tỉ số lượng giác. Đi hết vòng, lặp lại.</text>
      </g>
    </Frame>
  )
}

function domino(c: string): ReactElement {
  const ds = [
    { x: 90, rot: 0, label: 'Định nghĩa' },
    { x: 225, rot: 12, label: 'Bổ đề' },
    { x: 360, rot: 26, label: 'Bổ đề' },
    { x: 495, rot: 42, label: 'Định lý ✓' },
  ]
  return (
    <Frame>
      {ds.map((d, i) => (
        <g key={i} transform={`translate(${d.x} 200) rotate(${d.rot})`}>
          <rect x="-24" y="-95" width="48" height="95" rx="8" fill={i === 3 ? c : '#fff'} opacity={i === 3 ? 0.85 : 1} stroke={ink} strokeWidth="2" className="anim-fall" style={{ animationDelay: `${i * 0.22}s` }} />
          <circle cx="0" cy="-72" r="6" fill={i === 3 ? '#fff' : c} />
          <circle cx="0" cy="-24" r="6" fill={i === 3 ? '#fff' : c} />
          <text x="0" y="36" textAnchor="middle" fontSize="13" fill={ink} style={T}>{d.label}</text>
        </g>
      ))}
      <g transform="translate(628 200)">
        <rect x="-24" y="-95" width="48" height="95" rx="8" fill="#fee2e2" stroke="#e11d48" strokeWidth="2" strokeDasharray="5 4" />
        <text x="0" y="-40" textAnchor="middle" fontSize="24" fontWeight="800" fill="#e11d48" style={T}>✕</text>
        <text x="0" y="36" textAnchor="middle" fontSize="13" fill="#e11d48" style={T}>phản ví dụ</text>
      </g>
      <text x="360" y="320" textAnchor="middle" fontSize="14" fill={ink} style={T}>
        Mỗi mắt xích đứng trên mắt trước — gãy một mắt, cả chuỗi sụp
      </text>
    </Frame>
  )
}

function zeno(c: string): ReactElement {
  const x = (t: number) => 100 + t * 520
  const pts = [
    { t: 0.5, label: '1/2' },
    { t: 0.75, label: '3/4' },
    { t: 0.875, label: '7/8' },
    { t: 0.9375, label: '15/16' },
    { t: 0.96875, label: '31/32' },
  ]
  return (
    <Frame>
      <text x="360" y="50" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Mỗi bước đi nửa quãng còn lại — tổng là bao nhiêu?
      </text>
      <line x1="80" y1="230" x2="660" y2="230" stroke={ink} strokeWidth="2" />
      <circle cx={x(0)} cy="230" r="5" fill={ink} />
      <text x={x(0)} y="256" textAnchor="middle" fontSize="12" fill={ink} style={T}>0</text>
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={x(p.t)} cy="230" r={9 - i * 1.5} fill={c} opacity={1 - i * 0.12} className="anim-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
          <text x={x(p.t)} y="256" textAnchor="middle" fontSize="12" fill={ink} style={T}>{p.label}</text>
        </g>
      ))}
      <line x1="620" y1="180" x2="620" y2="280" stroke={c} strokeWidth="2.5" strokeDasharray="6 5" />
      <text x="620" y="166" textAnchor="middle" fontSize="15" fontWeight="800" fill={c} style={T}>đích: 1</text>
      <text x="360" y="320" textAnchor="middle" fontSize="14" fill={ink} style={T}>
        Không bước nào chạm — nhưng xu hướng chính xác bằng 1
      </text>
    </Frame>
  )
}

function tangent(c: string): ReactElement {
  const f = (x: number) => (x - 360) * (x - 360) / 700 + 250
  const path = `M 140 ${f(140)} Q 360 ${f(360) - 60} 580 ${f(580)}`
  return (
    <Frame>
      <text x="360" y="40" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Cát tuyến dồn về tiếp tuyến khi zoom
      </text>
      <path d={path} fill="none" stroke={ink} strokeWidth="2.5" />
      <line x1="200" y1={255 - 100 * 0.05625} x2="560" y2={255 + 260 * 0.05625} stroke="#059669" strokeWidth="2" strokeDasharray="7 5" className="anim-dash" />
      <line x1="160" y1={255 + 140 * 0.171} x2="460" y2={255 - 160 * 0.171} stroke={c} strokeWidth="3" />
      <circle cx="300" cy="255" r="6" fill={c} />
      <circle cx="460" cy="264" r="5" fill="#059669" />
      <text x="508" y="292" fontSize="13" fill="#059669" style={T}>cát tuyến</text>
      <text x="176" y="300" fontSize="13" fontWeight="700" fill={c} style={T}>tiếp tuyến tại P</text>
      <circle cx="585" cy="105" r="72" fill="#fff" stroke={faint} strokeWidth="2" className="anim-pulse" />
      <clipPath id="zoomclip"><circle cx="585" cy="105" r="70" /></clipPath>
      <g clipPath="url(#zoomclip)">
        <path d={`M 505 ${105 + 80 * 0.171} L 665 ${105 - 80 * 0.171}`} stroke={c} strokeWidth="3" fill="none" />
        <circle cx="585" cy="105" r="5" fill={c} />
      </g>
      <text x="585" y="200" textAnchor="middle" fontSize="12" fill={ink} style={T}>zoom vô hạn: cong hóa thẳng</text>
    </Frame>
  )
}

function matrix(c: string): ReactElement {
  const ox = 230, oy = 200, s = 45
  const P = (x: number, y: number) => `${ox + x * s},${oy - y * s}`
  return (
    <Frame>
      <text x="360" y="40" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Ma trận kéo cả mặt phẳng: [[2, 1], [0, 1]]
      </text>
      <line x1="70" y1={oy} x2="400" y2={oy} stroke={faint} strokeWidth="1.5" />
      <line x1={ox} y1="70" x2={ox} y2="330" stroke={faint} strokeWidth="1.5" />
      <polygon points={`${P(0, 0)} ${P(1, 0)} ${P(1, 1)} ${P(0, 1)}`} fill={c} opacity="0.3" stroke={c} strokeWidth="2" />
      <text x={ox + 20} y={oy - 8} fontSize="13" fill={c} style={T}>vuông đơn vị</text>
      <polygon points={`${P(0, 0)} ${P(2, 0)} ${P(3, 1)} ${P(1, 1)}`} fill="#f59e0b" opacity="0.3" stroke="#d97706" strokeWidth="2" className="anim-pulse" />
      <g style={T} fontSize="13" fill={ink}>
        <text x="440" y="120">(1, 0) → (2, 0): kéo ngang ×2</text>
        <text x="440" y="150">(0, 1) → (1, 1): nghiêng sang phải</text>
        <text x="440" y="192" fontWeight="700">Cột của ma trận = hình ảnh</text>
        <text x="440" y="212" fontWeight="700">của hai vector nền (1,0), (0,1)</text>
        <text x="440" y="252" fontSize="12" fill="#78716c">Nhân ma trận = nối hai phép biến hình</text>
      </g>
    </Frame>
  )
}

function ladder(c: string): ReactElement {
  const rungs = [1, 2, 3, 4, 5, 6]
  return (
    <Frame>
      <line x1="270" y1="60" x2="270" y2="320" stroke={ink} strokeWidth="4" />
      <line x1="330" y1="60" x2="330" y2="320" stroke={ink} strokeWidth="4" />
      {rungs.map((n) => {
        const y = 320 - (n - 1) * 44
        return (
          <g key={n}>
            <line x1="270" y1={y} x2="330" y2={y} stroke={ink} strokeWidth="3" />
            <text x="345" y={y + 5} fontSize="13" fill={ink} style={T}>n = {n}{n === 1 ? '  ✓ cơ sở' : ''}</text>
          </g>
        )
      })}
      <g className="anim-climb" style={{ transformBox: 'view-box' }}>
        <line x1="180" y1="300" x2="180" y2="90" stroke={c} strokeWidth="2.5" />
        <polygon points="180,80 172,96 188,96" fill={c} />
      </g>
      <text x="150" y="200" textAnchor="middle" fontSize="13" fontWeight="700" fill={c} style={T} transform="rotate(-90 150 200)">
        nếu P(n) ✓ thì P(n+1) ✓
      </text>
      <text x="430" y="100" fontSize="16" fontWeight="700" fill={ink} style={T}>Thang vô tận…</text>
      <text x="430" y="130" fontSize="13" fill="#78716c" style={T}>Bậc đầu dựng xong</text>
      <text x="430" y="152" fontSize="13" fill="#78716c" style={T}>+ mỗi bậc đỡ bậc kế</text>
      <text x="430" y="174" fontSize="13" fill="#78716c" style={T}>= chạm được MỌI bậc</text>
    </Frame>
  )
}

function realline(c: string): ReactElement {
  const dots = Array.from({ length: 56 }, (_, i) => 70 + i * 10)
  return (
    <Frame>
      <text x="360" y="50" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Hữu tỉ: dày nhưng còn lỗ — ℝ lấp kín
      </text>
      <line x1="50" y1="210" x2="670" y2="210" stroke={ink} strokeWidth="2" />
      {dots.map((d, i) => (
        <circle key={i} cx={d} cy="210" r="2" fill="#a78bfa" opacity="0.65" />
      ))}
      {['1', '1.4', '1.5', '2'].map((v, i) => (
        <text key={i} x={190 + i * 100} y="238" textAnchor="middle" fontSize="12" fill={ink} style={T}>{v}</text>
      ))}
      <circle cx="414" cy="210" r="7" fill="#fff" stroke="#e11d48" strokeWidth="2.5" />
      <text x="414" y="160" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e11d48" style={T}>lỗ: √2 — không hữu tỉ nào</text>
      <text x="414" y="180" textAnchor="middle" fontSize="12" fill="#e11d48" style={T}>bình phương ra 2 được</text>
      <circle cx="414" cy="210" r="11" fill="none" stroke={c} strokeWidth="2" opacity="0.8" className="anim-pulse" />
      <text x="540" y="140" fontSize="13" fontWeight="700" fill={c} style={T}>ℝ: lấp mọi lỗ</text>
      <text x="540" y="162" fontSize="12" fill="#78716c" style={T}>(tính đầy đủ — completeness)</text>
    </Frame>
  )
}

function epsband(c: string): ReactElement {
  return (
    <Frame>
      <rect x="330" y="155" width="140" height="90" fill="#f59e0b" opacity="0.18" className="anim-pulse" style={{ animationDelay: '0.6s' }} />
      <rect x="80" y="60" width="580" height="90" fill="#7c3aed" opacity="0.12" className="anim-pulse" />
      <line x1="80" y1="105" x2="660" y2="105" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="655" y="95" textAnchor="end" fontSize="14" fontWeight="700" fill="#7c3aed" style={T}>L (dải ε quanh L)</text>
      <line x1="400" y1="40" x2="400" y2="320" stroke="#d97706" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="400" y="340" textAnchor="middle" fontSize="14" fontWeight="700" fill="#d97706" style={T}>a (vùng δ quanh a)</text>
      <path d="M 100 320 C 300 310 330 240 400 200 S 560 120 650 110" fill="none" stroke={c} strokeWidth="3" />
      <circle cx="400" cy="200" r="6" fill={c} />
      <text x="120" y="300" fontSize="13" fill={ink} style={T}>y = f(x)</text>
      <text x="560" y="270" fontSize="12" fill="#78716c" style={T}>mọi x trong vùng δ → f(x) trong dải ε</text>
    </Frame>
  )
}

function sieve(c: string): ReactElement {
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47])
  return (
    <Frame>
      <text x="360" y="36" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Sàng Eratosthenes — 1 đến 50
      </text>
      {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => {
        const col = (n - 1) % 10, row = Math.floor((n - 1) / 10)
        const x = 90 + col * 56, y = 66 + row * 54
        const isP = primes.has(n)
        return (
          <g key={n}>
            <rect x={x} y={y} width="48" height="44" rx="8" fill={isP ? c : '#fafaf9'} opacity={isP ? 0.9 : 1} stroke={isP ? c : faint} strokeWidth="1.5" className={isP ? 'anim-pulse' : undefined} style={isP ? { animationDelay: `${(n % 7) * 0.2}s` } : undefined} />
            <text x={x + 24} y={y + 28} textAnchor="middle" fontSize="15" fontWeight={isP ? 800 : 400} fill={isP ? '#fff' : '#a8a29e'} style={{ ...T, textDecoration: isP ? 'none' : 'line-through' }}>
              {n}
            </text>
          </g>
        )
      })}
      <text x="665" y="80" fontSize="13" fontWeight="700" fill={c} style={T}>15 nguyên tố</text>
      <text x="665" y="102" fontSize="12" fill="#78716c" style={T}>gạch bội của 2, 3, 5, 7</text>
      <text x="665" y="124" fontSize="12" fill="#78716c" style={T}>→ sót lại là viên gạch gốc</text>
    </Frame>
  )
}

function tower(c: string): ReactElement {
  const tiers = [
    { y: 250, label: 'ℚ', sub: 'bậc 1', w: 180 },
    { y: 165, label: 'ℚ(√2)', sub: 'bậc 2', w: 260 },
    { y: 80, label: 'ℚ(√2, √3)', sub: 'bậc 4', w: 340 },
  ]
  return (
    <Frame>
      {tiers.map((t, i) => (
        <g key={i}>
          <rect x={360 - t.w / 2} y={t.y} width={t.w} height="58" rx="14" fill={i === 0 ? '#fff' : c} opacity={i === 0 ? 1 : 0.85} stroke={ink} strokeWidth="2" className={i === 0 ? undefined : 'anim-pulse'} style={i === 0 ? undefined : { animationDelay: `${i * 0.5}s` }} />
          <text x="360" y={t.y + 27} textAnchor="middle" fontSize="17" fontWeight="800" fill={i === 0 ? ink : '#fff'} style={T}>{t.label}</text>
          <text x="360" y={t.y + 46} textAnchor="middle" fontSize="12" fill={i === 0 ? '#78716c' : '#e0f2fe'} style={T}>{t.sub}</text>
          {i < 2 && (
            <text x="360" y={t.y - 8} textAnchor="middle" fontSize="13" fontWeight="700" fill={c} style={T}>↑ gắn thêm căn bậc hai (×2)</text>
          )}
        </g>
      ))}
      <g style={T} fontSize="13" fill={ink}>
        <text x="80" y="100">Luật sắt của thước – compa:</text>
        <text x="80" y="122" fontWeight="700">mỗi bước dựng hình</text>
        <text x="80" y="142" fontWeight="700">chỉ sinh ra căn bậc hai</text>
        <text x="80" y="170" fontSize="12" fill="#78716c">→ số dựng được phải nằm</text>
        <text x="80" y="190" fontSize="12" fill="#78716c">trên tầng có bậc 2ⁿ</text>
        <text x="80" y="218" fontSize="12" fill="#e11d48">∛2 đòi bậc 3 → không thể!</text>
      </g>
    </Frame>
  )
}

const registry: Record<VisualKind, (c: string) => ReactElement> = {
  numberline, pizza, balance, absquare, machine,
  unitcircle, domino, zeno, tangent, matrix,
  ladder, realline, epsband, sieve, tower,
}

export function Visual({ kind, color }: { kind: VisualKind; color: string }) {
  return registry[kind](color)
}
