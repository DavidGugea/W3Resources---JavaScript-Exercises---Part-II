// 196. Write a JavaScript program that will return true if the specified value is null, false otherwise.

const isNull = (value) => value === null

console.log(isNull(null));
console.log(isNull(2));
console.log(isNull(new Object()));
