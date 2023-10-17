import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reg() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //const data = await response.json();

      if (response.ok) {
        // Handle successful registration (e.g., show a success message)
        navigate("/next");
        console.log("Registration successful");
      } else {
        // Handle registration failure (e.g., show an error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lastame:</label>
          <input
            type="text"
            name="lastName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phnonenumber:</label>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Reg;
