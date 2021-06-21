import React, { useState } from "react";
import axios from "axios";

export default function Dictionary (){

    let [word, setWord]=useState("");
   
   function getWord(response){
       setWord(response.target.value);
   }



   function handleSubmit(event){
       event.preventDefault();

       function getInformation(response){
        console.log(response.data[0])
    }

       //documentation: https://dictionaryapi.dev/

       let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
       axios.get(apiUrl).then(getInformation);
       
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