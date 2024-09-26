const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

year.innerHTML = new Date().getFullYear()
lastModified.innerHTML = `Last modified: ${document.lastModified}`