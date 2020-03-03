// 165. Write a JavaScript program to perform left-to-right function composition. 

const leftToRight_FC = (...callbacks) => (...beginArgs) => callbacks.slice(1, callbacks.length).reduce((accumulator, callbackFN, callbackFN_Index, callbackPassedInSlicedArray) => { accumulator = callbackFN(accumulator); return accumulator} ,callbacks[0](...beginArgs))

const multiplyNums = (x, y) => x * y
const add5 = (x) => x + 5

const func = leftToRight_FC(multiplyNums, add5);
console.log(func(5, 2));
console.log(func(16, 2));
