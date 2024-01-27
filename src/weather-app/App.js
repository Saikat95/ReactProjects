import React from "react";
import Result from "./result.js"
import Search from "./search.js"
import {useState} from "react"
import "./style.css"

export default function App() {
    const API = {
        key: "",
        url: 'https://api.openweathermap.org/data/2.5/weather?q='
    }

    const [query,setQuery] = useState('');
    const [temperature,setTemperature] = useState({});
    const [weather,setWeather] = useState([]);


    //var a = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=772ef3b586ced5d0c2f58f77a0345073';

    const search = () =>{
        console.log(query);
        fetch(`${API.url}${query}&APPID=${API.key}`)
            .then(res => res.json())
                .then(result => {
                    //console.log(result);
                    setTemperature(result.main);
                    setWeather(result.weather[0]);
                }
                    
                );
    }

    return(
        <>
            <div className = "content">
                <div className="title">
                    <h1>WEATHER APP</h1>
                </div>
                <Search handleSearch = {setQuery}/>
                <button className = "search-btn" onClick={search}>Search</button>
                {(typeof temperature.temp != "undefined") ? (
                    <Result temperature = {(temperature.temp)} weather = {(weather.main)} />
                ) : ('') }
                
            </div>
            
        </>
    )
}
