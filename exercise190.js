// 190. Write a JavaScript program to get a boolean determining if the passed value is primitive or not. 

const isPrimitive = (value) => typeof value != "object" && typeof value != "function" || value == null

console.log(isPrimitive(null));
console.log(isPrimitive(50));
console.log(isPrimitive('Hello!'));
console.log(isPrimitive(false));
console.log(isPrimitive(Symbol()));
console.log(isPrimitive([]));
