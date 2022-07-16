# Pluralize-ptbr
Obtenha o plural de palavras em português brasileiro (forked from https://www.npmjs.com/package/pluralize-ptbr)

```
$ npm install @umatch/pluralize-ptbr
```

```javascript
const plural = require("./index");

console.log(plural(2, 'mão'));   // '2 mãos'
console.log(plural(3, 'Mamão')); // '3 Mamões'
```

## Regras pendentes
- Regras que dependem da tonicidade das sílabas (e.g. paroxítonas)
- Regras para substantivos compostos (e.g. cana-de-açúcar => canas-de-açúcar)
