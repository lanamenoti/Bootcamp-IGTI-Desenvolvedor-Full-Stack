//Importando objetos
import op from './operacoes.js';

// Importando somente a função multiplicacao com formato default
//(pode receber a função com o nome que quiser)
import multi from './operacoes2.js';

//importando as funções nomeadas
//(tem q ser o nome da função no outro arquivo)
import { divisao, resto } from './operacoes3.js';

console.log(op.soma(2, 4));
console.log(op.subtracao(5, 3));
console.log(op.nome);
console.log(multi(5, 10));
console.log(divisao(5, 10));
console.log(resto(7, 2));
