// 264. Write a JavaScript program to capitalize the first letter of every word in a string

const capitalizeAllFirstLetters = (string) => string.split(" ").reduce((accumulator, stringValue, stringValueIndex, passedInStringValuesArray) => (accumulator += `${stringValue[0].toUpperCase()}${stringValue.slice(1, stringValue.length)} `, accumulator) , new String())

console.log(capitalizeAllFirstLetters("hello world!")); // Hello World!
