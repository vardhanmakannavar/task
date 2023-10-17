import React, { useState, useEffect } from "react";

function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    // Add other profile fields here
  });

  useEffect(() => {
    // Fetch the user's current profile data and populate the form fields
    // You may make an API request to get the user's profile data here
  }, []);

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
      // Send a request to update the user's profile on the server
      const response = await fetch("localhost:2000/api/users/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Include any authentication headers (e.g., JWT token)
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Profile update successful
        console.log("Profile updated successfully");
      } else {
        console.error("Profile update failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input
            type="text"
            name="name"
            value={formData.lastName}
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
        {/* Add other profile fields here */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
