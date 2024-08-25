import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
const Header: React.FC = () => {
  return (
    <section id="nav" className="bg-blue-100">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link to="/" id="scrollToHome" className="text-xl font-bold">
          <span className="text-teal-500">Code</span>With
          <span className="text-teal-500">El3</span>
        </Link>
        <ul className="nav-links flex space-x-5">
          <li>
            <Link to="/about" id="scrollToAbout">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/skills" id="scrollToSkills">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/portfolio" id="scrollToPortfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blogs" id="scrollToBlogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" id="scrollToContact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="login">
          <ul className="flex space-x-3">
            <li>
              <Link
                to="/login"
                id="scrollToLogIn"
                className="bg-white text-black py-2 px-4 rounded-lg"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/SignUp"
                id="scrollToSignUp"
                className="bg-white text-black py-2 px-4 rounded-lg"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </section>
  );
};

export default Header;
