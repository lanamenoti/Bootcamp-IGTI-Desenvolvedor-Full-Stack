function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

const nome = 'Teste de exportação';
//Posso exportar variáveis também

//Exportando um objeto de coisas que quero exportar
module.exports = { soma, subtracao, nome };
