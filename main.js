let id = 1;

function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("myInput").value;
  let toDoList = document.getElementById("list");

  let task = document.createElement("li");
  task.appendChild(document.createTextNode(inputVal));
  toDoList.appendChild(task);
  task.addEventListener("click", () => toggleTaskDone(task));
}

// Toggle class name
function toggleTaskDone(task) {
  task.classList.toggle("task-done");
}
