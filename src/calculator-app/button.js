import React from "react";

function Button(props){
    return (
        <input type = "button" className = "Button" value={props.label} onClick={props.handleClick}></input>
    );
}

export default Button