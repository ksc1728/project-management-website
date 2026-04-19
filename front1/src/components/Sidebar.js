import React, { useCallback, useEffect, useState } from "react";
import AddProjectModal from "./AddProjectModal";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = ({ id, getPrId }) => {
  const [isModalOpen, setModalState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [paramsWindow, setParamsWindow] = useState(
    window.location.pathname.slice(1)
  );

  // Create Project
  const createProject = () => {
    if (!id) {
      console.error("User ID missing. Cannot create project.");
      return;
    }

    const projectData = {
      title: "Project Title",
      description: "Project Description",
      assignedTo: "Assigned User",
      userId: id,
    };

    axios
      .post("https://project-planner-server1.onrender.com/project", projectData)
      .then((res) => {
        console.log("Project created:", res.data);
        closeModal();
        document.dispatchEvent(new Event("projectUpdate"));
      })
      .catch((error) => console.error("Error creating project:", error));
  };

  // Load user-specific projects
  useEffect(() => {
    if (!id) return;

    axios
      .get("https://project-planner-server1.onrender.com/project")
      .then((res) => {
        const filtered = res.data.filter((p) => p.userid === id);
        setProjects(filtered);
      })
      .catch((err) => console.error("Failed fetching projects:", err));
  }, [id]);

  const openModal = useCallback(() => setModalState(true), []);
  const closeModal = useCallback(() => setModalState(false), []);

  const handleLocation = (e, data) => {
    e.preventDefault();
    getPrId(data);

    const newParams = new URL(e.currentTarget.href).pathname.slice(1);
    setParamsWindow(newParams);
  };

  return (
    <div className="py-5">
      <div className="px-4 mb-3 flex items-center justify-between">
        <span>Projects</span>
        <button
          onClick={openModal}
          className="bg-indigo-200 rounded-full p-[2px] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5 text-indigo-600"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
            />
          </svg>
        </button>
      </div>

      <ul className="border-r border-gray-300 pr-2">
        {projects.length === 0 && (
          <li className="px-4 text-gray-400 text-sm">No projects found</li>
        )}

        {projects.map((project) => (
          <Link
            key={project._id}
            to={`/${project._id}`}
            onClick={(e) =>
              handleLocation(e, { id: project._id, name: project.title })
            }
          >
            <li
              className={`px-5 py-1.5 mb-1 text-gray-600 capitalize select-none 
                rounded transition-colors cursor-pointer hover:bg-indigo-200/80 hover:text-indigo-600 
                ${
                  paramsWindow === project._id
                    ? "text-indigo-600 bg-indigo-200/80"
                    : ""
                }`}
            >
              {project.title}
            </li>
          </Link>
        ))}
      </ul>

      <AddProjectModal
        id={id}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        createProject={createProject}
      />
    </div>
  );
};

export default Sidebar;
