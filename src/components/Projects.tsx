import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../redux/slices/projectsSlice";
import { RootState, AppDispatch } from "../redux/store";

const Projects: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, status, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  return (
    <section id="projects" className="py-20">
      <h1 className="text-center text-4xl font-bold text-black mb-20">
        Projects
      </h1>
      <div className="container mx-auto flex flex-wrap justify-around items-center gap-10">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p className="text-red-600">Error: {error}</p>}
        {status === "succeeded" &&
          projects.map((project, index) => (
            <div
              key={index}
              className="project bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-90"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <a
                href="#"
                className="block mt-4 text-xl font-semibold text-center text-gray-800"
              >
                {project.title}
              </a>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
