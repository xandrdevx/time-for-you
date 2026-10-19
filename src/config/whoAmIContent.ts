import portraitImage from '../assets/images/wie-ben-ik/ikke.jpg';

// TODO: the paragraphs below are temporary placeholder text. The site owner will add the real
// "Wie ben ik?" copy later (original: https://www.time-for-you.be/index.php/wie-ben-ik).
// The headings are copied from the original.
export const WHO_AM_I_CONTENT = {
  pageHeading: 'Wie ben ik?',
  breadcrumbHomeLabel: 'Home',
  breadcrumbAriaLabel: 'Kruimelpad',
  welcomeHeading: 'Welkom. Mijn naam is Stephane.',
  paragraphs: [
    'Hier komt binnenkort een persoonlijke introductie. Deze tekst is tijdelijk en wordt later vervangen.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
};

// The portrait sits in the normal flow next to the text, never behind the header or over text.
export const WHO_AM_I_IMAGE = {
  image: portraitImage,
  altText: 'Portretfoto van Stephane, de masseur van Time For You',
  // Natural size of the source file
  width: 1079,
  height: 2037,
  // Size rendered on the page: same aspect ratio as the source, so the whole photo is shown (no crop)
  displayWidth: 640,
  displayHeight: 1208,
};
