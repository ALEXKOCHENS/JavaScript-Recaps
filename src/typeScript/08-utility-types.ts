// 08-utility-types.ts
// Essential Utility Types in TypeScript
// These are built-in generic types for common type transformations.

// ------------------------------------------------------------------
// 1. Partial<T>
// ------------------------------------------------------------------
// Makes all properties of T optional.

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "Start TypeScript Project",
  description: "Write code",
};

const todo2 = updateTodo(todo1, {
  description: "Finish code",
});

// ------------------------------------------------------------------
// 2. Required<T>
// ------------------------------------------------------------------
// Makes all properties of T required (opposite of Partial).

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 }; // Error: Property 'b' is missing.

// ------------------------------------------------------------------
// 3. Readonly<T>
// ------------------------------------------------------------------
// Makes all properties readonly.

const user: Readonly<{ id: number; name: string }> = {
  id: 1,
  name: "John",
};

// user.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

// ------------------------------------------------------------------
// 4. Record<K, T>
// ------------------------------------------------------------------
// Constructs an object type with property keys K and property values T.
// Very useful for mapping properties of one type to another.

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// cats.boris // Valid

// ------------------------------------------------------------------
// 5. Pick<T, K>
// ------------------------------------------------------------------
// Constructs a type by picking the set of properties K from T.

interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

type UserPreview = Pick<User, "id" | "username">;

const preview: UserPreview = {
  id: 1,
  username: "john_doe",
};

// preview.email // Error: Property 'email' does not exist on type 'UserPreview'.

// ------------------------------------------------------------------
// 6. Omit<T, K>
// ------------------------------------------------------------------
// Constructs a type by picking all properties from T and then removing K.
// (Opposite of Pick).

type UserWithoutEmail = Omit<User, "email">;

const userNoEmail: UserWithoutEmail = {
  id: 1,
  username: "john_doe",
  createdAt: new Date(),
};
// userNoEmail.email // Error: Property 'email' does not exist on type 'UserWithoutEmail'.

// ------------------------------------------------------------------
// 7. Exclude<T, U>
// ------------------------------------------------------------------
// Constructs a type by excluding from T all union members that are assignable to U.

type AvailableDrinks = "Coffee" | "Tea" | "Juice" | "Soda";
type HealthyDrinks = Exclude<AvailableDrinks, "Soda">; // "Coffee" | "Tea" | "Juice"

// ------------------------------------------------------------------
// 8. Extract<T, U>
// ------------------------------------------------------------------
// Constructs a type by extracting from T all union members that are assignable to U.

type Caffeinated = Extract<AvailableDrinks, "Coffee" | "Tea">; // "Coffee" | "Tea"

// ------------------------------------------------------------------
// 9. NonNullable<T>
// ------------------------------------------------------------------
// Constructs a type by excluding null and undefined from T.

type PossibleString = string | null | undefined;
type DefiniteString = NonNullable<PossibleString>; // string

// ------------------------------------------------------------------
// 10. Parameters<T> and ReturnType<T>
// ------------------------------------------------------------------
// Obtain the parameters of a function type as a tuple.
// Obtain the return type of a function type.

function createWidget(
  name: string,
  price: number,
): { name: string; price: number } {
  return { name, price };
}

type WidgetParams = Parameters<typeof createWidget>; // [name: string, price: number]
type WidgetReturn = ReturnType<typeof createWidget>; // { name: string; price: number }

const p1: WidgetParams = ["Axle", 100];
const r1: WidgetReturn = { name: "Axle", price: 100 };
