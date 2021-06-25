import React from "react";

export default function Phonetics (props){
    if(props.phonetics){
    return (
        
    props.phonetics.map(function (phonetics, index){
        return(
            <div key={index}>
                <a href={phonetics.audio} target="_blank" rel="noreferrer">Listen</a>
                <p>{phonetics.text}</p>
            </div>
        )
    })
    )} else{
        return null
    }
}