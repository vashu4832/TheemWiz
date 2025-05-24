import React from 'react';
import "./VideoReel.css";

function VideoReel() {
    return ( 
        <div className='container-fluid' style={{backgroundColor: "#F9E5DA"}}>
            <div className='row'>
                <div className='col play'>
                    <img src='assets/video.png' alt='video-tab'/>
                    <img src='assets/time.png' alt='time' id='time'/>
                    <p><i class="fa-light fa-circle-play"></i></p>
                </div>
                <div className='col desc'>
                    <h5>VIDEO REEL</h5>
                    <h3>Unlock The Greatest<br/> Value Possible</h3>
                    <p>Design, business understanding, ability to put themselves<br/> in the merchant's shoes meant to partner.</p>
                </div>
            </div>
        </div>
    );
}

export default VideoReel;