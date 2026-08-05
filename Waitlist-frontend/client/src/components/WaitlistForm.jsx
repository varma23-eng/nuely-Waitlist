import React, { useState } from "react";
import "../styles/Waitlist.css";

export default function WaitlistForm() {

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
});

const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    try {

      const response = await fetch("http://localhost:5000/api/waitlist", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      });

      const data = await response.json();

      if (response.ok) {

        setSuccess("Successfully joined the waitlist!");

        setFormData({
          name: "",
          email: "",
          phone: "",
        });
        setTimeout(() => {
  setSuccess("");
}, 3000);

      } else {

        alert(data.message || "Something went wrong.");

      }

    } catch (error) {

      console.error(error);

      alert("Cannot connect to the server.");

    }

  };

  return (

    <div className="waitlist-card">

      <span className="private-access">
        PRIVATE ACCESS
      </span>

      <h2>DISCOVER OUR COLLECTION</h2>

      <p className="card-text">
        Be among the first to experience Nuely.
      </p>

      <div className="input-group">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

      </div>

      <div className="input-group">

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

      </div>

      <div className="input-group">

        <input
          type="tel"
          name="phone"
          placeholder="+91 Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

      </div>

      <button
        className="join-btn"
        onClick={handleSubmit}
      >
        RESERVE YOUR ACCESS →
      </button>
      {success && (
  <p className="success-message">
    ✅ {success}
  </p>
)}

      <div className="privacy">
        🛡️ We respect your privacy.
      </div>

    </div>

  );

}