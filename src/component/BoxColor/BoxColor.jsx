import React from "react";
import "./BoxColor.css"


function BoxColor (props) {
    const color = { "background-color": `rgb(${props.r},${props.g},${props.b})` }

    return(
        <div style={color} className="BoxColor">
        rgb: ({props.r},{props.g},{props.b} )

        <h1>hola BoxColor</h1>
        </div>
    )
}

export default BoxColor 