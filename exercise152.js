// 152. Write a JavaScript program to round a number to a specified amount of digits.
let roundUp = (number, numOfDigits) => {
	return `${String(number).split(".")[0]}.${String(number).split(".")[1].slice(0, numOfDigits)}`;
}

console.log(roundUp(20.123456789, 3));
