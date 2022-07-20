const plural = require('../src');

/**
 * Referências:
 * https://www.normaculta.com.br/singular-e-plural/
 * https://www.todamateria.com.br/plural-dos-substantivos-compostos/
 */

// With quantity
test('0 bola => 0 bolas', () => {
  expect(plural('bola', 0)).toMatch(/0 bolas/);
});
test('0.5 bola => 0.5 bola', () => {
  expect(plural('bola', 0.5)).toMatch(/0.5 bola/);
});
test('1 bola => 1 bola', () => {
  expect(plural('bola', 1)).toMatch(/1 bola/);
});
test('2 bola => 2 bolas', () => {
  expect(plural('bola', 2)).toMatch(/2 bolas/);
});

// Without quantity
test('abdômen => abdomens ou abdômenes', () => {
  expect(plural('abdômen')).toMatch(/(abdomens|abdômenes)/);
});
test('alemão => alemães', () => {
  expect(plural('alemão')).toMatch(/alemães/);
});
test('aluguel => aluguéis', () => {
  expect(plural('aluguel')).toMatch(/aluguéis/);
});
test('amiga => amigas', () => {
  expect(plural('amiga')).toMatch(/amigas/);
});
test('atlas => atlas', () => {
  expect(plural('atlas')).toMatch(/atlas/);
});
test('avestruz => avestruzes', () => {
  expect(plural('avestruz')).toMatch(/avestruzes/);
});
test('açúcar => açúcares', () => {
  expect(plural('açúcar')).toMatch(/açúcares/);
});
test('bar => bares', () => {
  expect(plural('bar')).toMatch(/bares/);
});
test('bem => bens', () => {
  expect(plural('bem')).toMatch(/bens/);
});
test('bolo => bolos', () => {
  expect(plural('bolo')).toMatch(/bolos/);
});
test('bombom => bombons', () => {
  expect(plural('bombom')).toMatch(/bombons/);
});
test('cana-de-açúcar => canas-de-açúcar', () => {
  expect(plural('cana-de-açúcar')).toMatch(/canas-de-açúcar/);
});
test('canil => canis', () => {
  expect(plural('canil')).toMatch(/canis/);
});
test('capitão => capitães', () => {
  expect(plural('capitão')).toMatch(/capitães/);
});
test('caráter => carateres', () => {
  expect(plural('caráter')).toMatch(/carateres/);
});
test('charlatão => charlatões', () => {
  expect(plural('charlatão')).toMatch(/charlatães/);
});
test('cidadão => cidadãos', () => {
  expect(plural('cidadão')).toMatch(/cidadãos/);
});
test('coração => corações', () => {
  expect(plural('coração')).toMatch(/corações/);
});
test('corrimão => corrimões ou corrimãos', () => {
  expect(plural('corrimão')).toMatch(/(corrimões|corrimãos)/);
});
test('cristão => cristãos', () => {
  expect(plural('cristão')).toMatch(/cristãos/);
});
test('degrau => degraus', () => {
  expect(plural('degrau')).toMatch(/degraus/);
});
test('eleição => eleições', () => {
  expect(plural('eleição')).toMatch(/eleições/);
});
test('freguês => fregueses', () => {
  expect(plural('freguês')).toMatch(/fregueses/);
});
test('fuzil => fuzis', () => {
  expect(plural('fuzil')).toMatch(/fuzis/);
});
test('féria => férias', () => {
  expect(plural('féria')).toMatch(/férias/);
});
test('fóssil => fósseis', () => {
  expect(plural('fóssil')).toMatch(/fósseis/);
});
test('garagem => garagens', () => {
  expect(plural('garagem')).toMatch(/garagens/);
});
test('gravidez => gravidezes', () => {
  expect(plural('gravidez')).toMatch(/gravidezes/);
});
test('guardião => guardiões ou guardiães', () => {
  expect(plural('guardião')).toMatch(/(guardiões|guardiães)/);
});
test('hambúrguer => hambúrgueres', () => {
  expect(plural('hambúrguer')).toMatch(/hambúrgueres/);
});
test('hífen => hífens', () => {
  expect(plural('hífen')).toMatch(/(hifens|hífenes)/);
});
test('irmão => irmãos', () => {
  expect(plural('irmão')).toMatch(/irmãos/);
});
test('jardim => jardins', () => {
  expect(plural('jardim')).toMatch(/jardins/);
});
test('júnior => juniores', () => {
  expect(plural('júnior')).toMatch(/juniores/);
});
test('lençol => lençóis', () => {
  expect(plural('lençol')).toMatch(/lençóis/);
});
test('lápis => lápis', () => {
  expect(plural('lápis')).toMatch(/lápis/);
});
test('látex => látex', () => {
  expect(plural('látex')).toMatch(/látex/);
});
test('mar => mares', () => {
  expect(plural('mar')).toMatch(/mares/);
});
test('mulher => mulheres', () => {
  expect(plural('mulher')).toMatch(/mulheres/);
});
test('míssil => mísseis', () => {
  expect(plural('míssil')).toMatch(/mísseis/);
});
test('opinião => opiniões', () => {
  expect(plural('opinião')).toMatch(/opiniões/);
});
test('ônibus => ônibus', () => {
  expect(plural('ônibus')).toMatch(/ônibus/);
});
test('ônix => ônix', () => {
  expect(plural('ônix')).toMatch(/ônix/);
});
test('órfão => órfãos', () => {
  expect(plural('órfão')).toMatch(/órfãos/);
});
test('órgão => órgãos', () => {
  expect(plural('órgão')).toMatch(/órgãos/);
});
test('ovo => ovos', () => {
  expect(plural('ovo')).toMatch(/ovos/);
});
test('país => países', () => {
  expect(plural('país')).toMatch(/países/);
});
test('pires => pires', () => {
  expect(plural('pires')).toMatch(/pires/);
});
test('português => portugueses', () => {
  expect(plural('português')).toMatch(/portugueses/);
});
test('pão => pães', () => {
  expect(plural('pão')).toMatch(/pães/);
});
test('pólen => pólens ou pólenes', () => {
  expect(plural('pólen')).toMatch(/(polens|pólenes)/);
});
test('quebra-cabeça => quebra-cabeças', () => {
  expect(plural('quebra-cabeça')).toMatch(/quebra-cabeças/);
});
test('raiz => raízes', () => {
  expect(plural('raiz')).toMatch(/raízes/);
});
test('rapaz => rapazes', () => {
  expect(plural('rapaz')).toMatch(/rapazes/);
});
test('refil => refis', () => {
  expect(plural('refil')).toMatch(/refis/);
});
test('refrão => refrãos ou refrães', () => {
  expect(plural('refrão')).toMatch(/(refrãos|refrães)/);
});
test('revés => reveses', () => {
  expect(plural('revés')).toMatch(/reveses/);
});
test('réptil => répteis', () => {
  expect(plural('réptil')).toMatch(/répteis/);
});
test('segunda-feira => segundas-feiras', () => {
  expect(plural('segunda-feira')).toMatch(/segundas-feiras/);
});
test('sênior => seniores', () => {
  expect(plural('sênior')).toMatch(/seniores/);
});
test('sótão => sótãos', () => {
  expect(plural('sótão')).toMatch(/sótãos/);
});
test('troféu => troféus', () => {
  expect(plural('troféu')).toMatch(/troféus/);
});
test('tórax => tórax', () => {
  expect(plural('tórax')).toMatch(/tórax/);
});
test('varal => varais', () => {
  expect(plural('varal')).toMatch(/varais/);
});
test('variável => variáveis', () => {
  expect(plural('variável')).toMatch(/variáveis/);
});
test('vilão => vilões, vilães ou vilãos', () => {
  expect(plural('vilão')).toMatch(/(vilões|vilães|vilãos)/);
});
test('vírus => vírus', () => {
  expect(plural('vírus')).toMatch(/vírus/);
});
