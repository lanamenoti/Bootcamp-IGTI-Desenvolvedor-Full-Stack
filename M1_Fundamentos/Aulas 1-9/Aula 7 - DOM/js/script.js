// Aplicação querySelector em elemento

var title = document.querySelector('h1');
title.textContent = 'Mudei';
title.textContent = 'Alana Linda ';

// Aplicação querySelector em id

var city = document.querySelector('#city');
city.textContent = 'Não moro mais aqui';

// Aplicação em Classes

var dados = document.querySelectorAll('.dados1');
dados = Array.from(dados);

for (var i = 0; i < dados.length; i++) {
  var elementoa = dados[i];
  elementoa.classList.add('emphashis');
}
