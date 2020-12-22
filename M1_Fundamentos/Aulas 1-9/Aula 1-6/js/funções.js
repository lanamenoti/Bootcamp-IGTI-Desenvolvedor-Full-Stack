function sum(a, b) {
  return a + b;
}

console.log('A soma é ' + sum(1, 2)); //invocando a função

function compareNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

console.log(compareNumbers(1, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));

function compareNumbers1(a, b) {
  return a - b;
}

console.log(compareNumbers1(1, 1));
console.log(compareNumbers1(1, 2));
console.log(compareNumbers1(2, 1));

function somatorio(from, upTo) {
  var soma = 0;

  for (var i = from; i <= upTo; i++) {
    soma += i;
  }
  return soma;
}

console.log(somatorio(1, 10));
console.log(somatorio(400, 1050));
console.log(somatorio(144, 1077));
