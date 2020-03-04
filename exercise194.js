// 194. Write a JavaScript program to get a boolean determining if the passed value is an object or not.

const isObject = (value) => typeof value === "object";

console.log(isObject([1, 2, 3, 4]));
console.log(isObject([]));
console.log(isObject(['Hello!']));
console.log(isObject({ a: 1 }));
console.log(isObject({}));
console.log(isObject(true));
