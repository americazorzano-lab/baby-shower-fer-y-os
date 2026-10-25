import { useState } from 'react'
import { config } from './config'
import Cover           from './components/Cover'
import WelcomeMessage  from './components/WelcomeMessage'
import EventDetails    from './components/EventDetails'
import Countdown       from './components/Countdown'
import LocationSection from './components/LocationSection'
import RSVPSection     from './components/RSVPSection'
import GiftRegistry    from './components/GiftRegistry'
import FloatingDinos   from './components/FloatingDinos'

/* ── Ola decorativa antes del pie ── */
const WaveTop = () => (
  <svg viewBox="0 0 480 50" width="100%" aria-hidden="true" style={{ display: 'block', marginBottom: '-1px' }}>
    <path
      d="M0 35 Q60 10 120 30 Q180 50 240 25 Q300 0 360 28 Q420 50 480 22 L480 50 L0 50 Z"
      fill="var(--cream-dark)"
    />
  </svg>
)

/* ── Pie de página ── */
const Footer = () => (
  <footer
    style={{
      background: 'var(--cream-dark)',
      padding: '32px 20px 48px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}
  >
    {/* Decoración de dinosaurios */}
    <div
      style={{ fontSize: '1.5rem', letterSpacing: '6px', marginBottom: '16px' }}
      aria-hidden="true"
    >
      🦕 🥚 🦖 🥚 🦕
    </div>

    <p
      style={{
        fontFamily: 'var(--font-script)',
        fontSize: 'clamp(1.2rem, 5vw, 1.6rem)',
        color: 'var(--brown-dark)',
        marginBottom: '8px',
      }}
    >
      Con todo el amor del mundo,
    </p>
    <p
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1rem, 4vw, 1.25rem)',
        color: 'var(--honey-dark)',
        marginBottom: '20px',
      }}
    >
      {config.parentsNames}
    </p>

    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        color: 'var(--brown-light)',
        marginTop: '20px',
      }}
    >
      Hecho con 🍯 y mucho amor 🦕
    </p>
  </footer>
)

/* ── App principal ── */
export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setTimeout(() => {
      setIsOpen(true)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 600)
  }

  return (
    <div className="app">
      {/* Fondo decorativo punteado */}
      <div className="honeycomb-bg" aria-hidden="true" />

      {/* Dinosaurios flotantes (siempre visibles) */}
      <FloatingDinos />

      {/* ── PORTADA ── */}
      {!isOpen && <Cover onOpen={handleOpen} />}

      {/* ── INVITACIÓN ── */}
      {isOpen && (
        <div className="invitation-wrapper">
          <WelcomeMessage />
          <EventDetails />
          <Countdown />
          <LocationSection />
          <RSVPSection />
          <GiftRegistry />
          <div style={{ position: 'relative', zIndex: 1, marginTop: '-1px' }}>
            <WaveTop />
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
