import React, { useEffect, useState } from "react";
import "../Styles/Dashboard.css"
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    
    const[projects,setProjects]=useState([]);
    const[newProject,setNewProject]=useState("");

    //fetch projects from API
    useEffect(()=>{
        const fetchProjects = async () => {
            try{
                const response = await axios.get("/api/projects");
               // console.log("Api response: ",response.data);
                setProjects(response.data);
            } catch (error) {
                console.error ("Error fetching projects: ",error);
                setProjects([]);
            }
        };

        fetchProjects();
    },[]);

    //create a new project
    const createProject = async () => {
        if(!newProject) return;
        try{
            const response = await axios.post("/api/projects",{name:newProject});
            setProjects([...projects,response.data]); //add new project to state
            setNewProject(""); //clear input
        } catch(error){
            console.error("Error creating project: ",error);
        }
    };

    const handleDeleteProject = async (id) => {
        try{
            await axios.delete(`api/projects/$id`);
            setProjects(projects.filter((project) => project.id !== id));
        } catch(error){
            console.error("Error deleting project: ",error)
        }
    };

    return(
        <div className="dashboard-container">
            <h2>Project Dashboard</h2>

            <div className="project-form">
                <input 
                  type="text"
                  placeholder="New Project Name"
                  value={newProject}
                  onChange={(e)=>setNewProject(e.target.value)}
                />
                <button onClick={createProject}>Create Project</button>
            </div>

            <ul className="project-list">
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/project/${project.id}`}>{project.name}</Link>
                        <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                    </li>
               ))}
            </ul>
        </div>
    )
}

export default Dashboard;