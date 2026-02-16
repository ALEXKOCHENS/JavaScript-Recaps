// 01-primitives.ts
// Introduction to Basic Types in TypeScript

// ------------------------------------------------------------------
// 1. Type Annotation vs Type Inference
// ------------------------------------------------------------------

// In TypeScript, we can explicitly tell the compiler what type a variable is.
// This is called "Type Annotation".
let message: string = "Hello, TypeScript!";
// message = 123; // Error: Type 'number' is not assignable to type 'string'.

// TypeScript is also smart enough to guess the type based on the value.
// This is called "Type Inference".
let count = 42; // TypeScript knows this is a number.
// count = "forty-two"; // Error: Type 'string' is not assignable to type 'number'.

// Best Practice: Use Type Inference where possible to keep code clean.
// Use Type Annotations when you declare a variable without an initial value
// or when you want to enforce a specific type.

// ------------------------------------------------------------------
// 2. Basic Types
// ------------------------------------------------------------------

// -- Strings --
// Can use single quotes, double quotes, or backticks (template literals).
let firstName: string = "John";
let lastName: string = "Doe";
let greeting: string = `Hello, ${firstName} ${lastName}`;

console.log(greeting);

// -- Numbers --
// TypeScript supports integers and floating-point numbers.
let age: number = 30;
let price: number = 99.99;
let hex: number = 0xf00d; // Hexadecimal supported too

// -- Booleans --
// True or False values.
let isActive: boolean = true;
let hasError: boolean = false;

// ------------------------------------------------------------------
// 3. Special Types: 'any' and 'unknown'
// ------------------------------------------------------------------

// -- any --
// The 'any' type creates a loophole in TypeScript's type checking.
// It allows a variable to be anything, effectively turning off type checking for that variable.
let randomValue: any = 10;
randomValue = "Hello"; // No Error
randomValue = true; // No Error
// randomValue();     // No Error at compile time, but might crash at runtime!

// Best Practice: AVOID 'any' whenever possible. It defeats the purpose of using TypeScript.

// -- unknown --
// 'unknown' is the type-safe counterpart of 'any'.
// You can assign anything to 'unknown', but you can't use it until you check its type.
let flexibleValue: unknown = "Maybe a string";

// flexibleValue.toUpperCase(); // Error: Object is of type 'unknown'.

if (typeof flexibleValue === "string") {
  // TypeScript now knows it's a string within this block.
  console.log(flexibleValue.toUpperCase()); // Works!
}

// ------------------------------------------------------------------
// 4. 'void', 'null', and 'undefined'
// ------------------------------------------------------------------

// -- void --
// Used mostly for function return types that don't return a value.
function logMessage(msg: string): void {
  console.log(msg);
  // return true; // Error: Type 'boolean' is not assignable to type 'void'.
}

// -- null and undefined --
// In strict mode (which is on by default in modern TS), 'null' and 'undefined'
// are distinct types and not subtypes of other types.
let u: undefined = undefined;
let n: null = null;
// let num: number = undefined; // Error in strictTypes

// ------------------------------------------------------------------
// 5. 'never'
// ------------------------------------------------------------------

// The 'never' type represents values that never occur.
// Used for functions that throw errors or have infinite loops.

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // ...
  }
}
