// 213. Write a JavaScript program to initialize and fill an array with the specified values.

const createAndFill = (length, fillValue) => Array.from({length : length}).fill(fillValue)
console.log(createAndFill(5, 5));
console.log(createAndFill(2, 3));
