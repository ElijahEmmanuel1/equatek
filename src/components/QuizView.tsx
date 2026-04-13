import { useState } from 'react'
import { PartyPopper, Dumbbell, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import type { QuizQuestion } from '../types'

interface QuizViewProps {
  questions: QuizQuestion[]
  chapterId: string
  onComplete: (score: number) => void
}

export function QuizView({ questions, onComplete }: QuizViewProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const question = questions[currentIdx]
  const total = questions.length
  const score = done ? Math.round((correct / total) * 100) : 0

  const handleChoice = (idx: number) => {
    if (confirmed) return
    setSelected(idx)
  }

  const handleConfirm = () => {
    if (selected === null) return
    const isCorrect = selected === question.correct
    if (isCorrect) setCorrect((c) => c + 1)
    setConfirmed(true)
  }

  const handleNext = () => {
    if (currentIdx + 1 < total) {
      setCurrentIdx((i) => i + 1)
      setSelected(null)
      setConfirmed(false)
    } else {
      const finalScore = Math.round(((correct + (selected === question.correct ? 1 : 0)) / total) * 100)
      setDone(true)
      onComplete(finalScore)
    }
  }

  if (done) {
    const isgood = score >= 70
    return (
      <div className="quiz-done">
        <span className="quiz-done-emoji">
          {isgood ? <PartyPopper size={48} color="#5cffb4" /> : <Dumbbell size={48} color="#ffd190" />}
        </span>
        <h3>Quiz terminé !</h3>
        <p className="quiz-done-score" style={{ color: isgood ? '#5cffb4' : '#ffd190' }}>
          {correct}/{total} bonnes réponses — {score}%
        </p>
        <p className="quiz-done-msg">
          {isgood
            ? 'Excellent ! Tu maîtrises bien ce chapitre.'
            : 'Relis le cours sur les points manqués et retente le quiz.'}
        </p>
      </div>
    )
  }

  return (
    <div className="quiz-view">
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${((currentIdx) / total) * 100}%` }} />
      </div>
      <p className="quiz-step">Question {currentIdx + 1} / {total}</p>
      <p className="quiz-question">{question.question}</p>
      <div className="quiz-choices">
        {question.choices.map((choice, idx) => {
          let cls = 'quiz-choice'
          if (confirmed) {
            if (idx === question.correct) cls += ' correct'
            else if (idx === selected) cls += ' wrong'
          } else if (idx === selected) {
            cls += ' selected'
          }
          return (
            <button key={idx} className={cls} onClick={() => handleChoice(idx)} type="button">
              <span className="choice-letter">{String.fromCharCode(65 + idx)}</span>
              {choice}
            </button>
          )
        })}
      </div>
      {confirmed && (
        <div className="quiz-explanation">
          <strong>
            {selected === question.correct ? (
              <><CheckCircle2 size={16} strokeWidth={3} className="inline-icon" /> Correct !</>
            ) : (
              <><XCircle size={16} strokeWidth={3} className="inline-icon" /> Incorrect</>
            )}
          </strong>
          <p>{question.explanation}</p>
        </div>
      )}
      {!confirmed ? (
        <button
          className="quiz-action button button-strong"
          onClick={handleConfirm}
          disabled={selected === null}
          type="button"
        >
          Valider
        </button>
      ) : (
        <button className="quiz-action button button-strong" onClick={handleNext} type="button">
          {currentIdx + 1 < total ? <>Question suivante <ArrowRight size={16} strokeWidth={3} /></> : 'Voir le résultat'}
        </button>
      )}
    </div>
  )
}
