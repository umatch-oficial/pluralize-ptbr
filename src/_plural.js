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
  // oxítona + el
  [`^(?!\\w*${silabaTonica}(${silabaAtonica})?el)(.+)el$`, '$2éis'],
  ['el$', 'eis'],
  ['ol$', 'óis'],
  ['ul$', 'uis'],
  // paroxítona ou proparoxítona + il
  [`(${silabaTonica}(${silabaAtonica})?)il$`, '$1eis'],
  ['il$', 'is'],
  ['m$', 'ns'],
  ['(ês|és)$', 'eses'],
  // paroxítona + ão
  [`(${silabaTonica}?)ão$`, '$1ãos'],
  ['ão$', 'ões'],
];

/**
 * Palavras com as seguintes terminações:
 * adicionar 's' ou 'es' no final
 */
const adicoes = [
  [/(a|e|i|o|u|ã|ãe)$/, 's'],
  [/(r|z|n|ás|ís)$/, 'es'],
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

  for (const [pattern, sub] of substituicoes) {
    const regex = new RegExp(pattern);
    if (word.match(regex)) {
      return word.replace(regex, sub);
    }
  }

  for (const [regex, addition] of adicoes) {
    if (word.match(regex)) {
      return word + addition;
    }
  }

  return word + 's';
};

module.exports = _plural;
