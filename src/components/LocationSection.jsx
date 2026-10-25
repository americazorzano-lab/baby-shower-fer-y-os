import { useScrollReveal } from '../hooks/useScrollReveal'
import { config, getMapsUrl } from '../config'

/* Mapa estático decorativo (SVG) — solo visual */
const MapIllustration = () => (
  <svg
    viewBox="0 0 320 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', borderRadius: '12px', display: 'block' }}
    aria-hidden="true"
  >
    {/* Fondo del mapa */}
    <rect width="320" height="140" rx="12" fill="#EAF2EA" />

    {/* Manzanas (bloques) */}
    <rect x="10"  y="10"  width="60" height="40" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>
    <rect x="90"  y="10"  width="80" height="40" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>
    <rect x="190" y="10"  width="60" height="40" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>
    <rect x="260" y="10"  width="50" height="40" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>

    <rect x="10"  y="70"  width="50" height="60" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>
    <rect x="80"  y="70"  width="70" height="60" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>
    <rect x="170" y="70"  width="80" height="60" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>
    <rect x="270" y="70"  width="40" height="60" rx="4" fill="#D4E8D4" stroke="#B8D4B8" strokeWidth="1"/>

    {/* Calles horizontales */}
    <rect x="0"  y="56" width="320" height="10" fill="#FFFDF7"/>
    {/* Calles verticales */}
    <rect x="76"  y="0" width="10" height="140" fill="#FFFDF7"/>
    <rect x="176" y="0" width="10" height="140" fill="#FFFDF7"/>
    <rect x="258" y="0" width="10" height="140" fill="#FFFDF7"/>

    {/* Pequeños árboles decorativos */}
    <circle cx="30"  cy="80" r="6" fill="#8BC88B"/>
    <circle cx="220" cy="80" r="5" fill="#8BC88B"/>
    <circle cx="100" cy="30" r="5" fill="#8BC88B"/>
    <circle cx="290" cy="100" r="4" fill="#8BC88B"/>

    {/* Pin de ubicación centrado */}
    <circle cx="160" cy="52" r="22" fill="rgba(212,160,23,0.18)" />
    <circle cx="160" cy="52" r="14" fill="rgba(212,160,23,0.25)" />
    <path
      d="M160 32 C153 32 147 38 147 45 C147 56 160 68 160 68 S173 56 173 45 C173 38 167 32 160 32 Z"
      fill="#D44444"
    />
    <circle cx="160" cy="45" r="5" fill="white"/>
  </svg>
)

const LocationSection = () => {
  const [ref, isVisible] = useScrollReveal(0.15)
  const mapsUrl = getMapsUrl()

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
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Ubicación</h2>
          <p className="section-subtitle">
            ¡Te esperamos aquí con mucho amor!
          </p>

          <div
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              border: '1.5px solid var(--beige)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Ilustración del mapa */}
            <MapIllustration />

            {/* Datos del lugar */}
            <div style={{ padding: '20px 20px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '2px' }}
                  aria-hidden="true"
                >
                  📍
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--brown-dark)',
                      marginBottom: '4px',
                    }}
                  >
                    {config.venue}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--brown)',
                      lineHeight: 1.5,
                    }}
                  >
                    {config.address !== 'Ver ubicación en el mapa'
                      ? <>{config.address}<br />{config.city}</>
                      : <>{config.city}<br /><em>Toca el botón para ver la dirección exacta en el mapa</em></>
                    }
                  </p>
                </div>
              </div>

              {/* Botón de Google Maps */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-maps btn-full"
                aria-label={`Ver ubicación de ${config.venue} en Google Maps`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
