function addItem() {
  var a = document.getElementById("list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute("id", candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  a.appendChild(li);
}
function removeItem() {
  var a = document.getElementById("list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  a.removeChild(item);
}

function editItem() {
  var a = document.getElementById("list");
  var candidate = document.getElementById("candidate");
  var newItemValue = prompt(
    "Enter the new value for the item:",
    candidate.value
  );

  if (newItemValue !== null && newItemValue !== "") {
    var item = document.getElementById(candidate.value);
    if (item) {
      item.setAttribute("id", newItemValue);
      item.textContent = newItemValue;
    }
  }
}
