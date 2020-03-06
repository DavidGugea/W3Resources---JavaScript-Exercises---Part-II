// 266. Write a JavaScript program to clamp number within the inclusive range specified by the given boundary values a and b.

const clampNumber = (num, min, max) => {
	if(num >= min && num <= max){
		return num;
	}else if(num < min){
		return min;
	}else if(num > max){
		return max;
	};
};

console.log(clampNumber(47, 0, 1337));
console.log(clampNumber(47, 1337, 9000));
console.log(clampNumber(10000, 1337, 9000));
