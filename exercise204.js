// 204. Write a JavaScript program that will check if the given argument is a native boolean element. 

const isNativeBoolean = (value) => typeof value === "boolean"

console.log(isNativeBoolean(Boolean(10)));
console.log(isNativeBoolean(true));
console.log(isNativeBoolean(false));
console.log(isNativeBoolean("asd"));
