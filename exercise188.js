// 188. Write a JavaScript program that will return 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted

const isSorted = (arr) => {
	let arrCopy = new Array();
	arr.map((i) => arrCopy.push(i));

	arrCopy.sort();
	if(arrCopy.toString() == arr.toString()){
		return true;	
	}
	arrCopy.reverse();
	if(arrCopy.toString() == arr.toString()){
		return true;
	}
	return false;
};

console.log(isSorted([1, 2, 3]));
console.log(isSorted([3, 2, 1]));
console.log(isSorted([3, 1, 2]));
