// 231. Write a JavaScript program to iterate over all own properties of an object in reverse, running a callback for each one.

const returnReversedAppliedCallback = (obj, callbackFN) => Object.keys(obj).reverse().reduce((accumulator, key, keyIndex, passedInKeyArray) => (accumulator[key] = callbackFN.apply(null, [obj[key]]), accumulator) ,new Object())

console.log(returnReversedAppliedCallback({ "a" : 3, "b": 4}, v => v ** 2));
