// if/else
var a = 3;
var b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

//switch

var dia = 5;
var r = '';
//prettier-ignore
switch (dia) {
  case 1: r = 'Domingo'; break;
  case 2:r = 'Segunda';break;
  case 3:r = 'Terça';break;
  case 4:r = 'Quarta';break;
  case 5:r = 'Quinta';break;
  case 6:r = 'Sexta';break;
  case 7:r = 'Sabádo';break;
  default : r = 'Dia inválido'
}
console.log(r);

// Operador ternário

a = 6;
b = 7;

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

// Somatório com while

var numeroAtual = 1;
var soma = 0;

while (numeroAtual <= 10) {
  soma = soma + numeroAtual;
  numeroAtual++;
}
console.log(' A soma é ' + soma);

// Somatório com do...while

numeroAtual = 1;
soma = 0;

do {
  soma = soma + numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);

console.log('A soma é ' + soma);

// Somatório com for

numeroAtual = 1;
soma = 0;

for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  soma = soma + numeroAtual;
}

console.log('A soma é ' + soma);
