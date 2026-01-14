// Falsy and Truthy values

// Falsy values

/* 

-0 (Zero)
-'' or ""(Empty string)
-false
-NaN
-undefined
-null

*/

const x = 0;

if (x) {
  console.log(`${x} is a Truthy value`);
} else {
  console.log(`${x} is a falsy value`);
}
console.log(Boolean(x));

// Truthy values

// Everything else is NOT falsy
/*

-true
-'0' (0 in a string)
-' ' (space in string)
-' false in string'
-[] (empty array)
-{} (empty object)
-const displayName =()=>{} (Empty function)

*/

const y = () => {};

if (y) {
  console.log(`${y} is a truthy value`);
} else {
  console.log(`${y} is a falsy value`);
}
console.log(Boolean(y));

console.log(typeof Boolean);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
