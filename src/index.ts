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
 * The word is only pluralized if quantity is undefined, 0 or greater
 * than 1. Uses the custom plural form if provided.
 *
 * *Warning*: expects single or compound words, not whole sentences.
 * @throws if splitting the string by spaces or dashes produces more than 3 words.
 */
export default function plural(
  word: string,
  quantity?: number,
  customPlural?: string,
): string {
  const shouldPluralize =
    quantity === undefined || quantity === 0 || Math.abs(quantity) > 1;

  if (shouldPluralize) {
    if (customPlural !== undefined) return customPlural;

    const [lowerCase, caps] = decapitalize(word);
    const pluralized = _plural(lowerCase);
    return capitalize(pluralized, caps);
  } else {
    return word;
  }
}
