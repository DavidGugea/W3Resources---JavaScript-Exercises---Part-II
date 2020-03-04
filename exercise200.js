// 200. Write a JavaScript program that will return true if a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection. 

const isCollection = (obj) => obj == null || Object.keys(obj).length == 0

console.log(isCollection(new Map()));
console.log(isCollection(new Set()));
console.log(isCollection([]));
console.log(isCollection({}));
console.log(isCollection(''));
console.log(isCollection([1, 2]));
console.log(isCollection({ a: 1, b: 2 }));
console.log(isCollection('text'));
console.log(isCollection(123));
console.log(isCollection(true));
