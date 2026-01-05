// Reference data-types

// Arrays.
const colors = ['red', 'green', 'white'];
console.log(colors, typeof colors);

// Objects

const item = {
  name: 'Book',
  Author: 'alex kochens',
  publishedYear: 2020,
};

console.log(item, typeof item);

// Function
const updateUser = function (name) {
  console.log(`Hello ${name}`);
};

updateUser('alex');
console.log(updateUser, typeof updateUser);

// Date

const date = new Date();
console.log(date, typeof date);

// Primitive VS Reference types. How they are stored in memory.

// Primitive
const name = 'Kevin';
const age = 20;

let newName = name;
let newAge = age;

console.log(name, newName, age, newAge);

newName = 'Silvester';
console.log(newName, name);

newAge = 22;
console.log(newAge, age);

// Reference

const car1 = {
  model: 'Toyota',
  color: 'blue',
};

let car2 = car1;

car1.color = 'red';
console.log(car2);

console.log(car1, car2);

const user1 = {
  name: 'Alex',
  course: 'javascript',
};

let user2 = user1;
console.log(user1, user2);

user2.course = 'python';
console.log(user1, user2);

// Using the spread operator

let user3 = { ...user1 };
console.log(user3);

user3.name = 'David'; //the spread operator creates new object and copies the properties, NOT the reference and creates a new object in the heap , this is why the name of user3 changes to David.
console.log(user3);
