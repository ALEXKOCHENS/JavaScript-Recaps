// 03-functions.ts
// Functions in TypeScript

// ------------------------------------------------------------------
// 1. Function Declarations
// ------------------------------------------------------------------

// You must annotate the types of parameters and usually the return type.
// If the return type is omitted, TS will infer it (though it's good practice to be explicit).

function add(a: number, b: number): number {
  return a + b;
}

// ------------------------------------------------------------------
// 2. Arrow Functions
// ------------------------------------------------------------------

// Similar to function declarations.
const multiply = (x: number, y: number): number => {
  return x * y;
};

// Shorthand syntax without types (inferred contextually if callback, but here implicit 'any' without it)
const divide = (x: number, y: number) => x / y; // return type: number (inferred)

// ------------------------------------------------------------------
// 3. Optional and Default Parameters
// ------------------------------------------------------------------

// -- Optional Parameters (?) --
// Add a '?' after the parameter name to make it optional.
// Optional parameters must come after required parameters.

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Alex")); // "Hello, Alex!"
console.log(greet("Alex", "Hi")); // "Hi, Alex!"

// -- Default Parameters (=) --
// You can provide a default value.
// No need for '?' because the parameter will always have a value (either provided or default).

function createUser(username: string, role: string = "user"): string {
  return `Created user ${username} with role ${role}`;
}

// ------------------------------------------------------------------
// 4. Rest Parameters
// ------------------------------------------------------------------

// Sometimes you don't know how many arguments will be passed.
// Use the rest operator (...) to collect arguments into an array.
// The type must be an array type.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10

// ------------------------------------------------------------------
// 5. Function Types (Signatures)
// ------------------------------------------------------------------

// You can define the type of a function independently of its implementation.
// This is useful for passing callbacks.

// Define a type for a function that takes two numbers and returns a number.
type MathOperation = (a: number, b: number) => number;

let operation: MathOperation;

operation = add; // Valid
operation = multiply; // Valid
// operation = (s: string) => s.length; // Error: Types are incompatible.

function calculate(a: number, b: number, logic: MathOperation): number {
  return logic(a, b);
}

// ------------------------------------------------------------------
// 6. Function Overloading
// ------------------------------------------------------------------

// Sometimes a function can accept different combinations of arguments and
// return different types based on those arguments.

// 1. Declare overloads (signatures only, no body)
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(nameOrAge: string | number): string; // Implementation signature

// 2. Implement the function (must be compatible with all overloads)
function getInfo(value: any): string {
  if (typeof value === "string") {
    return `Name: ${value}`;
  } else if (typeof value === "number") {
    return `Age: ${value}`;
  }
  return "";
}

// Usage:
// getInfo("Alex"); // Calls overload 1
// getInfo(30);     // Calls overload 2
// getInfo(true);   // Error: No overload matches this call.

// ------------------------------------------------------------------
// 7. Contextual Typing involved with 'this'
// ------------------------------------------------------------------

// In strict mode, 'this' implies 'any' by default inside standalone functions.
// You can use the special 'this' parameter as the first argument to type it.

interface Button {
  label: string;
  onClick: (this: Button) => void;
}

const myButton: Button = {
  label: "Click Me",
  onClick: function (this: Button) {
    // 'this' is now typed as Button
    console.log(`Button clicked: ${this.label}`);
  },
};

// myButton.onClick(); // Typescript knows 'this' context.
