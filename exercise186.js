// 186. Write a JavaScript program to check if the given argument is a symbol.


const isSymbol = (value) => typeof value == 'symbol'

console.log(isSymbol(Symbol("x")));
console.log(isSymbol("asd"));
