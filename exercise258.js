// 258. Write a JavaScript program to create a function that accepts up to n arguments, ignoring any additional arguments.

const acceptToN = (fn, nTH_arguments) => (...args) => fn(...args.slice(0, nTH_arguments));

const firstTwoMax = acceptToN(Math.max, 2);

console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)));
