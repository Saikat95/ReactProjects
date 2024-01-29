import React from "react";

function unitSelect(type){
    let result;
    if(type === 'us'){
        result = 'pound'
    }

    else if(type === 'metric') {
        result = 'kg';
    }

    return result;
}

export default function Weight(prop){
    return (
        <div  className="value-div">
            <label>Weight </label>
            <input 
                className="value-box" 
                type="text" 
                placeholder={unitSelect(prop.type)}
                onChange={(e) => prop.weightChange(e.target.value)}></input>
        </div>
    )
    
}