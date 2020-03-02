// 155. Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) === false.

var arrayFalse = (callbackFN, array) => array.filter((value) => !callbackFN(value));

console.log(arrayFalse(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']));
