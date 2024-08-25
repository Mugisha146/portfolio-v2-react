import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Projects";
import Blogs from "./components/Blog";
import BlogDetail from "./components/Blog";
import Contact from "./components/Contact";
import Login from "./components/Users/LogIn";
import SignUp from "./components/Users/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResetPassword from "./components/Users/ResetPassword";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
