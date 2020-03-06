// 235. Write a JavaScript program to get the last key that satisfies the provided testing function, otherwise undefined is returned.

const lastToPass = (obj, callbackFN) => Object.keys(obj).reverse().reduce((accumulator, key, keyIndex, passedInKeysArray) => accumulator == undefined ? callbackFN.apply(null, [obj[key]]) ? (accumulator = key, accumulator) : accumulator : accumulator , undefined);

console.log(lastToPass(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
));
