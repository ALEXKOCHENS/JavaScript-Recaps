// 02-complex-types.ts
// Introduction to Arrays, Objects, Tuples, and Enums

// ------------------------------------------------------------------
// 1. Arrays
// ------------------------------------------------------------------

// There are two ways to define arrays in TypeScript.

// Syntax 1: Using square brackets []
let numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push("six"); // Error: Type 'string' is not assignable to parameter of type 'number'.

// Syntax 2: Using the generic Array<type> syntax (Generics preview)
// This is functionally identical to the first one.
let strings: Array<string> = ["Hello", "World"];

// -- Readonly Arrays --
// Sometimes you want an array that shouldn't be modified after creation.
let protectedList: readonly string[] = ["Admin", "Moderator"];
// protectedList.push("User"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// ------------------------------------------------------------------
// 2. Tuples
// ------------------------------------------------------------------

// Tuples are fixed-length arrays where each element has a known type.
// Often used for coordinate pairs, key-value pairs, or function results.

let coordinates: [number, number] = [10, 20];

// You can mix types in tuples.
let userSummary: [number, string, boolean] = [1, "John Doe", true];
// userSummary[0] = "error"; // Error: Type 'string' is not assignable to type 'number'.

// -- Variadic Tuples --
// You can define tuples with rest elements.
let startCoordinates: [number, number] = [0, 0];
// let path: [number, number, ...string[]] = [0, 0, "Point A", "Point B", "Point C"];

// ------------------------------------------------------------------
// 3. Enums
// ------------------------------------------------------------------

// Enums allow us to define a set of named constants.
// They make code more readable and intent clear.

// Numeric Enums (Auto-incrementing)
enum Direction {
  Up = 1, // Starts at 1
  Down, // Becomes 2
  Left, // Becomes 3
  Right, // Becomes 4
}
// Usage:
let move = Direction.Up;

// String Enums (Must be initialized with strings)
enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

function makeRequest(url: string, method: HTTPMethod) {
  // ...
}
makeRequest("/api/users", HTTPMethod.GET);
// makeRequest("/api/users", "GET"); // Error: Type '"GET"' is not assignable to type 'HTTPMethod'.

// ------------------------------------------------------------------
// 4. Objects
// ------------------------------------------------------------------

// In TypeScript, we describe the shape of an object using Type Aliases or Interfaces.

// -- Type Alias --
// Good for defining object shapes, unions, primitives, tuples, and more.
type User = {
  id: number;
  username: string;
  email?: string; // Optional Property (?) - Can be undefined or missing.
  readonly role: string; // Readonly Property - Cannot be changed after creation.
};

let user1: User = {
  id: 1,
  username: "john_doe",
  role: "admin",
};

// Accessing properties
console.log(user1.username);
// user1.role = "guest"; // Error: Cannot assign to 'role' because it is a read-only property.

// -- Interface --
// Interfaces are primarily used specifically for defining object structures (classes/objects).
// They support extending other interfaces.

interface Product {
  id: number;
  name: string;
  price: number;
}

// Extending an interface
interface DiscountedProduct extends Product {
  discount: number;
}

let laptop: DiscountedProduct = {
  id: 101,
  name: "MacBook Pro",
  price: 2000,
  discount: 10,
};

// -- Which to use? Type vs Interface --
// For objects: Interfaces are generally preferred because they support declaration merging
// and are slightly faster for the compiler.
// For unions/primitives/advanced types: Use Type aliases.

// ------------------------------------------------------------------
// 5. Index Signatures
// ------------------------------------------------------------------

// Sometimes you don't know the names of all properties in advance,
// but you know the type of the values.

interface StringDictionary {
  [key: string]: string;
}

let translations: StringDictionary = {
  hello: "hola",
  goodbye: "adios",
};
// translations["thank you"] = 1; // Error: Type 'number' is not assignable to type 'string'.
