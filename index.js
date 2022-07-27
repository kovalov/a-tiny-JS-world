class Inhabitant {
  constructor(species, name, gender, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.saying = saying;
    this.properties = [
      'species',
      'name',
      'gender',
      'legs',
      'hands',
      'saying',
    ];
  }
  toString() {
    return this.properties
      .map((propName) => this[propName])
      .join('; ');
  }
}

class Dog extends Inhabitant {
  constructor(name, gender) {
    super('dog', name, gender, 'woof');
    this.legs = 4;
  }
}
class Cat extends Inhabitant {
  constructor(name, gender) {
    super('cat', name, gender, 'meow');
    this.legs = 4;
  }
}
class Woman extends Inhabitant {
  constructor(name, saying) {
    super('human', name, 'female', saying);
    this.legs = 2;
    this.hands = 2;
  }
}
class Man extends Inhabitant {
  constructor(name, saying) {
    super('human', name, 'male', saying);
    this.legs = 2;
    this.hands = 2;
  }
}

const dog = new Dog('Patron', 'male');
const cat = new Cat('Murzyk', 'male');
const woman = new Woman('Anna', 'Hola');
const man = new Man('Joey', 'How you doin');

const inhabitantDetails = [
  String(dog),
  String(cat),
  String(woman),
  String(man),
];

inhabitantDetails.forEach((item) => print(item));
