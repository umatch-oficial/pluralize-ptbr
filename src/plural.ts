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
 * Returns the plural of a string, which can be a single or a
 * compound word.
 *
 * @throws {Error} if splitting the string by spaces or dashes produces more than 3 words.
 */
export function getPluralForm(string: string): string {
  const parts = string.split(/(\s|-)+/); // words AND separators (e.g. ['terça', '-', 'feira'])
  const plurals = parts.map(pluralSingleWord);
  switch (parts.length) {
    case 5:
      if (PREPOSITIONS.includes(parts[2])) {
        // words separated by a preposition — the first part is pluralized
        return [plurals[0], ...parts.slice(1)].join('');
      } else {
        // the last part is pluralized
        return [...parts.slice(0, 4), plurals[4]].join('');
      }
    case 3:
      if (parts[2] === 'feira') {
        // the days of the week — both parts are pluralized
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
}

/**
 * References for the rules:
 * https://www.normaculta.com.br/singular-e-plural/
 * https://www.todamateria.com.br/plural-dos-substantivos-compostos/
 */

/**
 * Words with an invariant plural form.
 */
const NOOP = [/^não$/, /(as|is|us|os|x)$/];

/**
 * Words whose plural does not abide to any rule.
 */
const EXCEPTIONS: { [_: string]: string } = {
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

const consonant = '[bcdfghjklmnpqrstvwxyz]';
const vowel = '[aeiou]';
const accentedVowel = '[áéíóú]';
const stressedSyllable = `${consonant}*${vowel}*${accentedVowel}+${vowel}*${consonant}*`;
const unstressedSyllable = `${consonant}${vowel}+${consonant}*`;

/**
 * Words that end with the left pattern: substitute it by the right pattern.
 */
const SUBSTITUTIONS = [
  ['al$', 'ais'],
  // oxytone + el
  [`^(?!\\w*${stressedSyllable}(${unstressedSyllable})?el)(.+)el$`, '$2éis'],
  ['el$', 'eis'],
  ['ol$', 'óis'],
  ['ul$', 'uis'],
  // paroxytone or properoxytone + il
  [`(${stressedSyllable}(${unstressedSyllable})?)il$`, '$1eis'],
  ['il$', 'is'],
  ['m$', 'ns'],
  ['(ês|és)$', 'eses'],
  // paroxytone + ão
  [`(${stressedSyllable})ão$`, '$1ãos'],
  ['ão$', 'ões'],
];

/**
 * Words that end with the left character/diphthong: append 's' or 'es'.
 */
const ADDITIONS = [
  [/(a|e|i|o|u|ã|ãe)$/, 's'],
  [/(r|z|n|ás|ís)$/, 'es'],
];

/**
 * Applies the first matching rule from the above. If none match,
 * appends 's'.
 */
function pluralSingleWord(word: string): string {
  for (const regex of NOOP) {
    if (word.match(regex)) {
      return word;
    }
  }

  if (word in EXCEPTIONS) {
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
}
