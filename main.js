// Create delete button on li elements
let liList = document.getElementsByTagName("li");
for (let i = 0; i < liList.length; i++) {
    let span = document.createElement("span");
    let xSymbol = document.createTextNode("\u00D7"); // \u00D7 is unicode for x symbol I guess
    span.className = "delete"; // span element gets a class named delete
    span.appendChild(xSymbol);
    liList[i].appendChild(span);
}

// Get user input and add an li element based on it
function getInputValue() {
    // Select the input element and get its value 
    let inputVal = document.getElementById("myInput").value;
    const ul = document.getElementById("list");
    const liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(inputVal));
    // If user doesn't write anything he gets a warning alert
    if (inputVal === '') {
        alert("You must write something!");
    } else {
        ul.appendChild(liElement);
        document.getElementById("myInput").value = ""; // removes text from input field after being submitted
    }
    let span = document.createElement("span");
    let xSymbol = document.createTextNode("\u00D7"); // \u00D7 is unicode for x symbol I guess
    span.className = "delete"; // span element gets a class named delete
    span.appendChild(xSymbol);
    li.appendChild(span);
}