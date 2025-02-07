import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Project = () => {

    const{id} = useParams();
    const[project,setProject]=useState(null);
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    //fetch project details and tasks
    useEffect(()=>{
        const fetchProject = async () => {
            try{
                const response= await axios.get(`/api/projects/${id}`);
                setProject(response.data);
            } catch(error){
                console.error("Error fetching project: ",error);
            }
        };

        const fetchTasks = async () => {
            try{
                const response = await axios.get(`/api/projects/${id}/tasks`);
                setTask(response.data);
            } catch(error){
                console.error("Error fetching project: ",error);
            }
        };

        fetchProject();
        fetchTasks();
    }, [id]);

    //add a new task
    const handleAddTask = async () =>{
        if(!newTask) return;
        try {
            const response = await axios.post(`/api/projects/${id}/tasks`, { name: newTask });
            setTasks([...tasks, response.data]);
            setNewTask("");
          } catch (error) {
            console.error("Error adding task:", error);
          }
    };

    //update project name
    const handleUpdateProject = async () =>{
        try{
            await axios.put(`/api/projects/${id}`,{name:project.name});
            alert("Project updated successfully!");
        }
        catch (error) {
            console.error("Error adding task:", error);
        }
    };

    if(!project) return <p>Loading project...</p>
    return(
        <div className="project-container">
            <h2>Project: <input type="text" value={project.name} onChange={(e) => setProject({...project,name:e.target.value})} /></h2>
            <button onClick={handleUpdateProject}>Update Project</button>

            <h3>Tasks</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>

            <div className="task-form">
                <input type="text" placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value )} />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    )
}

export default Project;