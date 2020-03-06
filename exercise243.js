// 243. Write a JavaScript program to get the distance between two given points.

const distanceBetweenPoints = (x0, y0, x1, y1) => {
  let a = Math.abs(x0-x1);
  let b = Math.abs(y0-y1);

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  // or Math.hypot(x1 - x0, y1 - y0); from the solutions
}

console.log(distanceBetweenPoints(1, 1, 2, 3));
console.log(distanceBetweenPoints(-1, -1, 2, 3));
