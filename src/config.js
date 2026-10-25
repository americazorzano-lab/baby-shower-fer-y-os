// ============================================================
// 🦕  CONFIGURACIÓN DE LA INVITACIÓN DE BABY SHOWER
// ============================================================
// Edita solo los valores marcados con ✏️ para personalizar.
// No cambies los nombres de las propiedades.
// ============================================================

export const config = {

  // ─────────────────────────────────────────
  // 👶  DATOS DEL BEBÉ Y LA FAMILIA
  // ─────────────────────────────────────────
  babyName: '¡Bebé en camino!',      // ✏️ Nombre del bebé (sexo aún no revelado)
  parentsNames: 'América & Osvaldo', // ✏️ Nombre(s) de los papás

  // ─────────────────────────────────────────
  // 📅  FECHA Y HORA DEL EVENTO
  // ─────────────────────────────────────────
  eventDateTime: '2026-12-05T16:00:00', // ✏️ Sábado 5 de diciembre de 2026
  eventTimeDisplay: '4:00 p.m.',         // ✏️ Hora en formato legible

  // ─────────────────────────────────────────
  // 📍  LUGAR DEL EVENTO
  // ─────────────────────────────────────────
  venue: 'Lugar de celebración',  // ✏️ Puedes actualizar el nombre del lugar
  address: 'Ver ubicación en el mapa', // ✏️ La dirección está en el pin de Google Maps
  city: 'Ciudad de México, CDMX',

  // ─────────────────────────────────────────
  // 🗺️  GOOGLE MAPS
  // ─────────────────────────────────────────
  googleMapsUrl: 'https://maps.app.goo.gl/e9LvvEtpGr39kPis7', // ✏️ URL proporcionada

  // ─────────────────────────────────────────
  // 📱  WHATSAPP PARA CONFIRMACIÓN
  // ─────────────────────────────────────────
  // Formato: código país + número (sin +, espacios ni guiones)
  // México CDMX: 52 + 55 + 8 dígitos
  whatsappNumber: '525543554505', // ✏️

  // ─────────────────────────────────────────
  // 🎁  MESA DE REGALOS
  // ─────────────────────────────────────────
  giftRegistryUrl:
    'https://www.amazon.com.mx/baby-reg/americazorzano-martinez-marzo-2027-ciudaddemexico/3039P4YESZ3ED?ref_=cm_sw_r_apin_dp_16VJTYG2FPJ4AZQQX12R_1&language=en-US',
  giftRegistryStore: 'Amazon México', // ✏️

  // ─────────────────────────────────────────
  // 💬  MENSAJE DE BIENVENIDA
  // ─────────────────────────────────────────
  welcomeMessage:
    'Con el corazón lleno de emoción y alegría, queremos compartir contigo uno de los momentos más especiales de nuestras vidas. Pronto llegará a nuestros brazos el ser más esperado y amado.',
  welcomeClosing: '¡Acompáñanos a celebrar su llegada!',
}

// ─────────────────────────────────────────
// Funciones auxiliares
// ─────────────────────────────────────────

/** URL de Google Maps — usa la URL configurada o construye una desde la dirección. */
export const getMapsUrl = () => {
  if (config.googleMapsUrl) return config.googleMapsUrl
  const q = encodeURIComponent(`${config.address}, ${config.city}`)
  return `https://maps.google.com/?q=${q}`
}

/**
 * URL de WhatsApp con mensaje de confirmación precargado.
 * El mensaje incluye campos básicos de RSVP para que el invitado los complete.
 */
export const getWhatsAppUrl = () => {
  if (!config.whatsappNumber) return null

  const message =
`¡Hola América y Osvaldo! 🦕✨

Confirmo mi asistencia a su Baby Shower 🥚

👤 Mi nombre completo: 
👥 Total de invitados (incluyéndome): 
🍽️ ¿Restricciones alimentarias?: 
💌 Mensaje especial para los papás: 

¡Nos vemos el sábado 5 de diciembre! 🦖💚`

  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Fecha formateada en español: "sábado, 5 de diciembre de 2026". */
export const getFormattedDate = () => {
  const date = new Date(config.eventDateTime)
  return date.toLocaleDateString('es-MX', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
    // Ajusta la zona horaria local para evitar desfase de un día
    timeZone: 'America/Mexico_City',
  })
}
