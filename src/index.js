const _plural = require('./_plural');

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
 * If quantity is given, it prefixes the output. The word is only
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
  const pluralized = _plural(lowerCase);
  const originalCased = capitalize(pluralized, caps);

  return `${quantity !== null ? quantity + ' ' : ''}${originalCased}`;
};

module.exports = plural;
