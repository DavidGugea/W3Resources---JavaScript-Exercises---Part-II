// 214. Write a JavaScript program to Initializes an array containing the numbers in the specified range (in reverse) where start and end are inclusive with their common difference step.

const list_range = (start, end=0, step=1) => {
	let returnArray = new Array();

	for(let i = start; i >= end; i -= step){
		returnArray.push(i);
	};

	return returnArray;
};

console.log(list_range(5));
console.log(list_range(7, 3));
console.log(list_range(9, 0, 2));
