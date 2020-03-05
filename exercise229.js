// 229. Write a JavaScript program to convert a string from camelcase.

const convertFromCamelcase = (camelCaseString, separator="") => {
	camelCaseString = camelCaseString.split("");
	var returnString = new String();
	var camelCase_Tracker = new String();

	for(let i = 0 ; i < camelCaseString.length - 1; i++){
		camelCase_Tracker += camelCaseString[i];
		if(camelCaseString[i+1].toUpperCase() == camelCaseString[i+1] || i == camelCaseString.length - 2){
			if(i == camelCaseString.length - 2){
				returnString += `${camelCase_Tracker.toLowerCase()}${camelCaseString[camelCaseString.length-1]}`;
			}
			else{
				returnString += `${camelCase_Tracker.toLowerCase()}${separator}`;
			}
			camelCase_Tracker = new String();
		}
	};

	return returnString;
};

const convertFromCamelcase_usingRegex = (camelCaseString, separator="") => camelCaseString.replace(/([A-Z][a-z]+)/g, separator + "$1").toLowerCase();

console.log(convertFromCamelcase_usingRegex('someDatabaseFieldName', ' '));
console.log(convertFromCamelcase_usingRegex('someLabelThatNeedsToBeCamelized', '-'));
console.log(convertFromCamelcase_usingRegex('someJavascriptProperty', '_'));
