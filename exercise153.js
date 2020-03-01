// 153. Write a JavaScript program to reverse the order of the characters in the string.

let reverseString = (string) => {
	let reversedString = new String(); // Create a new empty string
	for(let i = string.length - 1; i >= 0 ; i--){
		reversedString += string[i];
	}
	return reversedString;
}

console.log(reverseString("David"));
