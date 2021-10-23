function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("myInput").value;
    let ul = document.getElementById("list");
    let liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(inputVal));
    ul.appendChild(liElement);
}