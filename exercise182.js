// 182. Write a JavaScript program to join all elements of an array into a string and returns this string. Uses a separator and an end separator. 

const joinArray = (arr, separator, endSeparator) => arr.reduce((accumulator, value, valueIndex, passedInValueArray) => (valueIndex == arr.length - 1 ? accumulator += `${endSeparator}${value}` : accumulator += `${separator}${value}`, accumulator) ,new String()).substring(1);

let arr = ["a", "b", "c"]
console.log(joinArray(arr, ",", ";"));
