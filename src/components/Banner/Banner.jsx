import ReactHlsPlayer from "react-hls-player/dist";
import React, { useState,useRef } from 'react'
import Icon from '@mdi/react';
import { mdiVolumeOff, mdiVolumeHigh } from '@mdi/js';

import "./Banner.css";
function Banner() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const handleMuteToggle = () => {
    const video = videoRef.current;
    if(video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  }
  return(
    <div className="autoplay-banner">
      <ReactHlsPlayer 
        className="video"
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        width="100%"
        height="100%"
        controls={false}
        autoPlay
        muted={isMuted}
        playerRef={videoRef}
      />
      <div className="mute-button" onClick={handleMuteToggle}>
        {isMuted ? <Icon path={mdiVolumeOff} size={1} /> : <Icon path={mdiVolumeHigh} size={1} />}
      </div>
    </div>

  )
  
}

export default Banner;

// useRef - You can store the referrence to something and it would not change or rerender based on the reference 