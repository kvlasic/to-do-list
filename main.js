// Object-Oriented Style
// Not going to leave data in HTML
// HTML is just for visuals
const ul = document.querySelector("ul");
const form = document.querySelector("form");

let todos = [];
let newTaskId = 0;

function addToDoListItem(event) {
    event.preventDefault()
    let inputText = event.target.elements["newTask"].value;
    event.target.elements["newTask"].value = "";
    let newObject = { id: newTaskId, text: inputText, completed: false };
    todos.push(newObject);
    newTaskId++;
    drawList();
}

function removeToDoListItem(id) {
    const index = todos.findIndex(item => item.id === id)
    todos.splice(index, 1)
    drawList();
}

function updateToDoListItem(id, newData) {
    drawList();
}

// update the whole list
function drawList() {
    console.log(todos);
    ul.innerHTML = "";
    todos.forEach((todo) => {
        const newToDo = `<li id="${todo.id}">${todo.text}<button onclick="removeToDoListItem(${todo.id})">X</button></li>`;
        ul.insertAdjacentHTML("beforeend", newToDo);
    });
}
// drawList();


// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   // console.log(event)
// })