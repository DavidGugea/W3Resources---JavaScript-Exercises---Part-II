// 212. Write a JavaScript program to create a n-dimensional array with given value.

const make_N_DimensionalArray = (fillInValue, ...currentLengths) => currentLengths.length === 0 ? fillInValue : Array.from({length : currentLengths[0] }).map(() => make_N_DimensionalArray(fillInValue, ...currentLengths.slice(1)) )

console.log(make_N_DimensionalArray(5, 2, 2, 2))
