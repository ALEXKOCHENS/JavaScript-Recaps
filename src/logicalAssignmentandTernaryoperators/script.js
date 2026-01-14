// Logical operators
/* Logical operators are used to check if one or more expression result to true or false*/

//Logical AND(&&)
// &&--Returns true if all the operands are true

const x = 20;
const y = 15;

console.log(x > y && x === 20); //true
console.log(x > y && x === '20'); //false

y < x && console.log(`${y} is less than ${x}`);
y > x && console.log(`${y} is greater than ${x}`); //this is false, it fails to run

const person = {
  name: 'alex',
  age: 23,
  course: 'BIT',
  isLoggedIn: true,
};

Object.keys(person).length <= 4 &&
  console.log(`${person.name} qualifies for the scholarship`);
console.log(Object.keys(person));
console.log(Object.keys(person).length);

console.log(
  person.name === 'alex' &&
    person.age === 23 &&
    person.course === 'BIT' &&
    person.isLoggedIn
); //This returns true because all the expressions are true

console.log(
  person.name !== 'alex' &&
    person.age === 23 &&
    person.course === 'BIT' &&
    person.isLoggedIn
); //This returns false because the name of person.name ==='alex'

const posts = ['Post One', 'Post Two', 'Post Three'];
console.log(posts);

posts.length > 0 && console.log(`Posts are listed!`, posts[0]);

//Logical OR (||)
//This returns true in case one of the operands is true

const a = Math.sqrt(81);
const b = 3 ** 2;

console.log(9 ** 2 === 81 || Math.sqrt(81) !== 9); //true, because the first operand is true

console.log(9 ** 2 === 81 && Math.sqrt(81) !== 9); //This is false, because the second  operand is false!

//============================
// Logical Assignment operators

// ||=   ---This assigns the right hand value if the left side is a falsy value

let X = undefined;

if (!X) {
  X = 50;
}
console.log(X); //50

X = X || 40;

console.log(X); //40, if i comment  50 assigned to X in the function scope

X ||= 55;
console.log(X); //55 if i comment 40  as    signed to X in the second expression

// &&= --- Assigns the right side value only if the left side is a truthy value

let age = 10;
if (age) {
  age = 40;
}

console.log(age);

age = age && 40;
console.log(age); //40 because 10 is truthy

age &&= 45;
console.log(age); //45, because 40 is truthy
