// 04-union-intersection.ts
// Union Types, Intersection Types, and Literal Types

// ------------------------------------------------------------------
// 1. Union Types (|)
// ------------------------------------------------------------------

// A variable can be one of several types.
// This is done using the pipe ('|') symbol.

let id: number | string;

id = 123; // Valid
id = "ABC"; // Valid
// id = true;   // Error: Type 'boolean' is not assignable to type 'number | string'.

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log("Your ID is: " + id);
  }
}

// ------------------------------------------------------------------
// 2. Type Aliases
// ------------------------------------------------------------------

// We can give a Union Type a name using the `type` keyword.
// This creates a reusable type definition.

type ID = number | string;
type Point = { x: number; y: number };
type Coordinate = Point | ID;

let location1: Coordinate = { x: 10, y: 20 };
// let location2: Coordinate = true; // Error

// ------------------------------------------------------------------
// 3. Literal Types
// ------------------------------------------------------------------

// Instead of just 'string' or 'number', you can specify exact values.
// This is very powerful when combined with Unions.

let align: "left" | "center" | "right";

align = "center";
// align = "top"; // Error: Type '"top"' is not assignable to type '"left" | "center" | "right"'.

// Numeric Literal Types
function roleLevel(role: 1 | 2 | 3): string {
  return `Level ${role}`;
}

// Boolean Literal Types
let isVisible: true | false = true;

// ------------------------------------------------------------------
// 4. Intersection Types (&)
// ------------------------------------------------------------------

// Combines multiple types into one.
// The resulting type has all properties of member types.

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & Identity;

let bob: Employee = {
  id: 100,
  name: "Bob Builder",
  email: "bob@builder.com",
  credit: 5000,
};

// ------------------------------------------------------------------
// 5. Type Assertions (Casting)
// ------------------------------------------------------------------

// Sometimes you know more about a value's type than TypeScript does.
// Use 'as' keyword to tell the compiler "Trust me, I know what I'm doing."

let someValue: unknown = "this is a string";

// We want to use string methods, but 'someValue' is unknown.
// So we cast it to string first.
let strLength: number = (someValue as string).length;

// Using syntax (mostly for JSX/TSX files)
let strLength2: number = (<string>someValue).length;

// NOTE: Avoid excessive casting if possible.
// Only use it when you are certain linking data from external sources (e.g., API, DOM).

// ------------------------------------------------------------------
// 6. Nullable Types
// ------------------------------------------------------------------

// By default (strictNullChecks: true), 'null' and 'undefined' are distinct types.
// A variable must effectively be declared to allow them.

function liveDangerously(x?: number | null) {
  // x can be number, null, or undefined
  console.log(x?.toFixed()); // Optional chaining
}

liveDangerously(null);
// liveDangerously(undefined); // Implicitly allowed by '?'
