// 202. Write a JavaScript program that will return true if the browser tab of the page is focused, false otherwise.

const isTabFocused = () => !document.hidden

window.setInterval(() => { console.log(isTabFocused()); }, 1000);
