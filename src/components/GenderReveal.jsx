import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { config } from '../config'
import videoSrc from '../video/gender-reveal.mp4'

/* Fases de la experiencia:
   sealed   → el huevo espera, late suave
   suspense → cuenta regresiva 3·2·1, el huevo tiembla y se agrieta
   playing  → se reproduce el video de la revelación
   revealed → confeti y mensaje de cierre                        */

const COUNTDOWN_FROM = 3

/* ── Cascarón de huevo con grietas progresivas ── */
const EggSVG = ({ phase, crackLevel }) => {
  const isSuspense = phase === 'suspense'

  return (
    <svg
      viewBox="0 0 160 200"
      style={{
        width: '100%',
        maxWidth: '190px',
        filter: 'drop-shadow(0 12px 30px rgba(180, 130, 50, 0.3))',
        animation: isSuspense
          ? 'eggWobble 0.35s ease-in-out infinite'
          : 'eggHeartbeat 2.4s ease-in-out infinite',
      }}
      aria-hidden="true"
    >
      {/* Cuerpo del huevo */}
      <ellipse cx="80" cy="112" rx="68" ry="84" fill="#F5E197" stroke="#D4A017" strokeWidth="3" />

      {/* Volumen: sombra lateral */}
      <ellipse cx="98" cy="118" rx="48" ry="72" fill="#E8C880" opacity="0.4" />

      {/* Brillo superior */}
      <ellipse cx="58" cy="68" rx="20" ry="26" fill="#FFFDF7" opacity="0.55" />

      {/* Manchitas decorativas tipo dino */}
      <g opacity="0.5">
        <circle cx="48"  cy="128" r="9"   fill="#D4A017" />
        <circle cx="104" cy="158" r="7"   fill="#D4A017" />
        <circle cx="112" cy="96"  r="6"   fill="#D4A017" />
        <circle cx="62"  cy="172" r="5.5" fill="#D4A017" />
        <circle cx="34"  cy="96"  r="5"   fill="#D4A017" />
      </g>

      {/* Grietas — aparecen una por una conforme baja la cuenta */}
      {crackLevel >= 1 && (
        <path
          d="M80 28 L70 56 L88 74 L74 98"
          stroke="#8B5E3C"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          style={{ animation: 'crackReveal 0.3s ease both' }}
        />
      )}
      {crackLevel >= 2 && (
        <path
          d="M74 98 L96 112 L78 134 L92 152"
          stroke="#8B5E3C"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          style={{ animation: 'crackReveal 0.3s ease both' }}
        />
      )}
      {crackLevel >= 3 && (
        <>
          <path
            d="M96 112 L124 104 M78 134 L50 142 M70 56 L42 48"
            stroke="#8B5E3C"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{ animation: 'crackReveal 0.3s ease both' }}
          />
          <path
            d="M92 152 L84 182"
            stroke="#8B5E3C"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            style={{ animation: 'crackReveal 0.3s ease both' }}
          />
        </>
      )}
    </svg>
  )
}

/* ── Confeti: piezas en colores neutros (miel, durazno, verde dino) ── */
const CONFETTI_COLORS = ['#D4A017', '#F5C842', '#F4A6A0', '#7FB069', '#F5E6A3', '#D44444']

const Confetti = () => {
  // Se genera una sola vez para que las posiciones no salten entre renders.
  const pieces = useRef(
    Array.from({ length: 44 }, (_, i) => ({
      id:       i,
      left:     Math.random() * 100,
      delay:    Math.random() * 2.2,
      duration: 2.6 + Math.random() * 2,
      size:     6 + Math.random() * 8,
      color:    CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      round:    Math.random() > 0.5,
    })),
  ).current

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * (p.round ? 1 : 1.6)}px`,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
            animation: `confettiFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* ── Mensaje de cierre: neutral salvo que config.revealedSex esté definido ── */
const RevealMessage = () => {
  const sex = config.revealedSex

  const copy = {
    'niño': { title: '¡Es niño! 💙', emoji: '👶💙',  color: '#4A90D9' },
    'niña': { title: '¡Es niña! 💖', emoji: '👶💖',  color: '#E27396' },
  }[sex] ?? { title: '¡Ya lo sabes! 🎉', emoji: '🦕💛', color: 'var(--honey-dark)' }

  return (
    <div style={{ textAlign: 'center', animation: 'fadeInUp 0.8s ease 0.3s both' }}>
      <div style={{ fontSize: '2.4rem', marginBottom: '8px' }} aria-hidden="true">
        {copy.emoji}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 7vw, 2.1rem)',
          color: copy.color,
          marginBottom: '10px',
        }}
      >
        {copy.title}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--brown)',
          lineHeight: 1.65,
        }}
      >
        Gracias por acompañarnos en este momento tan especial.
        <br />
        ¡Nos vemos en el baby shower! 🦕
      </p>
    </div>
  )
}

/* ── Componente principal ── */
const GenderReveal = () => {
  const [phase, setPhase]         = useState('sealed')
  const [count, setCount]         = useState(COUNTDOWN_FROM)
  const [needsTap, setNeedsTap]   = useState(false)
  const [isReplay, setIsReplay]   = useState(false)
  const [ref, isVisible]          = useScrollReveal(0.15)
  const videoRef                  = useRef(null)

  /* Cuenta regresiva del suspenso: 3 → 2 → 1 → video */
  useEffect(() => {
    if (phase !== 'suspense') return

    if (count <= 0) {
      setPhase('playing')
      return
    }

    const timer = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [phase, count])

  /* Al entrar en 'playing', intenta reproducir con sonido.
     Si el navegador bloquea el autoplay, se muestra un botón manual. */
  useEffect(() => {
    if (phase !== 'playing') return

    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    const attempt = video.play()

    if (attempt?.catch) {
      attempt.catch(() => setNeedsTap(true))
    }
  }, [phase])

  const handleStart = () => {
    if (phase !== 'sealed') return

    /* El toque del invitado es el único gesto de usuario que tendremos.
       Lo aprovechamos para "desbloquear" el elemento de video (Safari/iOS
       exigen que play() nazca de un gesto) y para empezar a descargar el
       archivo mientras corre la cuenta regresiva. */
    const video = videoRef.current
    if (video) {
      video.load()
      video.play().then(
        () => { video.pause(); video.currentTime = 0 },
        () => {},
      )
    }

    setPhase('suspense')
  }

  const handleEnded = () => setPhase('revealed')

  const showEgg   = phase === 'sealed' || phase === 'suspense'
  const showVideo = phase === 'playing' || phase === 'revealed'

  /* count va 3 → 2 → 1, así que la grieta crece 1 → 2 → 3 */
  const crackLevel = phase === 'suspense' ? COUNTDOWN_FROM - count + 1 : 0

  return (
    <section
      style={{
        padding: '48px 0',
        background: 'linear-gradient(180deg, var(--cream) 0%, #FFF3DC 100%)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {phase === 'revealed' && <Confetti />}

      <div className="section-inner">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">¿Niño o niña?</h2>
          <p className="section-subtitle">
            {phase === 'sealed'   && 'El secreto está dentro del huevo. ¿Te atreves a descubrirlo?'}
            {phase === 'suspense' && '¡El huevo se está rompiendo! 🥚'}
            {phase === 'playing'  && 'Shhh... aquí viene 🤫'}
            {phase === 'revealed' && '¡Ya salió del cascarón! 🎉'}
          </p>

          <div
            className="card"
            style={{
              padding: '32px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* ── Huevo + cuenta regresiva ── */}
            {showEgg && (
              <>
                {/* Halo dorado que pulsa más fuerte en el suspenso */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, rgba(245,200,66,0.55) 0%, rgba(245,200,66,0) 70%)',
                    animation:
                      phase === 'suspense'
                        ? 'revealGlow 0.7s ease-in-out infinite'
                        : 'revealGlow 3s ease-in-out infinite',
                  }}
                />

                <button
                  onClick={handleStart}
                  disabled={phase === 'suspense'}
                  aria-label="Toca el huevo para revelar el sexo del bebé"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: phase === 'sealed' ? 'pointer' : 'default',
                    position: 'relative',
                    zIndex: 1,
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <EggSVG phase={phase} crackLevel={crackLevel} />
                </button>

                {/* Número gigante de la cuenta regresiva */}
                {phase === 'suspense' && count > 0 && (
                  <div
                    key={count}
                    aria-live="assertive"
                    aria-atomic="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      pointerEvents: 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(5rem, 28vw, 9rem)',
                        color: 'var(--red-pooh)',
                        textShadow: '0 6px 24px rgba(212,68,68,0.45)',
                        animation: 'countdownBeat 1s ease-out both',
                      }}
                    >
                      {count}
                    </span>
                  </div>
                )}

                {/* Indicador de "toca para revelar" */}
                {phase === 'sealed' && (
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      color: 'var(--brown-dark)',
                      background:
                        'linear-gradient(135deg, var(--honey) 0%, var(--honey-light) 100%)',
                      padding: '12px 26px',
                      borderRadius: '50px',
                      boxShadow: '0 4px 14px rgba(212,160,23,0.4)',
                      animation: 'softPulse 2s ease-in-out infinite',
                    }}
                  >
                    👆 Toca el huevo para revelar
                  </span>
                )}
              </>
            )}

            {/* ── Destello blanco al momento de la revelación (solo la 1ª vez) ── */}
            {phase === 'playing' && !isReplay && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#fff',
                  zIndex: 4,
                  pointerEvents: 'none',
                  animation: 'flashOut 0.8s ease-out both',
                }}
              />
            )}

            {/* ── Video ──
                Se mantiene montado desde el primer toque para que se vaya
                descargando durante el suspenso, pero oculto para no
                arruinar la sorpresa con el primer fotograma. */}
            <div
              style={{
                width: '100%',
                display: showVideo ? 'block' : 'none',
                animation: showVideo ? 'videoEnter 0.7s ease both' : 'none',
              }}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                preload="auto"
                controls={showVideo}
                onEnded={handleEnded}
                style={{
                  /* El video es vertical (9:16). Se limita la altura para que
                     quepa en pantalla sin recortarlo. */
                  width: '100%',
                  maxHeight: '68vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-sm)',
                  background: '#000',
                  display: 'block',
                  margin: '0 auto',
                  boxShadow: 'var(--shadow-card)',
                }}
              />

              {/* Respaldo si el navegador bloquea la reproducción automática */}
              {needsTap && phase === 'playing' && (
                <button
                  className="btn btn-honey btn-full"
                  style={{ marginTop: '14px' }}
                  onClick={() => {
                    videoRef.current?.play()
                    setNeedsTap(false)
                  }}
                >
                  ▶ Toca para reproducir el video
                </button>
              )}
            </div>

            {/* ── Mensaje final + repetir ── */}
            {phase === 'revealed' && (
              <>
                <RevealMessage />
                <button
                  className="btn btn-honey"
                  onClick={() => {
                    setIsReplay(true)
                    setPhase('playing')
                  }}
                >
                  🔁 Ver de nuevo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderReveal
