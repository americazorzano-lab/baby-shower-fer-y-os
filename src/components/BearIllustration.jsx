/**
 * Ilustración original de un osito amarillo sosteniendo
 * un tarro de miel. Diseño 100 % SVG, sin imágenes externas.
 */
const BearIllustration = ({ size = 220 }) => (
  <svg
    viewBox="0 0 220 270"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height="auto"
    role="img"
    aria-label="Osito de peluche amarillo con una playera roja sosteniendo un tarro de miel"
    style={{ display: 'block' }}
  >
    {/* ── Orejas ── */}
    <circle cx="54"  cy="62" r="28" fill="#E8B94A" />
    <circle cx="54"  cy="62" r="19" fill="#D4A017" />
    <circle cx="166" cy="62" r="28" fill="#E8B94A" />
    <circle cx="166" cy="62" r="19" fill="#D4A017" />

    {/* ── Cabeza ── */}
    <circle cx="110" cy="100" r="62" fill="#F0C860" />

    {/* ── Hocico ── */}
    <ellipse cx="110" cy="122" rx="30" ry="21" fill="#D4A017" />

    {/* ── Ojos ── */}
    <circle cx="87"  cy="89" r="11" fill="#4A2E0A" />
    <circle cx="133" cy="89" r="11" fill="#4A2E0A" />
    {/* Brillo */}
    <circle cx="83"  cy="85" r="4.5" fill="white" />
    <circle cx="129" cy="85" r="4.5" fill="white" />

    {/* ── Nariz ── */}
    <ellipse cx="110" cy="115" rx="10" ry="7.5" fill="#6B3E26" />

    {/* ── Boca ── */}
    <path
      d="M97 124 Q110 137 123 124"
      stroke="#6B3E26"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />

    {/* ── Mejillas ── */}
    <circle cx="74"  cy="112" r="15" fill="#F4A6A0" opacity="0.50" />
    <circle cx="146" cy="112" r="15" fill="#F4A6A0" opacity="0.50" />

    {/* ── Cuerpo (playera roja) ── */}
    <ellipse cx="110" cy="216" rx="62" ry="60" fill="#D44444" />

    {/* Rayas de la playera */}
    <path d="M50 200 Q110 193 170 200" stroke="#BB3333" strokeWidth="5.5" fill="none" />
    <path d="M48 218 Q110 211 172 218" stroke="#BB3333" strokeWidth="5.5" fill="none" />
    <path d="M50 236 Q110 229 170 236" stroke="#BB3333" strokeWidth="4"   fill="none" />

    {/* ── Brazos ── */}
    <ellipse cx="45"  cy="210" rx="26" ry="14" fill="#F0C860" transform="rotate(-22 45 210)"  />
    <ellipse cx="175" cy="210" rx="26" ry="14" fill="#F0C860" transform="rotate(22 175 210)"  />

    {/* Manos */}
    <circle cx="30"  cy="221" r="13" fill="#F0C860" />
    <circle cx="190" cy="221" r="13" fill="#F0C860" />

    {/* ── Tarro de miel ── */}
    {/* Cuerpo del tarro */}
    <rect x="70" y="205" width="80" height="70" rx="14" fill="#C4956A" />
    {/* Tapa / boca del tarro */}
    <rect x="65" y="198" width="90" height="20" rx="10" fill="#D4A017" />

    {/* Miel desbordándose en la tapa */}
    <path d="M82 198 C82 186 90 183 94 189 C90 183 98 180 98 198" fill="#F5C842" opacity="0.9" />
    <path d="M108 198 C108 181 116 178 120 185 C116 178 124 182 124 198" fill="#F5C842" opacity="0.9" />
    <path d="M132 198 C132 187 126 184 122 190 C126 184 128 187 132 198" fill="#F5C842" opacity="0.9" />

    {/* Etiqueta del tarro */}
    <rect x="78"  y="218" width="64" height="40" rx="7" fill="#E8A83E" />
    <rect x="82"  y="222" width="56" height="32" rx="5" fill="#D4901C" />

    {/* "MIEL" en la etiqueta */}
    <text
      x="110"
      y="234"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="10"
      fontWeight="bold"
      fill="#FFF3DC"
      letterSpacing="1.5"
    >
      MIEL
    </text>

    {/* Pequeña flor/abejar en etiqueta */}
    <circle cx="110" cy="245" r="4"   fill="#F5C842" />
    <circle cx="104" cy="243" r="2.5" fill="#F5C842" />
    <circle cx="116" cy="243" r="2.5" fill="#F5C842" />
    <circle cx="110" cy="240" r="2.5" fill="#F5C842" />
    <circle cx="110" cy="248" r="2.5" fill="#F5C842" />
    <circle cx="110" cy="245" r="2.5" fill="#D4901C" />

    {/* Gotitas de miel en los lados del tarro */}
    <path d="M71 228 Q67 236 70 243" stroke="#D4A017" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M149 224 Q153 232 150 239" stroke="#D4A017" strokeWidth="2.5" fill="none" strokeLinecap="round" />

    {/* ── Patas ── */}
    <ellipse cx="86"  cy="268" rx="26" ry="13" fill="#E8B94A" />
    <ellipse cx="134" cy="268" rx="26" ry="13" fill="#E8B94A" />
  </svg>
)

export default BearIllustration
