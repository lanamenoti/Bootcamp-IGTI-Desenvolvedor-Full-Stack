window.addEventListener('load', start);
/* não colocar parenteses na função pq não vamos executar ela agora */

function start() {
  console.log('Aula');
  console.log('Página totalmente carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

/* Contando os caracteres quando o usuário digita */
function countName(event) {
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = count.lenght;
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso');
}
