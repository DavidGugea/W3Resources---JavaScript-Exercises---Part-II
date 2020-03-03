// 177. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.

const getMinValueAfterCallback = (arr, callback) => arr.reduce((accumulator, value, valueIndex, passedInArray) => (accumulator.push(callback.apply(null, [value])), accumulator ) ,new Array()).sort()[0];

let values = [4, 5, 2];
const divideBy2 = (val) => val / 2;

console.log(getMinValueAfterCallback(values, divideBy2));
