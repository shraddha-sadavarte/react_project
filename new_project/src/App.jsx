import { useState,useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar'


const App=()=> {
  const [tasks,setTasks]=useState([]);
  const[filter,setFilter]=useState("all")

  //Load tasks from localstorage on intial render
  useEffect(()=>{
    const storedTaks=JSON.parse(localStorage.getItem("tasks")); //if tasks are already saved in local storage then it can fetched from localstorage
    if(storedTaks) setTasks(storedTaks);
  },[]);

  //save tasks to localstorage whenever task change
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  const addTask=(task)=>{
    setTasks([...tasks,task]) //new task is added to the list at the end and copy the original task format by using ...tasks
  };

  const updateTask=(updatedTask)=>{
    setTasks(tasks.map((task)=>(task.id===updatedTask.id ? updatedTask:task))); //task gets update based on id and if updatedtask.id and originaltask.id
                                                                                //is matched then only the task is update otherwise it remains same
  };

  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id)) //filters the task based on id provided if task.id and provided id is matched then task get deleted
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
