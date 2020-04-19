class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

// A better way of what we did in prototypal_inheritance
const turtle = new Enemy(25, "Squidle", 10);
const dragon = new Enemy(125, "Charizard", 50);
console.log(turtle);
console.log(dragon);

// Dragon is an extension of an Enemy
class Dragon extends Enemy {
  constructor(life, name, level, wings, damage) {
    // runs enemy constructor for us, class has to extend or inherit!
    super(life, name, level);
    this.wings = wings;
    this.damage = damage;
  }
}

const newDragon = new Dragon(100, "D-boy", 1, 2, 25);
console.log(newDragon);
newDragon.getInfo();
