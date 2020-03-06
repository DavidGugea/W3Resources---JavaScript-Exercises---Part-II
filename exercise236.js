// 236. Write a JavaScript program to get the first key that satisfies the provided testing function. Otherwise  return undefined.

const firstToSatisfyCallback = (obj, callbackFN) => Object.keys(obj).find((key) => callbackFN.apply(null, [obj[key]]));

console.log(firstToSatisfyCallback(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
));
