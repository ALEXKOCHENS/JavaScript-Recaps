// for of loop

// Using for loop
const boys = ['alex', 'john', 'mike', 'rhens'];
for (let i = 0; i <= boys.length; i++) {
  console.log(boys[i]);
}

// Using for of loop
for (let boy of boys) {
  console.log(boy);
}

// for of loop with an array of objects

const users = [
  { name: 'jane', nationality: 'Kenyan' },
  { name: 'alex', nationality: 'Ugandan' },
  { name: 'cetric', nationality: 'UK' },
  { name: 'kochens', nationality: 'Europe' },
];

for (const user of users) {
  console.log(user.name);
}

// for in loop

// Basically useful when getting the keys of an object

const person = {
  name: 'Janet',
  children: 3,
  husband: 'Jeff',
};
for (const keys in person) {
  console.log(keys); //name, children,husband
  console.log(person[keys]); //Janet,3,Jeff
}

// for in loops with arrays
const verifiedUsers = ['john', 'melisa', 'Keith'];

for (const keys in verifiedUsers) {
  console.log(keys); //This outputs the index[0,1,2]
  console.log(verifiedUsers[keys]); //['john', 'melisa', 'Keith']
}
