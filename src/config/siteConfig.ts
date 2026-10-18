import type { ContactDetails, NavigationItem, SocialLink } from '../types/siteTypes';

import logoImage from '../assets/images/logo-time-for-you.png';

export const SITE_NAME = 'Time For You';

export const SITE_LOGO = {
  image: logoImage,
  altText: 'Time For You logo: lotusbloem boven twee handen',
  // 2x the largest displayed size (5.5rem) for sharp rendering on high-density screens
  headerWidth: 176,
  headerHeight: 176,
  // 2x the displayed size of the large logo in the newsletter section (16rem)
  newsletterWidth: 512,
  newsletterHeight: 512,
};

export const SITE_TAGLINE = 'Voor een ontspannende of energetische massage.';

export const SITE_CLOSING_LINE = "It's Time For You now!";

export const CONTACT_DETAILS: ContactDetails = {
  location: 'Adegem, België',
  phone: '+32 (0) 473/611070',
  phoneLink: 'tel:+32473611070',
  email: 'massage.time.for.u@gmail.com',
};

export const OPENING_HOURS_LINES: string[] = ['Ma-Do : 18h30', 'Za-Zo 13h-17h', 'Vrij gesloten'];

// Separator between the opening-hours lines when they are shown on one line (top bar).
export const OPENING_HOURS_SEPARATOR = ' / ';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Wie ben ik?', path: '/wie-ben-ik' },
  { label: 'Behandelingen', path: '/behandelingen' },
  { label: 'Prijzen', path: '/prijzen' },
  { label: 'Webshopje', path: '/webshopje' },
  { label: 'CadeauBon', path: '/cadeaubon' },
  { label: 'Recensies', path: '/recensies' },
  { label: 'FAQ', path: '/faq' },
];

export const CONTACT_PAGE: NavigationItem = { label: 'Contacteer mij', path: '/contacteer-mij' };

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', url: 'https://www.facebook.com/massageTFY/' },
  { label: 'Instagram', url: 'https://www.instagram.com/time.for.you.massage/' },
];

export const NEWSLETTER_TEXT = {
  heading: 'Nieuwsbrief',
  subheading: 'Voor uw ontspanning',
  buttonLabel: 'Schrijf mij in',
  privacyNote: 'Wij doen niet aan spam mail en uw gegevens zijn vertrouwelijk.',
  spamFolderNotes: [
    'Controleer uw spam. Verplaats indien nodig van spam naar je inbox.',
    'Check ook even in je andere mappen mocht je niets in je inbox vinden.',
  ],
};
