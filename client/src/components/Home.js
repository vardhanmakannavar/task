import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
//import Register from "./Register";
//import Login from "./Login";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      {/* <button><a href="./Login.js"></a> Register Here</button> */}
      <div className="btn">
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
