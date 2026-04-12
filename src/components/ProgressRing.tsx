interface ProgressRingProps {
  value: number // 0-100
  size?: number
  stroke?: number
  label?: string
}

export function ProgressRing({ value, size = 64, stroke = 5, label }: ProgressRingProps) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const filled = ((100 - value) / 100) * circ
  const color = value === 100 ? '#5cffb4' : value >= 50 ? '#ffd190' : '#6f6fa8'

  return (
    <span className="progress-ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={filled}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.4s ease' }}
        />
      </svg>
      <span className="progress-ring-label" style={{ color }}>
        {label ?? `${value}%`}
      </span>
    </span>
  )
}
