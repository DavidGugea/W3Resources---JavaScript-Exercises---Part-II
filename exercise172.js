// 172. Write a JavaScript program to create a function that invokes the provided function with its arguments transformed.

const InvokeTransformedArgs = (MAIN_CALLBACK_FUNCTION, callbacksLink) => (...args) => MAIN_CALLBACK_FUNCTION.apply(null, args.reduce((accumulator, arg, argIndex, passedInArgsArray) => (accumulator.push(callbacksLink[argIndex].apply(null, [arg])), accumulator),new Array()))

const square = n => n * n;
const double = n => n * 2;
const fn = InvokeTransformedArgs((x, y) => [x, y], [square, double]);
console.log(fn(9,3));
console.log(fn(5,2));
