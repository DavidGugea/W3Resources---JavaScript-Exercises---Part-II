// 250. Write a JavaScript program to create an element from a string (without appending it to the document).

const createElementFromString = (string) => {
	const returnSection = document.createElement("section");
	returnSection.innerHTML = string;
	return returnSection
};

console.log(createElementFromString("<div class='container'><p>Hello World</p></div<"));
