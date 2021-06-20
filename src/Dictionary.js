import React, { useState } from "react";

export default function Dictionary (){

    let [word, setWord]=useState("");
   
   function getWord(response){
       setWord(response.target.value);
   }

   function handleSubmit(event){
       event.preventDefault();
       return (alert(word))

   }
   
   return( 
   <div>
       <form onSubmit={handleSubmit}>
           <input type="search" placeholder="Enter a word" onChange={getWord}/>
       </form>

    </div>
   )
}