// 211. Write a JavaScript program to get a list of elements that exist in both arrays.

const inBoth = (arr1, arr2) => arr1.length <= arr2.length ? arr1.reduce((accumulator, value, valueIndex, passedInValuesArray) => arr2.includes(value) ? (accumulator.push(value), accumulator) : accumulator , new Array()) : arr2.reduce((accumulator, value, valueIndex, passedInValuesArray) => arr1.includes(value) ? (accumulator.push(value), accumulator) : accumulator , new Array())

console.log(inBoth([1, 2, 3], [2, 3, 4]));
console.log(inBoth([1, 2, 3], [4, 5, 6]));
console.log(inBoth([1, 2, 3], [1, 2]));
console.log(inBoth([1, 2, 3], [1, 2, 4, 5, 6, 7]));
console.log(inBoth([1, 2, 3], [5, 6, 6, 7]));
