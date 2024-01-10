import React from "react";

export default function Search(props) {
    let change = props.handleSearch;
    return(
        <>
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Location" 
                    onChange={(e) => change(e.target.value)}
                    ></input>
            </div>
        </>
    )
}