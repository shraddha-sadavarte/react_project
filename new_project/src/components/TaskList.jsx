import React from 'react';

const TaskList=({tasks,onUpdate,onDelete})=>{
    const toggleCompletion=(task)=>{
        onUpdate({...task,completed:!task.completed})
    };

    return (
        <div>
            {tasks.length===0 && <p>No tasks available</p>}
            {tasks.map((task)=>(
                <div key={task.id}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid #ccc",
                }}>
        
                <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleCompletion(task)}
              >
                {task.title}
              </span>
              <button onClick={() => onDelete(task.id)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
              </div>
           ))}
        </div>
    )

}

export default TaskList;