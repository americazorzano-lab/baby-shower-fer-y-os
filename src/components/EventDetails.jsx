import { useScrollReveal } from '../hooks/useScrollReveal'
import { config, getFormattedDate } from '../config'

/* ── Íconos SVG para cada tarjeta ── */
const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="2" y="5" width="24" height="21" rx="5" fill="#F5E6A3" stroke="#D4A017" strokeWidth="2"/>
    <path d="M2 11h24" stroke="#D4A017" strokeWidth="2"/>
    <rect x="8"  y="3" width="3" height="5" rx="1.5" fill="#D4A017"/>
    <rect x="17" y="3" width="3" height="5" rx="1.5" fill="#D4A017"/>
    <circle cx="9"  cy="17" r="1.5" fill="#D4A017"/>
    <circle cx="14" cy="17" r="1.5" fill="#D4A017"/>
    <circle cx="19" cy="17" r="1.5" fill="#D4A017"/>
    <circle cx="9"  cy="22" r="1.5" fill="#D4A017"/>
    <circle cx="14" cy="22" r="1.5" fill="#D4A017"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="12" fill="#F5E6A3" stroke="#D4A017" strokeWidth="2"/>
    <path d="M14 8v6l4 3" stroke="#D4A017" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="14" r="1.5" fill="#D4A017"/>
  </svg>
)

const HouseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M3 13 L14 3 L25 13 L25 26 L3 26 Z" fill="#F5E6A3" stroke="#D4A017" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="10" y="17" width="8" height="9" rx="2" fill="#D4A017"/>
    <rect x="16" y="8" width="6" height="6" rx="1" fill="#F5E6A3" stroke="#D4A017" strokeWidth="1.5"/>
  </svg>
)

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 3C10.13 3 7 6.13 7 10c0 6 7 15 7 15s7-9 7-15c0-3.87-3.13-7-7-7Z"
      fill="#F5E6A3"
      stroke="#D4A017"
      strokeWidth="2"
    />
    <circle cx="14" cy="10" r="3" fill="#D4A017"/>
  </svg>
)

/* ── Tarjeta individual ── */
const DetailCard = ({ icon: Icon, label, value, isVisible, delay = 0 }) => (
  <div
    style={{
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      padding: '18px 16px',
      border: '1.5px solid var(--beige)',
      boxShadow: 'var(--shadow-soft)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'center',
      /* Animación de reveal con retraso escalonado */
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}
  >
    <div
      style={{
        width: '52px',
        height: '52px',
        background: 'var(--cream-dark)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon />
    </div>
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.72rem',
        fontWeight: 700,
        color: 'var(--honey-dark)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        margin: 0,
      }}
    >
      {label}
    </p>
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--brown-dark)',
        lineHeight: 1.45,
        margin: 0,
      }}
    >
      {value}
    </p>
  </div>
)

const EventDetails = () => {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section
      style={{
        padding: '48px 0',
        background: 'var(--cream)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-inner">
        {/* Encabezado con reveal */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Detalles del evento</h2>
          <p className="section-subtitle">¡Reserva la fecha en tu corazón! 🗓️</p>
        </div>

        {/* Grid 2 × 2 — cada tarjeta tiene su propio delay */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
          }}
        >
          <DetailCard
            icon={CalendarIcon}
            label="Fecha"
            value={getFormattedDate()}
            isVisible={isVisible}
            delay={0.1}
          />
          <DetailCard
            icon={ClockIcon}
            label="Hora"
            value={config.eventTimeDisplay}
            isVisible={isVisible}
            delay={0.2}
          />
          <DetailCard
            icon={HouseIcon}
            label="Lugar"
            value={config.venue}
            isVisible={isVisible}
            delay={0.3}
          />
          <DetailCard
            icon={PinIcon}
            label="Dirección"
            value={`${config.address}, ${config.city}`}
            isVisible={isVisible}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

export default EventDetails
