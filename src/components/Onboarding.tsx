import { useState } from 'react'
import { Sparkles, GraduationCap, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'

interface OnboardingProps {
  onComplete: (level: string) => void
}

const LEVELS = [
  { id: '3eme', label: 'Troisième', sub: 'Brevet' },
  { id: '2nde', label: 'Seconde', sub: 'Lycée' },
  { id: '1ere', label: 'Première', sub: 'Spécialités' },
  { id: 'terminale', label: 'Terminale', sub: 'Objectif Bac' },
]

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const handleNext = () => {
    if (step === 0) setStep(1)
    else if (step === 1 && selectedLevel) {
      onComplete(selectedLevel)
    }
  }

  return (
    <div className="onboarding-page page-enter">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      {/* STEP 0 : WELCOME */}
      {step === 0 && (
        <div className="onboarding-step">
          <div className="onboarding-icon-wrap">
            <Sparkles className="onboarding-hero-icon" size={48} />
          </div>
          <h1 className="onboarding-title">L'excellence<br />à portée de main.</h1>
          <p className="onboarding-desc">
            Bienvenue sur Equatek.<br/>L'application conçue pour maitriser tes cours de sciences et exploser tes notes.
          </p>
          <button className="button button-strong onboarding-btn" onClick={handleNext} type="button">
            Commencer l'expérience <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* STEP 1 : LEVEL SELECT */}
      {step === 1 && (
        <div className="onboarding-step page-enter">
          <div className="onboarding-icon-wrap">
            <GraduationCap className="onboarding-hero-icon" size={48} />
          </div>
          <h1 className="onboarding-title" style={{ fontSize: '1.8rem' }}>En quelle classe es-tu ?</h1>
          <p className="onboarding-desc">
            Personnalise ton parcours pour accéder aux chapitres de ton programme.
          </p>

          <div className="level-grid">
            {LEVELS.map((lvl) => {
              const isActive = selectedLevel === lvl.id
              return (
                <button
                  key={lvl.id}
                  className={`level-card ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedLevel(lvl.id)}
                  type="button"
                >
                  <div className="level-card-text">
                    <span className="level-card-main">{lvl.label}</span>
                    <span className="level-card-sub">{lvl.sub}</span>
                  </div>
                  {isActive && <CheckCircle2 className="level-card-check" size={20} />}
                </button>
              )
            })}
          </div>

          <button
            className="button button-strong onboarding-btn"
            onClick={handleNext}
            disabled={!selectedLevel}
            type="button"
          >
            Accéder aux cours <ChevronRight size={18} />
          </button>
          
          <p className="onboarding-hint">
            Aucun compte requis pour l'instant, ta progression est sauvegardée localement.
          </p>
        </div>
      )}
    </div>
  )
}
