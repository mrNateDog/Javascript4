//Here's a class - it returns "woof"
class Dog {
  constructor() {
    this.sound = "bark";
    this.fur = "fluffy";
  }
  talk() {
    console.log(this.sound);
  }
}
const sniffles = new Dog();
sniffles.talk();

//factory function - create and return objects
//avoids this - no DOM issues
//valid if you don't need a lot of objects - the perf is neg.
const dog = () => {
  const sound = "woof";
  return {
    talk: () => console.log(sound),
  };
};
const sniffles = dog();
sniffles.talk(); //also returns woof
