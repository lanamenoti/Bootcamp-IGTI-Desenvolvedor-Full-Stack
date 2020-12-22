window.addEventListener('load', start);

function start() {
  mapInputs();
  addEvents();
}

var range1 = null;
var text1 = null;
var range2 = null;
var text2 = null;
var range3 = null;
var text3 = null;
var sumInput = null;

function mapInputs() {
  range1 = document.querySelector('#range1');
  text1 = document.querySelector('#text1');
  range2 = document.querySelector('#range2');
  text2 = document.querySelector('#text2');
  range3 = document.querySelector('#range3');
  text3 = document.querySelector('#text3');
}

function addEvents() {
  range1.addEventListener('input', handleInput1Change);
  range2.addEventListener('input', handleInput2Change);
  range3.addEventListener('input', handleInput3Change);
}

//Relacionando ranges com inputs
function handleInput1Change(event) {
  text1.value = event.target.value;
  calculate();
}
function handleInput2Change(event) {
  text2.value = event.target.value;
  calculate();
}
function handleInput3Change(event) {
  text3.value = event.target.value;
  calculate();
}

function calculate() {
  var red = parseInt(text1.value, 10);
  var green = parseInt(text2.value, 10);
  var blue = parseInt(text3.value, 10);

  var square = document.querySelector('#square');
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
