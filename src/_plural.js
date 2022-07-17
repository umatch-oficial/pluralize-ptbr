// noinspection JSNonASCIINames,NonAsciiCharacters

/**
 * Palavras que não alteram no plural.
 */
const noop = [/^não$/, /(as|is|us|os|x)$/];

/**
 * Palavras com plural pré-determinado.
 */
const excecoes = {
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
  pão: 'pães',
  raiz: 'raízes',
  sênior: 'seniores',
};

/**
 * Palavras com as seguintes terminações:
 * adicionar 's' ou 'es' no final
 */
const adicoes = [
  [/(a|e|i|o|u|ã|ãe)$/, 's'],
  [/(r|z|n|ás|ís)$/, 'es'],
];

const consoantes = '[bcdfghjklmnpqrstvwxyz]';
const vogais = '[aeiou]';
const vogaisAcentuadas = '[áéíóú]';
const silabaTonica = `${consoantes}*${vogais}*${vogaisAcentuadas}+${vogais}*${consoantes}*`;
const silabaAtonica = `${consoantes}${vogais}+${consoantes}*`;

/**
 * Palavras com as seguintes terminações:
 * substituir a terminação
 */
const substituicoes = [
  ['al$', 'ais'],
  ['el$', 'eis'],
  ['ol$', 'óis'],
  ['ul$', 'uis'],
  ['il$', 'is'],
  ['m$', 'ns'],
  ['(ês|és)$', 'eses'],
  ['ão$', 'ões'],
];

const _plural = word => {
  for (const regex of noop) {
    if (word.match(regex)) {
      return word;
    }
  }

  if (Object.keys(excecoes).includes(word)) {
    return excecoes[word];
  }

  for (const [regex, addition] of adicoes) {
    if (word.match(regex)) {
      return word + addition;
    }
  }

  for (const [pattern, sub] of substituicoes) {
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

module.exports = _plural;
