// teacher
function onload() {}
let array = [];
var home;
function submit() {
  let object = {};
  object.name = document.getElementById("name").value;
  object.age = document.getElementById("age").value;
  object.gender = document.getElementById("gender").value;
  object.address = document.getElementById("address").value;

  if (object.name == "") {
    document.getElementById("promo").innerHTML = "Enter name";
  } else {
    document.getElementById("promo").innerHTML = "";
  }
  if (object.age == "") {
    document.getElementById("qunty").innerHTML = "Enter quantity";
  } else {
    document.getElementById("qunty").innerHTML = "ok";
  }
  if (object.gender == "") {
    document.getElementById("pric").innerHTML = "Enter price";
  } else {
    document.getElementById("pric").innerHTML = "";
  }
  if (object.address == "") {
    document.getElementById("amount").innerHTML = "Enter total amt";
  } else {
    document.getElementById("amount").innerHTML = "";
  }
  if (
    object.name == "" ||
    object.age == "" ||
    object.gender == "" ||
    object.address == ""
  ) {
    return false;
  }
  console.log(object);
  if (home != undefined) {
    array[home].name = object.name;
    array[home].age = object.age;
    array[home].gender = object.gender;
    array[home].address = object.address;
  } else {
    array.push(object);
  }

  add_table();

  // localStorage.setItem("array", JSON.stringify(array));
  // let locals = JSON.parse(localStorage.getItem("array"));
}

function add_table() {
  var table = "";
  for (let i = 0; i < array.length; i++) {
    table += "<tr>";
    table += "<td>" + array[i].name + "</td>";
    table += "<td>" + array[i].age + "</td>";
    table += "<td>" + array[i].gender + "</td>";
    table += "<td>" + array[i].address + "</td>";
    table +=
      '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +
      i +
      ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +
      i +
      ')">Delete</button></td>';
    table += "</tr>";
  }
  document.getElementById("add_table").innerHTML = table;
}
function Edit(id) {
  console.log(id);
  console.log(array[id]);
  home = id;
  document.getElementById("name").value = array[id].name;
  document.getElementById("age").value = array[id].age;
  document.getElementById("gender").value = array[id].gender;
  document.getElementById("address").value = array[id].address;
}
function Delete(id) {
  console.log(id);
  console.log(array[id]);
  array.splice(id, 1);
  add_table();
}
