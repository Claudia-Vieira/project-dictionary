import React from "react";

export default function Information(props){
    if(props.information){
      return(
        <div>
        <h2>{props.information.word}</h2>
        
        </div>)
       } 

    else{
     return null;}
}