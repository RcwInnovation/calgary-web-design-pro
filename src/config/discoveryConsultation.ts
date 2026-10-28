export const discoveryConsultation = {
  priceCAD: 0,
  durationMinutes: 30,
  obligation: false,
} as const;

export function getDiscoveryConsultationCopy(language: 'es' | 'en') {
  return language === 'es'
    ? {
        hero: 'Solicitar consulta gratuita',
        dock: 'Consulta gratuita',
        badge: 'GRATIS',
        detail: `✦ Sesión inicial de ${discoveryConsultation.durationMinutes} min sin costo · Sin compromiso`,
      }
    : {
        hero: 'Request Free Consultation',
        dock: 'Free Consultation',
        badge: 'FREE',
        detail: `✦ Free ${discoveryConsultation.durationMinutes}-min Discovery Session · No Obligation`,
      };
}