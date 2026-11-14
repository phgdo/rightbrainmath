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

function stretch(c: string): ReactElement {
  const x = (v: number) => 80 + v * 68
  const pts = [1, 2, 4, 8]
  return (
    <Frame>
      <text x="360" y="50" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Nhân = kéo cả trục phóng to
      </text>
      <line x1="60" y1="220" x2="660" y2="220" stroke={ink} strokeWidth="2" />
      {pts.map((v, i) => (
        <g key={v}>
          <circle cx={x(v)} cy="220" r="7" fill={c} />
          <text x={x(v)} y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink} style={T}>{v}</text>
          {i < pts.length - 1 && (
            <path
              d={`M ${x(v)} 180 Q ${(x(v) + x(pts[i + 1])) / 2} 130 ${x(pts[i + 1])} 180`}
              fill="none"
              stroke={c}
              strokeWidth="2.5"
              className="anim-dash"
            />
          )}
        </g>
      ))}
      <text x={x(2) - 6} y="140" fontSize="13" fill={c} style={T}>×2</text>
      <text x={x(4) - 6} y="140" fontSize="13" fill={c} style={T}>×2</text>
      <text x={x(8) - 6} y="140" fontSize="13" fill={c} style={T}>×2</text>
      <text x="360" y="310" textAnchor="middle" fontSize="15" fill={ink} style={T}>
        2 × 2 × 2 = 2³ = 8 — lũy thừa là đếm số lần kéo trục
      </text>
    </Frame>
  )
}

function tripercent(c: string): ReactElement {
  return (
    <Frame>
      <text x="360" y="44" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Tam giác phần trăm — che góc nào, giải góc ấy
      </text>
      <polygon points="360,70 170,280 550,280" fill={c} opacity="0.12" stroke={c} strokeWidth="2.5" />
      <g style={T}>
        <rect x="285" y="52" width="150" height="42" rx="12" fill={c} />
        <text x="360" y="79" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff">PHẦN</text>
        <rect x="90" y="292" width="160" height="42" rx="12" fill="#fff" stroke={ink} strokeWidth="1.5" />
        <text x="170" y="319" textAnchor="middle" fontSize="16" fontWeight="800" fill={ink}>TỔNG</text>
        <rect x="470" y="292" width="160" height="42" rx="12" fill="#fff" stroke={ink} strokeWidth="1.5" />
        <text x="550" y="319" textAnchor="middle" fontSize="16" fontWeight="800" fill={ink}>TỈ SỐ</text>
      </g>
      <text x="235" y="160" textAnchor="middle" fontSize="14" fill={ink} style={T} transform="rotate(-45 235 160)">Phần = Tổng × Tỉ</text>
      <text x="485" y="160" textAnchor="middle" fontSize="14" fill={ink} style={T} transform="rotate(45 485 160)">Tỉ = Phần ÷ Tổng</text>
      <text x="360" y="262" textAnchor="middle" fontSize="14" fill={ink} style={T}>Tổng = Phần ÷ Tỉ</text>
    </Frame>
  )
}

function cross(c: string): ReactElement {
  return (
    <Frame>
      <text x="360" y="50" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Nhân chéo kiểm tra tỉ lệ thức
      </text>
      <text x="240" y="190" textAnchor="middle" fontSize="34" fontWeight="800" fill={ink} style={T}>3/12</text>
      <text x="360" y="190" textAnchor="middle" fontSize="34" fontWeight="800" fill={ink} style={T}>=</text>
      <text x="490" y="190" textAnchor="middle" fontSize="34" fontWeight="800" fill={ink} style={T}>5/x</text>
      <line x1="272" y1="150" x2="458" y2="232" stroke={c} strokeWidth="3" className="anim-dash" />
      <line x1="272" y1="232" x2="458" y2="150" stroke={c} strokeWidth="3" className="anim-dash" />
      <text x="360" y="120" textAnchor="middle" fontSize="15" fontWeight="700" fill={c} style={T}>3 · x = 12 · 5</text>
      <text x="360" y="290" textAnchor="middle" fontSize="16" fill={ink} style={T}>
        x = 60 / 3 = <tspan fontWeight="800" fill={c}>20</tspan> — dấu X chính là cách nhớ
      </text>
    </Frame>
  )
}

function translate(c: string): ReactElement {
  return (
    <Frame>
      <rect x="50" y="90" width="270" height="150" rx="16" fill="#fff" stroke={ink} strokeWidth="2" />
      <text x="185" y="130" textAnchor="middle" fontSize="15" fontWeight="800" fill={ink} style={T}>ĐỀ BÀI (câu chuyện)</text>
      <text x="185" y="165" textAnchor="middle" fontSize="13" fill="#78716c" style={T}>“Lan nhiều hơn Hùng 5 viên,”</text>
      <text x="185" y="190" textAnchor="middle" fontSize="13" fill="#78716c" style={T}>“cả hai có 27 viên”</text>
      <line x1="330" y1="165" x2="390" y2="165" stroke={c} strokeWidth="3" className="anim-dash" />
      <polygon points="400,165 386,157 386,173" fill={c} />
      <text x="360" y="140" textAnchor="middle" fontSize="13" fontWeight="700" fill={c} style={T}>dịch</text>
      <rect x="410" y="90" width="260" height="150" rx="16" fill={c} opacity="0.12" stroke={c} strokeWidth="2" />
      <text x="540" y="130" textAnchor="middle" fontSize="15" fontWeight="800" fill={ink} style={T}>PHƯƠNG TRÌNH</text>
      <text x="540" y="170" textAnchor="middle" fontSize="15" fontWeight="700" fill={ink} style={T}>Lan = Hùng + 5</text>
      <text x="540" y="200" textAnchor="middle" fontSize="15" fontWeight="700" fill={ink} style={T}>Lan + Hùng = 27</text>
      <g style={T} fontSize="14" fill={ink}>
        <text x="120" y="300">“tổng / hơn” → +</text>
        <text x="300" y="300">“kém” → −</text>
        <text x="390" y="300">“gấp” → ×</text>
        <text x="490" y="300">“bằng” → =</text>
      </g>
    </Frame>
  )
}

function parabola(c: string): ReactElement {
  return (
    <Frame>
      <line x1="70" y1="240" x2="650" y2="240" stroke={faint} strokeWidth="1.5" />
      <line x1="200" y1="60" x2="200" y2="320" stroke={faint} strokeWidth="1.5" />
      <path d="M 120 90 Q 360 470 600 90" fill="none" stroke={c} strokeWidth="3" />
      <line x1="160" y1="135" x2="560" y2="135" stroke={c} strokeWidth="1.5" strokeDasharray="6 5" />
      <circle cx="360" cy="279" r="7" fill={c} />
      <circle cx="165" cy="240" r="6" fill="#e11d48" />
      <circle cx="555" cy="240" r="6" fill="#e11d48" />
      <g style={T} fontSize="13" fill={ink}>
        <text x="378" y="284" fontWeight="700" fill={c}>đỉnh: x = −b/2a</text>
        <text x="120" y="264" fill="#e11d48">nghiệm 1</text>
        <text x="530" y="264" fill="#e11d48">nghiệm 2</text>
        <text x="610" y="110">a &gt; 0: bát úp</text>
        <text x="240" y="320" fontSize="12" fill="#78716c">Δ &gt; 0: chạm đất 2 chỗ — Δ = 0: 1 chỗ — Δ &lt; 0: bay qua</text>
      </g>
    </Frame>
  )
}

function similar(c: string): ReactElement {
  return (
    <Frame>
      <polygon points="90,280 210,280 90,200" fill={c} opacity="0.25" stroke={c} strokeWidth="2.5" />
      <polygon points="330,280 570,280 330,120" fill="#f59e0b" opacity="0.25" stroke="#d97706" strokeWidth="2.5" />
      <g style={T} fontSize="13" fill={ink}>
        <text x="118" y="300">2</text>
        <text x="60" y="245">3</text>
        <text x="420" y="300">4</text>
        <text x="296" y="205">6</text>
      </g>
      <line x1="235" y1="235" x2="305" y2="235" stroke={ink} strokeWidth="2" className="anim-dash" />
      <polygon points="315,235 301,228 301,242" fill={ink} />
      <text x="270" y="222" textAnchor="middle" fontSize="14" fontWeight="800" fill={c} style={T}>×2</text>
      <text x="360" y="330" textAnchor="middle" fontSize="14" fill={ink} style={T}>
        Góc giữ nguyên — mọi cạnh cùng phình ×2: tam giác ĐỒNG DẠNG
      </text>
    </Frame>
  )
}

function slope(c: string): ReactElement {
  return (
    <Frame>
      <line x1="80" y1="290" x2="640" y2="290" stroke={faint} strokeWidth="1.5" />
      <line x1="140" y1="60" x2="140" y2="320" stroke={faint} strokeWidth="1.5" />
      <line x1="100" y1="260" x2="600" y2="60" stroke={c} strokeWidth="3" />
      <path d="M 300 176 L 380 176 L 380 105 Z" fill="none" stroke="#e11d48" strokeWidth="2" />
      <g style={T} fontSize="13">
        <text x="306" y="196" fill="#2563eb">đi phải 1</text>
        <text x="388" y="140" fill="#e11d48">lên m = 3</text>
        <text x="96" y="256" fill={ink}>b (chỗ khởi hành)</text>
        <text x="560" y="44" fontWeight="700" fill={c}>y = mx + b</text>
      </g>
      <circle cx="140" cy="230" r="6" fill={c} />
    </Frame>
  )
}

function quantify(_c: string): ReactElement {
  const dots = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <Frame>
      <rect x="60" y="70" width="280" height="200" rx="16" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
      <text x="200" y="110" textAnchor="middle" fontSize="17" fontWeight="800" fill="#047857" style={T}>∀ — với mọi</text>
      {dots.map((i) => (
        <circle key={i} cx={100 + i * 28} cy="160" r="10" fill="#059669" />
      ))}
      <text x="200" y="210" textAnchor="middle" fontSize="13" fill="#047857" style={T}>phải đúng với TẤT CẢ — 1 sai là gãy</text>
      <rect x="380" y="70" width="280" height="200" rx="16" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <text x="520" y="110" textAnchor="middle" fontSize="17" fontWeight="800" fill="#1d4ed8" style={T}>∃ — tồn tại</text>
      {dots.map((i) => (
        <circle key={i} cx={420 + i * 28} cy="160" r="10" fill="#cbd5e1" />
      ))}
      <circle cx={420 + 3 * 28} cy="160" r="14" fill="none" stroke="#2563eb" strokeWidth="3" className="anim-pulse" />
      <circle cx={420 + 3 * 28} cy="160" r="10" fill="#2563eb" />
      <text x="520" y="210" textAnchor="middle" fontSize="13" fill="#1d4ed8" style={T}>chỉ cần MỘT — tìm được 1 là thắng</text>
      <text x="360" y="320" textAnchor="middle" fontSize="14" fill={ink} style={T}>Phủ định: đảo cờ ∀ ↔ ∃ và phủ định mệnh đề</text>
    </Frame>
  )
}

function extrema(c: string): ReactElement {
  return (
    <Frame>
      <path d="M 90 300 C 180 120 260 100 340 190 S 460 330 560 90" fill="none" stroke={c} strokeWidth="3" />
      <line x1="255" y1="106" x2="425" y2="106" stroke={ink} strokeWidth="1.5" strokeDasharray="6 5" />
      <line x1="330" y1="272" x2="500" y2="272" stroke={ink} strokeWidth="1.5" strokeDasharray="6 5" />
      <circle cx="340" cy="190" r="7" fill={c} />
      <circle cx="415" cy="272" r="7" fill="#e11d48" />
      <g style={T} fontSize="13" fill={ink}>
        <text x="200" y="86" fontWeight="700" fill={c}>đỉnh đồi: f′ = 0, trái + phải −</text>
        <text x="470" y="308" fontWeight="700" fill="#e11d48">đáy trũng: f′ = 0, trái − phải +</text>
        <text x="90" y="340" fontSize="12" fill="#78716c">Săn cực trị = giải f′(x) = 0, rồi phân loại bằng dấu hai bên</text>
      </g>
    </Frame>
  )
}

function riemann(c: string): ReactElement {
  const bars = [38, 62, 88, 116, 146, 178]
  return (
    <Frame>
      <line x1="90" y1="300" x2="640" y2="300" stroke={faint} strokeWidth="1.5" />
      <line x1="90" y1="300" x2="90" y2="70" stroke={faint} strokeWidth="1.5" />
      <path d="M 90 300 Q 400 180 640 60" fill="none" stroke={c} strokeWidth="3" />
      {bars.map((h, i) => (
        <rect key={i} x={110 + i * 85} y={300 - h} width="78" height={h} fill={c} opacity="0.28" stroke={c} strokeWidth="1" />
      ))}
      <g style={T} fontSize="13" fill={ink}>
        <text x="470" y="120" fontWeight="700" fill={c}>diện tích dưới đường cong</text>
        <text x="110" y="336">cắt dải mảnh → cộng dồn</text>
        <text x="330" y="336" fontSize="12" fill="#78716c">cắt vô hạn dải = tích phân ∫ v dt = quãng đường</text>
      </g>
    </Frame>
  )
}

function basis(c: string): ReactElement {
  const ox = 200, oy = 180, s = 42
  const P = (x: number, y: number) => `${ox + x * s},${oy - y * s}`
  return (
    <Frame>
      <line x1="60" y1={oy} x2="380" y2={oy} stroke={faint} strokeWidth="1.5" />
      <line x1={ox} y1="60" x2={ox} y2="320" stroke={faint} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox + s} y2={oy} stroke="#2563eb" strokeWidth="3" />
      <line x1={ox} y1={oy} x2={ox} y2={oy - s} stroke="#e11d48" strokeWidth="3" />
      <text x={ox + 44} y={oy + 20} fontSize="13" fontWeight="700" fill="#2563eb" style={T}>e₁ = (1, 0)</text>
      <text x={ox + 10} y={oy - s - 10} fontSize="13" fontWeight="700" fill="#e11d48" style={T}>e₂ = (0, 1)</text>
      <line x1={ox} y1={oy} x2={ox + 3 * s} y2={oy - 2 * s} stroke={c} strokeWidth="3" />
      <polygon points={`${P(0, 0)} ${P(3, 0)} ${P(3, 2)} ${P(0, 2)}`} fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x={ox + 3 * s + 12} y={oy - 2 * s} fontSize="14" fontWeight="700" fill={c} style={T}>v = 3e₁ + 2e₂</text>
      <g style={T} fontSize="13" fill={ink}>
        <text x="480" y="120">2 nguyên liệu gốc</text>
        <text x="480" y="146" fontWeight="700">pha được MỌI vector</text>
        <text x="480" y="184" fontSize="12" fill="#78716c">đủ mà không thừa = độc lập</text>
        <text x="480" y="206" fontSize="12" fill="#78716c">đếm nguyên liệu = đếm chiều</text>
      </g>
    </Frame>
  )
}

function eigen(_c: string): ReactElement {
  const ox = 220, oy = 190, s = 50
  return (
    <Frame>
      <line x1="70" y1={oy} x2="400" y2={oy} stroke={faint} strokeWidth="1.5" />
      <line x1={ox} y1="70" x2={ox} y2="320" stroke={faint} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox + s} y2={oy - s} stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6 4" />
      <line x1={ox} y1={oy} x2={ox + 2 * s} y2={oy - 2 * s} stroke="#2563eb" strokeWidth="3" />
      <line x1={ox} y1={oy} x2={ox + s} y2={oy} stroke="#d97706" strokeWidth="2.5" strokeDasharray="6 4" />
      <line x1={ox} y1={oy} x2={ox + s} y2={oy - 2 * s} stroke="#d97706" strokeWidth="3" />
      <g style={T} fontSize="13">
        <text x={ox + 2 * s + 10} y={oy - 2 * s - 6} fill="#2563eb" fontWeight="700">chỉ dài ×2 — eigenvector</text>
        <text x={ox + s + 12} y={oy - 2 * s + 20} fill="#d97706" fontWeight="700">bị xoay lệch — thường</text>
      </g>
      <g style={T} fontSize="13" fill={ink}>
        <text x="500" y="130">A·v = λv</text>
        <text x="500" y="158" fontSize="12" fill="#78716c">vào đúng hướng bất biến,</text>
        <text x="500" y="178" fontSize="12" fill="#78716c">chỉ bị kéo dài λ lần</text>
        <text x="500" y="216" fontSize="12" fill="#78716c">PageRank, nén dữ liệu,</text>
        <text x="500" y="236" fontSize="12" fill="#78716c">dao động — đều săn hướng này</text>
      </g>
    </Frame>
  )
}

function clock(c: string): ReactElement {
  const cx = 230, cy = 190, r = 120
  const pos = (h: number) => {
    const a = (h % 12) * 30 - 90
    return { x: cx + r * 0.82 * Math.cos((a * Math.PI) / 180), y: cy + r * 0.82 * Math.sin((a * Math.PI) / 180) }
  }
  const from = pos(9), to = pos(1)
  return (
    <Frame>
      <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={ink} strokeWidth="2" />
      {Array.from({ length: 12 }, (_, h) => {
        const p = pos(h === 0 ? 12 : h)
        return (
          <text key={h} x={p.x} y={p.y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill={h === 9 || h === 1 ? c : ink} style={T}>
            {h === 0 ? 12 : h}
          </text>
        )
      })}
      <path
        d={`M ${from.x} ${from.y} A ${r * 0.82} ${r * 0.82} 0 0 1 ${to.x} ${to.y}`}
        fill="none"
        stroke={c}
        strokeWidth="3"
        className="anim-dash"
      />
      <text x="490" y="130" fontSize="16" fontWeight="800" fill={ink} style={T}>9 + 4 = 1 (mod 12)</text>
      <text x="490" y="164" fontSize="13" fill="#78716c" style={T}>đi qua 12 thì vòng lại</text>
      <text x="490" y="196" fontSize="13" fill="#78716c" style={T}>trung hòa: +0 giờ</text>
      <text x="490" y="222" fontSize="13" fill="#78716c" style={T}>nghịch đảo của 4 là 8 (4+8 ≡ 0)</text>
      <text x="490" y="252" fontSize="14" fontWeight="700" fill={c} style={T}>→ nhóm Z₁₂</text>
    </Frame>
  )
}

function donut(c: string): ReactElement {
  return (
    <Frame>
      <circle cx="140" cy="160" r="75" fill={c} opacity="0.22" stroke={c} strokeWidth="2.5" />
      <text x="140" y="270" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink} style={T}>quả bóng — 0 lỗ</text>
      <circle cx="360" cy="160" r="75" fill="#f59e0b" opacity="0.28" stroke="#d97706" strokeWidth="2.5" />
      <circle cx="360" cy="160" r="30" fill="#fff" stroke="#d97706" strokeWidth="2.5" />
      <text x="360" y="270" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink} style={T}>donut / cốc — 1 lỗ</text>
      <ellipse cx="590" cy="160" rx="80" ry="55" fill="#e11d48" opacity="0.22" stroke="#e11d48" strokeWidth="2.5" />
      <circle cx="560" cy="160" r="17" fill="#fff" stroke="#e11d48" strokeWidth="2.5" />
      <circle cx="622" cy="160" r="17" fill="#fff" stroke="#e11d48" strokeWidth="2.5" />
      <text x="590" y="270" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink} style={T}>cà vạt — 2 lỗ</text>
      <text x="360" y="320" textAnchor="middle" fontSize="14" fill={ink} style={T}>
        Co giãn được, xé là mất — số lỗ là “loài” không thể đổi
      </text>
    </Frame>
  )
}

function permute(c: string): ReactElement {
  const rows = ['A B C', 'A C B', 'B A C', 'B C A', 'C A B', 'C B A']
  return (
    <Frame>
      <text x="360" y="50" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        Xếp 3 vật thành hàng: 3 × 2 × 1 = 3! = 6 cách
      </text>
      {rows.map((r, i) => {
        const x = 150 + (i % 2) * 230
        const y = 95 + Math.floor(i / 2) * 70
        return (
          <g key={r}>
            <rect x={x} y={y} width="180" height="52" rx="12" fill={i === 0 ? c : '#fff'} opacity={i === 0 ? 0.9 : 1} stroke={i === 0 ? c : faint} strokeWidth="1.5" className={i === 0 ? 'anim-pulse' : undefined} />
            <text x={x + 90} y={y + 33} textAnchor="middle" fontSize="18" fontWeight="800" letterSpacing="6" fill={i === 0 ? '#fff' : ink} style={T}>
              {r}
            </text>
          </g>
        )
      })}
      <text x="360" y="330" textAnchor="middle" fontSize="14" fill={ink} style={T}>
        Quan tâm thứ tự → hoán vị. Bỏ thứ tự → chia bớt k!
      </text>
    </Frame>
  )
}

function distribute(c: string): ReactElement {
  return (
    <Frame>
      <text x="360" y="44" textAnchor="middle" fontSize="17" fontWeight="700" fill={ink} style={T}>
        3 × (b + c) — cắt dọc tấm sàn thành hai mảnh
      </text>
      <rect x="150" y="80" width="120" height="160" fill={c} opacity="0.3" stroke={ink} />
      <rect x="270" y="80" width="300" height="160" fill="#f59e0b" opacity="0.3" stroke={ink} />
      <text x="210" y="170" textAnchor="middle" fontSize="18" fontWeight="800" fill={ink} style={T}>3 × b</text>
      <text x="420" y="170" textAnchor="middle" fontSize="18" fontWeight="800" fill={ink} style={T}>3 × c</text>
      <text x="210" y="270" textAnchor="middle" fontSize="14" fill={ink} style={T}>b</text>
      <text x="420" y="270" textAnchor="middle" fontSize="14" fill={ink} style={T}>c</text>
      <text x="128" y="165" textAnchor="end" fontSize="14" fill={ink} style={T}>3</text>
      <line x1="150" y1="285" x2="270" y2="285" stroke={faint} strokeWidth="1.5" />
      <line x1="270" y1="285" x2="570" y2="285" stroke={faint} strokeWidth="1.5" />
      <text x="360" y="320" textAnchor="middle" fontSize="15" fill={ink} style={T}>
        3(b + c) = 3b + 3c — nhân “rắc” vào từng số hạng, tổng không đổi
      </text>
    </Frame>
  )
}

const registry: Record<VisualKind, (c: string) => ReactElement> = {
  numberline, pizza, balance, absquare, machine,
  unitcircle, domino, zeno, tangent, matrix,
  ladder, realline, epsband, sieve, tower,
  stretch, tripercent, cross, translate, parabola,
  similar, slope, quantify, extrema, riemann,
  basis, eigen, clock, donut, permute, distribute,
}

export function Visual({ kind, color }: { kind: VisualKind; color: string }) {
  return registry[kind](color)
}
