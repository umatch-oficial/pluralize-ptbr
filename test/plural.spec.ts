import plural from '../src';

describe.each([
  ['o homem', 1, 'os homens', /o homem/],
  ['o homem', 2, 'os homens', /os homens/],
])('com plural definido', (word, quantity, customPlural, res) => {
  test(`plural('${word}', ${quantity}, '${customPlural}') = ${res
    .toString()
    .replace(/\//g, "'")}`, () => {
    expect(plural(word, quantity, customPlural)).toMatch(res);
  });
});

describe.each([
  ['bola', 0, /bolas/],
  ['bola', 0.5, /bola/],
  ['bola', 1, /bola/],
  ['bola', 2, /bolas/],
])('com quantidade', (word, quantity, res) => {
  test(`plural('${word}', ${quantity}) = ${res.toString().replace(/\//g, "'")}`, () => {
    expect(plural(word, quantity)).toMatch(res);
  });
});

describe.each([
  ['abdômen', /abdomens|abdômenes/],
  ['alemão', /alemães/],
  ['aluguel', /aluguéis/],
  ['amiga', /amigas/],
  ['atlas', /atlas/],
  ['avestruz', /avestruzes/],
  ['açúcar', /açúcares/],
  ['bar', /bares/],
  ['bem', /bens/],
  ['bolo', /bolos/],
  ['bombom', /bombons/],
  ['cana-de-açúcar', /canas-de-açúcar/],
  ['canil', /canis/],
  ['capitão', /capitães/],
  ['caráter', /carateres/],
  ['charlatão', /charlatães/],
  ['cidadão', /cidadãos/],
  ['coração', /corações/],
  ['corrimão', /corrimões|corrimãos/],
  ['cristão', /cristãos/],
  ['degrau', /degraus/],
  ['eleição', /eleições/],
  ['freguês', /fregueses/],
  ['fuzil', /fuzis/],
  ['féria', /férias/],
  ['fóssil', /fósseis/],
  ['garagem', /garagens/],
  ['gravidez', /gravidezes/],
  ['guardião', /guardiões|guardiães/],
  ['hambúrguer', /hambúrgueres/],
  ['hífen', /hifens|hífenes/],
  ['irmão', /irmãos/],
  ['jardim', /jardins/],
  ['júnior', /juniores/],
  ['lençol', /lençóis/],
  ['lápis', /lápis/],
  ['látex', /látex/],
  ['mar', /mares/],
  ['mulher', /mulheres/],
  ['míssil', /mísseis/],
  ['opinião', /opiniões/],
  ['ônibus', /ônibus/],
  ['ônix', /ônix/],
  ['órfão', /órfãos/],
  ['órgão', /órgãos/],
  ['ovo', /ovos/],
  ['país', /países/],
  ['pires', /pires/],
  ['português', /portugueses/],
  ['pão', /pães/],
  ['pólen', /polens|pólenes/],
  ['quebra-cabeça', /quebra-cabeças/],
  ['raiz', /raízes/],
  ['rapaz', /rapazes/],
  ['refil', /refis/],
  ['refrão', /refrãos|refrães/],
  ['revés', /reveses/],
  ['réptil', /répteis/],
  ['segunda-feira', /segundas-feiras/],
  ['sênior', /seniores/],
  ['sótão', /sótãos/],
  ['troféu', /troféus/],
  ['tórax', /tórax/],
  ['varal', /varais/],
  ['variável', /variáveis/],
  ['vilão', /vilões|vilães|vilãos/],
  ['vírus', /vírus/],
])('sem quantidade', (word, res) => {
  test(`plural('${word}') = ${res.toString().replace(/\//g, "'")}`, () => {
    expect(plural(word)).toMatch(res);
  });
});
