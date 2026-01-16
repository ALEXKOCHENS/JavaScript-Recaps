// High order array methods

//=============================
// for each
const socials = ['TikTok', 'LinkedIn', 'Instagram', 'Twitter'];
socials.forEach((social) => {
  console.log(social);
});

// Defining a  call back function.

const showUsers = (user) => {
  console.log(user);
};
const users = ['mike', 'tim', 'jeri'];
users.forEach(showUsers);

// with array of objects

const colors = [{ name: 'red' }, { name: 'green' }, { name: 'white' }];
colors.forEach((color) => {
  console.log(color.name);
});

// ================================
// Filter
const AppUsers = [
  { name: 'Alex', isLoggedIn: true },
  { name: 'Jane', isLoggedIn: false },
  { name: 'Keith', isLoggedIn: true },
  { name: 'Keneth', isLoggedIn: false },
  { name: 'Alice', isLoggedIn: true },
  { name: 'James', isLoggedIn: false },
];

AppUsers.forEach((appUser) => console.log(appUser.isLoggedIn));

const verifiedAppUsers = AppUsers.filter((user) => user.isLoggedIn === true);
console.log(verifiedAppUsers);
verifiedAppUsers.forEach((appUser) => console.log(appUser.name));

// Map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// chaining map

const doubled2 = numbers
  .map((number) => number * 2)
  .map((newNumber) => newNumber ** 2)
  .map((lastNumber) => lastNumber + 1);

console.log(doubled2);

// Reduce

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 28];
const sumOfEvenNumbers = evenNumbers.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue;
},
0);

console.log(sumOfEvenNumbers); //132

// Short version

const SumOfEvenNumbers2 = evenNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(SumOfEvenNumbers2); //132

// Using a shopping cart example to understand reduce better

const products = [
  { id: 1, name: 'iphone', price: 2000000 },
  { id: 2, name: 'S25Ultra', price: 1500000 },
  { id: 3, name: 'Sony', price: 3000000 },
  { id: 4, name: 'iphone17Pro', price: 4000000 },
  { id: 5, name: 'InfinixS20', price: 1200000 },
];

products.forEach((product) => console.log(product.name));

const totalPrice = products.reduce(function (acc, cur) {
  return (acc += cur.price);
}, 0); //11700000

console.log(totalPrice);
