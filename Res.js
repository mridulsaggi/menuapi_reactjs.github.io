import {React,useState} from "react";
import "./style.css";
import Menu from "./menuapi";
import Menucard from "./Menucard";
const uniqueList=[

]
const Res=()=>{
    const[menuData,setMenuData]=useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList);
    const filteritem =(category)=>{
        if(category ==="All"){
            setMenuData(Menu);
            return;
        }
        else{
            const updateList=Menu.filter((curElem)=>{
                return curElem.category===category;
            });
            setMenuData(updateList);
        }
    }
    return(
        <>
        <div className="navbar">
            <button className="btngrp" onClick={()=>filteritem("breakfast")}>Breakfast</button>
            <button className="btngrp" onClick={()=>filteritem("lunch")}>Lunch</button>
            <button className="btngrp" onClick={()=>filteritem("evening")}>Evening</button>
            <button className="btngrp" onClick={()=>filteritem("dinner")}>Dinner</button>
            <button className="btngrp" onClick={()=>filteritem("All")}>All</button>
        </div>
        <Menucard menuData={menuData}/>
        </>
    )
}
export default Res;
