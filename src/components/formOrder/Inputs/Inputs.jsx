import React, { useState } from "react";
import "./Inputs.css";
import { useLocation } from "react-router-dom";

const Inputs = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    company: "",
    number: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.firstName);
    data.append("surname", formData.surname);
    data.append("company", formData.company);
    data.append("number", formData.number);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://polskamp.pl/process.php", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          surname: "",
          company: "",
          number: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred while sending the form.");
    }
  };

  return (
    <>
      <p className="makeOrder">Formularz kontaktowy</p> 
      <form className="inputContainerFormOrder" onSubmit={handleSubmit}>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">First name:</p>
        <input
          className="inputSkelet"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">Second name:</p>
        <input
          className="inputSkelet"
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">Company name:</p>
        <input
          className="inputSkelet"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">Phone number:</p>
        <input
          className="inputSkelet"
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">E-mail address:</p>
        <input
          className="inputSkelet"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">
          {location.pathname === "/contactForm"
            ? "Message:"
            : "The content of the order:"}
        </p>
        <textarea
          className="inputSkelet"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="buttonInputs">
        <button className="buttinUnputsMain" type="submit">Send</button>
      </div>
      {status && <p style={{ marginLeft: "20px", color: "green" }}>{status}</p>}
    </form>
    </>
    
  );
};

export default Inputs;
