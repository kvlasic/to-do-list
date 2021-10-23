/*
MUST HAVE
 1. Create a todo from user input
 2. Mark todo as done
 3. Delete a todo
 4. Edit a todo
COULD HAVE
 5. Store list in local storage
 6. 'Enter' has same functionality as clicking 'submit' button
 7. User input is cleared after it is added to list
NICE TO HAVE 
 8. Reset list
 9. List category / title
*/

function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("myInput").value;
  let toDoList = document.getElementById("list");

  let task = document.createElement("li");
  task.appendChild(document.createTextNode(inputVal));
  toDoList.appendChild(task);
  task.addEventListener("click", () => toggleTaskDone(task));
}

// Toggle class
function toggleTaskDone(task) {
  task.classList.toggle("task-done");
}
