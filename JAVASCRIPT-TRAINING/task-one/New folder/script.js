function onload() {}
let array = [];
var home;
function submit() {
  let object = {};
  object.product = document.getElementById("product").value;
  object.quantity = document.getElementById("quantity").value;
  object.price = document.getElementById("price").value;
  object.total = document.getElementById("total").value;
  if (object.product == "") {
    document.getElementById("promo").innerHTML = "Enter product";
  } else {
    document.getElementById("promo").innerHTML = "";
  }
  if (object.quantity == "") {
    document.getElementById("qunty").innerHTML = "Enter quantity";
  } else {
    document.getElementById("qunty").innerHTML = "";
  }
  if (object.price == "") {
    document.getElementById("pric").innerHTML = "Enter price";
  } else {
    document.getElementById("pric").innerHTML = "";
  }
  if (object.total == "") {
    document.getElementById("amount").innerHTML = "Enter total amt";
  } else {
    document.getElementById("amount").innerHTML = "";
  }
  if (
    object.product == "" ||
    object.quantity == "" ||
    object.price == "" ||
    object.total == ""
  ) {
    return false;
  }
  console.log(object);
  if (home != undefined) {
    array[home].product = object.product;
    array[home].quantity = object.quantity;
    array[home].price = object.price;
    array[home].total = object.total;
  } else {
    array.push(object);
  }

  add_table();
  localStorage.setItem("array", JSON.stringify(array));
  let locals = JSON.parse(localStorage.getItem("array"));
}

function add_table() {
  var table = "";
  for (let i = 0; i < array.length; i++) {
    table += "<tr>";
    table += "<td>" + array[i].product + "</td>";
    table += "<td>" + array[i].quantity + "</td>";
    table += "<td>" + array[i].price + "</td>";
    table += "<td>" + array[i].total + "</td>";
    table +=
      '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +
      i +
      ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +
      i +
      ')">Delete</button></td>';
    table += "</tr>";
    document.getElementById("add_table").innerHTML = table;
  }
}
function Edit(id) {
  console.log(id);
  console.log(array[id]);
  home = id;
  document.getElementById("product").value = array[id].product;
  document.getElementById("quantity").value = array[id].quantity;
  document.getElementById("price").value = array[id].price;
  document.getElementById("total").value = array[id].total;
}
function Delete(id) {
  console.log(id);
  console.log(array[id]);
  array.splice(id, 1);
  add_table();
}
