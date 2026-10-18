import welcomeImage from '../assets/images/home-welcome.jpg';

// Welcome text copied verbatim from the current site; do not reword.
// Paragraph breaks follow the original page.
export const HOME_WELCOME = {
  greeting: 'Beste bezoeker',
  paragraphs: [
    'Dankjewel voor je bezoek aan deze site. Je bent hier niet toevallig terechtgekomen.',
    'Je hebt nood aan ontspanning? Of je zit met een emotionele blokkade? Zit je in de knoop met jezelf of heb je nood om terug te keren naar jezelf, naar je innerlijke? Dan is Time For You the place to be.',
    'Bij mij kan je terecht voor meerdere vormen van massage zoals ontspanningsmassage, Lomi Lomi ...... voor elk wat wils. Verken gerust de mogelijkheden en tot binnenkort.',
  ],
};

// "It's Time For You now!" split over three lines, as on the original page.
export const HOME_CLOSING_LINES = {
  lead: "It's",
  highlight: 'Time For You',
  tail: 'now!',
};

// The photo sits in the normal flow beside the welcome text, never behind the header or over text.
export const HOME_WELCOME_IMAGE = {
  image: welcomeImage,
  altText: 'Opgerolde handdoek, kaarsen, olie en roze zout als sfeerbeeld van een ontspanningsmassage',
  // Natural size of the source file
  width: 540,
  height: 400,
};

export const HOME_HERO_BUTTON_LABEL = 'Ontdek de behandelingen';
