import React from "react";
import "../styles/index.css";

const Home: React.FC = () => {
  
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url("../assets/images/backgroundimage.jpg")`,
        }}
      ></div>
      <div className="container mx-auto flex items-center justify-end h-full relative z-10">
        <div className="info text-right pt-36">
          <h1 className="text-4xl font-bold tracking-wide">
            I'm{" "}
            <span className="block border-r-2 border-gray-400 animate-typing whitespace-nowrap overflow-hidden">
              {"MUGISHA EMMANUEL"}
            </span>
          </h1>
          <h5 className="text-lg font-semibold text-gray-600 mt-4 animate-fadeIn">
            Full Stack Developer & UI/UX Designer
          </h5>
          <div className="mt-10">
            <a
              className="inline-block bg-white text-gray-800 px-6 py-3 border-2 border-gray-800 rounded-md font-bold hover:bg-blue-100"
              href="https://drive.google.com/file/d/1cQRa429JMGzXi9qYRc5iWAD8_MFJr2cs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
