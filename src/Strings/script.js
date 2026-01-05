// Strings

const firstName = 'alex';
const lastName = 'kochens';

// Concatenation
const fullName = 'My name is ' + firstName + ' ' + lastName;
console.log(fullName);

// Using backticks
console.log(`My name is ${firstName} ${lastName}`); //My preference

// Properties and methods
const course = 'Javascript refresher';
// length
console.log(course.length);

// uppercase
console.log(course.toUpperCase());
console.log(course.toLowerCase());

// Accessing characters at different index positions

let x = course;

x = course.charAt(4); //s

x = course[0]; //j

x = course.indexOf('hello'); // this gives -1 for values tha do not exist
x = course.indexOf('script'); //4

x = course.substring(4, 7); //starts from 4 and ends at 7
x = course.substring(4); //starts from 4 to the end

x = course.slice(-23, -10);

x = '   hello world';
x = x.trim(); //this removes any white space

x = x.replace('world', 'alex');

x = x.includes('hello');
console.log(x);

// Challenge to capitalize the first letter of the string

const myString = 'developer';
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1, 9);
console.log(myNewString);

// const myString = 'developer';
// const myNewString = myString.replace('d', 'D');
// console.log(myNewString);
