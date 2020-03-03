// 171. Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

const cookieObj = (cookieString) => cookieString.split(";").map((val) => val.trim()).reduce((accumulator, value, valueIndex, passedInArray) => (Object.defineProperty(accumulator, `${value.split('=')[0]}`, {value : value.split("=")[1]}), accumulator) ,new Object());

console.log(cookieObj('foo=bar; equation=E%3Dmc%5E2'));
