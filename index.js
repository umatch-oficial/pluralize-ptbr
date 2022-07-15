/**
 * Palavras com plural pré-determinado.
 */
const exceptions = {
  mal: 'males',
  cônsul: 'cônsules',
  mel: 'méis',
  fel: 'féis',
  cal: 'cais',
  não: 'não',
};

/**
 * Palavras terminadas em a|e|i|o|u|ã|ãe|ão
 * recebem 's' no final
 */
const additions = [
  [/(a|e|i|o|u|ã|ãe)$/, 's'],
  [/(r|z|n|ás)$/, 'es'],
  [/(is|us|os)$/, ''],
];

/**
 * Palavras terminadas em al|el|ol|ul|il|m
 * têm a terminação substituída
 */
const substitutions = [
  [/al$/, 'ais'],
  [/el$/, 'eis'],
  [/ol$/, 'ois'],
  [/ul$/, 'uis'],
  [/il$/, 'is'],
  [/m$/, 'ns'],
  [/ês$/, 'eses'],
  [/ão$/, 'ões'],
];

const _plural = word => {
  if (Object.keys(exceptions).includes(word)) {
    return exceptions[word];
  }

  for (const [regex, addition] of additions) {
    if (word.match(regex)) {
      return word + addition;
    }
  }

  for (const [regex, sub] of substitutions) {
    if (word.match(regex)) {
      /**
       * Se a palavra for paroxítona ou proparoxítona,
       * troca-se 'il' por 'eis'
       */
      if (sub === 'is' && word.match(/([áéíóú])/)) {
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
