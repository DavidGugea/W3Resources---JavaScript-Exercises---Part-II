// 263. Write a JavaScript program to capitalize the first letter of a string.

const capitalizeFirst = (string) => string[0].toUpperCase() + string.slice(1, string.length-1);

console.log(capitalizeFirst('fooBar')); 
