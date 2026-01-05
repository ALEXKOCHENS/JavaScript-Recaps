// Type conversion.

// converting a string to a number

let number = '300';

// ways to convert  a string to a number
number = Number(number);
console.log(number, typeof number);

number = +number;
console.log(number, typeof number);

number = parseInt(number);
console.log(number, typeof number);

// Converting a string to a number in case of a decimal

let amount = '207.5';

amount = parseFloat(amount);
console.log(amount, typeof amount);

amount = parseInt(amount); //this converts the number to 207 because it only reads the whole number part and it stops when it encounters a non integer character(.)
console.log(amount, typeof amount);

// Converting a number to String

let count = 40;
count = count.toString(); //Here javascript temporarily wraps primitive values into objects, so that they can access methods
console.log(count, typeof count);

count = String(count);
console.log(count, typeof count);

// converting a string which isn't a number to a number

let myNum = 'Hello';
myNum = Number(myNum);
console.log(myNum); //this returns NaN

console.log(myNum + undefined); //NaN
console.log(undefined + undefined); //NaN

// Converting to a boolean

let num1 = 1;

num1 = Boolean(num1);
console.log(num1, typeof num1);
