// 257. Write a JavaScript program to convert a 2D array to a comma-separated values (CSV) string.

const convert2D_ToCSV = (twoDimensionalValuesArray, CSV_Separator = ",") => twoDimensionalValuesArray.reduce((accumulator, array, arrayIndex, passedInArrayValues) => (accumulator += `${array[0]}${CSV_Separator}${array[1]}\n`, accumulator) , new String())

console.log(convert2D_ToCSV([['a', 'b'], ['c', 'd']]));
for(let i = 0 ; i < 3; i++){
	console.log(" ");
};
console.log(convert2D_ToCSV([['a', 'b'], ['c', 'd']], ';'));
