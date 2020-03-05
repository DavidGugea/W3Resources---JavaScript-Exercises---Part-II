// 223. Write a JavaScript program to calculate the greatest common divisor between two or more numbers/arrays.

const allSame = (...values) => {
	for(let i = 0 ; i < values.length-1; i++){
		if(values[i] !== values[i+1]){
			return false;
		};
	};
	return true;
};
const getGCD = (...numbers) => {
	numbers.sort().reverse();
	
	
	while(!allSame(...numbers)){
		numbers[numbers.indexOf(Math.max(...numbers))] -= numbers[numbers.indexOf(Math.min(...numbers))];
	};
	

	return numbers[0];
};

console.log(getGCD(24, 16, 18));

/*
let myArray = [24, 16];
console.log(myArray[myArray.indexOf(24)], Math.max(...myArray));
console.log(myArray[myArray.indexOf(16)], Math.min(...myArray));
myArray[myArray.indexOf(Math.max(...myArray))] -= myArray[myArray.indexOf(Math.min(...myArray))];
console.log(myArray);
*/
