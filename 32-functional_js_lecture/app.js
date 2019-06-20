// executing js code

// global execution context
// global variable environment

// function execution context
// function variable environment

// thread of execution

// first class functions - functions as variables
// can be stored and passed as variables
// can be returned from other functions

// function copyArrayAndDivideBy2(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] / 2);
//   }
//   return output;
// }

// const myArray = [1, 2, 3];
// let result = copyArrayAndDivideBy2(myArray);

// function copyArrayAndAdd3(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] + 3);
//   }
//   return output;
// }

// const myArray = [1, 2, 3];
// let result = copyArrayAndAdd3(myArray);

// function copyArrayAndManipulate(array, action) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(action(array[i]));
//   }
//   return output;
// }

// function multiplyBy2(input) {
//   return input * 2;
// }

// let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// arrays of functions && chaining HOFs on arr
const functions = [n => n + 1, n => n + 3, n => n - 4];
const arr = [1, 2, 3];

// function resultOfAllThree(arr, functions) {
//   return functions.forEach((func) => arr.forEach()

// callbacks vs HOFs
// function we pass in as an arg is a callback
// outer that takes it, is a HOF

// pure functions, side effects

// let howManyFishInTheSea = 35831513528;

// impure, has side effects
// function fishAFish() {
//   howManyFishInTheSea--;
// }

// pure
// function fishAFishPure(sea) {
//   return --sea;
// }

// anonymous functions

// immutability

const person = { name: "John", age: 28 };

const newPerson = Object.assign({}, person, { age: 30 });

const newPerson2 = { ...person, age: 30 };

// vs

// const newPerson3 = person;
// newPerson3.age = 40;

// closures and scope

/**
 * when functions get called, they create a live store of data
 * for that functions execution context
 *
 * when they finish executing, its local memory is deleted,
 * except for the returned value
 *
 * functions can hold on to live data between executions though,
 * it starts from return a function from a function.
 */

// function multiplicationGenerator(x) {
//   function multiplyByX(num) {
//     return num * x;
//   }
//   return multiplyByX;
// }

// let generatedFunc = multiplicationGenerator(3);
// let result = generatedFunc(3);

// declarative vs imperative

// const checkIfArrayContainsAnotherArray = (needle, haystack) => {
//   for (let i = 0; i < needle.length; i++) {
//     if (haystack.indexOf(needle[i]) === -1) {
//       return false;
//     }
//     return true;
//   }
// };

// arr1 = [1, 2, 3]
// arr2 = [1, 2, 3, 4]

// const checkIfArrayContainsAnotherArray = (needle = [], haystack = []) => {
//   return needle.every(el => haystack.includes(el));
// };

// recursion

function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(1200));
