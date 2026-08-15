// FR-031: WhatsApp click-to-chat configuration
// PLACEHOLDER — replace WHATSAPP_NUMBER with the real business number before go-live
export const WHATSAPP_NUMBER = '+919642047100';
export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;

export const BUSINESS_HOURS = {
  timezone: 'Asia/Kolkata',
  openDays: [1, 2, 3, 4, 5, 6] as number[], // Mon–Sat (0 = Sunday)
  openHour: 9,
  closeHour: 18,
} as const;
