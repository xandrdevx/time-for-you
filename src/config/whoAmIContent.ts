import portraitImage from '../assets/images/wie-ben-ik/ikke.jpg';

// Copy supplied by the site owner (claude-input-files/wie-ben-ik-text.md), kept verbatim. The grouping follows the
// owner's screenshots (claude-input-files/wbi-tekst-1..3.png): each paragraph is a list of lines that are rendered
// with a line break between them, and paragraphs are separated by white space.
// The closing line ("It's Time For You now!") comes from SITE_CLOSING_LINE, so it is not repeated here.
export const WHO_AM_I_CONTENT = {
  pageHeading: 'Wie ben ik?',
  breadcrumbHomeLabel: 'Home',
  breadcrumbAriaLabel: 'Kruimelpad',
  welcomeHeading: 'Welkom. Mijn naam is Stephane.',
  paragraphs: [
    [
      'Time For You is gegroeid vanuit een diepe liefde voor aanraking, rust en het besef hoe waardevol het kan zijn wanneer iemand zich even echt gedragen en veilig mag voelen.',
    ],
    [
      'Mijn pad naar dit werk is geen rechtlijnig verhaal geweest, maar eerder een geleidelijke verschuiving. Doorheen de jaren werd het voor mij steeds duidelijker hoe belangrijk het lichaam is als ingang naar rust, bewustzijn en verbinding. Wat begon vanuit interesse, groeide uit tot een verdiepend pad van leren, voelen en ervaren.',
    ],
    [
      'Ik heb me gaandeweg verdiept in verschillende vormen van lichaamswerk, ontspanning, energetische afstemming en bewust aanraken. Niet alleen om technieken te leren, maar vooral om beter te begrijpen wat een lichaam soms nodig heeft om te kunnen zakken, loslaten en opnieuw ademruimte te voelen.',
    ],
    [
      'Die weg bracht mij zowel bij zachte, ontspannende massages als bij meer verdiepende vormen van lichaamswerk, waarin bewust voelen, ademhaling en lichaamsbewustzijn centraal staan.',
    ],
    [
      'Wat mij daarin het meest raakt, is hoe krachtig het kan zijn wanneer iemand zich veilig genoeg voelt om even niets te moeten.',
      'Om niet sterk te hoeven zijn.',
      'Om gewoon aanwezig te mogen zijn in wat er is.',
    ],
    [
      'Voor mij is een sessie daarom veel meer dan een massage alleen.',
      'Het is een moment van vertragen. Een moment waarin je niets hoeft te bewijzen, niets hoeft op te lossen en even mag thuiskomen in jezelf.',
    ],
    [
      'Mijn manier van werken is rustig, zacht en afgestemd.',
      'Ik werk met aandacht voor jouw tempo, jouw grenzen en wat op dat moment veilig en passend voelt. Veiligheid, respect en vertrouwen vormen daarbij altijd de basis.',
    ],
    [
      'Zoals velen heb ook ik me ooit de vraag gesteld wat mijn plek is, wat mijn bijdrage mag zijn.',
      'Gaandeweg is dat voor mij helder geworden. Ik voel dat mijn weg ligt in het begeleiden van mensen om opnieuw in contact te komen met zichzelf. Om terug te kunnen voelen wat er in hen leeft, om ruimte te maken voor nieuwe inzichten en om stap voor stap terug dichter bij zichzelf te komen.',
    ],
    ['Dat is wat ik hier doe.', 'Met zachtheid, met aandacht en met respect voor ieders tempo.'],
    [
      'En dat is iets wat ik met veel zorg en betrokkenheid blijf doen, zolang dat voor mij klopt.',
      'Daar ben ik dankbaar voor.',
    ],
    [
      'Je hoeft daarvoor niets te kennen, niets te kunnen en niets te zijn.',
      'Je bent welkom zoals je bent.',
    ],
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
