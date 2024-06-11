import React from "react";
import video from '../src/animation/background.mp4';
import './Main.css';

const Main = () =>{
    return (
    <div className="main">
        <video src={video} autoPlay loop muted></video>
    </div>

    )
        

}

export default Main;