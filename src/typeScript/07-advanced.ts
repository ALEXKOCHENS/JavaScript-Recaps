// 07-advanced.ts
// Advanced Types: Guards, Discriminated Unions, and Index Types

// ------------------------------------------------------------------
// 1. Type Guards
// ------------------------------------------------------------------

// Type Guards allow you to narrow down the type of an object within a conditional block.

// -- typeof Guard --
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// -- instanceof Guard --
// Useful for classes.
class Cart {
  items: string[] = [];
}
class Customer {
  name: string;
}

function processEntity(entity: Cart | Customer) {
  if (entity instanceof Cart) {
    // TypeScript knows 'entity' is a Cart here
    console.log(entity.items);
  } else {
    // TypeScript knows 'entity' is a Customer here
    console.log("Welcome " + entity.name);
  }
}

// -- "in" Operator Guard --
interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // accessing 'privileges' directly would fail
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

// ------------------------------------------------------------------
// 2. Discriminated Unions (Tagged Unions)
// ------------------------------------------------------------------

// A pattern where each type in a union has a common property (the "discriminant")
// which allows TypeScript to narrow down the exact type.

interface Bird {
  type: "bird"; // Discriminant property
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

// ------------------------------------------------------------------
// 3. Index Types (keyof)
// ------------------------------------------------------------------

// `keyof` yields the union of known public property names for a given type.

interface Person {
  name: string;
  age: number;
  email: string;
}

type P = keyof Person; // "name" | "age" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person: Person = {
  name: "Max",
  age: 30,
  email: "max@test.com",
};

const nameProp = getProperty(person, "name");
// const unknownProp = getProperty(person, "unknown"); // Error: Argument of type '"unknown"' is not assignable to parameter of type '"name" | "age" | "email"'.

// ------------------------------------------------------------------
// 4. Nullish Coalescing (??)
// ------------------------------------------------------------------

// Similar to logical OR (||), but only falls back if the left side is strict null or undefined.

const userInput = ""; // Empty string is falsy in JS.
const storedData = userInput || "DEFAULT"; // "DEFAULT" because "" is falsy.

const storedDataCorrect = userInput ?? "DEFAULT"; // "" because "" is NOT null/undefined.

// ------------------------------------------------------------------
// 5. Optional Chaining (?.)
// ------------------------------------------------------------------

// Safely access nested properties.

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" }, // Optional field
};

// console.log(fetchedUserData.job.title); // Might crash if job is undefined.
console.log(fetchedUserData?.job?.title); // Returns undefined if job is missing, doesn't crash.
