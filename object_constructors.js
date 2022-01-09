//this is an object literal
let person = {
  name: "John",
  height: "6 ft.",
  age: "24",
  updateAge: function () {
    return ++person.age;
  },
};
//avoid duplicating this for another person
//object blueprint - doesn't ahve data in it, has PLACEHOLDERS to be added later

function Person(name1, height1, age1) {
  //pass those items into
  //obj blueprint is capitolized
  this.name1 = name1;
  this.height1 = height1;
  this.age1 = age1;
  //TIP: can't add new properties to a constructor... have to add it to the function!
  this.updateAge = function () {
    return ++this.age1;
  };
}

//now lets pass values
let person1 = new Person("Susan", "5 ft.", 44); //create a person
// let person2 = new Person() = creates a second person

console.log(person1.height1);

//much faster than creating many copies of detailed objects
