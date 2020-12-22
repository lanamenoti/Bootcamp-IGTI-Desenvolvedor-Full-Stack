window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
  preventFormSubmit();
  inputName = document.querySelector('#inputName');
  activateInput();
  render();
}

//Função para a página parar de recarregar
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}
/* Ativação do input logo que a página é carregada e 
capturando o evento de digitação (handleTyping) */
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName); //Inserindo elementos no vetor
    render();
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }
  function handleTyping(event) {
    //Capturando o enter
    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }
      render();
      isEditing = false;
      clearInput();
    }
  }
  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}
//Pegando o elemento da div e inserindo as coisas
function render() {
  function createdeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1); // Função que remove elementos do vetor e se necessária insere novos elementos
      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';

    button.addEventListener('click', deleteName);

    return button;
  }
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;
  }
  var divNames = document.querySelector('#names');
  divNames.innerHTML = ''; //Resolveu o duplicar a lista

  //Criar ul
  //Fazer n li's, conforme o tamanho de globalNames
  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentNames = globalNames[i]; //Apelidando o elemento com uma variável

    var li = document.createElement('li');
    var button = createdeleteButton(i);
    var span = createSpan(currentNames, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

//Função para limpar o campo input depois que algo foi digitado
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
