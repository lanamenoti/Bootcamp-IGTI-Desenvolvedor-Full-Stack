window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestruturing();
});

// Juntando todas as pessoas que são casadas
function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );
  const marriedPeople = [...marriedMen, ...marriedWomen];
  console.log(marriedPeople);
}

// Soma infinita
function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 100));
  console.log(infiniteSum(1, 2, 100256));
}
function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

//Criando variáveis a partir do objeto
function doDestruturing() {
  const first = people.results[0];

  //Repetitivo
  //const username = first.login.username;
  //const password = first.login.password;

  //Destruturing
  const { username, password } = first.login;
  console.log(username);
  console.log(password);
}
