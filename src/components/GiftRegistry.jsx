import { useScrollReveal } from '../hooks/useScrollReveal'
import { config } from '../config'

/* Ícono de regalo SVG */
const GiftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    {/* Caja */}
    <rect x="6"  y="22" width="36" height="24" rx="4" fill="#F5E6A3" stroke="#D4A017" strokeWidth="2"/>
    {/* Tapa */}
    <rect x="4"  y="15" width="40" height="10" rx="4" fill="#F0D9B5" stroke="#D4A017" strokeWidth="2"/>
    {/* Moño — lazo horizontal */}
    <path d="M24 15 L24 46"      stroke="#D44444" strokeWidth="2.5"/>
    <path d="M4  20 L44 20"      stroke="#D44444" strokeWidth="2.5"/>
    {/* Lazos del moño */}
    <path d="M24 15 C18 10 10 12 12 18 C14 24 22 17 24 15" fill="#D44444" opacity="0.8"/>
    <path d="M24 15 C30 10 38 12 36 18 C34 24 26 17 24 15" fill="#CC3333" opacity="0.8"/>
    {/* Punto central del moño */}
    <circle cx="24" cy="15" r="3.5" fill="#BB2222"/>
    {/* Punto decorativo en la caja */}
    <circle cx="24" cy="33" r="3" fill="#D4A017" opacity="0.4"/>
  </svg>
)

const GiftRegistry = () => {
  const [ref, isVisible] = useScrollReveal(0.15)
  const hasRegistry = Boolean(config.giftRegistryUrl)

  return (
    <section
      style={{
        padding: '48px 0 56px',
        background: 'var(--cream)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-inner">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Mesa de regalos</h2>
          <p className="section-subtitle">
            {hasRegistry
              ? '¡Aquí puedes ver nuestra lista de deseos!'
              : 'Tu presencia es el mejor regalo.'}
          </p>

          <div
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              padding: '28px 24px',
              border: '1.5px solid var(--beige)',
              boxShadow: 'var(--shadow-card)',
              textAlign: 'center',
            }}
          >
            {/* Ícono de regalo */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <GiftIcon />
            </div>

            {hasRegistry ? (
              <>
                <p
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                    color: 'var(--brown-dark)',
                    marginBottom: '8px',
                  }}
                >
                  ¡Con mucho amor hicimos nuestra lista!
                </p>

                {config.giftRegistryStore && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--brown)',
                      marginBottom: '20px',
                    }}
                  >
                    Tienda:{' '}
                    <strong style={{ color: 'var(--honey-dark)' }}>
                      {config.giftRegistryStore}
                    </strong>
                  </p>
                )}

                <a
                  href={config.giftRegistryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-honey btn-full"
                  aria-label={`Ver mesa de regalos${config.giftRegistryStore ? ' en ' + config.giftRegistryStore : ''}`}
                >
                  <span aria-hidden="true">🎁</span>
                  Ver mesa de regalos
                </a>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--brown-light)',
                    marginTop: '14px',
                    fontStyle: 'italic',
                  }}
                >
                  * La mesa de regalos es completamente opcional.
                </p>
              </>
            ) : (
              /* Sin URL de mesa de regalos */
              <>
                <p
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                    color: 'var(--brown-dark)',
                    marginBottom: '12px',
                  }}
                >
                  ¡Tu cariño es suficiente!
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'var(--brown)',
                    lineHeight: 1.65,
                    marginBottom: '16px',
                  }}
                >
                  Tu presencia y buenos deseos son el mejor regalo que podemos recibir.
                  El amor con el que vengas lo significa todo para nosotros. 💛
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'var(--cream-dark)',
                    borderRadius: '50px',
                    padding: '8px 20px',
                    border: '1.5px dashed var(--honey)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-script)',
                      fontSize: '1rem',
                      color: 'var(--honey-dark)',
                    }}
                  >
                    🍯 Los regalos son opcionales 🍯
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GiftRegistry
