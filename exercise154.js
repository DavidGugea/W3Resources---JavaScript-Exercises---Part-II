// 154. Write a JavaScript program to create an object composed of the properties the given function returns falsey for. The function is invoked with two arguments: (value, key).

let func = (object, callbackFN) => {
	return Object.keys(object).filter((key) => !callbackFN(object[key])).reduce((accumulator, value, valueIndex, passedInValueArray) => {
		Object.defineProperty(accumulator, `${value}`, {
			value : object[value]
		});
		return accumulator;
	}, {})
}

console.log(func({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'))
