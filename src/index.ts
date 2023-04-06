import _plural from './_plural';

/**
 * Returns the lowercase version of the string and an array of booleans
 * indicating whether the letter at each position was uppercase.
 */
function decapitalize(string: string): [string, boolean[]] {
  const lower = string.toLowerCase();
  const diff = lower.split('').map((letter, i) => letter !== string[i]);

  return [lower, diff];
}

/**
 * Returns the original casing of the string by applying uppercase at
 * the correct positions.
 */
function capitalize(string: string, positions: boolean[]): string {
  return string
    .split('')
    .map((letter, i) => (positions[i] ? letter.toUpperCase() : letter))
    .join('');
}

/**
 * Returns the plural form of the word.
 *
 * The word is only pluralized if quantity is undefined, 0 or greater than 1.
 *
 * *Warning*: expects single or compound words, not whole sentences.
 */
export default function plural(word: string, quantity?: number): string {
  if (quantity && Math.abs(quantity) <= 1) return word;

  const [lowerCase, caps] = decapitalize(word);
  const pluralized = _plural(lowerCase);
  return capitalize(pluralized, caps);
}
