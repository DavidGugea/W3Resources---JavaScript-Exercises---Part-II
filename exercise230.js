// 230. Write a JavaScript program to get the human readable format of the given number of milliseconds.

const readableFormat = (milliseconds) => `${new Date(milliseconds).toDateString()} < - > ${new Date(milliseconds).toTimeString()}`;

console.log(readableFormat(1001));
console.log(readableFormat(34325055574));
