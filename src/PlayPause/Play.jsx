import React,{useRef, useState} from "react";
import VIDEO from "./God of War.mp4"

const PlayPause=()=>{
    let[video,setVideo]=useState(VIDEO)
    let[play,setPlay]=useState(false)

    let videoRef=useRef()

    let handleChange=()=>{
        if(play)
        {
            setPlay(false)
            videoRef.current.play()
        }
        else
        {
            setPlay(true)
            videoRef.current.pause()
        }
    }

    return(
        <div>
            <video src={video} ref={videoRef} onClick={handleChange}></video>
        </div>
    )
}
export default PlayPause