// 234. Write a JavaScript program to flatten a given array up to the specified depth.

const flattenByDepth = (arr, depth = 1) => {
  for(let i = 0 ; i < depth; i++){
    arr = arr.flat();
  }

  return arr;
}

console.log(flattenByDepth([1, [2], 3, 4]));  // [1,2,3,4]
console.log(flattenByDepth([1, [2, [3, [4, 5], 6], 7], 8], 2)); // [1,2,3,[4,5],6,7,8]
