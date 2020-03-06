// 265. Write a JavaScript program to chunk an array into smaller arrays of a specified size.

const chunkArrayInLength = (arr, chunkSize) => {
	let returnArray = new Array();
	let chunkArrayTracker = new Array();
	let counter = 0;
	arr.map((value, valueIndex) => {
		chunkArrayTracker.push(value);
		counter++;
		if(counter == chunkSize || valueIndex == arr.length-1){
			returnArray.push(chunkArrayTracker);
			chunkArrayTracker = new Array();
			counter = 0;
		};
	})

	return returnArray;
};

console.log(chunkArrayInLength([1, 2, 3, 4, 5], 2));
