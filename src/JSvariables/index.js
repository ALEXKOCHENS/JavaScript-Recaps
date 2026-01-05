// ways for declaring a variable.
// there are always three ways for declaring a variable. we use the key words [let, const and var]

// using  'let'
/*
..this is often used when variable values are expected to change or re-assigned to other values.
All variable 
*/

// assigning  a variable
let age = 40;
console.log(age); //this piece of code directly outputs the value 40 in the console.

age = 55; //re-assigning a variable to a new value. this outputs 55, updates the new value of the variable {age} in memory.
console.log(age);

// declaring a variable

let name;
name = 'alex';

name = 'John';

console.log(name); //here a variable is declared and its value assigned later.the values can be re-assigned based on your preference.

// Variable scope.
console.log(newYears); //this gives undefined due to hoisting. this is to be covered later.
console.log(newYear); //this gives a reference error because the value cant be referenced in the memory.This is called a Temporal Dead Zone(TDZ). the error occurs because the variable has to be declared first, before accessing it in the block scope.the variable exist but can not be accessed until the declaration runs
let newYear = 2026;
var newYears = 2026;

// Using "const"
// In case there won't be need to re-assign a variable to other values, const is the best preference. It locks the the reference NOT the value.

const person = {
  name: 'alex kochens',
  age: 23,
  nationality: 'Ugandan',
};

// the properties of the person object  can be changed eg.
person.name = 'Angella';
console.log(person.name); //this updates the name from alex kochens to Angella in the memory.
console.log(person);

// assigning multiple variables
let firstName = 'okello',
  lastName = 'pius',
  yearOfBirth = 2020;

console.log(firstName, lastName, yearOfBirth);

// assigning multiple variables using const

const price = `$5`,
  qty = `5kg`,
  shop = `mark's Boutique`;

console.log(price, qty, shop);
