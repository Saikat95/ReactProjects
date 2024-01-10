import React from "react";
import { useState } from "react";
import "./style.css"

function App(){
    var [text,setText] = useState(0);

    function handleClick(type){
        if(type === 1){
            text++;
        }

        else if(type === 0){
            text--;
        }

        else {
            text = 0;
        }

        setText(text);
    }

    return(
    <div className="parent-div">
        <div className="child-div">
            <h1 className="header">COUNTER APP</h1>
            <div className="content">
                <button id="decreament" onClick={() => handleClick(0)}>-</button>
                <p>{text}</p>
                <button id="increament" onClick={() => handleClick(1)}>+</button>
            </div>
            <button className="reset-button" onClick={() => handleClick(-1)}>Reset</button>
        </div>
    </div>
    )
}


export default App