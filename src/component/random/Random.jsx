import React from "react";
import "./Random.css"


function Random(props) {
    const min = Math.ceil(props.min)
    const max = Math.floor(props.max)
    const random = Math.floor(Math.random() * (max - min) + min);
    return(
        <h5>Random value between {min} and {max} =&gt; {random} </h5>
    )
}


export default Random 