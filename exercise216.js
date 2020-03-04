// 216. Write a JavaScript program to get all indices of val in an array. If val never occurs, returns [].

const getIndexes = (arr, target) => arr.reduce((accumulator, value, valueIndex, originalValuesArray) => value == target ? (accumulator.push(valueIndex), accumulator) : accumulator , new Array())

console.log(getIndexes([1, 2, 3, 1, 2, 3], 1));
console.log(getIndexes([1, 2, 3], 4));
