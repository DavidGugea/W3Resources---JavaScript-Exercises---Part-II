// 224. Write a JavaScript program to remove HTML/XML tags from string

const removeTags = (string) => string.replace(/(<\w*>|<\/\w*>)/g ,"")

console.log(removeTags("<p>asd</p> <xmlUsers>Amount of users : 50</xmlUsers>"));
