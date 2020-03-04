// 191. Write a JavaScript program to check if the provided integer is a prime number is not. 

const isPrime = (number) => {
	counter = 0
	for(let i = 2 ; i <= Math.ceil(Math.sqrt(number)); i++){
		if(number % i == 0){
			counter += 1;
		};
		if(number % i == 0 && counter > 1){
			return false;
		}	
	};
	return true
};

console.log(isPrime(11));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(16));
console.log(isPrime(23));
