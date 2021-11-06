// Object-Oriented Style
// Not going to leave data in HTML
// HTML is just for visuals
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("#taskInput");

let todos = [];
let filteredTodos = [];
let newTaskId = 0;
let editingActiveId = null;

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

function editToDoListItem(id) {
    editingActiveId = id;
    filterTodos();
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
                const newToDo = `
                <li id="${todo.id}">
                    <input type="checkbox">
                    <!--conditionally show editing or not editing version -->
                    ${editingActiveId===todo.id?`
                    <input type='text' value=${todo.text} id="newText"></input>
                    <button onclick="saveToDoListItem(${todo.id})" class="save-button">Save</button>
                    `
                    :`${todo.text}
                    <button onclick="editToDoListItem(${todo.id})" class="edit-button">Edit</button>
                    `
                    }
                    <button onclick="removeToDoListItem(${todo.id})" class="delete-button">X</button>
                </li>`;
                ul.insertAdjacentHTML("beforeend", newToDo);
    });
}