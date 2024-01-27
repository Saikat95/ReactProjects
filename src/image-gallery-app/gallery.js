import React from "react";
import Image from "./image.js";

export default function Gallery(props){
    //console.log(props);
        /*props.img.forEach((name,urls) => {
            imageList.push(<Image src = {urls.url}/>)
            console.log(props.img.url)
        });*/

        return(
            <>
                {props.img.map((image) => (
                    <Image src = {image.url} name = {image.name}/>
                )
                )}
            </>
        )
}