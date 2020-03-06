// 242. Write a JavaScript program to remove elements from the end of an array until the passed function returns true. Returns the remaining elements in the array.

const tillEnd = (arr, callbackFN) => {
  arr.reverse();
  while(!callbackFN.call(null, arr[0])){ arr = arr.slice(1)};
  arr.reverse();
  return arr;
}


console.log(tillEnd([1, 2, 3, 4], n => n < 3));
