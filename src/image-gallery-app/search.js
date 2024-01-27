import React from "react";

export default function Search({handleSearch}){
    return(
    <>
        <input 
            className="search" 
            type="text" 
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}></input>
    </>
    )
}