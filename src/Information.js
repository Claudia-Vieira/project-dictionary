import React from "react";
import Synonyms from "./Synonyms"

export default function Information(props){
    if(props.information){
      return(
        <div>
        <h2>{props.information.word}</h2>
        {props.information.meanings.map(function(meaning, index){
            return(
                <div key={index}>
                    <h4>{meaning.partOfSpeech}</h4>

                    {meaning.definitions.map(function(definition,index){
                        return(
                            <div key={index}>
                                <p>{definition.definition}</p>
                                <p><em>{definition.example}</em></p>
                                <Synonyms synonyms={definition.synonyms}/>
                            </div>
                        )
                    })}

                   {console.log(meaning)}
                </div>
            )
        })}
        </div>)
       } 

    else{
     return null;}
}