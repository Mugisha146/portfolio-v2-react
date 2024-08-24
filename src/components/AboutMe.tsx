import React from "react";
import { Link } from "react-router-dom";

const AboutMe: React.FC = () => {

  return (
    <section id="aboutme" className="py-10 px-5">
      <h1 className="text-4xl text-center mb-8">About Me</h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="left-part w-full lg:w-2/5 text-lg leading-relaxed">
          <p className="mb-4">
            I am a Professional UI/UX Designer and a Full stack Web developer. I
            am in finall year in Computer Science at University of Rwanda and I
            completed Full stack web developer Bootcamp 2024 by Dr.Angela Yu,
            Mostly i use React for Frontend and Node+ExpressJs with Typescript
            and PostgreSQL for Backend.
          </p>
          <p className="mb-4">
            I earned Certificates such as The Complete 2024 Web Development
            Bootcamp certificate, Algorithm & Data Structure certificate,
            Phython certificate and Ethical hacker Certificate. I have 3 years
            working experience: 2 years working on Academic project and 1 year
            working with Andela Rwanda Organisation as full stack developer.
          </p>
          <p>
            My interests are Team collaboration, Learning new language,
            Programming Challenges and Competitions, Open Source Contribution.
            And my hobbies are Enjoying Designing, Playing piano and Guitar,
            Doing physical Exercise while listening Music.
          </p>
          <div className="social-media mt-6 flex justify-center lg:justify-start">
            <ul className="flex space-x-5">
              <li className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
                <a
                  href="https://github.com/Mugisha146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 text-2xl"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
                <a
                  href="https://www.linkedin.com/in/mugisha-emmanuel-224239299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 text-2xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
                <a
                  href="https://www.instagram.com/1_mugisha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
                <a
                  href="https://www.instagram.com/1_mugisha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
                <a
                  href="https://www.instagram.com/1_mugisha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-part w-full lg:w-3/5 bg-teal-100 rounded-full relative flex items-center justify-center">
          <img
            src={"../assets/images/IMG_0484.jpeg"}
            alt="My Picture"
            className="w-96 h-96 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="/" className="text-teal-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
