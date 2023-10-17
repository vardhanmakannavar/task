import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const NextPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  useEffect((props) => {
    async function getuser() {
      const res = await fetch("/:id");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/regidter");
      } else {
        setFormData(formData.firstName);
      }
    }
    getuser();
  });
  return (
    <div className="container">
      <h1>Congratulations! {formData.firstName}</h1>
      <button>Edit Profile</button>
    </div>
  );
};

export default NextPage;
