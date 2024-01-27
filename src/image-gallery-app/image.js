import React from "react";

export default function Image(props){
        //console.log(props.src);
        var image = require(`./img/${props.src}`);
        var name;

        function imageName() {
            //console.log(props.name);
            //name = props.name;
            const tooltip = document.querySelector('.tool-tip');
            tooltip.style.display = "block";
        }

    return(
        <>
            <div className="image-div">
                <img className = "image" src={image}></img>
            </div>
            
        </>
    )
}