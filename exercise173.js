// 173. Write a JavaScript program to get the nth element of an given array.

const get_nth_Element = (arr, index) => arr[index > 0 ? 0 + index : arr.length+index];
const arr = [1, 2, 3];

console.log(get_nth_Element(arr, -1));
console.log(get_nth_Element(arr, -2));
console.log(get_nth_Element(arr, -3));
