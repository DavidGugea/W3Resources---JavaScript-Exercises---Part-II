// 240. Write a JavaScript program that will return true if the parent element contains the child element, false otherwise.

const parentContainsChild = (parent, child) => {
  for(let i = 0 ; i < parent.children.length; i++){
    if(parent.children[i] == child){
      return true;
    }else{
      continue;
    }
  }
  return false;
}

let parent = document.querySelector("div#MAIN_DIV");
let child = document.querySelector("p.MAIN_PARAGRAPH");

console.log(parentContainsChild(parent, child));
