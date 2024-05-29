
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  static myType(){
    console.log("Animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

Animal.myType(); // cannot call Animal.describe()
let dog = new Animal("dog", 4);
console.log(dog.describe());
// dog.myType(); this will not work
