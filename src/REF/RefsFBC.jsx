import React,{useState,useRef} from "react";
import Image from "./wallpaper.jpg"

const Ref=()=>{
    let[img,setImg]=useState(Image)

    let imgRef=useRef()
    let btnRef=useRef()

    let changeBorder=()=>{
            imgRef.current.style.border="2px solid red"
            btnRef.current.style.border="2px solid green"
            imgRef.current.style.width="200px"
    }

    return(
        <div>
            <button ref={btnRef} onClick={changeBorder}>CHANGE BORDER</button>
            <img src={img} alt="" ref={imgRef} />
        </div>
    )
}
export default Ref