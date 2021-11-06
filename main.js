// Object-Oriented Style
// Not going to leave data in HTML
// HTML is just for visuals
const ul = document.querySelector("ul");
const notCompleted = document.querySelector("#not-completed");
const completed = document.querySelector("#completed");
const form = document.querySelector("form");
const input = document.querySelector("#taskInput");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filteredTodos = []; // MVVM
let completedTodos = document.querySelector(".completed");
let newTaskId = 0;
let editingActiveId = null;
let prioritisationEnabled = true;


function addToDoListItem(event) {
    newTaskId = todos.length + 1;
    event.preventDefault();
    let newObject = { id: newTaskId, text: input.value, completed: false, priority: parseInt(event.target.elements["priority"].value) };
    console.log(newObject);
    input.value = "";
    todos.unshift(newObject);
    newTaskId++;
    filterTodos(); // draw filtered todos as todos have been updated
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeToDoListItem(id) {
    const index = todos.findIndex(item => item.id === id)
    todos.splice(index, 1)
    filterTodos(); // draw filtered todos as todos have been updated
    localStorage.setItem("todos", JSON.stringify(todos));
}

function editToDoListItem(id) {
    editingActiveId = id;
    filterTodos();
    localStorage.setItem("todos", JSON.stringify(todos));
}

function saveToDoListItem(id) {
    const item = todos.find(i => i.id === id)
    const index = todos.findIndex(i => i.id === id)
    const newText = document.querySelector("#newText").value
    console.log(item, newText)
    item.text = newText;
    todos.splice(index, 1, item)
    editingActiveId = null;
    filterTodos(); // draw filtered todos as todos have been updated
    localStorage.setItem("todos", JSON.stringify(todos));
}

const filterTodos = () => {
    // filter existing todos array and return filtered list as its own array
    filteredTodos = todos.filter(item => item.text.includes(input.value));
    drawList();
}

const toggleCompleted = (id) => {
    const item = todos.find(i => i.id === id)
    const index = todos.findIndex(i => i.id === id)
    item.completed = !item.completed;
    todos.splice(index, 1, item)
    filterTodos(); // draw filtered todos as todos have been updated
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateToDoListItem(id, newData) {
    filterTodos(); // draw filtered todos as todos have been updated
}

// update the whole list
function drawList() {
    ul.innerHTML = "";
    completed.innerHTML = "";
    notCompleted.innerHTML = "";
    filteredTodos
        .filter((todo) => {
            return !todo.completed
        })
        .sort((a, b) => {
            if (prioritisationEnabled) {
                return a.priority - b.priority
            }
            return 1
        })
        .forEach((todo) => {
                const newToDo = `
                <li id="${todo.id}" onclick="toggleCompleted(${todo.id})" class="${todo.completed ? "completed" : ""} ">
                    <!--conditionally show editing or not editing version -->
                    ${editingActiveId===todo.id?`
                    <input type='text' value=${todo.text} id="newText"></input>
                    <button onclick="saveToDoListItem(${todo.id})" class="save-button">Save</button>
                    `
                    :`${todo.text} <button id=priority>${["must", "should","could"][todo.priority]}</button>
                    <button onclick="editToDoListItem(${todo.id})" class="edit-button">Edit</button>
                    `
                    }
                    <button onclick="removeToDoListItem(${todo.id})" class="delete-button">X</button>
                </li>`;
                notCompleted.insertAdjacentHTML("beforeend", newToDo);
    });
    filteredTodos
        .filter((todo) => {
            return todo.completed
        })
        .sort((a, b) => {
            if (prioritisationEnabled) {
                return a.priority - b.priority
            }
            return 1
        })
        .forEach((todo) => {
                const newToDo = `
                <li id="${todo.id}" onclick="toggleCompleted(${todo.id})" class="${todo.completed ? "completed" : ""} ">
                    <!--conditionally show editing or not editing version -->
                    ${editingActiveId===todo.id?`
                    <input type='text' value=${todo.text} id="newText"></input>
                    <button onclick="saveToDoListItem(${todo.id})" class="save-button">Save</button>
                    `
                    :`${todo.text} <button id=priority>${["must", "should","could"][todo.priority]}</button>
                    <button onclick="editToDoListItem(${todo.id})" class="edit-button">Edit</button>
                    `
                    }
                    <button onclick="removeToDoListItem(${todo.id})" class="delete-button">X</button>
                </li>`;
                completed.insertAdjacentHTML("beforeend", newToDo);
    });
}

filterTodos();