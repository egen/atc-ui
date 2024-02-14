import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Cat from "./views/Cat/Cat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<Cat />} />
      </Routes>
    </div>
  );
}

export default App;
