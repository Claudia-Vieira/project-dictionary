import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css"
import Information from "./Information"

export default function Dictionary (){

    let [word, setWord]=useState("");
    let [information, setInformation]=useState(null);
    let [photos, setPhotos]=useState(null);
   
   function getWord(response){
       setWord(response.target.value);
   }

   function getInformation(response){
    setInformation(response.data[0]);
}
   function getPhotos(response){
       setPhotos(response.data.photos)
   }


   function handleSubmit(event){
       event.preventDefault();


       //documentation: https://dictionaryapi.dev/

       let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
       axios.get(apiUrl).then(getInformation);

       let pexelsApiKey='563492ad6f91700001000001525f2e54a92e47c2afaee1bfe5763cdc'
       let pexelsApiUrl='https://api.pexels.com/v1/search?query=nature&per_page=1'

       let headers = { Authorization: `Bearer ${pexelsApiKey}` };

       axios.get(pexelsApiUrl, { headers:headers }).then(getPhotos);


   }
   
   return( 
   <div className="form">
       <form onSubmit={handleSubmit}>
           <input type="search" placeholder="Enter a word" onChange={getWord}/>
       </form>

       <Information information={information} photos={photos}/>

    </div>
   )
}