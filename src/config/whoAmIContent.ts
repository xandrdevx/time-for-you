import portraitImage from '../../claude-input-files/selfie.jpg';

// TODO: the paragraphs below are a paraphrase of the original page
// (https://www.time-for-you.be/index.php/wie-ben-ik), NOT the verbatim text. Replace them with the
// client's exact copy once it is supplied. The headings are copied from the original.
export const WHO_AM_I_CONTENT = {
  pageHeading: 'Wie ben ik?',
  breadcrumbHomeLabel: 'Home',
  breadcrumbAriaLabel: 'Kruimelpad',
  welcomeHeading: 'Welkom. Mijn naam is Stephane.',
  paragraphs: [
    'Time For You is ontstaan uit mijn waardering voor aanraking, rust en het gevoel veilig te zijn en echt gezien te worden.',
    'Mijn weg naar dit werk was niet gepland maar groeide stap voor stap. Door de jaren heen leerde ik het lichaam kennen als een toegang tot rust, bewustzijn en verbinding.',
    'Ik verdiepte me in verschillende vormen van lichaamswerk, ontspanning, energetische afstemming en bewuste aanraking, met één doel: begrijpen wat een lichaam nodig heeft om tot rust te komen en vrijer te ademen.',
    'Mijn aanbod gaat van een zachte ontspanningsmassage tot dieper lichaamswerk met aandacht voor ademhaling en lichaamsbewustzijn.',
    'Een sessie is meer dan een massage: het is een moment om te vertragen, zonder iets te moeten presteren of oplossen.',
    'Ik werk rustig en zacht, afgestemd op jouw ritme en grenzen. Veiligheid, respect en vertrouwen vormen de basis.',
    'Ik zie het als mijn taak om mensen te helpen terug te verbinden met zichzelf, ruimte te maken voor nieuwe inzichten en stap voor stap meer zelfbewustzijn te vinden.',
    'Je hebt geen voorkennis of bijzondere vaardigheden nodig. Iedereen is welkom zoals hij of zij is.',
  ],
};

// The portrait sits in the normal flow next to the text, never behind the header or over text.
export const WHO_AM_I_IMAGE = {
  image: portraitImage,
  altText: 'Portretfoto van Stephane, de masseur van Time For You',
  // Natural size of the source file
  width: 1079,
  height: 2037,
  // Crop shown on the page (the source is a tall selfie)
  displayWidth: 640,
  displayHeight: 800,
};
