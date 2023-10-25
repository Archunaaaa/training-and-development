// Filename - app.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Component/Form/Create";
import Edit from "./Component/Table/Edit";
import Home from "./Component/Page/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Add />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
