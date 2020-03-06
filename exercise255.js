// 255. Write a JavaScript program that will return true if the provided predicate function returns true for at least one element in a collection, false otherwise.

const forOneTrue = (arr, callbackFN) => arr.some((value, valueIndex) => callbackFN.apply(null, [value]));

let arr = [1, 2, 3, 4, 5];
const func = (x) => x > 2;
const func2 = (x) => x > 10;

console.log(forOneTrue(arr, func));
console.log(forOneTrue(arr, func2));
