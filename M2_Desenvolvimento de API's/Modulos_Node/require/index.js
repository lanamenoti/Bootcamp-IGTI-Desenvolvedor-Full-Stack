//Importando objetos
const operacoes = require('./operacoes.js');

// Importando somente a função multiplicacao
//(pode receber a função com o nome que quiser)
const multiplicacao = require('./operacoes2');

console.log(operacoes.soma(2, 3));
console.log(operacoes.subtracao(5, 3));
console.log(operacoes.nome);
console.log(multiplicacao(5, 10));
