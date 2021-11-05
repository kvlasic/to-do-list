// Object-Oriented Style
// Not going to leave data in HTML
// HTML is just for visuals
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("#taskInput");

let todos = [];
let filteredTodos = [];
let newTaskId = 0;

function addToDoListItem(event) {
    event.preventDefault()
    let newObject = { id: newTaskId, text: input.value, completed: false };
    input.value = "";
    todos.unshift(newObject);
    newTaskId++;
    drawList();
}

function removeToDoListItem(id) {
    const index = todos.findIndex(item => item.id === id)
    todos.splice(index, 1)
    drawList();
}

const filterTodos = () => {
    // filter existing todos array and return filtered list as its own array
    filteredTodos = todos.filter(item => item.text.includes(input.value));
    drawList();
}

function updateToDoListItem(id, newData) {
    drawList();
}

// update the whole list
function drawList() {
    console.log(todos);
    ul.innerHTML = "";
    filteredTodos.forEach((todo) => {
        const newToDo = `<li id="${todo.id}">${todo.text}<button onclick="removeToDoListItem(${todo.id})">X</button></li>`;
        ul.insertAdjacentHTML("beforeend", newToDo);
    });
}
// drawList();


// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   // console.log(event)
// })