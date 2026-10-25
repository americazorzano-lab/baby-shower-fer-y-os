/**
 * Abejitas decorativas que flotan alrededor de la página.
 * Son purely decorativas (aria-hidden) y no bloquean la interacción.
 */

const BeeSVG = ({ size = 28 }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 44 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Alas */}
    <ellipse
      cx="13" cy="7" rx="12" ry="7"
      fill="rgba(200,235,255,0.78)"
      transform="rotate(-18 13 7)"
      style={{ animation: 'wingFlap 0.18s linear infinite' }}
    />
    <ellipse
      cx="22" cy="7" rx="11" ry="6"
      fill="rgba(200,235,255,0.78)"
      transform="rotate(14 22 7)"
      style={{ animation: 'wingFlap 0.18s linear infinite 0.09s' }}
    />

    {/* Cuerpo */}
    <ellipse cx="19" cy="19" rx="14" ry="9" fill="#F5C842" />

    {/* Rayas */}
    <path d="M9 15 Q19 13 29 15 L28 20 Q19 22 10 20 Z" fill="#3D3010" opacity="0.82" />
    <path d="M10 22 Q19 20 28 22 L27 26 Q19 27 11 26 Z" fill="#3D3010" opacity="0.82" />

    {/* Cabeza */}
    <circle cx="32" cy="18" r="7" fill="#F5C842" />
    <circle cx="34" cy="16" r="2" fill="#3D3010" />

    {/* Aguijón */}
    <path d="M5 19 L1 19" stroke="#C4956A" strokeWidth="2" strokeLinecap="round" />

    {/* Antenas */}
    <line x1="30" y1="12" x2="25" y2="5"  stroke="#3D3010" strokeWidth="1.5" />
    <circle cx="25" cy="5"  r="1.8" fill="#3D3010" />
    <line x1="33" y1="11" x2="38" y2="4"  stroke="#3D3010" strokeWidth="1.5" />
    <circle cx="38" cy="4"  r="1.8" fill="#3D3010" />
  </svg>
)

const BEES = [
  {
    id: 1,
    style: { top: '6%',  left: '4%'  },
    animation: 'beePath1 9s  ease-in-out infinite',
    delay: '0s',
    size: 30,
  },
  {
    id: 2,
    style: { top: '14%', right: '6%'  },
    animation: 'beePath2 12s ease-in-out infinite',
    delay: '-3s',
    size: 22,
  },
  {
    id: 3,
    style: { top: '38%', left: '2%'  },
    animation: 'beePath3 10s ease-in-out infinite',
    delay: '-6s',
    size: 18,
  },
  {
    id: 4,
    style: { top: '52%', right: '4%'  },
    animation: 'beePath1 11s ease-in-out infinite',
    delay: '-2s',
    size: 26,
  },
  {
    id: 5,
    style: { top: '72%', left: '5%'  },
    animation: 'beePath4 8.5s ease-in-out infinite',
    delay: '-4s',
    size: 20,
  },
  {
    id: 6,
    style: { top: '86%', right: '8%'  },
    animation: 'beePath2 13s ease-in-out infinite',
    delay: '-7s',
    size: 16,
  },
]

const FloatingBees = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 20,
      overflow: 'hidden',
    }}
    aria-hidden="true"
  >
    {BEES.map((bee) => (
      <div
        key={bee.id}
        style={{
          position: 'absolute',
          ...bee.style,
          animation: bee.animation,
          animationDelay: bee.delay,
        }}
      >
        <BeeSVG size={bee.size} />
      </div>
    ))}
  </div>
)

export default FloatingBees
