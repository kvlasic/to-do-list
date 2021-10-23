let id = 1;

function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("myInput").value;
  let ul = document.getElementById("list");
  let liElement = document.createElement("li");
  liElement.appendChild(document.createTextNode(inputVal));
  ul.appendChild(liElement);
  liElement.classList.add("task" + id++); // delete?
  liElement.addEventListener("click", (e) => toggleTaskDone(i));
}

// Select all future list items
let tasks = document.querySelectorAll("li");
tasks.forEach((task, i) => {
  console.log(i);
  task.addEventListener("click", (e) => toggleTaskDone(i));
});

// Toggle class name
function toggleTaskDone(i) {
  tasks[i].classList.toggle("task-done");
}
