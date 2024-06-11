import React from "react";
import video from '../src/animation/background.mp4';
import './Main.css';

const Main = () =>{
    return (
        
    <div className="main">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted></video> 
        <div className="content">
            <h1>An International Freight Forwarding Company </h1>
            <br></br>
            <h2>"Your Business, Our Commitment"</h2>
        </div>
    </div>

    )
        

}

export default Main;