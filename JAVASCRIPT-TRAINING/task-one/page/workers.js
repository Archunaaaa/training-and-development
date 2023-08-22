function onload() {
  getList();
}
let array = [];
var edit;
function add() {
  window.location.href =
    "file:///C:/Users/MYPC/html/js_form/page/worker_form.html";
}

function getList() {
  edit = undefined;
  let url = "https://64d60e47754d3e0f13618812.mockapi.io/form/workers";
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      array = string;
      console.log(array);
      add_table();

      console.log(`Title of our response :  ${array[0].name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function add_table() {
  var table = "";
  for (let i = 0; i < array.length; i++) {
    table += "<tr>";
    table += "<td>" + array[i].name + "</td>";
    table += "<td>" + array[i].fname + "</td>";
    table += "<td>" + array[i].age + "</td>";
    table += "<td>" + array[i].date + "</td>";
    table += "<td>" + array[i].town + "</td>";
    table += "<td>" + array[i].gender + "</td>";
    table += "<td>" + array[i].pin + "</td>";
    table += "<td>" + array[i].address + "</td>";
    table +=
      '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +
      array[i].id +
      ')">Edit</button><button class="btn btn-danger delete"  onclick="Delete(' +
      array[i].id +
      ')">Delete</button></td>';
    table += "</tr>";
  }
  document.getElementById("add_table").innerHTML = table;
}

function Edit(id) {
  edit = id;
  window.location.href = "worker_form.html?id=" + id;
}

function Delete(id) {
  let url = "https://64d60e47754d3e0f13618812.mockapi.io/form/workers";
  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      getList();
      console.log(`Title of our response :  ${string.name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
