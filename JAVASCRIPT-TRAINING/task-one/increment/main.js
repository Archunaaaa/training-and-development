let x = 0;
function onload() {
  document.getElementById("inc").innerHTML = x;
}
function increment() {
  x++;
  document.getElementById("inc").innerHTML = x;
}
function decrement() {
  x--;
  document.getElementById("inc").innerHTML = x;
}
// class Animal {
//   constructor(name, age, height, weight) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.weight = weight;
//     this.playing();
//   }
//   playing() {
//     console.log(`${this.name}  playing 7.00pm to 7.30pm`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, age, height, weight, breed) {
//     super(name, age, height, weight);
//     this.breed = breed;

//     console.log(`name is ${this.name}`);
//     console.log(`my breed is ${this.breed}`);
//   }
// }
// let luffy = new Dog("luffy", 2, 3.2, 14, "pug");
