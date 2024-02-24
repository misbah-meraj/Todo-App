function Add() {
  var b = document.getElementById("main");
  var inputValue = b.value;
  var li = document.createElement("li");
  li.textContent = inputValue;

  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.backgroundColor = "#007bff";
  editBtn.onclick = function () {
    editTask(li);
  };

  var delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.backgroundColor = "#dc3545";
  delBtn.onclick = function () {
    deleteTask(li);
  };

  li.appendChild(editBtn);
  li.appendChild(delBtn);

  document.getElementById("div1").appendChild(li);

  document.getElementById("div1").value = "";
}

function editTask(li) { 
  var currentText = li.firstChild.textContent;
  var newValue = prompt("Edit task:", currentText);
  if (newValue !== null && newValue !== "") {
    li.firstChild.textContent = newValue;
  }
}

function deleteTask(li) {
  li.remove();
}

function deleteAll(elem) {
  var div1 = document.getElementById("div1");
  div1.innerHTML = "";
}
