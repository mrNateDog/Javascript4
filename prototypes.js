//BUT WAIT, remember how we couldn't add methods to object const? WE ACTUALLY CAN

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = "American"; //add new properties to objects constructors

const person1 = new Person("Nathan", "McClure", 38, "blue");

console.log(Person.prototype.nationality);
console.log(
  person1.firstName,
  " " + person1.lastName,
  " " + " ",
  Person.prototype.nationality
);

//  //add new methods to objects constructors
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
