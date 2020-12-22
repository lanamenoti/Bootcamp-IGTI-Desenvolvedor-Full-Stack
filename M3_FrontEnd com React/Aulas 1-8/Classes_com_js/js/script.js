// Classe incorpora uma funcionalidade
// Metodo eh uma funcao dentro da classe

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} falando...`);
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  speak() {
    console.log(`${this.name} (${this.type}) latindo...`);
  }
}

class Cat extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  speak() {
    console.log(`${this.name} (${this.type}) miando...`);
  }
}

const animal = new Animal('Maninha');
const dog = new Dog('Piloto', 'Vira-lata');
const cat = new Cat('Baiano', 'Preto');

animal.speak();
dog.speak();
cat.speak();
