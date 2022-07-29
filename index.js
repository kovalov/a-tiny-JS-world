class Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.legs = legs;
    this.hands = hands;
    this.saying = saying;
    this._properties = [
      'species',
      'name',
      'gender',
      'legs',
      'hands',
      'saying',
    ];
  }
  set properties(prop) {
    this._properties.push(prop);
  }
  toString() {
    return this._properties.map((prop) => this[prop]).join('; ');
  }
}

class Dog extends Inhabitant {
  constructor(name, gender) {
    super('dog', name, gender, 4, 0, 'woof');
  }
}
class Cat extends Inhabitant {
  constructor(name, gender) {
    super('cat', name, gender, 4, 0, 'meow');
  }
}
class Woman extends Inhabitant {
  constructor(name, saying) {
    super('human', name, 'female', 2, 2, saying);
  }
}
class Man extends Inhabitant {
  constructor(name, saying) {
    super('human', name, 'male', 2, 2, saying);
  }
}

const dog = new Dog('Patron', 'male');
const cat = new Cat('Murzyk', 'male');
const woman = new Woman('Anna', 'Hola');
const man = new Man('Joey', 'How you doin');

const inhabitantArray = [
  String(dog),
  String(cat),
  String(woman),
  String(man),
];

inhabitantArray.forEach((item) => print(item));
