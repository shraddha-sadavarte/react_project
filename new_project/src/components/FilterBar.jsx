import React from 'react';

const FilterBar=({filter,setFilter})=>{
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