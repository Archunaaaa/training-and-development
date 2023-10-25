import React, { useState, useEffect } from "react";

// import "./useStateForm.css";
// import { List } from "@mui/material";

export const Forms = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    language: "",
    dob: "",
    editIndex: -1,
    submittedData: [],
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [dobError, setDobError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (name === "phoneNumber") {
      if (value.length !== 10) {
        setPhoneNumberError("Enter a valid Mobile number");
      } else {
        setPhoneNumberError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name.trim()) {
      setNameError("Name is required");
      return;
    } else {
      setNameError("");
    }
    if (!state.email.trim() || !isValidEmail(state.email)) {
      setEmailError("Enter a valid Email Address");
      return;
    } else {
      setEmailError("");
    }
    if (!state.password.trim()) {
      setPasswordError("Password is required");
      return;
    } else {
      setPasswordError("");
    }
    if (!state.confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required");
      return;
    } else if (state.confirmPassword !== state.password) {
      setConfirmPasswordError("Passwords do not match");
      return;
    } else {
      setConfirmPasswordError("");
    }
    if (!state.phoneNumber.trim()) {
      setPhoneNumberError("Phone Number is required");
      return;
    } else {
      setPhoneNumberError("");
    }
    if (!state.gender.trim()) {
      setGenderError("Gender is required");
      return;
    } else {
      setGenderError("");
    }
    if (!state.language.trim()) {
      setLanguageError("Language is required");
      return;
    } else {
      setLanguageError("");
    }
    if (!state.dob.trim()) {
      setDobError("Date of Birth is required");
      return;
    } else {
      setDobError("");
    }

    const newSubmittedData = [...state.submittedData];
    if (state.editIndex !== -1) {
      newSubmittedData[state.editIndex] = { ...state };
    } else {
      newSubmittedData.push({ ...state });
    }

    setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      gender: "",
      language: "",
      dob: "",
      editIndex: -1,
      submittedData: newSubmittedData,
    });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleDelete = (index) => {
    const newSubmittedData = [...state.submittedData];
    newSubmittedData.splice(index, 1);
    setState({ ...state, submittedData: newSubmittedData });
  };

  const handleEdit = (index) => {
    const editedData = state.submittedData[index];
    setState({ ...editedData, editIndex: index });
  };

  useEffect(() => {
    if (state.editIndex !== -1) {
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setPhoneNumberError("");
      setGenderError("");
      setLanguageError("");
      setDobError("");
    }
  }, [state.editIndex]);

  return (
    <div className="bg-color ">
      <div className="bg-color">
        <h1 className="text-center mt-5 p-5 fw-bold">Usestate</h1>
        <form onSubmit={handleSubmit}>
          <div class="container background_img rounded px-4">
            <div class="row input_form gx-5">
              <div class="col mt-5">
                <div class="p-5 border shadow bg rounded">
                  <div className=" form-floating mb-3">
                    {" "}
                    <input
                      type="text"
                      id="name"
                      className="form-control input_border  rounded-0"
                      name="name"
                      value={state.name}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="fw-bold text-dark"
                    >
                      Name
                    </label>
                  </div>
                  <p id="nameError" className="text-danger">
                    {nameError}
                  </p>
                  <div className=" form-floating mb-3">
                    <input
                      type="text"
                      id="email"
                      className="form-control input_border  rounded-0 "
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="fw-bold text-dark"
                    >
                      Email
                    </label>
                  </div>
                  <p id="emailError" className="text-danger">
                    {emailError}
                  </p>
                  <div className=" form-floating mb-3">
                    <input
                      type="password"
                      id="password"
                      className="form-control input_border  rounded-0 "
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="fw-bold text-dark"
                    >
                      Password
                    </label>
                  </div>
                  <p id="passwordError" className="text-danger">
                    {passwordError}
                  </p>
                  <div className=" form-floating mb-3">
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control input_border  rounded-0 "
                      name="confirmPassword"
                      value={state.confirmPassword}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="fw-bold text-dark"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <p id="confirmPassword" className="text-danger">
                    {confirmPasswordError}
                  </p>
                </div>
              </div>
              <div class="col mt-5">
                <div class="p-5 border shadow bg rounded">
                  <div className=" form-floating mb-3">
                    {" "}
                    <input
                      type="number"
                      id="phoneNumber"
                      className="form-control input_border  rounded-0 "
                      name="phoneNumber"
                      value={state.phoneNumber}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="fw-bold text-dark"
                    >
                      Phone Number
                    </label>
                  </div>
                  <p id="phoneNumberError" className="text-danger">
                    {phoneNumberError}
                  </p>
                  <div className=" form-floating mb-5">
                    <input
                      type="date"
                      id="dob"
                      className="form-control input_border  rounded-0 "
                      name="dob"
                      value={state.dob}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="fw-bold text-dark"
                    >
                      Date of Birth
                    </label>
                  </div>
                  <p id="dobError" className="text-danger">
                    {dobError}
                  </p>

                  <div class="input-group mb-4">
                    <label
                      class="input-group-text"
                      for="floatingInputtGroupSelect01"
                    >
                      Gender
                    </label>
                    <select
                      class="form-select input-group form-control input_border rounded-0"
                      id="gender"
                      name="gender"
                      value={state.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <p id="genderError" className="text-danger">
                    {genderError}
                  </p>
                  <div class="input-group mb-3">
                    <label
                      class="input-group-text"
                      for="floatingInputtGroupSelect01"
                    >
                      Language
                    </label>
                    <select
                      class="form-select input-group form-control input_border rounded-0"
                      id="language"
                      name="language"
                      value={state.language}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Arabic</option>
                      <option>Englsh</option>
                      <option>French</option>
                      <option>Hindi</option>
                      <option>Tamil</option>
                    </select>
                  </div>
                  <p id="languageError" className="text-danger">
                    {languageError}
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center mt-2 pt-3 pb-3">
              <button type="submit" className="btn btn-success ">
                {state.editIndex !== -1 ? "Save" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <h2 className="text-center fw-bold mt-4">Usestate Table</h2>
      <div className="table-responsive">
        <table className="table container col-6 table-striped table-dark table-hover text-center table-bordered border-light mt-3">
          <thead>
            <tr className="">
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Language</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.confirmPassword}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.gender}</td>
                <td>{data.language}</td>
                <td>{data.dob}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-info ms-2"
                    onClick={() => handleDelete(index)}
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
  );
};

export default Forms;
