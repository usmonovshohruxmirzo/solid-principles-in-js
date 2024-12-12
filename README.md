# solid-principles-in-js

1. `S`ingle Responsibility Principle (SRP)
2. `O`pen-Closed Principle (OCP)
3. `L`iskov Substitution Principle (LSP)
4. `I`nterface Segregation Principle (ISP)
5. `D`ependency Inversion Principle (DIP)

---

### 1. **Single Responsibility Principle (SRP)**

**Definition**:  
A class or function should do only **one thing** and have only **one reason to change**.

**Think of it this way**:

- A toaster’s job is to toast bread. If you add coffee-making functionality to the toaster, fixing or upgrading it becomes complicated.
- Keep responsibilities separate to avoid confusion and bugs.

---

### 2. **Open/Closed Principle (OCP)**

**Definition**:  
Your code should be **open for extension** (easy to add new features) but **closed for modification** (don’t change existing code unnecessarily).

**Think of it this way**:

- A smartphone has a case that protects it but allows you to add new features (apps).
- You shouldn’t have to redesign the phone every time you add an app.

---

### 3. **Liskov Substitution Principle (LSP)**

**Definition**:  
A child class should be able to replace its parent class without breaking the program.

**Think of it this way**:

- Imagine a zoo where animals can perform actions like walking and eating. If you substitute a lion for a generic "animal," it should still be able to walk and eat like any other animal.
- If a fish is treated as an animal but tries to walk, it breaks the system because it doesn't follow the same rules as other animals.

---

### 4. **Interface Segregation Principle (ISP)**

**Definition**:  
Don’t force a class to implement methods it doesn’t need.

**Think of it this way**:

- A vending machine shouldn’t have a button for making coffee if it’s only meant for snacks.
- Split responsibilities into smaller, meaningful parts.

---

### 5. **Dependency Inversion Principle (DIP)**

**Definition**:  
High-level modules (important parts of your program) should not depend on low-level modules (specific details). Both should depend on a shared abstraction.

**Think of it this way**:

- A wall socket provides electricity. It doesn’t care if the device plugged in is a lamp, phone charger, or toaster.
- Your system should work with interchangeable parts, not fixed ones.
