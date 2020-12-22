window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

// Transformar array em objeto com nome e email utilizando map
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  return nameEmailArray;
  console.log(nameEmailArray);
}

//Filtrando os maiores de 50 anos
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age >= 50;
  });

  console.log(olderThan50);
}

//Incluindo uma nova propriedade no objeto
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}

//Somando as idades
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);
}

//Pegando o primeiro usuário de Minas Gerais
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

//Usuários de Amazonas (vai retornar se tem algum com true ou false)
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  console.log(found);
}

//nat = 'BR' - Prof filtrou isso
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

//Ordenando por nome e idade ASC e DESC
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    .sort((a, b) => {
      return a.name.length - b.name.length;
      //return a.name.localeCompare(b.names);
    });

  console.log(mappedNames);
}
