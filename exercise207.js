// 207. Write a JavaScript program to that will return true if the given string is an absolute URL, false otherwise.

const isAbsoluteUrl = (url) => {
	let matchedString = url.match(/(https|http|ftp|smtp|pop3|pop|):\/\/(www\.)*\w+\.\w+/g);	
	if(!matchedString){
		return false;
	}else{
		return matchedString[0] == url;
	};
};

console.log(isAbsoluteUrl('https://google.com'));
console.log(isAbsoluteUrl('ftp://www.myserver.net'));
console.log(isAbsoluteUrl('/foo/bar'));
