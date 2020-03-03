// 168. Write a JavaScript program to group the elements into two arrays, depending on the provided function's truthiness for each element. 

let groupBy = (arr, callbackFN) => arr.reduce((accumulator, value, valueIndex, passedInArray) => (accumulator[callbackFN.apply(null, [value]) ? 0 : 1].push(value), accumulator) ,[new Array(), new Array()])

let users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: false }];
users = groupBy(users, o => o.active);
console.log(users);
