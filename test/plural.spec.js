const plural = require('../index');

// referência: https://www.normaculta.com.br/singular-e-plural/

test('abdômen => abdomens ou abdômenes', () => {
  expect(plural(2, 'abdômen')).toMatch(/2 (abdomens|abdômenes)/);
});
test('alemão => alemães', () => {
  expect(plural(2, 'alemão')).toMatch(/2 alemães/);
});
test('aluguel => aluguéis', () => {
  expect(plural(2, 'aluguel')).toMatch(/2 aluguéis/);
});
test('amiga => amigas', () => {
  expect(plural(2, 'amiga')).toMatch(/2 amigas/);
});
test('atlas => atlas', () => {
  expect(plural(2, 'atlas')).toMatch(/2 atlas/);
});
test('avestruz => avestruzes', () => {
  expect(plural(2, 'avestruz')).toMatch(/2 avestruzes/);
});
test('açúcar => açúcares', () => {
  expect(plural(2, 'açúcar')).toMatch(/2 açúcares/);
});
test('bar => bares', () => {
  expect(plural(2, 'bar')).toMatch(/2 bares/);
});
test('bem => bens', () => {
  expect(plural(2, 'bem')).toMatch(/2 bens/);
});
test('bolo => bolos', () => {
  expect(plural(2, 'bolo')).toMatch(/2 bolos/);
});
test('bombom => bombons', () => {
  expect(plural(2, 'bombom')).toMatch(/2 bombons/);
});
test('cana-de-açúcar => canas-de-açúcar', () => {
  expect(plural(2, 'cana-de-açúcar')).toMatch(/2 canas-de-açúcar/);
});
test('canil => canis', () => {
  expect(plural(2, 'canil')).toMatch(/2 canis/);
});
test('capitão => capitães', () => {
  expect(plural(2, 'capitão')).toMatch(/2 capitães/);
});
test('caráter => carateres', () => {
  expect(plural(2, 'caráter')).toMatch(/2 carateres/);
});
test('charlatão => charlatões', () => {
  expect(plural(2, 'charlatão')).toMatch(/2 charlatães/);
});
test('cidadão => cidadãos', () => {
  expect(plural(2, 'cidadão')).toMatch(/2 cidadãos/);
});
test('coração => corações', () => {
  expect(plural(2, 'coração')).toMatch(/2 corações/);
});
test('corrimão => corrimões ou corrimãos', () => {
  expect(plural(2, 'corrimão')).toMatch(/2 (corrimões|corrimãos)/);
});
test('cristão => cristãos', () => {
  expect(plural(2, 'cristão')).toMatch(/2 cristãos/);
});
test('degrau => degraus', () => {
  expect(plural(2, 'degrau')).toMatch(/2 degraus/);
});
test('eleição => eleições', () => {
  expect(plural(2, 'eleição')).toMatch(/2 eleições/);
});
test('freguês => fregueses', () => {
  expect(plural(2, 'freguês')).toMatch(/2 fregueses/);
});
test('fuzil => fuzis', () => {
  expect(plural(2, 'fuzil')).toMatch(/2 fuzis/);
});
test('féria => férias', () => {
  expect(plural(2, 'féria')).toMatch(/2 férias/);
});
test('fóssil => fósseis', () => {
  expect(plural(2, 'fóssil')).toMatch(/2 fósseis/);
});
test('garagem => garagens', () => {
  expect(plural(2, 'garagem')).toMatch(/2 garagens/);
});
test('gravidez => gravidezes', () => {
  expect(plural(2, 'gravidez')).toMatch(/2 gravidezes/);
});
test('guardião => guardiões ou guardiães', () => {
  expect(plural(2, 'guardião')).toMatch(/2 (guardiões|guardiães)/);
});
test('hambúrguer => hambúrgueres', () => {
  expect(plural(2, 'hambúrguer')).toMatch(/2 hambúrgueres/);
});
test('hífen => hífens', () => {
  expect(plural(2, 'hífen')).toMatch(/2 (hifens|hífenes)/);
});
test('irmão => irmãos', () => {
  expect(plural(2, 'irmão')).toMatch(/2 irmãos/);
});
test('jardim => jardins', () => {
  expect(plural(2, 'jardim')).toMatch(/2 jardins/);
});
test('júnior => juniores', () => {
  expect(plural(2, 'júnior')).toMatch(/2 juniores/);
});
test('lençol => lençóis', () => {
  expect(plural(2, 'lençol')).toMatch(/2 lençóis/);
});
test('lápis => lápis', () => {
  expect(plural(2, 'lápis')).toMatch(/2 lápis/);
});
test('látex => látex', () => {
  expect(plural(2, 'látex')).toMatch(/2 látex/);
});
test('mar => mares', () => {
  expect(plural(2, 'mar')).toMatch(/2 mares/);
});
test('mulher => mulheres', () => {
  expect(plural(2, 'mulher')).toMatch(/2 mulheres/);
});
test('míssil => mísseis', () => {
  expect(plural(2, 'míssil')).toMatch(/2 mísseis/);
});
test('opinião => opiniões', () => {
  expect(plural(2, 'opinião')).toMatch(/2 opiniões/);
});
test('ovo => ovos', () => {
  expect(plural(2, 'ovo')).toMatch(/2 ovos/);
});
test('país => países', () => {
  expect(plural(2, 'país')).toMatch(/2 países/);
});
test('pires => pires', () => {
  expect(plural(2, 'pires')).toMatch(/2 pires/);
});
test('português => portugueses', () => {
  expect(plural(2, 'português')).toMatch(/2 portugueses/);
});
test('pão => pães', () => {
  expect(plural(2, 'pão')).toMatch(/2 pães/);
});
test('pólen => pólens ou pólenes', () => {
  expect(plural(2, 'pólen')).toMatch(/2 (polens|pólenes)/);
});
test('quebra-cabeça => quebra-cabeças', () => {
  expect(plural(2, 'quebra-cabeça')).toMatch(/2 quebra-cabeças/);
});
test('raiz => raízes', () => {
  expect(plural(2, 'raiz')).toMatch(/2 raízes/);
});
test('rapaz => rapazes', () => {
  expect(plural(2, 'rapaz')).toMatch(/2 rapazes/);
});
test('refil => refis', () => {
  expect(plural(2, 'refil')).toMatch(/2 refis/);
});
test('refrão => refrãos ou refrães', () => {
  expect(plural(2, 'refrão')).toMatch(/2 (refrãos|refrães)/);
});
test('revés => reveses', () => {
  expect(plural(2, 'revés')).toMatch(/2 reveses/);
});
test('réptil => répteis', () => {
  expect(plural(2, 'réptil')).toMatch(/2 répteis/);
});
test('segunda-feira => segundas-feiras', () => {
  expect(plural(2, 'segunda-feira')).toMatch(/2 segundas-feiras/);
});
test('sênior => seniores', () => {
  expect(plural(2, 'sênior')).toMatch(/2 seniores/);
});
test('sótão => sótãos', () => {
  expect(plural(2, 'sótão')).toMatch(/2 sótãos/);
});
test('troféu => troféus', () => {
  expect(plural(2, 'troféu')).toMatch(/2 troféus/);
});
test('tórax => tórax', () => {
  expect(plural(2, 'tórax')).toMatch(/2 tórax/);
});
test('varal => varais', () => {
  expect(plural(2, 'varal')).toMatch(/2 varais/);
});
test('variável => variáveis', () => {
  expect(plural(2, 'variável')).toMatch(/2 variáveis/);
});
test('vilão => vilões, vilães ou vilãos', () => {
  expect(plural(2, 'vilão')).toMatch(/2 (vilões|vilães|vilãos)/);
});
test('vírus => vírus', () => {
  expect(plural(2, 'vírus')).toMatch(/2 vírus/);
});
test('órfão => órfãos', () => {
  expect(plural(2, 'órfão')).toMatch(/2 órfãos/);
});
test('órgão => órgãos', () => {
  expect(plural(2, 'órgão')).toMatch(/2 órgãos/);
});
test('ônibus => ônibus', () => {
  expect(plural(2, 'ônibus')).toMatch(/2 ônibus/);
});
test('ônix => ônix', () => {
  expect(plural(2, 'ônix')).toMatch(/2 ônix/);
});
