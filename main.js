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
    event.preventDefault();
    let newObject = { id: newTaskId, text: input.value, completed: false };
    input.value = "";
    todos.unshift(newObject);
    newTaskId++;
    filterTodos(); // draw filtered todos as todos have been updated
}

function removeToDoListItem(id) {
    const index = todos.findIndex(item => item.id === id)
    todos.splice(index, 1)
    filterTodos(); // draw filtered todos as todos have been updated
}

const filterTodos = () => {
    // filter existing todos array and return filtered list as its own array
    filteredTodos = todos.filter(item => item.text.includes(input.value));
    drawList();
}

function updateToDoListItem(id, newData) {
    filterTodos(); // draw filtered todos as todos have been updated
}

// update the whole list
function drawList() {
    ul.innerHTML = "";
    filteredTodos.forEach((todo) => {
        // checkboxes to be used to mark items as complete
        const newToDo = `<li id="${todo.id}"><input type="checkbox">${todo.text}<button onclick="removeToDoListItem(${todo.id})" class="delete-button">X</button></li>`;
        ul.insertAdjacentHTML("beforeend", newToDo);
    });
}