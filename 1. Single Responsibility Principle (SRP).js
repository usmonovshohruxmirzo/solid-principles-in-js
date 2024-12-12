//! 1. Single Responsibility Principle (SRP)

//? Each class/module should have one reason to change.
//? Analogy: Imagine a washing machine. Its job is to wash clothes. It doesn’t also cook your meals or iron the clothes. If it did all that, fixing a problem would be harder.

// * Bad example (Not following SRP):
// * A UserService that both registers users and sends emails:
class UserService {
  registerUser(user) {
    // Register user
  }

  sendWelcomeEmail(user) {
    // Send email logic
  }
}

// * Good Example (Following SRP):
// * Break responsibilities into separate classes:
class UserService {
  registerUser(user) {
    // Register user
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // Send email logic
  }
}
