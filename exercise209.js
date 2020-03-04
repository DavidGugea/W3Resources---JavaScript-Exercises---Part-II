// 209. Write a JavaScript program to get a list of elements that exist in both arrays, using a provided comparator function. 

const combineByCallbackFN = (arr1, arr2, callbackFN) => arr1.filter((value, valueIndex) => callbackFN.apply(null, [value, arr2[valueIndex]]))

console.log(combineByCallbackFN([1.2, 3.4, 7.2], [1.3, 3.4, 7.7], (a, b) => Math.round(a) == Math.round(b)))
