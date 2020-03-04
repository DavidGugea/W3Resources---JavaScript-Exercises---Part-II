// 192. Write a JavaScript program to check if the provided value is an object created by the Object constructor.

const isConstructorObject = (obj) => obj.constructor === Object && typeof obj === 'object' 

var x = Object.create(Object.prototype, {
	firstValue : {
		value : 20,
		writable : false,
		enumerable : false,
		configurable : false 
	}
});

console.log(isConstructorObject(x));
console.log(isConstructorObject(new Map()));
