// 232. Write a JavaScript program that takes a function as an argument, then makes the first argument the last.

const swapArgs = callbackFN => (arg, ...args) => callbackFN.apply(null, [...args, arg])
const printOut = (a, b, c) => console.log(a, b, c)

printOut(1, 2, 3);
let printOutSwappedArgs = swapArgs(printOut);
printOutSwappedArgs(1, 2, 3);
