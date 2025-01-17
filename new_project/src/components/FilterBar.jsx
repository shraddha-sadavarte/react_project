import React from 'react';

const FilterBar=({filter,setFilter})=>{ //this component filter the tasks
  //three buttons are created(all,completed,pending) and when we click on the specific button then that button will get activate and according to css designing
  //its styling will get changed
    return (
        <div style={{marginBottom:'20px'}}>
            <button onClick={()=>setFilter("all")} 
            style={{marginRight:'10px', padding:'10px 20px'}}
            className={filter === 'all' ? 'active':""}>
            All
            </button>

     <button
        onClick={() => setFilter("completed")}
        style={{ marginRight: "10px", padding: "10px 20px" }}
        className={filter === "completed" ? "active" : ""}>
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        style={{ padding: "10px 20px" }}
        className={filter === "pending" ? "active" : ""}>
        Pending
      </button>
        </div>
    )

}

export default FilterBar;