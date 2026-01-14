// Function declaration and expression

//Declaration

function hangOut(name) {
  console.log(`Hey,${name} could we go for a hangout today?`);
}
hangOut('kochens');

// Expression

const getGirlFriend = function (name, age) {
  if (age <= 20) {
    console.log(
      `Hey ${name}, you can't manage girls at your age!. Focus on building your self...`
    );
  } else {
    console.log(
      `Hey!, your age of ${age} years can allow you to have a girlfriend`
    );
  }
};

getGirlFriend('Heron', 19);

// Arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 6));

const sayBye = (name) => console.log(`Good bye ${name}`);
sayBye('jane');

//arrow functions with objects

const createPerson = () => ({
  name: 'Gerald',
  age: 29,
  course: 'BIT',
});
console.log(createPerson());
console.log(createPerson().name);
console.log(createPerson().course);

//arrow functions with arrays

const colors = ['red', 'white', 'pink', 'green'];
colors.forEach((col) => console.log(col));

// IIFE(Immediately Invoked Function Expression)

const person = {
  name: 'alex kochens',
  age: 20,
  favoriteFood: 'Pizza',
};
// console.log(person);
