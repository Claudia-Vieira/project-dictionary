import React from "react";
import Synonyms from "./Synonyms"
import Phonetics from "./Phonetics"
import "./Information.css"

export default function Information(props){
    if(props.information){
      return(
        <div>
        <h2 className="wordSearch">{props.information.word}</h2>
        <Phonetics phonetics={props.information.phonetics}/> 
        {props.information.meanings.map(function(meaning, index){
            return(
                <section>
                <div key={index}>
                    <h4>{meaning.partOfSpeech}</h4>

                    {meaning.definitions.map(function(definition,index){
                        return(
                            <div key={index}>
                                <p className="mb-1"> {definition.definition}</p>
                                <p className="example"><em>{definition.example}.</em></p>
                                <Synonyms synonyms={definition.synonyms}/>
                            </div>
                        )
                    })}
                </div> </section>
            )
        })}
        </div>)
       } 

    else{
     return null;}
}