//! 2. Open/Closed Principle (OCP)

//? Definition: Classes/modules should be open to extension (you can add new functionality) but closed to modification (existing code doesn't change).
//? Analogy: Imagine a car where you can add new features (like a sunroof) without redesigning the entire car.

// * Bad example (Not following OCP)
// * A Discount class that changes every time a new discount type is added:

class Discount {
  calculate(price, type) {
    if (type == "student") return price * 0.9;
    if (type == "senior") return price * 0.8;
    return price;
  }
}

// * Good Example (Following OCP):
// * Use inheritance to add new discount types:
class Discount {
  calculate(price) {
    return price;
  }
}

class StudentDiscount extends Discount {
  calculate(price) {
    return price * 0.9;
  }
}

class SeniorDiscount extends Discount {
  calculate(price) {
    return price * 0.8;
  }
}
