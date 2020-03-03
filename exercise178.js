// 178. Write a JavaScript program to create a new object from the combination of two or more objects.

const mixObjects = (...objs) => objs.reduce((accumulator, obj, objIndex, passedInValuesArray) => ( Object.keys(obj).map((key) => Object.defineProperty(accumulator, `${key}`, { value : obj[key] }) ) ,accumulator)  ,new Object())

a = { num1 : 25 };
b = { num2 : 100 };

let c = mixObjects(a, b);
console.log(c);
