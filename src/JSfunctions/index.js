// Functions

function sayHello() {
  console.log(`Hello JavaScript developers!`);
}
sayHello();

// parsing a parameter

let sum;
let product;
function calculate(num1, num2) {
  sum = num1 + num2;
  product = num1 * num2;
  console.log(
    `The sum of ${num1} and ${num2} is ${sum},The product is ${product}`
  );
}
calculate(29, 50);

// Scope.

// Global scope

const x = 20;
console.log(x);

function displayAge() {
  console.log(`Your age is ${x}`);
  const name = 'John';
}
console.log(name); //this is trying to access function scoped variable to return its value but it won't return anything
displayAge();

const add = () => {
  const herAge = 50;
  console.log(herAge + x);
  console.log(name); //this also returns nothing. function scoped
};
add(); //this can access a global scoped variable

// Block scope

for (let i = 0; i <= 15; i++) {
  console.log(i);
}
console.log(i); //this gives an error, but if var is used, it works

// Var is function scoped

const read = () => {
  var book = 'chemistry';
  console.log(book);
};

// console.log(book); //this returns an error
read();

// Nested scope
const createUser = () => {
  const user1 = 'alex kochens';
  const user2 = 'Mike kent';

  //   console.log(myUsers); //this returns an error

  function displayUser() {
    const myUsers = [user1, user2].toString();
    console.log(myUsers);
  }

  displayUser();
};
createUser();

// IIFE

(function () {
  const person = {
    name: 'Linic',
    age: 30,
    favoriteFood: 'Chips and Chicken',
  };
  console.log(person);
})();

// parsing a param

(function (name) {
  console.log(`hello ${name}`);
})('alex');
