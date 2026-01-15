// FizzBuzz challenge

//using for loop
//Multiples of 3

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
    console.log(`Fizz`);
  }
}
console.log(`=================`);

//multiples of 5

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
    console.log(`Buzz`);
  }
}
console.log(`==============`);

//Multiples of both 3 and 5
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    console.log(`FizzBuzz`);
  }
}
console.log(`=============`);

//Final work
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}
