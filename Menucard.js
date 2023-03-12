import React from "react";
const Menucard=( {menuData} )=>{
    console.log(menuData);
    return(
        <>
        <div className="container">
            {menuData.map((curElem)=>{
                return(
                    <>
                        <div className="menucards">
                            <div className="item" key={curElem.id}>
                                <span className="item-number">{curElem.id}</span>
                                <span className="cat">{curElem.category}</span>
                                <span className="item-name">{curElem.name}</span>
                                <img src={curElem.images} alt="noo" className="item-img"/>
                                <div className="pricebtn">
                                    <span className="item-price">price={curElem.price}</span>
                                    <button class="btn">order now</button>
                                </div>
                            </div>
                        </div>
                    
                    </>
                )
            })}
        </div>
        </>
    )
}
export default Menucard;