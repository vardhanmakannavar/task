// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
//import Login from "./components/Login";
// import Register from "./components/Register";
import Register from "./components/Reg";
import NextPage from "./components/Nextpage";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/next" element={<NextPage />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>

      {/* <RegPage /> */}
    </div>
  );
}

export default App;
