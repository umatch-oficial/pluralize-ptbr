# Pluralize-ptbr
Obtenha o plural de palavras em português brasileiro (forked from https://www.npmjs.com/package/pluralize-ptbr)

```
$ npm install @umatch/pluralize-ptbr
```

```javascript
const plural = require("./index");

console.log(plural('mão'));      // 'mãos'
console.log(plural('MaMão', 3)); // '3 MaMões'
console.log(plural('bola', 0))   // '0 bolas'
console.log(plural('bola', 0.5)) // '0.5 bola'
console.log(plural('bola', 1))   // '1 bola'
```

## Regras parcialmente implementadas
- Regras que dependem da tonicidade das sílabas (e.g. paroxítonas)
- Regras para substantivos compostos (e.g. cana-de-açúcar => canas-de-açúcar)

## Regras pendentes
- Regras para palavras terminadas em 'ão'
