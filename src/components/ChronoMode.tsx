import { useState, useEffect, useRef } from 'react'
import { Timer, Play, Pause, RotateCcw, AlertTriangle } from 'lucide-react'

interface ChronoModeProps {
  duration: number // minutes
  chapterTitle: string
  onComplete: () => void
}

export function ChronoMode({ duration, chapterTitle, onComplete }: ChronoModeProps) {
  const totalSeconds = duration * 60
  const [seconds, setSeconds] = useState(totalSeconds)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current!)
            setRunning(false)
            setFinished(true)
            onComplete()
            return 0
          }
          return s - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running, seconds, onComplete])

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  const progress = ((totalSeconds - seconds) / totalSeconds) * 100
  const urgent = seconds < 60 && seconds > 0

  const circumference = 2 * Math.PI * 90
  const strokeOffset = ((100 - progress) / 100) * circumference

  if (finished) {
    return (
      <div className="chrono-done">
        <span className="chrono-done-emoji"><Timer size={48} strokeWidth={2.5} color="#ffd190" /></span>
        <h3>Temps écoulé !</h3>
        <p>Sujet terminé — {duration} min de simulation Bac.</p>
        <p className="chrono-done-tip">Corrige maintenant ta copie avec le barème officiel.</p>
        <button className="button button-strong" onClick={onComplete} type="button">
          Valider la session
        </button>
      </div>
    )
  }

  return (
    <div className="chrono-view">
      <p className="chrono-title">Simulation Bac — {chapterTitle}</p>
      <p className="chrono-subtitle">{duration} minutes · Conditions réelles</p>

      <div className="chrono-ring-wrap">
        <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <circle
            cx="100" cy="100" r="90"
            fill="none"
            stroke={urgent ? '#ff6b6b' : '#ffd190'}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease' }}
          />
        </svg>
        <div className="chrono-center">
          <span className="chrono-time" style={{ color: urgent ? '#ff6b6b' : '#fff8f0' }}>
            {mins}:{secs}
          </span>
          <span className="chrono-percent">{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="chrono-controls">
        {!running ? (
          <button className="button button-strong" onClick={() => setRunning(true)} type="button">
            <Play size={16} strokeWidth={3} /> {seconds === totalSeconds ? 'Démarrer' : 'Reprendre'}
          </button>
        ) : (
          <button className="button button-soft" onClick={() => setRunning(false)} type="button">
            <Pause size={16} strokeWidth={3} /> Pause
          </button>
        )}
        <button
          className="button button-soft"
          onClick={() => { setSeconds(totalSeconds); setRunning(false) }}
          type="button"
        >
          <RotateCcw size={16} strokeWidth={3} /> Reset
        </button>
      </div>

      {urgent && (
        <p className="chrono-urgent"><AlertTriangle size={16} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> Moins d'une minute — terminez vos phrases !</p>
      )}
    </div>
  )
}
