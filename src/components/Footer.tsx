// src/components/Footer.tsx
import React, { useState } from "react";
import { submitEmail } from "../services/api"; // Import the API function
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitEmail(email);
      setSuccess(true);
      setEmail(""); // Clear input field after submission
    } catch (err) {
      setError(error); // Handle error
      console.error(err);
    }
  };

  return (
    <section id="footer" className="bg-gray-800 text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="left-part md:w-1/2 mb-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus.
          </p>
          <form onSubmit={handleSubscribe} className="flex mt-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded border-2 border-gray-500 flex-grow"
              required
            />
            <button type="submit" className="ml-2 p-2 bg-blue-600 rounded">
              Subscribe
            </button>
          </form>
          {success && (
            <p className="text-green-500 mt-2">Subscribed successfully!</p>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="right-part md:w-1/2 mb-5 text-center">
          <h3 className="text-xl mb-3">Get in touch</h3>
          <div className="social-media">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://github.com/Mugisha146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mugisha-emmanuel-224239299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/1_mugisha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom w-full mt-5 flex flex-col md:flex-row justify-between">
          <div className="info-support">
            <ul className="flex space-x-4">
              <li>
                <Link to="/info" className="hover:underline">
                  Info
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="hover:underline">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright text-center">
            <p>&copy; 2024 CodeWithEl3.com</p>
          </div>
          <div className="term-privacy">
            <ul className="flex space-x-4">
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:underline">
                  Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
