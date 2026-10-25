/**
 * Dinosaurio bebé saliendo de su huevo — estilo kawaii suave/acuarela.
 * Colores sage green apagados, ojos expresivos, manchas de textura,
 * manos asomándose sobre el cascarón. 100 % SVG original.
 */
const DinoIllustration = ({ size = 220 }) => (
  <svg
    viewBox="0 0 220 270"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    role="img"
    aria-label="Dinosaurio bebé saliendo de un huevo roto, con ojos grandes y expresivos"
    style={{ display: 'block', height: 'auto' }}
  >
    {/* ── Sombra en el suelo ── */}
    <ellipse cx="110" cy="262" rx="76" ry="8" fill="#B09870" opacity="0.20" />

    {/* ── Trozos de cascarón en el suelo ── */}
    <path d="M20 254 Q11 242 30 236 Q46 231 50 244 Q42 254 20 254 Z" fill="#EDE8DC" />
    <path d="M20 254 Q11 242 30 236 Q46 231 50 244 Q42 254 20 254 Z"
          fill="none" stroke="#CEC8B8" strokeWidth="1" />
    <path d="M200 254 Q209 242 190 236 Q174 231 170 244 Q178 254 200 254 Z" fill="#EDE8DC" />
    <path d="M200 254 Q209 242 190 236 Q174 231 170 244 Q178 254 200 254 Z"
          fill="none" stroke="#CEC8B8" strokeWidth="1" />
    <path d="M50 260 Q45 252 58 248 Q66 246 67 254 Q60 260 50 260 Z" fill="#EDE8DC" opacity="0.80" />
    <path d="M170 260 Q175 252 162 248 Q154 246 153 254 Q160 260 170 260 Z" fill="#EDE8DC" opacity="0.80" />

    {/* ── HUEVO — cuerpo exterior ── */}
    <path
      d="M46 195 Q38 232 38 256 Q38 270 110 270 Q182 270 182 256 Q182 232 174 195 Z"
      fill="#EDE8DC"
    />
    {/* Zona interior del huevo (más clara) */}
    <ellipse cx="110" cy="234" rx="60" ry="36" fill="#F5F2EC" opacity="0.70" />

    {/* Manchas del huevo */}
    <circle cx="68"  cy="220" r="5.5" fill="#CEBCA8" opacity="0.52" />
    <circle cx="154" cy="215" r="4.5" fill="#CEBCA8" opacity="0.52" />
    <circle cx="80"  cy="250" r="4"   fill="#CEBCA8" opacity="0.42" />
    <circle cx="144" cy="252" r="3.5" fill="#CEBCA8" opacity="0.42" />
    <circle cx="110" cy="260" r="4.5" fill="#CEBCA8" opacity="0.38" />
    <circle cx="56"  cy="240" r="3"   fill="#CEBCA8" opacity="0.36" />
    <circle cx="165" cy="237" r="3.5" fill="#CEBCA8" opacity="0.36" />

    {/* ── Borde roto del huevo (dentado) ── */}
    <path
      d="M46 195
         L55 182 L63 193 L71 178 L79 190 L86 175 L93 187
         L99 173 L105 184 L110 171 L115 184 L121 173 L127 187
         L134 175 L141 190 L149 178 L157 193 L165 182 L174 195 Z"
      fill="#D8D2C4"
    />
    <path
      d="M46 195 L55 182 L63 193 L71 178 L79 190 L86 175 L93 187
         L99 173 L105 184 L110 171 L115 184 L121 173 L127 187
         L134 175 L141 190 L149 178 L157 193 L165 182 L174 195"
      fill="none" stroke="#BEB8AA" strokeWidth="1.2"
    />

    {/* ── CUERPO DEL DINO (dentro del huevo) ── */}
    <ellipse cx="110" cy="207" rx="56" ry="44" fill="#9EC890" />
    {/* Barriga más clara */}
    <ellipse cx="110" cy="214" rx="36" ry="30" fill="#C8E8B8" opacity="0.65" />

    {/* ── CABEZA (grande, proporciones bebé) ── */}
    <circle cx="110" cy="100" r="72" fill="#9EC890" />
    {/* Área del hocico / mentón (más clara) */}
    <ellipse cx="110" cy="136" rx="46" ry="30" fill="#B8DCA8" opacity="0.48" />

    {/* ── ESPINAS EN LA CABEZA ── */}
    <ellipse cx="110" cy="26"  rx="13" ry="20" fill="#78A068" />
    <ellipse cx="87"  cy="32"  rx="10" ry="15" fill="#78A068" transform="rotate(-23 87 32)" />
    <ellipse cx="133" cy="32"  rx="10" ry="15" fill="#78A068" transform="rotate(23 133 32)" />
    <ellipse cx="68"  cy="48"  rx="8"  ry="11" fill="#78A068" transform="rotate(-40 68 48)" />
    <ellipse cx="152" cy="48"  rx="8"  ry="11" fill="#78A068" transform="rotate(40 152 48)" />

    {/* ── MANCHAS / TEXTURA EN LA CABEZA ── */}
    <circle cx="88"  cy="68"  r="5.5" fill="#82AC72" opacity="0.42" />
    <circle cx="132" cy="65"  r="5"   fill="#82AC72" opacity="0.42" />
    <circle cx="120" cy="76"  r="3.5" fill="#82AC72" opacity="0.36" />
    <circle cx="96"  cy="52"  r="4"   fill="#82AC72" opacity="0.36" />
    <circle cx="76"  cy="62"  r="3.5" fill="#82AC72" opacity="0.32" />
    <circle cx="148" cy="80"  r="3.5" fill="#82AC72" opacity="0.32" />
    <circle cx="142" cy="58"  r="3"   fill="#82AC72" opacity="0.28" />

    {/* ── CEJAS ── */}
    <path d="M64 79 Q74 71 87 75"  stroke="#3A2010" strokeWidth="3"   fill="none" strokeLinecap="round" />
    <path d="M156 79 Q146 71 133 75" stroke="#3A2010" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* ── OJOS ── */}
    {/* Izquierdo */}
    <circle cx="82"  cy="97" r="25" fill="white" />
    <circle cx="82"  cy="97" r="18" fill="#3A2010" />
    <circle cx="82"  cy="97" r="10" fill="#5A3520" />
    {/* Brillos */}
    <circle cx="72"  cy="87" r="7.5" fill="white" />
    <circle cx="76"  cy="106" r="3.2" fill="white" opacity="0.48" />
    {/* Pestañas izquierdo */}
    <path d="M62 87 Q61 80 65 79"  stroke="#3A2010" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M68 81 Q68 74 73 74"  stroke="#3A2010" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M76 78 Q77 71 82 72"  stroke="#3A2010" strokeWidth="2"   fill="none" strokeLinecap="round" />

    {/* Derecho */}
    <circle cx="138" cy="97" r="25" fill="white" />
    <circle cx="138" cy="97" r="18" fill="#3A2010" />
    <circle cx="138" cy="97" r="10" fill="#5A3520" />
    {/* Brillos */}
    <circle cx="128" cy="87" r="7.5" fill="white" />
    <circle cx="132" cy="106" r="3.2" fill="white" opacity="0.48" />
    {/* Pestañas derecho */}
    <path d="M158 87 Q159 80 155 79"  stroke="#3A2010" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M152 81 Q152 74 147 74"  stroke="#3A2010" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M144 78 Q143 71 138 72"  stroke="#3A2010" strokeWidth="2"   fill="none" strokeLinecap="round" />

    {/* ── FOSAS NASALES ── */}
    <circle cx="104" cy="122" r="4.5" fill="#5A8848" opacity="0.55" />
    <circle cx="116" cy="122" r="4.5" fill="#5A8848" opacity="0.55" />

    {/* ── MEJILLAS ── */}
    <circle cx="57"  cy="122" r="21" fill="#F4A8A0" opacity="0.42" />
    <circle cx="163" cy="122" r="21" fill="#F4A8A0" opacity="0.42" />

    {/* ── BOCA (sonrisa abierta sin dientes) ── */}
    <path
      d="M90 133 Q100 147 110 142 Q120 139 124 133"
      stroke="#5A8848"
      strokeWidth="2.8"
      fill="none"
      strokeLinecap="round"
    />
    {/* Interior boca — tono suave */}
    <path
      d="M94 136 Q102 146 112 142 Q120 140 122 136"
      stroke="#E88880"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.38"
    />

    {/* ── MANOS (asomándose sobre el borde del huevo) ── */}
    {/* Mano izquierda — palma */}
    <ellipse cx="55"  cy="188" rx="21" ry="15" fill="#9EC890" />
    {/* Deditos izquierda */}
    <circle cx="38"  cy="183" r="7"  fill="#9EC890" />
    <circle cx="44"  cy="175" r="7"  fill="#9EC890" />
    <circle cx="53"  cy="170" r="7"  fill="#9EC890" />

    {/* Mano derecha — palma */}
    <ellipse cx="165" cy="188" rx="21" ry="15" fill="#9EC890" />
    {/* Deditos derecha */}
    <circle cx="182" cy="183" r="7"  fill="#9EC890" />
    <circle cx="176" cy="175" r="7"  fill="#9EC890" />
    <circle cx="167" cy="170" r="7"  fill="#9EC890" />
  </svg>
)

export default DinoIllustration
