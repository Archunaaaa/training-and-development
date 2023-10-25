// Filename - Home.js
import React from "react";
import { Button, Table } from "react-bootstrap";
import array from "../Data/Array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  function setID(id, name, age, ph, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("PhoneNumber", ph);
    localStorage.setItem("email", email);
  }

  function deleted(id) {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    array.splice(index, 1);
    history("/");
  }
  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Age}</td>

                <td>
                  <Link to={`/Edit`}>
                    <Button
                      onClick={(e) => setID(item.id, item.Name, item.Age)}
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link className="d-grid gap-2" to="/Create">
        <Button variant="primary" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Home;
