## Variables

..A variable is simply a name that you give to a value so that you can use that name to access that value later in your entire code. they are used to reference data so that you can use the same data multiple times in your program.

# Variable naming for JS:

--the names can only contain letters, numbers and underscores
--the first character must NOT be a number
--the reserved key words are NOT used while naming the variables eg. let, const, for, class etc
--the variable names are case sensitive. eg Name !== name

# The naming Convention

...camel case, eg dateOfBirth, firstName, lastName
...snake case, eg date_of_birth, first_name, last_Name

# constant variables.

..These are the variables that do not change as long as the program is running. they are declared using the key word 'const' Other key words to declare a variable in JS are; let, var(out fashioned, not recommended)

# Assigning a variable, Explanation

--variables are declared using the key words var, let and const.
Examples:

let age = 40;

What happens under the hood.
when the above code is written in JS, Javascript asks memory for space to store the value 40, the variable name {age} becomes a reference or a pointer to that value{40} in the memory location. this value can later be accessed in the entire program/code using the variable name which is the reference to the value.

const age =40;
Const is used when the values of a variable aren't expected to change. the values are constant in the program.

In case there won't be need to re-assign a variable to other values, const is the best preference. It locks the the reference NOT the value. this is mostly with reference data types unlike primitive data types.

# Task:

let x =100;
let y =x;
x =x+1;
console.log(x,y);

---

What happens under the hood:
JavaScript allocates a slot in memory to store the value of x which is 100. the value of x is again assigned to a variable y. implying a new slot in memory will be created to store the value of y which is copied from x. so both x and y contain the value 100 but in different memory locations.

x =x+1; here the value of x is added by 1 and then re-assigned and stored in the x slot in memory, so x becomes 101, and y remains 100.

## Diving in to Data types next::

...Data types are simply definition for different data known to a programming language.
...Data types contain specification on what you can do and what you cannot do with data.
...data types tell the javascript engine how much memory to allocate, how the value behaves, how its copied, how its compared.

## Primitive data-types

These are basic immutable values that are stored directly in memory and are accessed and copied by value rather than by reference

# Strings.

these are simply data defined in a series of characters. they are enclosed by single or double quotes, but they have to match. NOT single quote at the start of the string and double quote at the end of the string. This will give a syntax error!

Error:
console.log('Hello World")

---

Recommended:

console.log('Hello World') or
console.log("Hello World")

backticks are also high preference

console.log(`Hello World`)

# Numbers

These are integers as well as floating point numbers.
they include
.integers, floats, NaN, infinity

# Boolean

This represents a logical entity. Either true or false.

# Null

Intentional absence of any object value. the type of null returns an object because back in 1995, the first version of javascript, values were represented internally using type tags, objects only had a specific binary tag. null was represented as a null pointer(0x00). Unfortunately this same binary pattern matched the object tag. so the javascript engine reported typeOf null === "object"

this was wrong, known early but cannot be fixed without breaking the web.
its a long standing javascript bug from the early implementation, never fixed due to backward compatibility

# Undefined

A variable is declared but its value is not assigned. this give a data type of undefined.
also a function without a return.

# Symbol

This is advanced and rarely used.
its used for unique identifiers, avoiding property collisions

# BigInt.

This represents big integers that the number types cannot handle.

## Reference data-types

These are data types whose values are stored in memory as objects and variables do not hold the actual value but instead hold a reference(memory address) to where the value is stored.

# Arrays.

This stores an ordered collection of values and are accessed by numeric indexes, and referenced by memory addresses rather than copied by value.

# Objects.

This stores data as key-value pairs, where the variable holds a reference to that object's location in memory, NOT holding the actual data.

# Functions.

Is a reference data type that represents executable code stored in memory and accessed through a reference, allowing it to be assigned, passed and returned like any other value.

# Date.

This is a reference type that represents a specific moment in time, and it stores date and time information in memory.

# Map.

This is a reference type that stores key-value pairs while preserving insertion order and allowing keys of any data type.
