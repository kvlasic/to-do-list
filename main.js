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

let todoListTasks = [];

function addNewTask(event) {
  const newItem = event.target.elements["new-item"];
  todoListTasks.unshift(newItem.value); // check whether prepend works instead
  newItem.value = "";
  updateTheScreen();
}

function updateTheScreen() {
  todoList.innerHTML = "";
  todoListTasks.forEach((item, index) => {
    todoList.innerHTML += `<li></li>`;
  });
}
