// 205. Write a JavaScript program to check if the provided argument is array-like (i.e. is iterable). 

const isArrayLike_wrong = (object) => {
	try{
		for(element in object){console.log()}
		return true;
	}
	catch{
		try{
			for(element of object){console.log();};
			return true;
		}
		catch{
			return false;
		}
	}
};
const isArrayLike = (object) => {
	try{
		return Boolean([...object]);
	}
	catch{
		return false;
	};
};

console.log(isArrayLike(document.querySelectorAll('.className'))); // true
console.log(isArrayLike('abc')); // true
console.log(isArrayLike(null)); // false
