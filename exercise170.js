// 170. Write a JavaScript program to create a function that invokes fn with partials prepended to the arguments it receives. 

const partialApplication = (callback, ...args0) => (...args1) => callback(...args0, ...args1)

const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partialApplication(greet, 'Hello');
console.log(greetHello('John'));
