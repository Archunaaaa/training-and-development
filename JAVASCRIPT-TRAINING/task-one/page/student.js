// student
function onload() {
  console.log("loADING");
  add_table();
}
let array = [];
var home;
function submit() {
  let object = {};
  object.name = document.getElementById("name").value;
  object.fname = document.getElementById("fname").value;
  object.age = document.getElementById("age").value;
  object.date = document.getElementById("date").value;
  object.town = document.getElementById("town").value;
  object.gender = document.getElementById("gender").value;
  object.pin = document.getElementById("pin").value;
  object.address = document.getElementById("address").value;
  const birth = new Date(object.date);
  const formatteddob = birth.toLocaleDateString("en-GB");
  object["date"] = formatteddob;
  if (object.name == "") {
    document.getElementById("promo").innerHTML = "Enter student name";
  } else {
    document.getElementById("promo").innerHTML = "";
  }
  if (object.fname == "") {
    document.getElementById("father").innerHTML = "Enter father name";
  } else {
    document.getElementById("father").innerHTML = "";
  }
  if (object.age == "") {
    document.getElementById("qunty").innerHTML = "Enter age";
  } else {
    document.getElementById("qunty").innerHTML = "";
  }
  if (object.birth == "") {
    document.getElementById("birth").innerHTML = "Enter date of birth";
  } else {
    document.getElementById("birth").innerHTML = "";
  }
  if (object.town == "") {
    document.getElementById("cty").innerHTML = "Enter city name";
  } else {
    document.getElementById("cty").innerHTML = "";
  }
  if (object.gender == "") {
    document.getElementById("pric").innerHTML = "Enter your gender";
  } else {
    document.getElementById("pric").innerHTML = "";
  }
  if (object.pin == "") {
    document.getElementById("code").innerHTML = "Enter your pincode";
  } else {
    document.getElementById("code").innerHTML = "";
  }
  if (object.address == "") {
    document.getElementById("amount").innerHTML = "Enter your address";
  } else {
    document.getElementById("amount").innerHTML = "";
  }
  if (
    object.name == "" ||
    object.fname == "" ||
    object.age == "" ||
    object.date == "" ||
    object.town == "" ||
    object.gender == "" ||
    object.pin == "" ||
    object.address == ""
  ) {
    return false;
  }
  console.log(object);
  if (home != undefined) {
    array[home].name = object.name;
    array[home].fname = object.fname;
    array[home].age = object.age;
    array[home].date = object.date;
    array[home].town = object.town;
    array[home].gender = object.gender;
    array[home].pin = object.pin;
    array[home].address = object.address;
  } else {
    array.push(object);
  }
  localStorage.setItem("array", JSON.stringify(array));
  add_table();
  document.getElementById("name").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("date").value = "";
  document.getElementById("town").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("address").value = "";
}
function add_table() {
  var v = "";
  array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    v += "<tr>";
    v += "<td>" + array[i].name + "</td>";
    v += "<td>" + array[i].fname + "</td>";
    v += "<td>" + array[i].age + "</td>";
    v += "<td>" + array[i].date + "</td>";
    v += "<td>" + array[i].town + "</td>";
    v += "<td>" + array[i].gender + "</td>";
    v += "<td>" + array[i].pin + "</td>";
    v += "<td>" + array[i].address + "</td>";
    v +=
      '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +
      i +
      ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +
      i +
      ')">Delete</button></td>';
    v += "</tr>";
  }
  document.getElementById("add_table").innerHTML = v;
}
function Edit(id) {
  console.log(id);
  console.log(array[id]);
  home = id;
  document.getElementById("name").value = array[id].name;
  document.getElementById("fname").value = array[id].fname;
  document.getElementById("age").value = array[id].age;
  document.getElementById("date").value = array[id].date;
  document.getElementById("town").value = array[id].town;
  document.getElementById("gender").value = array[id].gender;
  document.getElementById("pin").value = array[id].pin;
  document.getElementById("address").value = array[id].address;
}
array.date = array.date.split("/").reverse().join("-");
document.getElementById("date").value = array.date;
function Delete(y) {
  console.log(y);
  array.splice(y, 1);
  localStorage.setItem("array", JSON.stringify(array));
  add_table();
}
