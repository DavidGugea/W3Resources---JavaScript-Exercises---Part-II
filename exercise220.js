// 220. Write a JavaScript program to get the native type of a value. Returns lowercased constructor name of value, "undefined" or "null" if value is undefined or null.

const getNativeType = (value) => value === null ? "null" : value === undefined ? "undefined" : value.__proto__.toString().slice(1, value.__proto__.toString().length-1).split(" ")[1].trim()

let x = {
	value : 20
};
let y = new Set()

console.log(getNativeType(x))
console.log(getNativeType(y))
console.log(getNativeType(null))
console.log(getNativeType(undefined))
