//! 4. Interface Segregation Principle (ISP)
//? Definition: A class should not be forced to implement methods it doesn’t use.

// * Bad Example (Not following ISP):
// * A Bird class with unrelated behaviors:
class Bird {
  fly() {}
  swim() {}
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly");
  }
}

// * Good Example (Following ISP):
// * Create separate interfaces for flying and swimming:
class FlyingBird {
  fly() {
    console.log("Flying");
  }
}

class SwimmingBird {
  swim() {
    console.log("Swimming");
  }
}

class Duck extends FlyingBird {}
class Penguin extends SwimmingBird {}
