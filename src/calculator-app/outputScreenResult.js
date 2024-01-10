import React from "react";

function OutputResult(props){
    return (
        <input type = "text" className="screenResult" value={props.value} readOnly/>
    );
}

export default OutputResult