// 247. Write a JavaScript program that Assigns default values for all properties in an object that are undefined.

const assignIfUndefined = (obj, ...values) => values.reduce((accumulator, value, valueIndex, passedInValuesArray) => !Object.keys(obj).includes(Object.keys(value)[0]) ? (accumulator[Object.keys(value)[0]] = value[Object.keys(value)[0]], accumulator ) : accumulator ,obj)

console.log(assignIfUndefined({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }));
