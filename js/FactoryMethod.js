class Warrior {
  constructor(name) {
    this.name = name;
    this.type = "Melee";
    this.damage = 100;
  }
}

class Archer {
  constructor(name) {
    this.name = name;
    this.type = "Ranged";
    this.damage = 50;
  }
}

class Mage {
  constructor(name) {
    this.name = name;
    this.type = "Ranged";
    this.damage = 250;
  }
}

//Factory. Delegates the Creation to class
class CharacterFactory {
  constructor() {
    this.create = (name, type) => {
      switch (type) {
        case 1: return new Warrior(name);
        case 2: return new Archer(name);
        case 3: return new Mage(name);
      }
    };
  }
}

//Main
const characterFactory = new CharacterFactory();
const characters = [];

characters.push(characterFactory.create("Conan", 1));
characters.push(characterFactory.create("Merlin", 3));
characters.push(characterFactory.create("Robin Hood", 2));

console.log(characters);
