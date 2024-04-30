import { _plural } from './_plural';

/**
 * Returns the plural form of the word.
 *
 * The word is only pluralized if quantity is undefined or not 1. Uses
 * the custom plural form if provided.
 *
 * *Warning*: expects single or compound words, not whole sentences.
 * @throws {Error} if splitting the string by spaces or dashes produces more than 3 words.
 */
export function plural(word: string, quantity?: number, customPlural?: string): string {
  const shouldPluralize = quantity === undefined || Math.abs(quantity) !== 1;

  if (shouldPluralize) {
    if (customPlural !== undefined) return customPlural;

    const [lowerCase, caps] = uncapitalize(word);
    const pluralized = _plural(lowerCase);
    return capitalize(pluralized, caps);
  } else {
    return word;
  }
}

/**
 * Returns the lowercase version of the string and an array of booleans
 * indicating whether the letter at each position was uppercase.
 */
function uncapitalize(string: string): [string, boolean[]] {
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
