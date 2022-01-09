//defined on the class itself.
//can't call on the object, only the object class
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  let;

  //define static method

  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }
}
let square1 = new Square(8);
let square2 = new Square(8);

console.log(Square.equals(square1, square2));
