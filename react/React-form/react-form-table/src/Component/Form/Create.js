import React, { useReducer } from "react";
import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Array from "../Data/Array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

// Define your initial state
const initialState = {
  name: "",
  age: "",
};

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return initialState; // Reset the state to initial values
    default:
      return state;
  }
};

function Add() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useNavigate();

  // Function for creating a post/entry
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const id = uuid(); // Creating a unique id
    const uniqueId = id.slice(0, 8); // Slicing unique id

    // Fetching values from the state and pushing to the JavaScript object
    const { name, age } = state;
    Array.push({ id: uniqueId, Name: name, Age: age });

    // Reset the state to initial values
    dispatch({ type: "RESET" });

    // Redirecting to the home page after creation is done
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
            type="text"
            placeholder="Age"
            required
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Add;
