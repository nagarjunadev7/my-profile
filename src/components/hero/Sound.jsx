import React, { useState } from 'react';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import './Sound.css'
import ringer from "./christmas.mp3";

let audio = new Audio(ringer);
function Sound() {
  const [color, setColor] = useState(false);
  const [music, setMusic] = useState("OFF");
  function clickhandler(){
    if(audio.paused){
      audio.play();
      setMusic("ON");
      setColor(true);
    } else {
      audio.pause();
      setColor(false);
      setMusic("OFF");
    }
}
  return (
    <div className='mySound'>
    <CloudRoundedIcon style={{ fontSize: 13 }} className='sm_icon'/>
    <p className='sound'>Sound</p>
    <p onClick={clickhandler} className="my_btn" style={{ color: color ? '#d19002': ''}}>{music}</p> 
    </div>
  )
}

export default Sound;