// 221. Write a JavaScript program to get a string of the form HH:MM:SS from a Date object.

const HH_MM_SS_DateFormat = (dateObj) => `${dateObj.getHours()} : ${dateObj.getMinutes()} : ${dateObj.getSeconds()}`

console.log(HH_MM_SS_DateFormat(new Date()));
