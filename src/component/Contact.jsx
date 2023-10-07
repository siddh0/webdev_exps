import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;



    // Validate Email
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsValidEmail(true);
    toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
  };

  return (
    <div id="contact" className="container mx-auto mt-5 h-screen pt-28">
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg }`}
            required
          />
          
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${
              !isValidEmail ? "border-red-500" : ""
            }`}
            required
          />
          {!isValidEmail && (
            <p className="text-red-500 text-sm mt-1">Invalid email address</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg`}
            rows="4"
            required
          />
         
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Form;
