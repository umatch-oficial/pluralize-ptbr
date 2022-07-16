// noinspection JSNonASCIINames,NonAsciiCharacters

/**
 * Palavras com plural pré-determinado.
 */
const exceptions = {
  alemão: 'alemães',
  cal: 'cais',
  capitão: 'capitães',
  caráter: 'carateres',
  charlatão: 'charlatães',
  cônsul: 'cônsules',
  fel: 'féis',
  júnior: 'juniores',
  mal: 'males',
  mel: 'méis',
  não: 'não',
  pão: 'pães',
  raiz: 'raízes',
  sênior: 'seniores',
};

/**
 * Palavras terminadas em a|e|i|o|u|ã|ãe|ão
 * recebem 's' no final
 */
const additions = [
  [/(a|e|i|o|u|ã|ãe)$/, 's'],
  [/(r|z|n|ás|ís)$/, 'es'],
  [/(as|is|us|os|x)$/, ''],
];

/**
 * Palavras terminadas em al|el|ol|ul|il|m
 * têm a terminação substituída
 */
const substitutions = [
  ['al$', 'ais'],
  ['el$', 'eis'],
  ['ol$', 'óis'],
  ['ul$', 'uis'],
  ['il$', 'is'],
  ['m$', 'ns'],
  ['(ês|és)$', 'eses'],
  ['ão$', 'ões'],
];

const consoantes = '[bcdfghjklmnpqrstvwxyz]';
const vogais = '[aeiou]';
const vogaisAcentuadas = '[áéíóú]';
const silabaTonica = `${consoantes}*${vogais}*${vogaisAcentuadas}+${vogais}*${consoantes}*`;
const silabaAtonica = `${consoantes}${vogais}+${consoantes}*`;

const _plural = word => {
  if (Object.keys(exceptions).includes(word)) {
    return exceptions[word];
  }

  for (const [regex, addition] of additions) {
    if (word.match(regex)) {
      return word + addition;
    }
  }

  for (const [pattern, sub] of substitutions) {
    const regex = new RegExp(pattern);
    const regexParoxitona = new RegExp(silabaTonica + pattern);
    const regexProparoxitona = new RegExp(silabaTonica + silabaAtonica + pattern);
    const palavraProparoxitona = word.match(regexProparoxitona);
    const palavraParoxitona = word.match(regexParoxitona);
    const palavraOxitona = !(palavraParoxitona || palavraProparoxitona);

    if (word.match(regex)) {
      /**
       * Se a palavra for oxítona,
       * troca-se 'el' por 'éis'
       */
      if (pattern === 'el$' && palavraOxitona) {
        return word.replace(regex, 'éis');
      }
      /**
       * Se a palavra for paroxítona ou proparoxítona,
       * troca-se 'il' por 'eis'
       */
      if (pattern === 'il$' && (palavraParoxitona || palavraProparoxitona)) {
        return word.replace(regex, 'eis');
      }

      return word.replace(regex, sub);
    }
  }

  return word + 's';
};

/**
 * Returns the lowercase version of the word and an array of booleans
 * indicating whether the letter at each position was uppercase.
 *
 * @param {string} word
 *
 * @returns [string, boolean[]]
 */
const decapitalize = word => {
  const lower = word.toLowerCase();
  const diff = lower.split('').map((letter, i) => letter !== word[i]);

  return [lower, diff];
};

/**
 * Returns the original casing of the word by applying uppercase at
 * the correct positions.
 *
 * @param {string} word
 * @param {boolean[]} positions
 *
 * @returns string
 */
const capitalize = (word, positions) => {
  const letters = word.split('');

  return letters
    .map((letter, i) => (positions[i] ? letter.toUpperCase() : letter))
    .join('');
};

/**
 * Returns the quantity followed by the word, which is in plural
 * form if |quantity| > 1.
 *
 * @param {number} quantity
 * @param {string} word
 * @returns {string}
 */
const plural = (quantity, word) => {
  if (Math.abs(quantity) <= 1) return `${quantity} ${word}`;

  const [lowerCase, caps] = decapitalize(word);
  const pluralized = _plural(lowerCase);
  const originalCased = capitalize(pluralized, caps);

  return `${quantity} ${originalCased}`;
};

module.exports = plural;
