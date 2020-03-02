// 158. Write a JavaScript program to create a function that invokes the provided function with its arguments arranged according to the specified indexes.

const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
console.log(rearged('b', 'c', 'a'));
