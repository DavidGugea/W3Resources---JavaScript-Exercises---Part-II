// 256. Write a JavaScript program to check if two given numbers are approximately equal to each other. 

const approximatelyEqual = (num1, num2, diff) => Math.abs(num2 - num1) <= diff;

console.log(approximatelyEqual(3, 3.2, 0.25));
