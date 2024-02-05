import React from "react";

const Action = ( {className,clickEvent,type}) =>
{
    return (
        <button 
            className = {className}
            onClick={clickEvent}>{type}</button>
    )
}

export default Action