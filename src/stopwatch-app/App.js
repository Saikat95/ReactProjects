import React from "react";
import { useState, useEffect } from "react"
import './style.css'

export default function App() {
    //state to control the time
    const [time,setTime] = useState(0);

    //state to control the state of timer
    const [status,setStatus] = useState(false);

    //increament the time after every 10 miliseconds
    useEffect(() => { 
        let interval;
        console.log(status);
        if(status) {
            interval = setInterval(() => setTime(time + 10), 10);
            console.log(time);
        }

        return () => clearInterval(interval);
        
    },[status,time]);


    //miliseconds
    let miliseconds = time % 100; 

    //seconds
    let seconds = Math.floor((time / 1000) % 60);

    //minutes
    let minutes = Math.floor((time % 360000) / 6000);

    //hour
    let hour = Math.floor((time / 360000))

    //function to start the timer
    const startTimer = () => {
        setStatus(true);
    };

    const stopTimer = () => {
        setStatus(false);
    }

    const resetTimer = () => {
        setTime(0);
    }

    return(
        <>
        <div className="container">
                <h1>STOP WATCH</h1>
                <div className="time-container">
                    <p>{hour.toString().padStart(2,0)}</p>:
                    <p>{minutes.toString().padStart(2,0)}</p>:
                    <p>{seconds.toString().padStart(2,0)}</p>:
                    <p>{miliseconds.toString().padStart(2,0)}</p>
                </div>
                <div className="button-grp">
                    <button onClick={startTimer} className="start-btn">Start</button>
                    <button onClick={stopTimer} className="stop-btn">Stop</button>
                    <button onClick={resetTimer} className="reset-btn">Reset</button>
                </div>
            
            </div>
        </>
    )
}