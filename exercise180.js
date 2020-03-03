// 180. Write a JavaScript program to create a new object from the specified object, where all the keys are in lowercase.

const convertKeysToLowercase = (object) => Object.keys(object).reduce((accumulator, key, keyIndex, passedInKeysArray) => ( Object.defineProperty(accumulator, `${key.toLowerCase()}`, { value : object[key] }) , accumulator) , new Object());

let a = { nUm1 : 20, VaLUe : 30, SECONDARY_VALUE : 40 }
console.log(convertKeysToLowercase(a));
