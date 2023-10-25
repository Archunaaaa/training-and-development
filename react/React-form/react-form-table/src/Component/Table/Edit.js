import React, { useEffect, useReducer } from "react";
import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Array from "../Data/Array";
import { Link, useNavigate } from "react-router-dom";
// Define your initial state
const initialState = {
  name: "",
  age: "",
  id: "",
};

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_ID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

function Edit() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useNavigate();

  // Function for handling the edit and pushing changes of editing/updating
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the index of the entry with the given ID
    const index = Array.findIndex((e) => e.id === state.id);

    // Update the entry with the new name and age
    if (index !== -1) {
      Array[index].Name = state.name;
      Array[index].Age = state.age;
    }

    // Redirect to the main page
    history("/");
  };

  // Useeffect takes care that page will
  // be rendered only once
  useEffect(() => {
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("Name");
    const age = localStorage.getItem("Age");

    // Set the initial state based on local storage values
    dispatch({ type: "SET_ID", payload: id });
    dispatch({ type: "SET_NAME", payload: name });
    dispatch({ type: "SET_AGE", payload: age });
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
            type="text"
            placeholder="Age"
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
