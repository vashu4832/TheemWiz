import React from 'react';
import "./GetStarted.css";

function GetStarted() {
    return ( 
        <div className='container-fluid ' style={{backgroundColor: "#28293E"}}>
            <div className='row '>
                <img src='assets/Star2.png' alt='star-logo' id='star'/>
                <img src='assets/gift.png' alt='gift-shape-logo' id='gift'/>
                <div className='par'>
                    <h5>GET STARTED</h5>
                    <h4>We Help Companies<br/> Move Faster</h4>
                    <button>Contact Us</button>
                    <img src='assets/blockCenter.png' alt='center-color-block' id='block'/>
                    <div className='child'>
                        <img src='assets/women.png' alt='women-image'/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default GetStarted;