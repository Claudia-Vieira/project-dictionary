import React, { useState } from "react";
import axios from "axios";

import Information from "./Information"

export default function Dictionary (){

    let [word, setWord]=useState("");
    let [information, setInformation]=useState(null);
   
   function getWord(response){
       setWord(response.target.value);
   }

   function getInformation(response){
    setInformation(response.data[0]);

}


   function handleSubmit(event){
       event.preventDefault();


       //documentation: https://dictionaryapi.dev/

       let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
       axios.get(apiUrl).then(getInformation);


   }
   
   return( 
   <div>
       <form onSubmit={handleSubmit}>
           <input type="search" placeholder="Enter a word" onChange={getWord}/>
       </form>

       <Information information={information}/>

    </div>
   )
}