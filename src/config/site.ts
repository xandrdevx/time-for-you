// Site-wide constants: contact info, navigation, socials.
// Centralised here so nothing meaningful is hard-coded/scattered inline
// (see CLAUDE.md conventions — no magic numbers/strings).

export const BUSINESS_NAME = 'Time For You';
export const BUSINESS_OWNER = 'Stephane';
export const BUSINESS_SLOGAN = 'Voor uw ontspanning';
export const BUSINESS_TAGLINE = "It's Time For You now!";

export const CONTACT_ADDRESS = 'Oude staatsbaan 174, 9991 Adegem, België';
export const CONTACT_PHONE_DISPLAY = '+32 (0) 473 61 10 70';
export const CONTACT_PHONE_TEL = '+32473611070';
export const CONTACT_EMAIL = 'massage.time.for.u@gmail.com';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/massageTFY/',
  instagram: 'https://www.instagram.com/time.for.you.massage/',
  whatsapp: 'https://wa.me/Stephane',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

// The 9 navigation items, in the order used across the site (header + any
// footer sitemap links).
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Wie ben ik?', href: '/wie-ben-ik' },
  { label: 'Behandelingen', href: '/behandelingen' },
  { label: 'Contacteer mij', href: '/contacteer-mij' },
  { label: 'Webshopje', href: '/webshop' },
  { label: 'Recensies', href: '/recensies' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'CadeauBon', href: '/cadeaubon' },
  { label: 'FAQ', href: '/faq' },
];

export const CURRENT_YEAR = new Date().getFullYear();
export const COPYRIGHT_NOTICE = `© ${CURRENT_YEAR} ${BUSINESS_NAME}`;

// Small self-promo credit line in the footer — plain text, no link.
export const DEVELOPER_CREDIT = 'Website door Xandr';

export const NEWSLETTER_DISCLAIMER = [
  'Wij doen niet aan spam mail en uw gegevens zijn vertrouwelijk.',
  'Controleer uw spam. Verplaats indien nodig van spam naar je inbox.',
  'Check ook even in je andere mappen mocht je niets in je inbox vinden.',
];

export const REVIEWS_PER_PAGE = 12;
