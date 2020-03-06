// 245. Write a JavaScript program to Invokes the provided function after wait milliseconds.

const invokeAfterSeconds = (callbackFN, milliseconds, ...args) => window.setTimeout(callbackFN, milliseconds, ...args);
const myFunc = (x) => console.log(x);
invokeAfterSeconds(myFunc, 5000, "Hello World");
