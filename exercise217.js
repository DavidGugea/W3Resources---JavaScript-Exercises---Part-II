// 217. Write a JavaScript program to check if the given number falls within the given range.

const isInRange = (num, rangeStart, rangeStop) => num > rangeStart && num < rangeStop

console.log(isInRange(3, 2, 5));
console.log(isInRange(2, 3, 5));
