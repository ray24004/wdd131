const headerNav = document.querySelector("header nav");
const headerButton = document.querySelector("header button");
headerButton.addEventListener("click", onMenuClick)

function onMenuClick(event) {
    headerNav.classList.toggle("hide");
    headerButton.classList.toggle("hide");
}
