let allPeople = [];
let filteredPeople = [];
let currentFilter = '';
let countPeople = 0;
let numberFormat = null;
let globalInputName = null;
let globalClickBtn = null;
let tabPeople = null;
let stats = null;
let tabStats = null;

window.addEventListener('load', () => {
  countPeople = document.querySelector('.countPeople');
  globalInputName = document.querySelector('#inputName');
  globalClickBtn = document.querySelector('#button');
  filteredPeople = document.querySelector('#filteredPeople');
  tabPeople = document.querySelector('#tabPeople');
  tabStats = document.querySelector('#tabStats');

  //prettier-ignore
  numberFormat = Intl.NumberFormat("pt-BR");

  fetchpeople();
});
//prettier-ignore
async function fetchpeople() {
  const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
  const json= await res.json();
  allPeople= json.results.map(person => {
    const {name:{first,last}, gender, picture:{medium}, dob: {age}} =person

    return {
      name: `${first} ${last}`.toLowerCase(),
      gender,
      picture: medium,
      age
    }
    
  })
  
  render()
}

function render() {
  globalInputName.addEventListener('keyup', handleInputChange);
  globalClickBtn.addEventListener('click', handleClickBtn);
}
//prettier-ignore
function handleInputChange(event) {
  filteredPeople = [];
  currentFilter = event.target.value.toLowerCase()

  filteredPeople = allPeople.filter(person => {
    return person.name.includes(currentFilter)
  });
  
  if (event.key === 'Enter'){
    handleClickBtn()
  }
}

function handleClickBtn() {
  countPeople.innerHTML =
    filteredPeople.length + ' ' + 'Usuário(s)' + ' ' + 'Encontradoa(s)';

  let peopleHTML = '<div>';

  filteredPeople.forEach((person) => {
    const { name, gender, picture, age } = person;

    const personHTML = `
      <div>
        <div class = 'edit-list'>
          <img src= ${picture} alt= ${name} 
        </div>
        
        <div class= 'edit-list'>
          <ul>
            <li> ${name} </li>
            <li> ${age} anos</li>
          </ul>
        </div>
      </div>
    `;

    peopleHTML += personHTML;
  });
  peopleHTML += '<div>';

  tabPeople.innerHTML = peopleHTML;

  renderStats();
}

function renderStats() {
  let statsHTML = '<div>';
  const statistics = { men: 0, women: 0, ageSum: 0, avaregeAge: 0.0 };

  statistics.men = filteredPeople.filter(
    (person) => person.gender === 'male'
  ).length;
  statistics.women = filteredPeople.filter(
    (person) => person.gender === 'female'
  ).length;
  statistics.ageSum = filteredPeople.reduce((acc, curr) => {
    return (acc += curr.age);
  }, 0);
  statistics.avaregeAge = statistics.ageSum / filteredPeople.length;

  const statHTML = `
    <div>
      <div class= 'edit-list'>
        <ul>
          <li> Homens: ${statistics.men}</li>
          <li> Mulheres: ${statistics.women} </li>
          <li> Soma das idades: ${statistics.ageSum} </li>
          <li> Média das idades: ${statistics.avaregeAge} </li>
        </ul>
      </div>
    </div>
  `;

  statsHTML += statHTML;

  statsHTML += '</div>';

  tabStats.innerHTML = statsHTML;
}
