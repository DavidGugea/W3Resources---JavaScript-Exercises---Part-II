// 156. Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

var seeRecursiveAction = (arr, accumulatorCallbackFN, accumulatorDefaultValue) => {
	let returnArray = [accumulatorDefaultValue];
	arr.reduce((accumulator, currentValue, currentIndex, passedInArray) => {
		let val = accumulatorCallbackFN(accumulator, currentValue);
		accumulator = accumulatorCallbackFN(accumulator, currentValue);
		returnArray.push(accumulator);
		return accumulator;
	}, accumulatorDefaultValue);

	return returnArray;
}

console.log(seeRecursiveAction([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));
