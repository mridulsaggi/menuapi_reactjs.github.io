import React from "react";
const Navbar=()=>{
    return(
        <>
        <div className="navbar">
            <button className="btngrp" onClick={()=>filteritem("breakfast")}>Breakfast</button>
            <button className="btngrp" onClick={()=>filteritem("lunch")}>Lunch</button>
            <button className="btngrp" onClick={()=>filteritem("evening")}>Evening</button>
            <button className="btngrp" onClick={()=>filteritem("dinner")}>Dinner</button>
            <button className="btngrp" onClick={()=>filteritem("All")}>All</button>
        </div>
        </>
    )
}
export default Navbar;