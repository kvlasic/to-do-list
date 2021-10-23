/*
MUST HAVE
 1. Create a todo from user input - DONE
 2. Mark todo as done - DONE
 3. Delete a todo - IN PROGRESS
 4. Edit a todo
COULD HAVE
 5. Store list in local storage
 6. 'Enter' has same functionality as clicking 'submit' button (use 'form'?)
 7. User input is cleared after it is added to list
NICE TO HAVE 
 8. Add checkbox 
 9. Reset list
 10. List category / title
*/

// Add items based on user input
function getInputValue() {
  let inputVal = document.getElementById("myInput");
  const todoList = document.getElementById("list");
  const task = document.createElement("li");
  task.appendChild(document.createTextNode(inputVal.value));
  // If user doesn't write anything he gets a warning alert
  if (inputVal === "") {
    alert("You must write something!");
  } else {
    todoList.appendChild(task);
    inputVal.value = ""; // removes text from input field after being submitted
  }

  task.addEventListener("click", () => toggleTaskDone(task));

  // Add X to remove items
  let span = document.createElement("span");
  let xSymbol = document.createTextNode("\u00D7"); // \u00D7 is unicode for x symbol I guess
  span.className = "delete"; // span element gets a class named delete
  span.appendChild(xSymbol);
  task.appendChild(span);
}

// Toggle class
function toggleTaskDone(task) {
  task.classList.toggle("task-done");
}
