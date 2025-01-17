import React,{useState} from 'react';

const TaskForm=({onAdd})=>{
    const[title,setTitle]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim()==="")return; //if title is empty then it will return(dont do anything)

        const newTask={
            id:Date.now(),
            title,
            completed: false, //by default task completion is set to false
        };
        onAdd(newTask);
        setTitle("");
    };

    return(
        <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}
             placeholder='Add a new task' style={{padding:'10px',width:'300px',marginRight:'10px'}}
            />
            <button type='submit' style={{padding:'10px 20px'}}>Add Task</button>
        </form>
    )

}

export default TaskForm;