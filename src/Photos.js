import React from "react";
import "./Photos.css";

export default function Photos (props) {
    console.log(props.photos)
    if(props.photos){
 return(
     <section>
     <h4>images</h4>
     <div className="row">
     {props.photos.map(function(photos,index){
         return(
    
                 <div className="col-4" key={index}>
                 <a href={photos.src.original}><img className="img-fluid photo" src={photos.src.landscape} alt="sunset"></img></a>
                 </div>
    

         )

     })}
    </div>
    </section>)
} else{
    return null
}}