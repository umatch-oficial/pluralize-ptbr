const _plural = require('./_plural');

const preposicoes = [
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
 * Returns the lowercase version of the string and an array of booleans
 * indicating whether the letter at each position was uppercase.
 *
 * @param {string} string
 *
 * @returns [string, boolean[]]
 */
const decapitalize = string => {
  const lower = string.toLowerCase();
  const diff = lower.split('').map((letter, i) => letter !== string[i]);

  return [lower, diff];
};

/**
 * Returns the original casing of the string by applying uppercase at
 * the correct positions.
 *
 * @param {string} string
 * @param {boolean[]} positions
 *
 * @returns string
 */
const capitalize = (string, positions) => {
  const letters = string.split('');

  return letters
    .map((letter, i) => (positions[i] ? letter.toUpperCase() : letter))
    .join('');
};

/**
 * Returns the plural form of the word.
 *
 * If quantity is given, it prefixes the output and the word is only
 * pluralized if |quantity| > 1.
 *
 * @param {string} word
 * @param {number | null} [quantity]
 * @returns {string}
 */
const plural = (word, quantity = null) => {
  if (quantity && Math.abs(quantity) <= 1 && Math.abs(quantity) !== 0)
    return `${quantity} ${word}`;

  const trimmed = word.trim();
  const [lowerCase, caps] = decapitalize(trimmed);
  const parts = lowerCase.split(/(\s|-)+/);
  let pluralized;
  switch (parts.length) {
    case 5:
      // Palavras unidas por preposição
      if (preposicoes.includes(parts[2])) {
        // a primeira parte passa para o plural
        pluralized = [_plural(parts[0]), ...parts.slice(1)].join('');
      } else {
        // a última parte passa para o plural
        pluralized = [...parts.slice(0, 4), _plural(parts[4])].join('');
      }
      break;
    case 3:
      if (parts[2] === 'feira') {
        // ambas partes passam para o plural
        pluralized = [_plural(parts[0]), parts[1], _plural(parts[2])].join('');
      } else {
        // a última parte passa para o plural
        pluralized = [...parts.slice(0, 2), _plural(parts[2])].join('');
      }
      break;
    case 1:
      pluralized = _plural(parts[0]);
      break;
    default:
      throw new Error('Word has too many parts');
  }
  const originalCased = capitalize(pluralized, caps);

  return `${quantity !== null ? quantity + ' ' : ''}${originalCased}`;
};

module.exports = plural;
