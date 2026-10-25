import { useScrollReveal } from '../hooks/useScrollReveal'
import { config } from '../config'
import DinoIllustration from './DinoIllustration'

/* Divisor estilo panal SVG */
const HoneycombDivider = () => (
  <svg
    viewBox="0 0 240 32"
    width="240"
    aria-hidden="true"
    style={{ display: 'block', margin: '0 auto' }}
  >
    <path
      d="M20 16 Q60 4 120 16 Q180 28 220 16"
      stroke="#D4A017"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="120" cy="16" r="5.5" fill="#D4A017" />
    <circle cx="90"  cy="12" r="3.5" fill="#F5C842" />
    <circle cx="150" cy="20" r="3.5" fill="#F5C842" />
    <circle cx="66"  cy="20" r="2.5" fill="#F5C842" opacity="0.7" />
    <circle cx="174" cy="12" r="2.5" fill="#F5C842" opacity="0.7" />
  </svg>
)

const WelcomeMessage = () => {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FFF3DC 0%, #FFF9F0 100%)',
        padding: '0 0 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Encabezado de la invitación con el osito grande */}
      <div
        style={{
          background: 'linear-gradient(180deg, var(--cream-dark) 0%, #FFF3DC 100%)',
          padding: '48px 20px 32px',
          textAlign: 'center',
          borderBottom: '2px dashed rgba(212,160,23,0.3)',
        }}
      >
        {/* Título principal */}
        <h1
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(2rem, 8vw, 2.8rem)',
            color: 'var(--brown-dark)',
            lineHeight: 1.2,
            marginBottom: '8px',
            animation: 'fadeInDown 0.8s ease both',
          }}
        >
          ¡Te invitamos a celebrar
        </h1>
        <h1
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(2rem, 8vw, 2.8rem)',
            color: 'var(--honey-dark)',
            lineHeight: 1.2,
            marginBottom: '24px',
            animation: 'fadeInDown 0.8s ease 0.15s both',
          }}
        >
          nuestro Baby Shower!
        </h1>

        {/* Dinosaurio bebé central */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            animation: 'scaleIn 1s ease 0.3s both',
          }}
        >
          <DinoIllustration size={190} />
        </div>

        {/* Nombre del bebé */}
        <div
          style={{
            background: 'var(--white)',
            borderRadius: '50px',
            padding: '10px 28px',
            display: 'inline-block',
            border: '2px solid var(--beige)',
            boxShadow: 'var(--shadow-soft)',
            marginBottom: '10px',
            animation: 'scaleIn 0.8s ease 0.5s both',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 6vw, 2rem)',
              color: 'var(--honey-dark)',
              lineHeight: 1,
            }}
          >
            {config.babyName}
          </p>
        </div>

        {/* Papás */}
        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.1rem, 4vw, 1.35rem)',
            color: 'var(--brown)',
            animation: 'fadeIn 0.8s ease 0.7s both',
          }}
        >
          {config.parentsNames} 💛
        </p>
      </div>

      {/* ── Mensaje de bienvenida ── */}
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'visible' : ''}`}
        style={{ maxWidth: 480, margin: '0 auto', padding: '40px 24px 0' }}
      >
        <HoneycombDivider />

        <div
          style={{
            marginTop: '28px',
            background: 'var(--white)',
            borderRadius: 'var(--radius)',
            padding: '28px 24px',
            border: '1.5px solid var(--beige)',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'center',
          }}
        >
          {/* Ícono decorativo */}
          <div style={{ fontSize: '2.2rem', marginBottom: '12px' }} aria-hidden="true">
            🦕
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.5rem, 5vw, 1.9rem)',
              color: 'var(--brown-dark)',
              marginBottom: '16px',
            }}
          >
            ¡Con mucho amor!
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--brown)',
              lineHeight: 1.75,
              marginBottom: '16px',
            }}
          >
            {config.welcomeMessage}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
              color: 'var(--honey-dark)',
              fontWeight: 700,
            }}
          >
            {config.welcomeClosing}
          </p>

          {/* Separador decorativo */}
          <div
            style={{
              marginTop: '20px',
              color: 'var(--honey)',
              fontSize: '1.2rem',
              letterSpacing: '8px',
            }}
            aria-hidden="true"
          >
            🦕 · 🥚 · 🦕
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeMessage
