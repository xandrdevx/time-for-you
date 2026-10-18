// Inline SVG icons for the footer social links, keyed by the label used in SOCIAL_LINKS.
export interface SocialIcon {
  path: string;
  isOutline: boolean;
}

export const SOCIAL_ICON_VIEWBOX = '0 0 24 24';

// Outline icons for the contact items in the top bar.
export const CONTACT_ICONS: Record<'location' | 'phone' | 'email' | 'hours', SocialIcon> = {
  location: {
    path: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z M12 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    isOutline: true,
  },
  phone: {
    path: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
    isOutline: true,
  },
  email: {
    path: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
    isOutline: true,
  },
  hours: {
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2',
    isOutline: true,
  },
};

export const SOCIAL_ICONS: Record<string, SocialIcon> = {
  Facebook: {
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    isOutline: false,
  },
  Instagram: {
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M17.5 6.5h.01',
    isOutline: true,
  },
};
