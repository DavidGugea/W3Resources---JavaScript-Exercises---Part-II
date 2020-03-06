// 238. Write a JavaScript program to calculate the factorial of a number.

const getFactorial = (n) => {
  let factorial = 1;
  let counter = 1;
  while(counter <= n){
    factorial *= counter;
    counter++;
  }

  return factorial;
}


console.log(getFactorial(5));
