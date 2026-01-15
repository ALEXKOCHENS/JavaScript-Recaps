// for loop

for (let numbers = 0; numbers <= 10; numbers++) {
  console.log(`Number`, numbers);
}

//If i need to output something in my favorite number

for (let numbers = 0; numbers <= 10; numbers++) {
  numbers === 3
    ? console.log(`${numbers} is My favorite`)
    : console.log(`Number`, numbers);
} //3 is my favorite number

//=============
// Nested loops
for (let i = 0; i <= 15; i++) {
  console.log(i);

  for (let j = 0; j <= 50; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//Break

for (let x = 0; x <= 6; x++) {
  if (x === 5) {
    console.log(`Breaking...`);
    break;
  }
  console.log(x);
}

// Continue

for (let z = 0; z <= 8; z++) {
  if (z === 4) {
    console.log(`Skipping ${z}...`);
    continue;
  }
  console.log(z);
}

// ===============
// While and do while loops

// while loops

let i = 0;
while (i <= 10) {
  if (i === 4) {
    console.log(`4 is good position`);
  } else {
    console.log(i);
  }
  i++;
}

//Nested while loop

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
  let k = 0;
  while (k <= 10) {
    console.log(`${j} * ${k} = ${j * k}`);
    k++;
  }
}

//do while loops
//do while loops run at least  once even when the condition is not met
let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 5);
