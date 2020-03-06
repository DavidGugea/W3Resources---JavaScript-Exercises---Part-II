// 244. Write a JavaScript program to get the difference between two given arrays.

const differenceBetweenArrays = (arr0, arr1) => arr0.reduce((accumulator, value, valueIndex, passedInValuesArray) => !arr1.includes(value) ? (accumulator.push(value), accumulator) : accumulator , new Array())

console.log(differenceBetweenArrays([1, 2, 3], [1, 2, 4]));
console.log(differenceBetweenArrays([1, 2, 4],[1, 2, 3]));
