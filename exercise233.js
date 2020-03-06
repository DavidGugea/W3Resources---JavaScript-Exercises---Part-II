// 233. Write a JavaScript program to flatten an object with the paths for keys.

const flattenKeys = (obj) => {
  // Initalize Variables
  let returnObject = new Object();

  // Iterate over all the keys in the object
  Object.keys(obj).map((MAIN_KEY, MAIN_KEY_INDEX) => {
    let evalObjectString = `obj.${MAIN_KEY}`; // evaluate the string to get the value of the async var in the object

    while(true){
      if(typeof eval(evalObjectString) == "object"){
        evalObjectString += `.${Object.keys(eval(evalObjectString))[0]}`; // Add the new key to it
        continue;
      }else{
        returnObject[evalObjectString.split(".").slice(1, evalObjectString.length-1).join(".")] = eval(evalObjectString);
        break;
      }
    }
  });

  return returnObject;
}

console.log(flattenKeys({ a: { b: { c: 1 } }, d: 1 }));
