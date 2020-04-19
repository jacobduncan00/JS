function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!`);
};

function Dragon(life, name, level, color, spell) {
  // How can we inherit everything from Enemy?
  // Keyword this is going to reference the dragon
  // .call to run the Enemy constructor function with the context of the keyword "this" being dragon
  Enemy.call(this, life, name, level);
  // There is a better way to do this though, CLASSES!
  // Define it as a normal
  this.color = color;
  this.spell = spell;
}

// Inherit Prototype
Dragon.prototype = Object.create(Enemy.prototype);

Dragon.prototype.fireBreath = () => {
  console.log("Fire Breath!");
};

const newDragon = new Dragon(100, "Drogon", 25, "green", "fire");
console.log(newDragon);
// after logging, we can see that we do not have those methods on the prototypes from Enemy
// we need to inherit the prototypes from Enemy as well as its methods / properties

newDragon.getInfo();
