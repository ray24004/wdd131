const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let listItem = document.createElement("li");
let deleteButton = document.createElement("button");

listItem.textContent = inputElement.value;
deleteButton.textContent = "❌";

listItem.append(deleteButton);
listElement.append(listItem);



function copyInput(event) {
    console.log(event)
}
buttonElement.addEventListener("click", copyInput);


document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}
