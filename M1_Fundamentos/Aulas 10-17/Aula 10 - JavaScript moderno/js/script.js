'use strict'; //JavaScript acusa mais erros
// var x let
//var - Escopo abrangente
//let - Escopo reduzido
function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var ' + i);
  }

  i = 20;
  console.log(i); //Aqui aparece "20" no console
  //quando a função for executada
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let' + i);
  }

  i = 20;
  console.log(i);
  //Aqui vai mostrar um erro no console
  //quando a função for executada
  //(i foi criado dentro do for)
}
withVar();
withLet();

//const - não podemos reatribuir valores
const c = 10;
c = 20; // Vai acusar erro de atribuição no console

const d = [];
d.push = 1; // Isso pode (modifica o conteudo do vetor)

// Função padrão
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

//Função anônima
const sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(2, 3));

//Arrow function
const sum3 = (a, b) => {
  return a + b;
};
console.log(sum3(2, 3));

//Arrow function reduzida (apenas um comando de return na função)
const sum4 = (a, b) => a + b;
console.log(sum4(2, 3));

//Template literals
const name = 'Alana';
const surName = 'Menoti';
const text1 = `Meu nome é ${name} ${surName}`;

console.log(text1);

//Default parameters
const sum5 = (a, b = 10) => a + b;
console.log(sum5(2));
console.log(sum5(2, 8));
// Se preencher o b, o valor preenchido tem prioridade
