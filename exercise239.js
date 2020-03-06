// 239. Write a JavaScript program to escape a string to use in a regular expression.

const escapeString = (unescapedString) => unescapedString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

console.log(escapeString("[.*+?^${}()|[\]\\]"));
