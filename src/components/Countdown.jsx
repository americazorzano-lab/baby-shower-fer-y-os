import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { config } from '../config'

/* Calcula el tiempo restante hasta la fecha del evento */
const getTimeLeft = () => {
  const now    = new Date().getTime()
  const target = new Date(config.eventDateTime).getTime()
  const diff   = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }

  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isPast:  false,
  }
}

/* ── Bloque individual de tiempo ── */
const TimeBlock = ({ value, label }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      flex: '1 1 0',
    }}
  >
    <div
      aria-live="polite"
      aria-label={`${value} ${label}`}
      style={{
        background: 'linear-gradient(135deg, var(--honey) 0%, var(--honey-light) 100%)',
        borderRadius: 'var(--radius-sm)',
        minWidth: '64px',
        padding: '14px 8px',
        textAlign: 'center',
        boxShadow: '0 4px 16px rgba(212,160,23,0.35)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Brillo decorativo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '45%',
          background: 'rgba(255,255,255,0.18)',
          borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 6vw, 2rem)',
          color: 'var(--brown-dark)',
          lineHeight: 1,
          display: 'block',
        }}
      >
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.72rem',
        fontWeight: 700,
        color: 'var(--brown)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
      }}
    >
      {label}
    </span>
  </div>
)

const Countdown = () => {
  const [time, setTime]     = useState(getTimeLeft)
  const [ref, isVisible]    = useScrollReveal(0.15)

  useEffect(() => {
    if (time.isPast) return
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [time.isPast])

  return (
    <section
      style={{
        padding: '48px 0',
        background: 'linear-gradient(180deg, #FFF3DC 0%, var(--cream) 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-inner">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Cuenta regresiva</h2>

          {time.isPast ? (
            <p className="section-subtitle">
              🎉 ¡El gran día ya llegó! ¡Que todo esté lleno de amor!
            </p>
          ) : (
            <p className="section-subtitle">
              ¡Faltan solo unos días para celebrar!
            </p>
          )}

          {!time.isPast && (
            <div
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '28px 20px 24px',
                border: '1.5px solid var(--beige)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Etiqueta */}
              <p
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '1.1rem',
                  color: 'var(--honey-dark)',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                🍯 Faltan...
              </p>

              {/* Bloques de tiempo */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                }}
              >
                <TimeBlock value={time.days}    label="Días" />
                <TimeBlock value={time.hours}   label="Horas" />
                <TimeBlock value={time.minutes} label="Min" />
                <TimeBlock value={time.seconds} label="Seg" />
              </div>

              {/* Pie decorativo */}
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: 'var(--brown-light)',
                }}
              >
                para el Baby Shower de{' '}
                <strong style={{ color: 'var(--honey-dark)' }}>
                  {config.parentsNames}
                </strong>{' '}
                🦕
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Countdown
