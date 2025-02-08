import React, { useState, useEffect } from "react";
import { getProjects, createProject, deleteProject } from "../api";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleCreate = async () => {
    if (!newProject.name) return;
    const project = await createProject(newProject);
    setProjects([...projects, project]);
    setNewProject({ name: "", description: "" });
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects(projects.filter((p) => p._id !== id));
  };

  return (
    <div className="dashboard-container">
      <h2>Project Dashboard</h2>
      <div className="project-form">
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button onClick={handleCreate}>Create Project</button>
      </div>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project._id} className="project-item">
            {project.name} - {project.description}
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
