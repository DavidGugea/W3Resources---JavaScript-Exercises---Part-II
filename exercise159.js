// 159. Write a JavaScript program to get an array of lines from the specified file.

let readByLines = (fileName) => {
  let request = new XMLHttpRequest();

  request.addEventListener(
    "load",
    (event) => {
      if(request.readyState == 4 && request.status == 200){
        console.log(request.responseText.split('\n'));
      }
    },
    false // dispatch event in the bubbling phase not in the capturing phase
  )

  request.open(
    "GET",
    fileName
  )

  request.setRequestHeader("Accept", "text")
  request.send();
}
