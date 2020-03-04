// 183. Write a JavaScript program to check if the provided argument is a valid JSON.

const isJSON = (string) => {
	try{
		var x = JSON.parse(string);
		return true;
	}
	catch($ERROR){	
		return false;
	}
}

console.log(isJSON("asd"));
console.log(isJSON("{asd}"));
console.log(isJSON("{asd: 2"));
let jsonString = '{"x" : 20}'
console.log(isJSON(jsonString));
