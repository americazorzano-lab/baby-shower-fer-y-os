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

/* Vestido con una hojita, para el estilo de vestimenta en jardín */
const DressIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    {/* Tirantes */}
    <path d="M11 4 L9.5 8 M17 4 L18.5 8" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Corpiño */}
    <path d="M9.5 8 L18.5 8 L17.5 14 L10.5 14 Z" fill="#F5E6A3" stroke="#D4A017" strokeWidth="1.8" strokeLinejoin="round"/>
    {/* Falda acampanada */}
    <path d="M10.5 14 L17.5 14 L22 25 L6 25 Z" fill="#F5E6A3" stroke="#D4A017" strokeWidth="1.8" strokeLinejoin="round"/>
    {/* Cinturón */}
    <path d="M10.5 14 L17.5 14" stroke="#D4A017" strokeWidth="2.4" strokeLinecap="round"/>
    {/* Hojita decorativa */}
    <path d="M19.5 20 C21.5 18.5 23 19 23.5 17.5 C22 17.5 20 18 19.5 20 Z" fill="#7FB069"/>
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
const DetailCard = ({ icon: Icon, label, value, note, isVisible, delay = 0 }) => (
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

    {/* Nota opcional, en letra más pequeña */}
    {note && (
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.74rem',
          color: 'var(--brown-light)',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {note}
      </p>
    )}
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
        {/* El margen reemplaza el que aportaba el subtítulo que se quitó */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
          style={{ marginBottom: '28px' }}
        >
          <h2 className="section-title">Detalles del evento</h2>
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
            icon={DressIcon}
            label="Vestimenta"
            value={config.dressCode}
            note={config.dressCodeNote}
            isVisible={isVisible}
            delay={0.3}
          />
          {/* Cuando la dirección sigue siendo el texto de relleno, se muestra
              solo la ciudad y se remite al mapa (igual que en LocationSection). */}
          <DetailCard
            icon={PinIcon}
            label="Dirección"
            value={
              config.address !== 'Ver ubicación en el mapa'
                ? `${config.address}, ${config.city}`
                : config.city
            }
            note={
              config.address !== 'Ver ubicación en el mapa'
                ? null
                : 'Ve la ubicación exacta en el mapa'
            }
            isVisible={isVisible}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

export default EventDetails
