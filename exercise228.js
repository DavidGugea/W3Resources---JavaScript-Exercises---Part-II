// 228. Write a JavaScript program to log the name of a function.

const logFunctionName = (fn) => console.log(fn.name);

const myFunction = (x) => x ** 2
logFunctionName(myFunction);
