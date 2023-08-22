function onload() {
  Edit();
}
let array = [];
var edit;
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
    document.getElementById("qunty").innerHTML = "Enter your age";
  } else {
    document.getElementById("qunty").innerHTML = "";
  }
  if (object.date == "") {
    document.getElementById("birth").innerHTML = "Enter your date of birth";
  } else {
    document.getElementById("birth").innerHTML = "";
  }
  if (object.town == "") {
    document.getElementById("cty").innerHTML = "Enter your city";
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

  if (edit != undefined) {
    let url = "https://64d60e47754d3e0f13618812.mockapi.io/form/workers";

    fetch(url + "/" + edit, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.href = "workers.html";
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64d60e47754d3e0f13618812.mockapi.io/form/workers";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.href = "workers.html";

        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  localStorage.setItem("array", JSON.stringify(array));
}
function Edit(id) {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  edit = id;
  if (id) {
    let url = "https://64d60e47754d3e0f13618812.mockapi.io/form/workers";

    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        array = string;
        document.getElementById("name").value = array.name;
        document.getElementById("fname").value = array.fname;
        document.getElementById("age").value = array.age;
        document.getElementById("date").value = array.date;
        document.getElementById("town").value = array.town;
        document.getElementById("gender").value = array.gender;
        document.getElementById("pin").value = array.pin;
        document.getElementById("address").value = array.address;

        console.log(`Title of our response : ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
