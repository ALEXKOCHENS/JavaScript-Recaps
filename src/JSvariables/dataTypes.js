// Javascript data-types

// Primitive data types
// Strings.
const firstName = 'alex kochens';
const nationality = `Ugandan`;
console.log(firstName, typeof firstName, nationality, typeof nationality);

// numbers

let numberOfGuests = 20;
console.log(numberOfGuests, typeof numberOfGuests);

const PI = 3.143;
console.log(PI, typeof PI); //this gives a type of number because javascript does not specify data types for floating point numbers like other languages like  in java
const age = NaN;
console.log(age, typeof age); //this also gives number as a data type. but its an invalid number

// boolean

const isLoggedIn = true;
console.log(isLoggedIn, typeof isLoggedIn);

const isEligibleForLoan = false;
console.log(isEligibleForLoan, typeof isEligibleForLoan);

// Null

const quantityOfSoup = null;
console.log(quantityOfSoup, typeof quantityOfSoup); //this returns a type of object.

let result;
console.log(result, typeof result); //this gives undefined.

// Symbol

const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const big = 8543758346496489n;
console.log(big, typeof big);
