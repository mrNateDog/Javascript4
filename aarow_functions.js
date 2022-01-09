//named function mult param
function sum(a, b) {
  return a + b;
}
//arrow function
//same thing as above - no function brackets, no return,
let sum2 = (a, b) => a + b;

//named function w one param
function isPositive(number) {
  return number >= 0;
}

//arrow function - can remove the
let isPositive2 = (number) => number >= 0;

//named function w. no params
function randomNumber() {
  return Math.random;
}
//aarow function
// ()
let randomNumber2 = () => Math.random;

//anonymouse function - no name
document.addEventListener("click", function () {
  console.log("click");
});

//arrow function
//when you're passing a function to another function -- this is the big time
document.addEventListener("click", () => console.log("click"));

//consise syntax
//redefine this keyword
