import React from "react";
import Search from './search.js'
import Gallery from "./gallery.js";
import './style.css'
import { useState,useEffect } from "react";

export default function App() {

    const [search,setSearch] = useState("");

    const [image,setImage] = useState([
        {
            id: 0,
            url: "img0.jpg",
            name: "fish"
        },
        {
            id: 1,
            url: "img1.jpg",
            name: "cg"
        },
        {
            id: 2,
            url: "img3.jpg",
            name: "cartoon"
        },
        {
            id: 3,
            url: "img4.jpg",
            name: "cartoon"
        },
        {
            id: 4,
            url: "img5.jpg",
            name: "cartoon"
        },
        {
            id: 5,
            url: "img6.jpg",
            name: "kratos"
        },
        {
            id: 6,
            url: "img8.jpg",
            name: "festival"
        },
        {
            id: 7,
            url: "img10.jpg",
            name: "festival"
        },
        {
            id: 8,
            url: "img14.jpg",
            name: "fish"
        },
        {
            id: 9,
            url: "img13.jpg",
            name: "money"
        },
        {
            id: 10,
            url: "img2.jpg",
            name: "bill"
        }
    ]);

    function handleClick(){
        console.log("Start");
    }

    useEffect(() => {
        console.log(search)
    })

    return(
        <>
            <div className="title"><h1>IMAGE GALLERY</h1></div>
            <div className="container">
                <div className="search-bar">
                    <Search handleSearch = {setSearch}/> 
                </div>
                <div className="image-container">
                    <Gallery 
                        img = {image.filter((img) => img.name.toLowerCase().includes(search))} 
                        searchImg = {search}
                        />
                </div>
            </div>
        </>
    )
}