import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchSkills } from "../redux/slices/skillsSlice";
import "../styles/index.css";

const Skills: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skills = useSelector((state: RootState) => state.skills.skills);
  const status = useSelector((state: RootState) => state.skills.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSkills());
    }
  }, [dispatch, status]);

  return (
    <section id="skills" className="pt-20">
      <h1 className="text-center text-5xl font-bold text-black">Skills</h1>
      <div className="grid grid-cols-6 gap-2 pt-20 h-[1500px] transform scale-[0.7]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill ${
              index % 2 === 0 ? "one" : "two"
            } bg-white rounded-full cursor-pointer list-none`}
          >
            <img
              src={skill.imgSrc}
              alt={`${skill.name}-skills`}
              className="transition-transform ease-linear duration-500 hover:scale-110"
            />
            <p className="px-10 py-4 text-lg font-bold text-gray-800">
              {skill.name}
            </p>
            <p
              id={`amaryo${index + 1}`}
              className="opacity-0 w-75 transform translate-y-[-95%] px-[250px] py-0 text-gray-600 text-lg font-bold"
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
