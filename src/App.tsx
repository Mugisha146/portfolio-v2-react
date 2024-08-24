import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />{" "}
          {/* Assuming dynamic blog detail */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
