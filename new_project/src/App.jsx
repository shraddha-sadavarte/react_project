import { useState,useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar'


const App=()=> {
  const [tasks,setTasks]=useState([]);
  const[filter,setFilter]=useState("all")

  //Load tasks from localstorage on intial render
  useEffect(()=>{
    const storedTaks=JSON.parse(localStorage.getItem("tasks"));
    if(storedTaks) setTasks(storedTaks);
  },[]);

  //save tasks to localstorage whenever task change
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  const addTask=(task)=>{
    setTasks([...tasks,task])
  };

  const updateTask=(updatedTask)=>{
    setTasks(tasks.map((task)=>(task.id===updatedTask.id ? updatedTask:task)));
  };

  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  };

  const filteredTasks=tasks.filter((task)=>{
    if(filter==='all') return true;
    if(filter==='completed')return task.completed;
    if(filter==='pending') return !task.completed;
  });

  return (
    <>
      <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
    </>
  )
}

export default App
