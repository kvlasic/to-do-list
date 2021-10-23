// Add items based on user input
function getInputValue() {
  let inputVal = document.getElementById("myInput");
  const ul = document.getElementById("list");
  const liElement = document.createElement("li");
  liElement.appendChild(document.createTextNode(inputVal.value));
  // If user doesn't write anything he gets a warning alert
  if (inputVal === "") {
    alert("You must write something!");
  } else {
    ul.appendChild(liElement);
    inputVal.value = ""; // removes text from input field after being submitted
  }

  // Add X to remove items
  let span = document.createElement("span");
  let xSymbol = document.createTextNode("\u00D7"); // \u00D7 is unicode for x symbol I guess
  span.className = "delete"; // span element gets a class named delete
  span.appendChild(xSymbol);
  liElement.appendChild(span);
}
