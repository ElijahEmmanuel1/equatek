import { useState } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { TriangleRight, Ruler, TrendingUp, Activity, Target as TargetIcon, CheckCircle2, ChevronDown, ChevronRight, BookOpenCheck } from 'lucide-react'
import type { CourseSection, CourseBlock } from '../types'

const ICON_MAP: Record<string, React.ReactNode> = {
  '📐': <TriangleRight size={18} strokeWidth={2.5} />,
  '📏': <Ruler size={18} strokeWidth={2.5} />,
  '📈': <TrendingUp size={18} strokeWidth={2.5} />,
  '〰️': <Activity size={18} strokeWidth={2.5} />,
  '🎯': <TargetIcon size={18} strokeWidth={2.5} />
}

interface CourseViewerProps {
  sections: CourseSection[]
  onMarkRead?: () => void
  isRead?: boolean
}

// Custom KaTeX components to replace react-katex (React 19 compatibility & strict parsing)
function InlineMath({ math }: { math: string }) {
  const html = katex.renderToString(math, { throwOnError: false, displayMode: false })
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

function BlockMath({ math }: { math: string }) {
  const html = katex.renderToString(math, { throwOnError: false, displayMode: true })
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

// ─── Rendu d'un bloc de contenu ───────────────────────────
function renderBlock(block: CourseBlock, idx: number) {
  switch (block.type) {
    case 'text':
      return (
        <div key={idx} className="cv-text">
          {renderText(block.content)}
        </div>
      )

    case 'formula':
      return (
        <div key={idx} className="cv-formula">
          <BlockMath math={block.content} />
        </div>
      )

    case 'table':
      return (
        <div key={idx} className="cv-table-wrap">
          {block.title && <p className="cv-block-title">{block.title}</p>}
          <div className="cv-table-scroll">
            <table className="cv-table">
              {block.headers && (
                <thead>
                  <tr>
                    {block.headers.map((h, i) => (
                      <th key={i}><InlineMath math={h} /></th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {block.rows?.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}><InlineMath math={cell} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'method':
      return (
        <div key={idx} className="cv-method">
          {block.title && <p className="cv-method-title">{block.title}</p>}
          <ol className="cv-steps">
            {block.steps?.map((step, i) => (
              <li key={i} className="cv-step">
                <span className="cv-step-num">{i + 1}</span>
                <span className="cv-step-text">{renderText(step)}</span>
              </li>
            ))}
          </ol>
        </div>
      )

    case 'example':
      return (
        <div key={idx} className="cv-example">
          {block.title && <p className="cv-example-label">{block.title}</p>}
          {block.content && <p className="cv-example-intro">{renderText(block.content)}</p>}
          <div className="cv-example-steps">
            {block.steps?.map((step, i) => (
              <div key={i} className="cv-ex-step">
                <span className="cv-ex-arrow"><ChevronRight size={16} strokeWidth={3} /></span>
                <span className="cv-ex-content">
                  {/* Si le step contient \, c'est du LaTeX */}
                  {step.includes('\\') || step.includes('^') || step.includes('_')
                    ? <InlineMath math={step} />
                    : renderText(step)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )

    case 'warning':
      return (
        <div key={idx} className="cv-warning">
          {block.title && <p className="cv-warning-title">{block.title}</p>}
          <div className="cv-warning-body">{renderText(block.content)}</div>
        </div>
      )

    default:
      return null
  }
}

/** Transforme **gras** et lignes \n en JSX */
function renderText(text: string) {
  return text.split('\n').map((line, li) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    return (
      <span key={li}>
        {parts.map((part, pi) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={pi}>{part.slice(2, -2)}</strong>
            : <span key={pi}>{part}</span>
        )}
        {li < text.split('\n').length - 1 && <br />}
      </span>
    )
  })
}

// ─── Composant principal ──────────────────────────────────
export function CourseViewer({ sections, onMarkRead, isRead }: CourseViewerProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set([sections[0]?.id]) // première section ouverte par défaut
  )

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const expandAll = () => setOpenSections(new Set(sections.map((s) => s.id)))
  const collapseAll = () => setOpenSections(new Set())

  return (
    <div className="course-viewer">
      {/* Barre d'actions */}
      <div className="cv-toolbar">
        <div className="cv-toolbar-left">
          <button type="button" className="cv-ctrl-btn" onClick={expandAll}>
            Tout ouvrir
          </button>
          <button type="button" className="cv-ctrl-btn" onClick={collapseAll}>
            Tout fermer
          </button>
        </div>
        {onMarkRead && (
          <button
            type="button"
            className={`cv-mark-btn ${isRead ? 'cv-mark-btn--done' : ''}`}
            onClick={onMarkRead}
            disabled={isRead}
          >
            {isRead ? <><CheckCircle2 size={16} strokeWidth={3} /> Cours lu</> : 'Marquer comme lu'}
          </button>
        )}
      </div>

      {/* Sections accordion */}
      <div className="cv-sections">
        {sections.map((section, si) => {
          const isOpen = openSections.has(section.id)
          return (
            <article key={section.id} className={`cv-section ${isOpen ? 'cv-section--open' : ''}`}>
              <button
                type="button"
                className="cv-section-head"
                onClick={() => toggle(section.id)}
                aria-expanded={isOpen}
              >
                <span className="cv-section-icon">{ICON_MAP[section.icon] || <TriangleRight size={18} strokeWidth={2.5} />}</span>
                <span className="cv-section-num">
                  {String(si + 1).padStart(2, '0')}
                </span>
                <span className="cv-section-title">{section.title}</span>
                <span className={`cv-section-chevron ${isOpen ? 'cv-section-chevron--open' : ''}`}>
                  <ChevronDown size={18} strokeWidth={3} />
                </span>
              </button>

              {isOpen && (
                <div className="cv-section-body">
                  {section.blocks.map((block, bi) => renderBlock(block, bi))}
                </div>
              )}
            </article>
          )
        })}
      </div>

      {/* Footer */}
      {onMarkRead && !isRead && (
        <div className="cv-footer">
          <button
            type="button"
            className="cv-mark-btn cv-mark-btn--lg"
            onClick={onMarkRead}
          >
            <BookOpenCheck size={18} strokeWidth={3} /> J'ai terminé ce cours
          </button>
        </div>
      )}
    </div>
  )
}
