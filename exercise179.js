// 179. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.

const compareObjs = (mainObj, compareObj, callbackFN) => Object.keys(mainObj).reduce((accumulator, key, keyIndex, passedInObjectsArray) => ( callbackFN.apply(null, [mainObj[key], compareObj[key]]) ? accumulator : accumulator=false,accumulator),true)

let a = { value : 20 }
let b = { value : 35 }
const func = (x, y) => x - y == -10

console.log(compareObjs(a, b, func));
