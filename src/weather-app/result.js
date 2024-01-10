import React from "react";

export default function Result(props){
    return(
        <>
            <div className="temperature">
                <h1>{Math.round(props.temperature) - 273} °c</h1>
            </div>
            <div className="weather">
            <h3>{props.weather}Cloudy</h3>
            </div>
        </>
    )
}