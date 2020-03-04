// 215. Write a JavaScript program to get all the elements of an array except the last one. 

const sliceLast = (arr) => arr.slice(0, arr.length-1)

console.log(sliceLast([1, 2, 3]));  
console.log(sliceLast([0, -1, -2]));
