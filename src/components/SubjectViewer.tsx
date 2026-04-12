import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import type { EquatekSubject, SubjectQuestion } from '../subjects'
import { useState } from 'react'

interface SubjectViewerProps {
  subject: EquatekSubject
  onClose: () => void
}

/* Render a string that may contain $inline$ or $$block$$ math */
function renderText(text: string) {
  // Split on $...$ for inline math (not $$...$$)
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const dollarIdx = remaining.indexOf('$')
    if (dollarIdx === -1) {
      parts.push(<span key={key++}>{remaining}</span>)
      break
    }
    if (dollarIdx > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, dollarIdx)}</span>)
    }
    remaining = remaining.slice(dollarIdx + 1)
    const endIdx = remaining.indexOf('$')
    if (endIdx === -1) {
      parts.push(<span key={key++}>${remaining}</span>)
      remaining = ''
    } else {
      const math = remaining.slice(0, endIdx)
      parts.push(
        <InlineMath key={key++} math={math} />
      )
      remaining = remaining.slice(endIdx + 1)
    }
  }
  return <>{parts}</>
}

function QuestionItem({ q }: { q: SubjectQuestion }) {
  return (
    <div className="sq-question">
      <div className="sq-question-num">{q.num}</div>
      <div className="sq-question-body">
        <div className="sq-question-text">{renderText(q.text)}</div>
        {q.sub && (
          <div className="sq-question-sub">{renderText(q.sub)}</div>
        )}
        {q.highlight && (
          <div className="sq-highlight">
            <BlockMath math={q.highlight} />
          </div>
        )}
      </div>
    </div>
  )
}

export function SubjectViewer({ subject, onClose }: SubjectViewerProps) {
  const [openExs, setOpenExs] = useState<Set<string>>(
    new Set(subject.exercises.map((e) => e.id))
  )

  const toggleEx = (id: string) => {
    setOpenExs((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="subject-viewer">
      {/* Header */}
      <div className="subject-header">
        <button className="back-btn" onClick={onClose} type="button">
          ← Retour
        </button>
        <div className="subject-header-info">
          <div className="subject-badge-row">
            <span className="subject-badge">Equatek</span>
            <span className="subject-badge subject-badge--white">
              Épreuve Blanche — Sujet {subject.id}
            </span>
          </div>
          <h2 className="subject-viewer-title">{subject.title}</h2>
          <p className="subject-meta">
            Spécialité Mathématiques &amp; Maths Expertes · {subject.year} ·{' '}
            <strong>Durée : {subject.duration}</strong>
          </p>
        </div>
      </div>

      {/* Notice */}
      <div className="subject-notice">
        <span className="subject-notice-label">📋 Consignes aux candidats</span>
        <p>{subject.notice}</p>
      </div>

      {/* Exercises */}
      <div className="subject-exercises">
        {subject.exercises.map((ex) => {
          const open = openExs.has(ex.id)
          return (
            <article key={ex.id} className="subject-ex" style={{ '--ex-color': ex.color } as React.CSSProperties}>
              {/* Exercise header */}
              <button
                className="subject-ex-head"
                type="button"
                onClick={() => toggleEx(ex.id)}
              >
                <div className="subject-ex-label">
                  <span className="subject-ex-num" style={{ color: ex.color }}>
                    Exercice {ex.number}
                  </span>
                  {ex.expert && (
                    <span className="subject-expert-badge">Maths Expertes</span>
                  )}
                  <span className="subject-ex-pts">{ex.points} pts</span>
                </div>
                <h3 className="subject-ex-title" style={{ color: ex.color }}>
                  {ex.title}
                </h3>
                <span className="subject-ex-chevron">{open ? '▲' : '▼'}</span>
              </button>

              {open && (
                <div className="subject-ex-body">
                  {ex.intro && (
                    <div className="subject-ex-intro">{renderText(ex.intro)}</div>
                  )}

                  {/* The integral formula for ex1 */}
                  {ex.id === 'ex1' && (
                    <div className="sq-highlight" style={{ margin: '12px 0' }}>
                      <BlockMath math={String.raw`I_n = \int_{0}^{1} \frac{x^n}{1+x^2} \, dx`} />
                    </div>
                  )}

                  {ex.parts.map((part, pi) => (
                    <div key={pi} className="subject-part">
                      {part.title && (
                        <h4 className="subject-part-title">{renderText(part.title)}</h4>
                      )}
                      {part.intro && (
                        <p className="subject-part-intro">{renderText(part.intro)}</p>
                      )}
                      <div className="subject-questions">
                        {part.questions.map((q) => (
                          <QuestionItem key={q.num} q={q} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </div>

      {/* Footer */}
      <div className="subject-footer">
        <span>EquaTeK · Spécialité Mathématiques {subject.year}</span>
        <span>Toute reproduction interdite</span>
      </div>
    </div>
  )
}
