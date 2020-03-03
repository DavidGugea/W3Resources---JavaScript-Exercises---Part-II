// 176. Write a JavaScript program to get the n minimum elements from the provided array. If n is greater than or equal to the provided array's length, then return the original array(sorted in ascending order). 

const minN = (arr, nTH) => arr.slice(0, nTH).sort();

console.log(minN([1, 2, 3], 1));
console.log(minN([1, 2, 3], 2));
