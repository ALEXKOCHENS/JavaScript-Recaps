// 05-classes.ts
// Introduction to Classes in TypeScript

// ------------------------------------------------------------------
// 1. Basic Class Structure
// ------------------------------------------------------------------

class Person {
  // Public Properties (Default)
  name: string;

  // Private Property - Only meaningful within this class.
  private _age: number;

  // Protected Property - Accessible within this class and subclasses.
  protected email: string;

  // Constructor - Initialize properties
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this._age = age;
    this.email = email;
  }

  // Method
  greet(): string {
    return `Hello, my name is ${this.name}.`;
  }

  // Accessors (Getters/Setters)
  // Useful for validation or computed properties.
  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = value;
  }
}

// Usage
const user = new Person("Alice", 30, "alice@example.com");
console.log(user.greet());
console.log(user.age); // Uses the getter
user.age = 31; // Uses the setter
// user._age = 32;     // Error: Property '_age' is private and only accessible within class 'Person'.

// ------------------------------------------------------------------
// 2. Inheritance
// ------------------------------------------------------------------

// Using 'extends' keyword to create a subclass.
class Employee extends Person {
  department: string;

  constructor(name: string, age: number, email: string, department: string) {
    // Must call 'super()' first in derived classes.
    super(name, age, email);
    this.department = department;
  }

  // Overriding a method
  greet(): string {
    // Can access protected properties from parent.
    return `Hello from ${this.department}, I'm ${this.name} (${this.email}).`;
  }
}

const worker = new Employee("Bob", 40, "bob@corp.com", "Engineering");
console.log(worker.greet()); // Calls overridden method

// ------------------------------------------------------------------
// 3. Modifiers in Constructor Parameters
// ------------------------------------------------------------------

// Short-hand syntax to declare and initialize properties in one go.

class Car {
  // These become 'public make: string' and 'private model: string' automatically.
  constructor(
    public make: string,
    private model: string,
    readonly year: number, // Readonly property
  ) {}

  getInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2022);
// myCar.year = 2023; // Error: Cannot assign to 'year' because it is a read-only property.

// ------------------------------------------------------------------
// 4. Abstract Classes
// ------------------------------------------------------------------

// Abstract classes cannot be instantiated directly.
// They serve as base classes for other classes.
// Abstract methods must be implemented by derived classes.

abstract class Animal {
  // Concrete method (implemented here)
  move(): void {
    console.log("Roaming the earth...");
  }

  // Abstract method (must be implemented by subclasses)
  abstract makeSound(): void;
}

// class Dog extends Animal { // Error: Non-abstract class 'Dog' does not implement inherited abstract member 'makeSound' from class 'Animal'.
// }

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

const kitty = new Cat();
kitty.makeSound(); // "Meow!"
kitty.move(); // "Roaming the earth..."

// const pet = new Animal(); // Error: Cannot create an instance of an abstract class.

// ------------------------------------------------------------------
// 5. Implementing Interfaces
// ------------------------------------------------------------------

// Classes can implement interfaces to ensure they adhere to a specific contract.

interface Printable {
  print(): void;
}

interface Loggable {
  log(message: string): void;
}

class Invoice implements Printable, Loggable {
  constructor(
    public id: number,
    public amount: number,
  ) {}

  print(): void {
    console.log(`Invoice #${this.id}: $${this.amount}`);
  }

  log(msg: string): void {
    console.log(`[Log]: ${msg}`);
  }
}
