// 164. Write a JavaScript program that will return the singular or plural form of the word based on the input number.

const toPlural = (counter, PLURAL_FORMS_OBJECT, ...toPluralStrings) => {
  return toPluralStrings.reduce((accumulator, value, valueIndex, passedInArray) => {
    if(counter > 1){
      if(Object.keys(PLURAL_FORMS_OBJECT).includes(value)){
        accumulator.push(PLURAL_FORMS_OBJECT[value]);
      }else{
        if(value[value.length-1] != "s"){
          accumulator.push(`${value}s`);
        }
      }
    }

    return accumulator;
  }, [])
}

const PLURALS = {
  "person" : "people"
}
let plurals = toPlural(5, PLURALS, "apple", "person")
console.log(plurals);
