// Object-Oriented Style
// Not going to leave data in HTML
// HTML is just for visuals
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("#taskInput");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filteredTodos = []; // MVVM
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

// toggle completed styles when task is marked as complete
ul.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('completed');
    }
}, false);

function updateToDoListItem(id, newData) {
    filterTodos(); // draw filtered todos as todos have been updated
}

// update the whole list
function drawList() {
    ul.innerHTML = "";
    filteredTodos
        .sort((a, b) => {
            if (prioritisationEnabled) {
                return a.priority - b.priority
            }
            return 1
        })
        .forEach((todo) => {
                const newToDo = `
                <li id="${todo.id}">
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
                ul.insertAdjacentHTML("beforeend", newToDo);
    });
}

filterTodos();