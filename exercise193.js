// 193. Write a JavaScript program to check if a value is object-like. Check if the provided value is not null and its typeof is equal to 'object'.

const isObjectLike = (obj) => obj !== null && typeof obj === 'object';

console.log(isObjectLike({}));
console.log(isObjectLike([1, 2, 3]));
console.log(isObjectLike(x => x));
console.log(isObjectLike(null));
