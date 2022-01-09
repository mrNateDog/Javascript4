//pure function - function that always returns the same thing you give it the same input
//doesn't affect anything outside of it

//what not to do - relies on external info
const array = [1, 2, 3];
const array2 = [1, 2, 3];
function addArray(element) {
  array.push(element);
}
addArray(4);
addArray(4);
addArray(4);
//could add more here--but you get the point
console.log(array);
// if the array changes externally, then the result changes = not pure
//never change the inputs outside the array - no global variables - inputs can't change

//try again
function addArrayClean(a, element) {
  return [...a, element];
}
addArrayClean(array, 4);
console.log(array2);
//this will always return the array
