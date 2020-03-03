// 169. Write a JavaScript program to create a function that invokes fn with partials appended to the arguments it receives.

const partialApplication = (fn, ...args0) => (...args1) => fn(...args0, ...args1);
const addThreeNumbers = (a, b, c) => a + b + c;

console.log(partialApplication(addThreeNumbers, 1)(2, 3));
console.log(partialApplication(addThreeNumbers, 1, 2)(3));
console.log(partialApplication(addThreeNumbers, 1, 2, 3)());
