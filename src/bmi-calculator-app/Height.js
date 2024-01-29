import React from "react";

function unitSelect(type){
    let result;
    if(type === 'us'){
        result = 'feet'
    }

    else if(type === 'metric') {
        result = 'cm';
    }

    return result;
}

export default function Height(prop){
    return (
        <div className="value-div">
            <label>Height </label>
            <input
                className="value-box" 
                type="text" 
                placeholder={unitSelect(prop.type)}
                onChange={(e) => prop.heightChange(e.target.value)}></input>
        </div>
    )
    
}