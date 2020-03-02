// 161. Write a JavaScript program to mutate the original array to filter out the values specified. Returns the removed elements.

const filterFalseBy = (arr, takeOutValues) => {
  let mainCopy = new Array();
  arr.map((value) => mainCopy.push(value));

  let arrCopy = arr.copyWithin(0, arr.Length-1);
  for(let i = 0 ; i < arrCopy.length; i++){
    if(takeOutValues.includes(arrCopy[i])){
      arr.splice(arr.indexOf(arrCopy[i]), 1);
    }
  }

  return mainCopy.reduce((accumulator, value, valueIndex, passedInArray) => {
    if(!arr.includes(value)){
      accumulator.push(value);
    };
    return accumulator;
  } , new Array())
}

let myArray = ['a', 'b', 'c', 'd'];
pulled = filterFalseBy(myArray, ['b', 'd']);
console.log("myArray : ");
console.log(myArray);
console.log("Pulled values : ");
console.log(pulled);
