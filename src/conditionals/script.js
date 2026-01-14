// Conditionals
console.log(`Javascript conditionals`);

// if statements

let loanLimit = 0;

if (loanLimit > 0) {
  console.log(`You are eligible for Loan`);
} else {
  console.log(`You are not eligible for Loan! Keep using our services`);
}

let grade = 'A+';
if (!grade) {
  console.log(`No grade detected!`);
} else {
  console.log(`Your grade is ${grade}`);
}

// elseif and nesting

let availableAmount = 2999;

if (availableAmount <= 50000) {
  console.log(
    `The available amount is less, just ${availableAmount}. We can't go for shopping!`
  );
} else if (availableAmount <= 100000) {
  console.log(`Hey! i gat ${availableAmount}, we can go shop some stuffs`);
}
if (availableAmount === 0) {
  console.log(`guys, i gat ${availableAmount} cash. `);
} else if (availableAmount > 100000) {
  console.log(
    `Hooo, guys we need to plan for this ${availableAmount}.NOT just wasting!`
  );
}

const name = 'alex';

if (!name) {
  console.log(`please we can't identify you!`);
} else if (name.length <= 5) {
  console.log(`The length is ${name.length}`);
} else if (name.length <= 5) {
  console.log(`The length is ${name.length}`);
} else if (name) {
  const displayName = (name) => {
    console.log(`The provided name is ${name}`);
  };
  displayName(name);
}
