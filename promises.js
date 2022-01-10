//Promise  comit to something with two results - resolved or failed (rejected)
//syntax
let nathan = new Promise((resolve, reject) => {
  let a = 1 + 2; //what the promise is
  if (a == 2) {
    // if  resolved
    resolve("yay, much success!");
  } else {
    //if failed
    reject("ERROR, ERROR!");
  }
});
//calling the promise
nathan
  .then((message) => {
    console.log("this is in the 'then' " + message);
  })
  .catch((message) => {
    console.log("this is the 'catch' " + message);
  });
