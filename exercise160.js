// 160. Write a JavaScript program to mutate the original array to filter out the values specified, based on a given iterator function.

const filterOutByCallbackFN = (MAIN_ARRAY, filteredOutValues, callbackFN) => MAIN_ARRAY.reduce((accumulator, obj, objIndex, passedInArray) => {
  let blockedVars = filteredOutValues.reduce((blockAccumulator, obj) => (blockAccumulator.push(callbackFN(obj)), blockAccumulator),[]);

  if(!blockedVars.includes(callbackFN.apply(null, [obj]))){
    accumulator.push(obj);
  }

  return accumulator;
}, [])

var myArray = [{ x: 1 }, { x: 2}, { x: 3 }, { x: 1 }];
console.log(filterOutByCallbackFN(myArray, [{ x: 1 }, { x: 3 }], o => o.x));
