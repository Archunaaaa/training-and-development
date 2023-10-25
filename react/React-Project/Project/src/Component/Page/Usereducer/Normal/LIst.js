import React, { useReducer, useState, useEffect } from "react";
import { initialState, Reducer } from "../../../../Hooks/Reducer/R1";
import ACTION from "../../../../Hooks/Reducer/Action/A1";

function List() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [newItem, setNewItem] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [dob, setDob] = useState("");

  const addItem = () => {
    // Validation checks
    if (name === "") {
      document.getElementById("firstNameError").innerHTML =
        "First name required*";
    } else {
      document.getElementById("firstNameError").innerHTML = " ";
    }
    if (email === "") {
      document.getElementById("EmailError").innerHTML =
        "Email field is required*";
    } else {
      document.getElementById("EmailError").innerHTML = " ";
    }
    if (phone === "") {
      document.getElementById("PhoneError").innerHTML =
        "Phone field is required*";
    } else {
      document.getElementById("PhoneError").innerHTML = " ";
    }
    if (password === "") {
      document.getElementById("passwordError").innerHTML =
        "Password field is required*";
    } else {
      document.getElementById("passwordError").innerHTML = " ";
    }
    if (cpass === "") {
      document.getElementById("cpassError").innerHTML =
        "Confirmpassword field is required*";
    } else {
      document.getElementById("cpassError").innerHTML = " ";
    }
    if (gender === "") {
      document.getElementById("genderError").innerHTML =
        "Gender field is required*";
    } else {
      document.getElementById("genderError").innerHTML = " ";
    }
    if (language === "") {
      document.getElementById("languageError").innerHTML =
        "Language field is required*";
    } else {
      document.getElementById("languageError").innerHTML = " ";
    }
    if (dob === "") {
      document.getElementById("dobError").innerHTML =
        "Date of Birth field is required*";
    } else {
      document.getElementById("dobError").innerHTML = " ";
    }

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      cpass === "" ||
      gender === "" ||
      language === "" ||
      dob === ""
    ) {
      return false;
    }
    // Add more validation checks for other fields as needed

    // If all fields are valid, proceed with adding or editing the item
    if (state.editingItem !== null) {
      // state.editingItem.text = newItem;
      state.editingItem.name = name;
      state.editingItem.email = email;
      state.editingItem.phone = phone;
      state.editingItem.password = password;
      state.editingItem.cpass = cpass;
      state.editingItem.gender = gender;
      state.editingItem.language = language;
      state.editingItem.dob = dob;

      dispatch({
        type: ACTION.EDIT_ITEM,
        payload: state.editingItem,
      });
    } else {
      dispatch({
        type: ACTION.ADD_ITEM,
        payload: {
          id: Date.now(),
          text: newItem,
          name,
          email,
          phone,
          password,
          cpass,
          gender,
          language,
          dob,
        },
      });
    }

    // Reset form fields
    setNewItem("");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCpass("");
    setGender("");
    setLanguage("");
    setDob("");

    // Function to validate email format

    // ... (other code)

    console.log(state);

    setNewItem("");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCpass("");
    setGender("");
    setLanguage("");
    setDob("");
  };

  const editItem = (item) => {
    dispatch({
      type: ACTION.SELECT_ITEM,
      payload: item,
    });
  };

  const deleteItem = (id) => {
    dispatch({ type: ACTION.DELETE_ITEM, payload: id });
  };

  useEffect(() => {
    if (state.editingItem) {
      // setNewItem(state.editingItem.text);
      setName(state.editingItem.name || "");
      setEmail(state.editingItem.email || "");
      setPhone(state.editingItem.phone || "");
      setPassword(state.editingItem.password || "");
      setCpass(state.editingItem.password || "");
      setGender(state.editingItem.gender || "");
      setLanguage(state.editingItem.language || "");
      setDob(state.editingItem.dob || "");
    }
  }, [state]);

  return (
    <div className="ms-4">
      <h1 className="mt-5 p-3 text-center">Use Reducer</h1>
      <div className="row ms-5">
        <div className="col-5 background_img rounded">
          {" "}
          <div className="d-flex justify-content-center flex-column ">
            <label className="form-lable fw-bold">Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p id="firstNameError" className="text-danger"></p>
            <label className="form-lable fw-bold">Email :</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p id="EmailError" className="text-danger"></p>
            <label className="form-lable fw-bold"> Phone Number:</label>
            <input
              type="number"
              className="form-control"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p id="PhoneError" className="text-danger"></p>
            <label className="form-lable fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p id="passwordError" className="text-danger"></p>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-center background_img rounded flex-column  ">
          <label className="form-label fw-bold">Confirm-Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="C-pass"
            value={cpass}
            onChange={(e) => setCpass(e.target.value)}
          />
          <p id="cpassError" className="text-danger"></p>
    
          <div className="col-md-4   ">
            <label className="form-label fw-bold">Gender:</label>
            <div>
              {["Male", "Female", "Other"].map((option) => (
                <label className="form-check-label mx-2" key={option}>
                  <input
                    type="radio"
                    className="form-check-input"
                    value={option}
                    checked={gender === option}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  {option}
                </label>

              ))}
            </div>
          </div>
          <p id="genderError" className="text-danger"></p>
          <div className="input-group mb-">
            <label className="input-group-text fw-bold " for="inputGroupSelect01">
              Language
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              placeholder="Gender"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option selected>Choose..</option>
              <option>English</option>
              <option>Tamil</option>
              <option>France</option>
              <option>Hindi</option>
            </select>
          </div>
          <p id="languageError" className="text-danger"></p>
          <label className="form-lable fw-bold">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <p id="dobError" className="text-danger"></p>
        </div>
        <div className="col-4 text mx-auto">
          <button className="btn btn-success ms-5 w-40  mt-4" onClick={addItem}>
            {state.editingItem ? "Save Edit" : "Add Item"}
          </button>
        </div>

        <div
          className="text-center me-5 mt-3 table-responsive
        "
        >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Date Of Birth</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.items.map((item) => (
                <tr key={item.id}>
                  {/* {/ <td>{item.id}</td> /} */}
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>{item.cpass}</td>
                  <td>{item.gender}</td>
                  <td>{item.language}</td>
                  <td>{item.dob}</td>

                  <td>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => editItem(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;





