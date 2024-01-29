import React from "react";
import Weight from "./Weight";
import Height from "./Height";
import './Style.css'
import { useState,useEffect } from "react";

function metricCalculation(height,weight,type){
    let finalResult = 0;
    //console.log(height.type);
    //console.log(weight);
    if(type === 'metric') {
        finalResult = Math.round((weight) / Math.pow(((height)*.01),2));
    }
    
    else if(type === 'us') {
        finalResult =  Math.round(703 * ((weight) / Math.pow(((height) * 12),2)));
    }
    //console.log(finalResult.type);
    return finalResult;
}

export default function App() {
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [type,setType] = useState('');
    let [result,setResult] = useState(0);

    //console.log(weight);
    //console.log(height);

    useEffect(() => {
        setResult(metricCalculation(height,weight,type));
        //console.log(result);
        console.log(type);

    },[height,weight,type])

    
    return (
        <>
        <div className="content">
            <div className="title"><h1>BMI Calculator</h1></div>
            <div className="user-input">
                <Height heightChange = {setHeight} type = {type}/>
                <Weight weightChange = {setWeight} type = {type}/>
                <div className="cal-type">
                    <input 
                        type="radio" 
                        name="measure" 
                        value={"us"}
                        onChange={(e) => setType(e.target.value)}></input>
                    <label>US Units</label>

                    <input 
                        type="radio" 
                        name="measure" 
                        value={"metric"}
                        onChange={(e) => setType(e.target.value)}></input>
                    <label>Metric Units</label>
                </div>
                
                <div className="value-div">
                        <label>Result </label>
                        <input 
                            className="value-box" 
                            value={result}
                            >
                        </input>
                </div>
                
            </div>
        </div>
        </>
    )
}