//! 5. Dependency Inversion Principle (DIP)

//? Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions.
//? Analogy: When charging your phone, you don’t care whether the charger is from Brand X or Brand Y. You just need a charger (the abstraction).

// * Bad Example (Not following DIP):
// * An App class depends on a specific FileLogger:
class FileLogger {
  log(message) {
    console.log(`File log: ${message}`);
  }
}

class App {
  constructor() {
    this.logger = new FileLogger();
  }

  run() {
    this.logger.log("App is running");
  }
}

// * Good Example (Following DIP):
// * Use an abstraction for logging:
class Logger {
  log(message) {}
}

class ConsoleLogger extends Logger {
  log(message) {
    console.log(`Console log: ${message}`);
  }
}

class App {
  constructor(logger) {
    this.logger = logger;
  }

  run() {
    this.logger.log("App is running");
  }
}

const app = new App(new ConsoleLogger());
app.run();
