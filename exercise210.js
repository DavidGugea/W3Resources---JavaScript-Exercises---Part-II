// 210. Write a JavaScript program to get a list of elements that exist in both arrays, after applying the provided function to each array element of both.

const sameAfterCallback = (arr1, arr2, callbackFN) => arr1.reduce((MAIN_ACCUMULATOR, MAIN_VALUE, MAIN_VALUE_INDEX, MAIN_PassedInValueArrays) => arr1.map((value) => callbackFN.apply(null, [value])).reduce((accumulator, value, valueIndex, passedInValueArray) => arr2.map((secondaryValue) => callbackFN.apply(null, [secondaryValue])).includes(value) ? (accumulator.push(value), accumulator) : accumulator ,new Array()).includes(callbackFN.apply(null, [MAIN_VALUE])) ? (MAIN_ACCUMULATOR.push(MAIN_VALUE), MAIN_ACCUMULATOR) : MAIN_ACCUMULATOR, new Array())

console.log(sameAfterCallback([1, 2, 3], [4, 3, 1], (x) => x + 2));
