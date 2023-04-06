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
 * If quantity is given, it prefixes the output. The word is only
 * pluralized if |quantity| > 1.
 */
export default function plural(word: string, quantity: number | null = null): string {
  if (quantity && Math.abs(quantity) <= 1 && Math.abs(quantity) !== 0) {
    return `${quantity} ${word}`;
  }

  const trimmed = word.trim();
  const [lowerCase, caps] = decapitalize(trimmed);
  const pluralized = _plural(lowerCase);
  const originalCased = capitalize(pluralized, caps);

  return `${quantity !== null ? quantity + ' ' : ''}${originalCased}`;
}
