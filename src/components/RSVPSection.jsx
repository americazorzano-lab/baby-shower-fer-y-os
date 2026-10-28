import { useScrollReveal } from '../hooks/useScrollReveal'
import { config, getWhatsAppUrl } from '../config'

/* ── Campos del formulario RSVP (solo visuales, se envían por WhatsApp) ── */
const rsvpFields = [
  { icon: '👤', label: 'Tu nombre completo' },
  { icon: '👥', label: 'Total de acompañantes' },
  { icon: '💌', label: 'Mensaje especial para los papás' },
]

const RSVPSection = () => {
  const [ref, isVisible] = useScrollReveal(0.15)
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section
      style={{
        padding: '48px 0',
        background: 'linear-gradient(180deg, var(--cream) 0%, #FFF3DC 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-inner">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Confirma tu asistencia</h2>
          <p className="section-subtitle">
            Tu presencia es el mejor regalo 💛
          </p>

          <div
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              padding: '28px 22px',
              border: '1.5px solid var(--beige)',
              boxShadow: 'var(--shadow-card)',
              textAlign: 'center',
            }}
          >
            {/* Ícono decorativo */}
            <div style={{ fontSize: '2.8rem', marginBottom: '10px' }} aria-hidden="true">
              🦕
            </div>

            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(1.3rem, 5vw, 1.6rem)',
                color: 'var(--brown-dark)',
                marginBottom: '6px',
              }}
            >
              ¿Podrás acompañarnos?
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.93rem',
                color: 'var(--brown)',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}
            >
              Al tocar el botón se abrirá WhatsApp con un mensaje listo.
              Solo llena los campos y envíalo. 🦖
            </p>

            {/* Preview de los campos del mensaje */}
            <div
              style={{
                background: 'var(--cream-dark)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px',
                marginBottom: '20px',
                textAlign: 'left',
                border: '1.5px dashed rgba(212,160,23,0.4)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--honey-dark)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  marginBottom: '10px',
                }}
              >
                Tu mensaje incluirá:
              </p>
              {rsvpFields.map((field, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: i < rsvpFields.length - 1 ? '8px' : 0,
                  }}
                >
                  <span
                    style={{ fontSize: '1rem', flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    {field.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--brown)',
                      flex: 1,
                    }}
                  >
                    {field.label}
                  </span>
                  <div
                    style={{
                      height: '1px',
                      flex: 1,
                      maxWidth: '60px',
                      borderBottom: '1px dashed var(--brown-light)',
                    }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
                aria-label="Abrir WhatsApp para confirmar asistencia al baby shower"
              >
                {/* Ícono WhatsApp */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2.003C6.477 2.003 2 6.478 2 12.003c0 1.74.453 3.374 1.244 4.797L2 22l5.337-1.396a10.006 10.006 0 004.667 1.148c5.525 0 10.002-4.477 10.002-10.001 0-5.521-4.478-9.998-10.002-9.998zm0 18.302a8.285 8.285 0 01-4.257-1.173l-.307-.181-3.168.83.847-3.086-.196-.315a8.28 8.28 0 01-1.242-4.377c0-4.593 3.741-8.334 8.323-8.334 4.585 0 8.33 3.74 8.33 8.334 0 4.59-3.745 8.302-8.33 8.302z"/>
                </svg>
                Confirmar por WhatsApp
              </a>
            ) : (
              <div
                style={{
                  background: 'var(--cream-dark)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px',
                  border: '1.5px dashed var(--honey)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--brown)', fontStyle: 'italic' }}>
                  📱 Configura el número en <code>src/config.js</code>
                </p>
              </div>
            )}

            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1rem',
                color: 'var(--brown-light)',
                marginTop: '18px',
              }}
            >
              ¡Cada persona hace este momento más especial! 🥚
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVPSection
