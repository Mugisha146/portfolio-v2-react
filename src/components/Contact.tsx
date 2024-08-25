import React, { useState } from "react";
import { submitContactForm } from "../services/api"; // Import the API function

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(formData); // Call the API function
      console.log("Form submitted successfully:", response);
      // Optionally, you can reset the form or show a success message here
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <section id="contact" className="py-10">
      <h1 className="text-center text-5xl font-bold text-black mb-12">
        Get in touch
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="left-part bg-white p-5 rounded-lg shadow-lg">
          <h3 className="flex items-center text-xl mb-4">
            <i className="fa-solid fa-handshake mr-2"></i> Let's collaborate
          </h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-field mb-4">
              <label htmlFor="name" className="block font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="message" className="block font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Write Your Message"
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
        <div className="right-part bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">CONTACT</h2>
          <img
            src="../assets/images/Mugisha photo.jpeg"
            alt="Mugisha Emmanuel"
            className="rounded-full w-48 mx-auto mb-4"
          />
          <div className="links text-center">
            <h3 className="text-xl">MUGISHA Emmanuel</h3>
            <p className="mb-2">Full-stack developer</p>
            <p>
              <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+250780060254
            </p>
            <p>
              <i className="fa-regular fa-envelope"></i>
              &nbsp;&nbsp;emmyzizo1@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-globe"></i>
              &nbsp;&nbsp;www.CodeWithEl3.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Kigali,
              Rwanda
            </p>
          </div>
          <ul className="flex justify-center mt-4">
            <li className="mx-2">
              <a href="https://www.linkedin.com/in/mugisha-emmanuel-224239299">
                <img
                  src="../assets/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.instagram.com/1_mugisha/">
                <img
                  src="../assets/images/instagrame.jpeg"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://github.com/Mugisha146">
                <img
                  src="../assets/images/youtube1.png"
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
