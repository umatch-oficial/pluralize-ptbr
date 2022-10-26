// noinspection JSNonASCIINames,NonAsciiCharacters

const PREPOSITIONS = [
  'a',
  'ante',
  'após',
  'até',
  'com',
  'contra',
  'da',
  'de',
  'do',
  'desde',
  'em',
  'entre',
  'para',
  'perante',
  'por',
  'sem',
  'sob',
  'sobre',
  'trás',
];

/**
 * Palavras que não alteram no plural.
 */
const NOOP = [/^não$/, /(as|is|us|os|x)$/];

/**
 * Palavras com plural pré-determinado.
 */
const EXCEPTIONS = {
  alemão: 'alemães',
  cal: 'cais',
  capitão: 'capitães',
  caráter: 'carateres',
  cidadão: 'cidadãos',
  charlatão: 'charlatães',
  cônsul: 'cônsules',
  cristão: 'cristãos',
  fel: 'féis',
  irmão: 'irmãos',
  júnior: 'juniores',
  mal: 'males',
  mel: 'méis',
  pão: 'pães',
  raiz: 'raízes',
  refrão: 'refrãos',
  sênior: 'seniores',
};

const consoantes = '[bcdfghjklmnpqrstvwxyz]';
const vogais = '[aeiou]';
const vogaisAcentuadas = '[áéíóú]';
const silabaTonica = `${consoantes}*${vogais}*${vogaisAcentuadas}+${vogais}*${consoantes}*`;
const silabaAtonica = `${consoantes}${vogais}+${consoantes}*`;

/**
 * Palavras com as seguintes terminações:
 * substituir a terminação.
 */
const SUBSTITUTIONS = [
  ['al$', 'ais'],
  // oxítona + el
  [`^(?!\\w*${silabaTonica}(${silabaAtonica})?el)(.+)el$`, '$2éis'],
  ['el$', 'eis'],
  ['ol$', 'óis'],
  ['ul$', 'uis'],
  // paroxítona ou proparoxítona + il
  [`(${silabaTonica}(${silabaAtonica})?)il$`, '$1eis'],
  ['il$', 'is'],
  ['m$', 'ns'],
  ['(ês|és)$', 'eses'],
  // paroxítona + ão
  [`(${silabaTonica})ão$`, '$1ãos'],
  ['ão$', 'ões'],
];

/**
 * Palavras com as seguintes terminações:
 * adicionar 's' ou 'es' no final.
 */
const ADDITIONS = [
  [/(a|e|i|o|u|ã|ãe)$/, 's'],
  [/(r|z|n|ás|ís)$/, 'es'],
];

const _pluralSingleWord = word => {
  for (const regex of NOOP) {
    if (word.match(regex)) {
      return word;
    }
  }

  if (Object.keys(EXCEPTIONS).includes(word)) {
    return EXCEPTIONS[word];
  }

  for (const [pattern, sub] of SUBSTITUTIONS) {
    const regex = new RegExp(pattern);
    if (word.match(regex)) {
      return word.replace(regex, sub);
    }
  }

  for (const [regex, addition] of ADDITIONS) {
    if (word.match(regex)) {
      return word + addition;
    }
  }

  return word + 's';
};

/**
 * Returns the plural of a string, which can be a single or a
 * compound word.
 */
const _plural = string => {
  const parts = string.split(/(\s|-)+/);
  const plurals = parts.map(_pluralSingleWord);
  switch (parts.length) {
    case 5:
      // words separated by preposition
      if (PREPOSITIONS.includes(parts[2])) {
        // the first part is pluralized
        return [plurals[0], ...parts.slice(1)].join('');
      } else {
        // the last part is pluralized
        return [...parts.slice(0, 4), plurals[4]].join('');
      }
    case 3:
      // the days of the week
      if (parts[2] === 'feira') {
        // both parts are pluralized
        return [plurals[0], parts[1], plurals[2]].join('');
      } else {
        // the last part is pluralized
        return [...parts.slice(0, 2), plurals[2]].join('');
      }
    case 1:
      return plurals[0];
    default:
      throw new Error('Word has too many parts');
  }
};

module.exports = _plural;
