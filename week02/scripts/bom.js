const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let listItem = document.createElement("li");
let deleteButton = document.createElement("button");

listItem.textContent = inputElement.value;
deleteButton.textContent = "❌";

listItem.append(deleteButton);
listElement.append(listItem);