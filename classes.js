//defined on a class but do not actually require an instance of that class to be created.

//SYNTAX

class Rectangle {
  //classes are templates FOR js objects, not objects. they're CAPITAL
  constructor(_width, _length, _color) {
    //params/arguments passed - assigned to instance properties of the class

    //always have a constructor - method run once during life of object is created
    this.width = _width; //instance properties
    this.length = _length;
    this.color = _color;
  }
  getArea() {
    return this.width * this.length;
  }
}

let myRectangle1 = new Rectangle(); //takes default
let myRectangle2 = new Rectangle(10, 5); // creates a new Rectangle with the properties

console.log(myRectangle2.getArea()); //calls instance method

//GETTERS & SETTERS
//used to define methods on a class, which are then used as if they're properties
class Square {
  constructor(_width) {
    this.width = _width; //give it custom instance properties uniqe to
    this.height = _width; //use the underscore (_) to sep the get/set from property
  }

  get area() {
    //this is a getter
    return this.width * this.height;
  }
  set area(area) {
    this.width = Math.sqrt(area);
  }
}
// let newSquare = new Square(4); //FOR GET
console.log(newSquare.area);

square1.area = 25; //FOR SET

//STATIC METHOD
/*
    static equals(a, b) {
    return a._width * a.height === b._width * b.height;
  }

let square1 = new Square(8);
let square2 = new Square(9);


console.log(Square.equals(square1, square2));
*/
