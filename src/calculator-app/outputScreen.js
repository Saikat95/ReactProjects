import React from "react";
import OutputResult from "./outputScreenResult.js";

function OutputScreen(props){
    return(
        <>
            <OutputResult value = {props.question}/>
            <OutputResult value = {props.answer}/>
        </>
    );
}

export default OutputScreen