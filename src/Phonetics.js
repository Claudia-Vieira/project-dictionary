import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faPauseCircle } from '@fortawesome/free-regular-svg-icons'

export default function Phonetics (props){

    let playIcon=<FontAwesomeIcon icon={faPlayCircle} color='#023363'/>
    let pauseIcon=<FontAwesomeIcon icon={faPauseCircle} color='#023363'/>

    if(props.phonetics){
        
    return (
        
    props.phonetics.map(function (phonetics, index){
        return(
            <div key={index}>

  <AudioPlayer 
  
  style={{
    width: '300px',
    margin:'auto',
    boxShadow:'none',
    paddingTop:'0px',
    paddingBottom:'10px',
     
  }}
    src={phonetics.audio}
    showJumpControls={false}
    customVolumeControls={[]}
    customAdditionalControls={[]}
    showDownloadProgress={false} 
    customProgressBarSection={[]}
    customIcons={{
       play:playIcon,
       pause:pauseIcon
      }}
  />

                <p>{phonetics.text}</p>
            </div>
        )
    })
    )} else{
        return null
    }
}