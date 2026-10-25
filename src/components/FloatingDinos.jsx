/**
 * Dinosaurios bebé decorativos que flotan alrededor de la página.
 * Son puramente decorativos (aria-hidden) y no bloquean la interacción.
 * Reutilizan los keyframes beePath1-4 definidos en index.css.
 */

/* ── Dinosaurio 1: Dino redondito con espinas ── */
const RoundDino = ({ size = 36 }) => (
  <svg
    width={size}
    height={size * 0.88}
    viewBox="0 0 50 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Cuerpo */}
    <ellipse cx="21" cy="28" rx="17" ry="13" fill="#7EC8C8" />
    {/* Espinas en el lomo */}
    <path d="M11 19 L9 12 L14 18"  fill="#5BA8A8" />
    <path d="M17 17 L16 10 L20 17" fill="#5BA8A8" />
    <path d="M22 16 L22 9 L26 16"  fill="#5BA8A8" />
    {/* Cabeza */}
    <circle cx="35" cy="18" r="12" fill="#7EC8C8" />
    {/* Ojo */}
    <circle cx="39" cy="14" r="4"   fill="#2D5C5C" />
    <circle cx="40.5" cy="12.5" r="1.6" fill="white" />
    {/* Fosa nasal */}
    <circle cx="43" cy="18" r="1.3" fill="#5BA8A8" />
    {/* Sonrisa */}
    <path d="M33 21 Q36 26 41 22" stroke="#5BA8A8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Cola */}
    <path d="M4 24 Q0 29 5 33" stroke="#7EC8C8" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    {/* Patas */}
    <rect x="13" y="37" width="7" height="8" rx="3.5" fill="#7EC8C8" />
    <rect x="23" y="37" width="7" height="8" rx="3.5" fill="#7EC8C8" />
    {/* Bracito */}
    <ellipse cx="30" cy="26" rx="5.5" ry="3.5" fill="#7EC8C8" transform="rotate(-20 30 26)" />
    {/* Barriga */}
    <ellipse cx="21" cy="30" rx="10" ry="8" fill="#A8E0E0" opacity="0.6" />
    {/* Puntos */}
    <circle cx="15" cy="24" r="2.5" fill="#5BA8A8" opacity="0.65" />
    <circle cx="26" cy="25" r="2"   fill="#5BA8A8" opacity="0.65" />
  </svg>
)

/* ── Dinosaurio 2: Baby T-Rex ── */
const BabyTRex = ({ size = 32 }) => (
  <svg
    width={size}
    height={size * 1.05}
    viewBox="0 0 44 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Cuerpo */}
    <ellipse cx="19" cy="32" rx="14" ry="12" fill="#8DBB8D" />
    {/* Cabeza grande */}
    <circle cx="30" cy="19" r="14" fill="#8DBB8D" />
    {/* Ojo */}
    <circle cx="36" cy="14" r="4.5"  fill="#3A5A3A" />
    <circle cx="37.5" cy="12.5" r="1.8" fill="white" />
    {/* Fosa nasal */}
    <circle cx="40" cy="19" r="1.3" fill="#6B9B6B" />
    {/* Sonrisa */}
    <path d="M26 23 Q30 29 36 24" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    {/* Dientecitos */}
    <path d="M27 23 L27.5 26.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 24 L30.5 27.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M33 24 L33.5 27.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bracitos diminutos */}
    <ellipse cx="22" cy="25" rx="5.5" ry="3" fill="#8DBB8D" transform="rotate(25 22 25)" />
    {/* Barriga */}
    <ellipse cx="19" cy="34" rx="8" ry="7" fill="#B5D5A8" opacity="0.7" />
    {/* Patas */}
    <rect x="12" y="40" width="7" height="7" rx="3.5" fill="#8DBB8D" />
    <rect x="21" y="40" width="7" height="7" rx="3.5" fill="#8DBB8D" />
    {/* Cola */}
    <path d="M5 30 Q1 35 6 38" stroke="#8DBB8D" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Espinas en la cabeza */}
    <path d="M24 8 L23 2"  stroke="#6B9B6B" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M28 6 L28 0"  stroke="#6B9B6B" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M32 7 L33 2"  stroke="#6B9B6B" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

/* ── Dinosaurio 3: Huevo de dinosaurio con carita ── */
const DinoEgg = ({ size = 32 }) => (
  <svg
    width={size * 0.72}
    height={size}
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Huevo */}
    <path
      d="M16 2 C7 2 2 13 2 23 C2 34 8 42 16 42 C24 42 30 34 30 23 C30 13 25 2 16 2 Z"
      fill="#F5E6A3"
    />
    <path
      d="M16 2 C7 2 2 13 2 23 C2 34 8 42 16 42 C24 42 30 34 30 23 C30 13 25 2 16 2 Z"
      fill="none"
      stroke="#D4A017"
      strokeWidth="1.5"
    />
    {/* Grieta */}
    <path d="M14 25 L16 20 L18 24 L16 22 Z" stroke="#C4870B" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    {/* Ojos */}
    <circle cx="11" cy="27" r="2.8"  fill="#4A2E0A" />
    <circle cx="21" cy="27" r="2.8"  fill="#4A2E0A" />
    <circle cx="12" cy="26" r="1.1"  fill="white" />
    <circle cx="22" cy="26" r="1.1"  fill="white" />
    {/* Sonrisa */}
    <path d="M12 32 Q16 36 20 32" stroke="#4A2E0A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Manchas */}
    <circle cx="7"  cy="14" r="3"   fill="#D4A017" opacity="0.3" />
    <circle cx="23" cy="11" r="2.5" fill="#D4A017" opacity="0.3" />
    <circle cx="26" cy="28" r="2"   fill="#D4A017" opacity="0.3" />
    <circle cx="7"  cy="30" r="2"   fill="#D4A017" opacity="0.3" />
  </svg>
)

/* ── Dinosaurio 4: Baby Triceratops ── */
const BabyTricera = ({ size = 32 }) => (
  <svg
    width={size * 1.15}
    height={size * 0.88}
    viewBox="0 0 55 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Cresta (frill) */}
    <path d="M36 8 Q42 1 50 6 Q54 11 48 16 Q43 20 40 17" fill="#EECCE0" opacity="0.85" />
    {/* Cuerpo */}
    <ellipse cx="24" cy="29" rx="19" ry="13" fill="#B5D5A8" />
    {/* Cabeza */}
    <circle cx="37" cy="19" r="12" fill="#B5D5A8" />
    {/* Cuernos */}
    <path d="M34 8  L32 2"   stroke="#8DB890" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 7  L38 1"   stroke="#8DB890" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 14 L50 12"  stroke="#8DB890" strokeWidth="2"   strokeLinecap="round" />
    {/* Ojo */}
    <circle cx="41" cy="15" r="4"    fill="#3D5C3D" />
    <circle cx="42.5" cy="13.5" r="1.5" fill="white" />
    {/* Fosa nasal */}
    <circle cx="45" cy="19" r="1.1"  fill="#8DB890" />
    {/* Sonrisa */}
    <path d="M35 22 Q38 27 43 23" stroke="#8DB890" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Barriga */}
    <ellipse cx="24" cy="31" rx="11" ry="8" fill="#C8E8C0" opacity="0.7" />
    {/* Patas */}
    <rect x="13" y="38" width="7" height="7" rx="3.5" fill="#B5D5A8" />
    <rect x="24" y="38" width="7" height="7" rx="3.5" fill="#B5D5A8" />
    {/* Cola */}
    <path d="M5 26 Q1 31 6 35" stroke="#B5D5A8" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    {/* Espinas en el lomo */}
    <path d="M16 18 L14 12" stroke="#8DB890" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 17 L18 11" stroke="#8DB890" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/* ── Dinosaurio 5: Baby Brachiosaurus (cuello largo) ── */
const BabyBrachi = ({ size = 28 }) => (
  <svg
    width={size * 0.85}
    height={size * 1.1}
    viewBox="0 0 38 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Cuerpo */}
    <ellipse cx="20" cy="36" rx="16" ry="11" fill="#82BAAA" />
    {/* Cuello largo */}
    <path d="M22 28 Q18 20 16 12 Q14 6 18 4 Q22 2 24 8 Q26 16 24 26" fill="#82BAAA" />
    {/* Cabeza */}
    <circle cx="18" cy="6" r="8" fill="#82BAAA" />
    {/* Ojo */}
    <circle cx="21" cy="4"  r="2.5" fill="#2D5050" />
    <circle cx="22" cy="3"  r="1"   fill="white" />
    {/* Fosa nasal */}
    <circle cx="23" cy="6"  r="0.9" fill="#5A9090" />
    {/* Sonrisa */}
    <path d="M15 8 Q18 11 22 8" stroke="#5A9090" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Barriga */}
    <ellipse cx="20" cy="38" rx="9" ry="7" fill="#A8D0C4" opacity="0.7" />
    {/* Patas */}
    <rect x="12" y="43" width="6" height="6" rx="3" fill="#82BAAA" />
    <rect x="21" y="43" width="6" height="6" rx="3" fill="#82BAAA" />
    {/* Cola */}
    <path d="M4 36 Q0 40 5 43" stroke="#82BAAA" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Puntitos en el cuerpo */}
    <circle cx="16" cy="34" r="2" fill="#5A9090" opacity="0.55" />
    <circle cx="24" cy="38" r="2" fill="#5A9090" opacity="0.55" />
  </svg>
)

/* ── Configuración de posiciones y animaciones ── */
const DINOS = [
  {
    id: 1, Component: RoundDino, size: 36,
    style: { top: '6%',  left: '4%'  },
    animation: 'beePath1 10s ease-in-out infinite', delay: '0s',
  },
  {
    id: 2, Component: BabyTRex, size: 28,
    style: { top: '14%', right: '6%' },
    animation: 'beePath2 13s ease-in-out infinite', delay: '-3s',
  },
  {
    id: 3, Component: DinoEgg, size: 30,
    style: { top: '38%', left: '2%'  },
    animation: 'beePath3 9s  ease-in-out infinite', delay: '-6s',
  },
  {
    id: 4, Component: BabyTricera, size: 32,
    style: { top: '52%', right: '4%' },
    animation: 'beePath4 12s ease-in-out infinite', delay: '-2s',
  },
  {
    id: 5, Component: BabyBrachi, size: 28,
    style: { top: '72%', left: '5%'  },
    animation: 'beePath1 11s ease-in-out infinite', delay: '-5s',
  },
  {
    id: 6, Component: DinoEgg, size: 22,
    style: { top: '85%', right: '8%' },
    animation: 'beePath2 14s ease-in-out infinite', delay: '-8s',
  },
]

const FloatingDinos = () => (
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
    {DINOS.map(({ id, Component, size, style, animation, delay }) => (
      <div
        key={id}
        style={{
          position: 'absolute',
          ...style,
          animation,
          animationDelay: delay,
        }}
      >
        <Component size={size} />
      </div>
    ))}
  </div>
)

export default FloatingDinos
