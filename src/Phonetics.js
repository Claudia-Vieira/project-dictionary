import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics (props){

    if(props.phonetics){
        
    return (
        
    props.phonetics.map(function (phonetics, index){
        return(
            <div key={index}>
                <ReactAudioPlayer
                    src={phonetics.audio}
                    controls
                />
                <p>{phonetics.text}</p>
            </div>
        )
    })
    )} else{
        return null
    }
}