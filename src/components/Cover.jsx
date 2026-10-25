import { useState } from 'react'
import { config } from '../config'
import DinoIllustration from './DinoIllustration'

/* ── Ilustración del sobre ── */
const EnvelopeSVG = ({ isAnimating }) => (
  <svg
    viewBox="0 0 300 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '100%',
      maxWidth: '320px',
      filter: 'drop-shadow(0 10px 28px rgba(180, 130, 50, 0.25))',
      animation: isAnimating
        ? 'envelopePop 0.45s ease'
        : 'gentleFloat 4s ease-in-out infinite',
    }}
    aria-hidden="true"
  >
    {/* Cuerpo del sobre */}
    <rect x="2" y="55" width="296" height="153" rx="14" fill="#F0D9B5" stroke="#D4A017" strokeWidth="2.5" />

    {/* Pliegues diagonales interiores */}
    <path d="M2 55 L150 150 L2 208"    fill="#E8C880" opacity="0.45" />
    <path d="M298 55 L150 150 L298 208" fill="#E0C07A" opacity="0.45" />

    {/* Pliegue inferior */}
    <path d="M2 208 L150 148 L298 208" fill="#DEB86A" opacity="0.65" />

    {/* Solapa superior (flap) */}
    <path
      d="M2 55 L150 158 L298 55"
      fill="#F5E197"
      stroke="#D4A017"
      strokeWidth="2"
    />

    {/* Sello de cera rojo con huella de osito */}
    <circle cx="150" cy="156" r="27" fill="#CC4444" />
    <circle cx="150" cy="156" r="23" fill="#BB3333" />
    <circle cx="150" cy="156" r="18" fill="#D44444" />
    {/* Huella — palma */}
    <ellipse cx="150" cy="158" rx="7.5" ry="6.5" fill="#993333" />
    {/* Dedos de la huella */}
    <circle cx="141" cy="148" r="4.5" fill="#993333" />
    <circle cx="150" cy="146" r="4.5" fill="#993333" />
    <circle cx="159" cy="148" r="4.5" fill="#993333" />

    {/* Pequeñas flores decorativas en las esquinas */}
    <g opacity="0.65">
      <circle cx="50"  cy="90" r="7" fill="#F5C842" />
      <circle cx="43"  cy="90" r="3.5" fill="#F5C842" />
      <circle cx="57"  cy="90" r="3.5" fill="#F5C842" />
      <circle cx="50"  cy="83" r="3.5" fill="#F5C842" />
      <circle cx="50"  cy="97" r="3.5" fill="#F5C842" />
      <circle cx="50"  cy="90" r="3.5" fill="white" />
    </g>
    <g opacity="0.65">
      <circle cx="250" cy="90" r="7" fill="#F5C842" />
      <circle cx="243" cy="90" r="3.5" fill="#F5C842" />
      <circle cx="257" cy="90" r="3.5" fill="#F5C842" />
      <circle cx="250" cy="83" r="3.5" fill="#F5C842" />
      <circle cx="250" cy="97" r="3.5" fill="#F5C842" />
      <circle cx="250" cy="90" r="3.5" fill="white" />
    </g>

    {/* Puntos de miel decorativos */}
    <circle cx="32"  cy="165" r="3.5" fill="#D4A017" opacity="0.5" />
    <circle cx="268" cy="165" r="3.5" fill="#D4A017" opacity="0.5" />
    <circle cx="18"  cy="75"  r="3"   fill="#D4A017" opacity="0.4" />
    <circle cx="282" cy="75"  r="3"   fill="#D4A017" opacity="0.4" />
  </svg>
)

/* ── Nube decorativa ── */
const CloudSVG = ({ w = 80, flip = false }) => (
  <svg
    viewBox="0 0 80 40"
    width={w}
    aria-hidden="true"
    style={{ transform: flip ? 'scaleX(-1)' : 'none', opacity: 0.55 }}
  >
    <ellipse cx="40" cy="28" rx="36" ry="16" fill="#FFF3DC" />
    <circle  cx="28" cy="22" r="14" fill="#FFF3DC" />
    <circle  cx="48" cy="18" r="18" fill="#FFF3DC" />
    <circle  cx="62" cy="26" r="12" fill="#FFF3DC" />
  </svg>
)

/* ── Componente principal ── */
const Cover = ({ onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOpen = () => {
    if (isAnimating) return
    setIsAnimating(true)
    // Después de la animación del sobre, llama a onOpen
    setTimeout(() => onOpen(), 900)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        animation: isAnimating ? 'coverExit 0.7s ease 0.3s forwards' : 'fadeIn 0.7s ease',
      }}
    >
      {/* Nubes decorativas arriba */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '8px',
          animation: 'fadeInDown 0.8s ease 0.1s both',
        }}
      >
        <CloudSVG w={90} />
        <CloudSVG w={70} flip />
      </div>

      {/* Tagline superior */}
      <p
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(1rem, 4vw, 1.15rem)',
          color: 'var(--honey)',
          letterSpacing: '1px',
          marginBottom: '28px',
          animation: 'fadeInDown 0.8s ease 0.2s both',
        }}
      >
        ✨ Una invitación muy especial ✨
      </p>

      {/* Sobre + botón de apertura */}
      <button
        onClick={handleOpen}
        aria-label="Toca para abrir tu invitación de baby shower"
        style={{
          background: 'none',
          border: 'none',
          cursor: isAnimating ? 'default' : 'pointer',
          padding: 0,
          width: '100%',
          maxWidth: '320px',
          animation: 'scaleIn 0.8s ease 0.35s both',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <EnvelopeSVG isAnimating={isAnimating} />
      </button>

      {/* Indicador "toca para abrir" */}
      {!isAnimating && (
        <div
          style={{
            marginTop: '24px',
            animation: 'softPulse 2.2s ease-in-out infinite, fadeIn 1s ease 0.8s both',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.92rem',
              color: 'var(--brown)',
              background: 'var(--white)',
              padding: '8px 20px',
              borderRadius: '50px',
              border: '1.5px solid var(--beige)',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            👆 Toca para abrir
          </span>
        </div>
      )}

      {/* Separador decorativo */}
      <div
        style={{
          marginTop: '36px',
          color: 'var(--honey)',
          fontSize: '1.3rem',
          letterSpacing: '10px',
          animation: 'fadeIn 1s ease 1s both',
        }}
        aria-hidden="true"
      >
        🦕 · 🥚 · 🦕
      </div>

      {/* Dinosaurio bebé al pie de la portada */}
      <div
        style={{
          marginTop: '24px',
          width: '115px',
          animation: 'fadeInUp 1s ease 1.1s both',
          opacity: isAnimating ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <DinoIllustration size={115} />
      </div>

      {/* Nombre de los papás */}
      <p
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(1rem, 4vw, 1.2rem)',
          color: 'var(--brown)',
          marginTop: '12px',
          animation: 'fadeInUp 1s ease 1.3s both',
          opacity: isAnimating ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        {config.parentsNames} 💛
      </p>
    </div>
  )
}

export default Cover
