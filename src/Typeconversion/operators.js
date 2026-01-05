// Operators
// 1. Arithmetic Operator

let a;
a = 2 + 2;
a = 2 - 2;
a = 2 / 2;
a = 2 % 2; //The modula operator. it gives the remainder in division

a = 10 % 7; //this gives a reminder of 3

console.log(a);

// Exponent

let result = 4 ** 8;
console.log(result);

// increment

let x = 5;
x++;
x = x += 1;

// Decrement

x--;
x = x - 4;

console.log(x);

// Concatenation using the + operator
const name = 'alex kochens';
const profession = 'fullstack developer';
const msg = name + ' is a ' + profession;
console.log(msg);

// This is better with backticks, makes it simple and more cleaner

console.log(`${name} is a ${profession}`);

// Assignment operators

let z = 5;
z += 3;
z -= 3;
z *= 3;
z %= 3; //this gives 0 because 15 divided by 3 leaves a remainder of 0
console.log(z);

// Comparison operators

let y;
y = 3 == 3; //true
y = 3 == '3'; //true
y = 3 != 3; //false
y = 3 != '3';

// Strict equal

y = 3 === 3; //true
y = 3 === '3'; //false because this checks for the type as well
y = 3 !== 3; //false
y = 3 !== '3'; //true because the types are different

// greater than and less than

y = 5 > 6; //false
y = 5 < 6; //true
y = 5 >= 6; //false
y = 5 <= 6; //true
console.log(y);

// Type coercion
// This is where JS explicitly converts a value from one data type to another

let d = 20;
let c = '20';

console.log(d + c); //2020
console.log(d + Number(c)); //40

console.log(d * c); //400
console.log(d * Number(c)); //400

console.log(d / c); //1

// No deep dive here because its not recommended to use type coercion
