# 📘 TypeScript Mastery:

Welcome! If you know JavaScript, you're already 80% of the way there. TypeScript is just distinct—it's JavaScript with **superpowers**. It helps you catch errors _before_ you run your code, specifically by tracking the "types" of your data (strings, numbers, objects, etc.).

Think of this folder (`src/typeScript`) as a step-by-step course. I've written code files (`01` to `08`) that explain concepts from the very beginning to advanced professional patterns.

---

## 🚀 How to Run the Code

You can run any of these files directly in your terminal without compiling manually.

**Command:**

```bash
# Example: Running the first file
npx ts-node src/typeScript/01-primitives.ts
```

_(Note: If asked to install `ts-node`, just type `y` and hit Enter)._

---

## 🗺️ Your Roadmap

Follow these files in order. Read the comments inside each file—they _are_ the tutorial.

### **Phase 1: The Foundation**

- **📄 `01-primitives.ts`**
  - **What it covers:** The basic building blocks (Strings, Numbers, Booleans).
  - **Key Concept:** _Type Inference_ (letting TS guess the type) vs _Type Annotation_ (telling TS the type).
- **📄 `02-complex-types.ts`**
  - **What it covers:** Structuring data. Arrays, Objects, Enums, and Tuples.
  - **Key Concept:** `interface` vs `type` — the blueprints for your objects.

### **Phase 2: Logic & Control**

- **📄 `03-functions.ts`**
  - **What it covers:** How to strictly control what goes _into_ and comes _out_ of your functions.
  - **Key Concept:** Optional parameters (`?`) and Default values.

- **📄 `04-union-intersection.ts`**
  - **What it covers:** Flexibility. Making variables that can be more than one type (Union `|`) or combined types (Intersection `&`).
  - **Key Concept:** Literal Types (e.g., `let status: "success" | "error"`).

### **Phase 3: Object-Oriented Programming**

- **📄 `05-classes.ts`**
  - **What it covers:** Introduction to Classes.
  - **Key Concept:** Modifiers like `private` (hidden info), `public` (open info), and `readonly` (cannot change).

### **Phase 4: Professional Patterns (Advanced)**

- **📄 `06-generics.ts`**
  - **What it covers:** Writing reusable code. This is the "hardest" concept for beginners but the most powerful.
  - **Key Concept:** Think of Generics `<T>` as "variables for types".

- **📄 `07-advanced.ts`**
  - **What it covers:** Safety checks. How to safely check types at runtime using "Guards".
  - **Key Concept:** `typeof`, `instanceof`, and safe operators like `?.` (Optional Chaining).

- **📄 `08-utility-types.ts`**
  - **What it covers:** Shortcuts. Built-in tools Typescript gives you so you don't have to write code from scratch.
  - **Key Concept:** `Partial`, `Pick`, `Omit`, and `Record`.

---

## 💡 Top 3 Rules for Beginners

1. **Don't use `any`:** It turns off the safety of TypeScript. Only use it if you have absolutely no choice.
2. **Let TS Infer:** You don't need to write `: string` every time. If you write `const name = "Alex"`, TypeScript knows it's a string. Keep your code clean.
3. **Read the Errors:** TypeScript errors can look scary, but they are usually telling you exactly what is wrong. Read them carefully!

Happy Coding! 🎯
