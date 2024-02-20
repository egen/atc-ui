import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Cat from "./views/Cat/Cat";
import Employee from "./views/Employee/Employee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="/cats" element={<Cat />} />
        <Route path="/employees" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
