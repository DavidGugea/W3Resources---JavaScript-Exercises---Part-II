// 208. Write a JavaScript program to check if the provided value isOfType of the specified type.

const isOfType = (val, type) => typeof val === `${type}`

console.log(isOfType(2, 'number'));
console.log(isOfType((x) => x * 2, 'function'));
console.log(isOfType('asd', 'string'));
console.log(isOfType(2, 'string'));
