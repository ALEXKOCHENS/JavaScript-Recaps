// 06-generics.ts
// Introduction to Generics in TypeScript

// ------------------------------------------------------------------
// 1. What are Generics?
// ------------------------------------------------------------------

// Generics allow you to write code that works with ANY type,
// while preserving the relationship between the type you put in and what you get out.
// Think of them as variables for types.

// Without Generics:
function identifyNumber(arg: number): number {
  return arg;
}

function identifyString(arg: string): string {
  return arg;
}

// With Generics:
// <T> captures the type provided (e.g., number) or inferred
// so we can use it later (e.g., return type T).
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString"); // Strict: 'myString'
let output2 = identity(100); // Inferred: 100

// ------------------------------------------------------------------
// 2. Generic Interfaces
// ------------------------------------------------------------------

interface Box<T> {
  contents: T;
}

let stringBox: Box<string> = { contents: "hello" };
let numberBox: Box<number> = { contents: 42 };

// Generic interface for functions
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

// ------------------------------------------------------------------
// 3. Generic Classes
// ------------------------------------------------------------------

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
// textStorage.addItem(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(textStorage.getItems()); // ["Max", "Manu"]

// ------------------------------------------------------------------
// 4. Generic Constraints
// ------------------------------------------------------------------

// Sometimes we want to restrict the types that can be used with a generic.
// We use the `extends` keyword to enforce constraints.

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

// Works because strings have a .length property
console.log(countAndDescribe("Hi there!"));
// Works because arrays have a .length property
console.log(countAndDescribe(["Sports", "Cooking"]));
// countAndDescribe(10); // Error: Type 'number' does not satisfy the constraint 'Lengthy'.

// ------------------------------------------------------------------
// 5. keyof Constraint
// ------------------------------------------------------------------

// We can constrain a type to be a property key of another object.

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");
// extractAndConvert({ name: "Max" }, "age"); // Error: Argument of type '"age"' is not assignable to parameter of type '"name"'.

// ------------------------------------------------------------------
// 6. Generic Utility Types (Built-in)
// ------------------------------------------------------------------

// -- Partial<T> --
// Takes a type and makes all its properties optional.
interface Goal {
  title: string;
  description: string;
  date: Date;
}

function createGoal(title: string, description: string): Partial<Goal> {
  let courseGoal: Partial<Goal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  return courseGoal;
}

// -- Readonly<T> --
// Makes all properties readonly.
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // Error: Property 'push' does not exist on type 'readonly string[]'.
