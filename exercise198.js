// 198. Write a JavaScript program to check if the given argument is a function.

const isArgFunction = (arg) => typeof arg === "function"

console.log(isArgFunction((a) => a * 2));
console.log(isArgFunction(function(x) { return Math.pow(x, 3) }));
console.log(isArgFunction(2));
