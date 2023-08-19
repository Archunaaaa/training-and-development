function onload() {}
let array = [];
var home;
function submit() {
  let object = {};
  object.name = document.getElementById("name").value;
  object.age = document.getElementById("age").value;
  object.gender = document.getElementById("gender").value;
  object.address = document.getElementById("address").value;
  console.log(object);
  // document.getElementById("name1").innerHTML = object.name;
  // document.getElementById("age1").innerHTML = object.age;
  // document.getElementById("gender1").innerHTML = object.gender;
  // document.getElementById("address1").innerHTML = object.address;

  if (home != undefined) {
    array[home].name = object.name;
    array[home].age = object.age;
    array[home].gender = object.gender;
    array[home].address = object.address;
  } else {
    array.push(object);
  }
  localStorage.setItem("array", JSON.stringify(array));
  console.log(array);
  add_table();
}
function add_table() {
  var table = "";
  // let name = "archuna";
  // table += "<tr>";
  // table += "<td>" + name + "</td>";
  // table += "</tr>";

  document.getElementById("add_table").innerHTML = table;

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
    document.getElementById("add_table").innerHTML = table;
  }
  // array.forEach((res) => {
  //   table += "<tr>";
  //   table += "<tr>" + res.name + "</td>";
  //   table += "<tr>" + res.age + "</td>";
  //   table += "<tr>" + res.gender + "</td>";
  //   table += "<tr>" + res.address + "</td>";
  //   table += "</tr>";
  // });
  // document.getElementById("add_table").innerHTML = table;
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
