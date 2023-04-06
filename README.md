# Pluralize-ptbr
Get the plural form of portuguese words (forked from https://www.npmjs.com/package/pluralize-ptbr)

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

## Partially implemented rules
- Rules that depend on the stress of the syllables (e.g. for paroxytone words).
- Rules for compound nouns (e.g. cana-de-açúcar => canas-de-açúcar).

## Pending rules
- Rules for words ending in 'ão'
