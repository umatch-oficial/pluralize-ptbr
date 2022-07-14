const excecoes = {
  mal: 'males',
  cônsul: 'cônsules',
  mel: 'méis',
  fel: 'féis',
  cal: 'cais',
  não: 'não',
};

/**
 * Palavras que terminam em a|e|i|o|u|ã|ãe|ão
 * apenas acrescenta a letra 's' no final
 * @type {Object}
 */
const acrescentar = {
  s: ['a', 'e', 'i', 'o', 'u', 'ã', 'ãe'],
  es: ['r', 'z', 'n', 'ás'],
  '': ['is', 'us', 'os'],
};

/**
 * Palavras que terminam em al|el|ol|ul|il|m
 * substitui a terminação
 */
const substituir = {
  ais: 'al',
  eis: 'el',
  ois: 'ol',
  uis: 'ul',
  is: 'il',
  ns: 'm',
  eses: 'ês',
  ões: 'ão',
};

const _plural = palavra => {
  if (Object.keys(excecoes).includes(palavra)) {
    return excecoes[palavra];
  }

  const regex_troca = '^([a-zA-Zà-úÀ-Ú]*)(%s)$';
  let plural = '';

  Object.entries(acrescentar).forEach(([]) => {
    const busca = regex_troca.replace('%s', regra[adicao].join('|'));
    const regex = new RegExp(busca, 'i');

    if (regex.exec(palavra) !== null) {
      plural = palavra + adicao;
    }
  });

  Object.entries(regras).forEach(([nome, regra]) => {
    switch (nome) {
      case 'substituir':
        for (const substituicao in regra) {
          const busca = regex_troca.replace('%s', regra[substituicao]);
          const regex = new RegExp(busca, 'i');

          if (regex.exec(palavra) !== null) {
            /**
             * Se a palavra for paroxítona ou proparoxítona,
             * troca-se 'il' por 'eis'
             */
            if (palavra.match(/([áéíóú])/) !== null && regex.exec(palavra)[2] === 'il') {
              plural = palavra.replace('il', 'eis');
              break;
            } else {
              const busca_sub = new RegExp(regex.exec(palavra)[2] + '$', 'i');
              plural = palavra.replace(busca_sub, substituicao);
              break;
            }
          }
        }
        break;
    }
  });

  return plural !== '' ? plural : palavra;
};

const plural = palavras => {
  const palavrasPlural = palavras.split(' ');

  palavrasPlural.forEach(function (palavra, i) {
    palavrasPlural[i] = _plural(palavra);
  });

  return palavrasPlural.join(' ');
};

module.exports = plural;
