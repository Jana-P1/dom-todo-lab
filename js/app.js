// console.log("sanity check")

// Cached Element References 

// Creates variable for <input>
const input = document.getElementById("new-items")

// Creates variable for <button>
const toDoListButton = document.getElementById("submit-button")

// Creates variable for the <ul>
const itemsAddedToList = document.getElementById("todo-list")




toDoListButton.addEventListener("click", function(evt){
  const newLi = document.createElement("li")
  newLi.textContent = input.value
  if (input.value !== ""){
    itemsAddedToList.appendChild(newLi)
    input.value = ""
  }
})