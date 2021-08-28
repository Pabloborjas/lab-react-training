import React from "react";
import "./Greeting.css"


const text = {
    de: 'Hallo',
    en: 'hello',
    fr: 'bonjour'
}

function Greetings(props) {
    return(
        <div className="greeting">
            {text[props.lang]} {props.children}
        </div>
    )
}

export default Greetings 