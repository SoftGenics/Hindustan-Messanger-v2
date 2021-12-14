import React from "react";
import HM from "../image/audio/HM.mp3"
import ReactAudioPlayer from 'react-audio-player';


const Audio = () => {
  return(
    <div className="mt-4">
    <ReactAudioPlayer style={{width:"10rem"}}
    src={HM}
    autoPlay
    controls
  />
    </div>
  ) 
};

export default Audio;
