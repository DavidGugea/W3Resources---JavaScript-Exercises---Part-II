// 241. Write a JavaScript program to remove elements in an array until the passed function returns true. Returns the remaining elements in the array.

const till = (arr, callbackFN) => {
  while(!callbackFN.call(null, arr[0])){arr = arr.slice(1)}
  return arr;
}

console.log(till([1, 2, 3, 4], n => n >= 3));
