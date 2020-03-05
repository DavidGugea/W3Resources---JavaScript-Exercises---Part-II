// 227. Write a JavaScript program to remove elements from an array for which the given function returns false.

const filterFalse = (arr, callback) => arr.filter((value) => !callback.apply(null, [value]))
const myCallback = x => x == 2
console.log(filterFalse([1, 2, 3], myCallback));
