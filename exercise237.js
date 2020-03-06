// 237. Write a JavaScript program to generate an array, containing the Fibonacci sequence, up until the nth term.

let generateFibonacci_toN = (n) => {
  let fibonacciNumbers = new Array();

  let a = 0;
  let b = 1;
  while(true){
    let temp = b;
    b += a;
    a = temp;

    if(b > n){
      break;
    }

    fibonacciNumbers.push(b);
  }

  return fibonacciNumbers;
};


console.log(generateFibonacci_toN(150));
