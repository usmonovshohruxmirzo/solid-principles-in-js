//! 3. Liskov Substitution Principle (LSP)

//? Definition: Subclasses should be replaceable by their parent class without breaking functionality.
//? Analogy: If a bird is a parent class, all birds should fly. If penguins can’t fly, they shouldn’t inherit from Bird.

// * Bad Example (Not following LSP):
// * A Rectangle class with a Square subclass:
// class Rectangle {
//   setWidth(width) {
//     this.width = width;
//   }

//   setHeight(height) {
//     this.height = height;
//   }
// }

// class Square extends Rectangle {
//   setWidth(width) {
//     this.width = this.height = width;
//   }
// }

//* Good Example (Following LSP):
//* Separate Rectangle and Square with their own logic:
class Shape {
  calculateArea() {
    throw new Error("Not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}
