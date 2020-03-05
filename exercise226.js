// 226. Write a JavaScript program to get n random elements at unique keys from array up to the size of array.

const ShuffleSubarray = (arr, n) => {
	if(n > arr.length){
		n = arr.length;
	};

	var shuffledElements = new Array();
	var usedIndexes = new Array();
	var randomElement;
	for(let i = 0 ; i < n; i++){
		randomElement = Math.floor(Math.random(-3, n)*n)
		while(usedIndexes.includes(randomElement)){
			console.log(randomElement, usedIndexes.includes(randomElement),
 usedIndexes, shuffledElements);			
			randomElement = Math.floor(Math.random(-3, n)*n);	
		};
		usedIndexes.push(randomElement);
		shuffledElements.push(arr[randomElement]);
	};

	return shuffledElements;
};

console.log(ShuffleSubarray([1, 2, 3, 4, 5], 5));
