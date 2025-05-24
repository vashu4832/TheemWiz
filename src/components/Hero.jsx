import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#28293E"}}>
      <div className="row">
        <div className="col-6 mt-5">
          <h5 className="modern mx-5 mt-5 mb-4 px-5">MODERN STUDIO</h5>
          <h1 className="text-white main mx-5  px-5">
            We're Help
            <br /> To Build Your Dream Project
          </h1>
          <p className="text-white mx-5 px-5 my-5 text-desc">
            Agency provides a full service range including technical
            <br /> skills, design, business understanding.
          </p>
          <form>
            <button className="text-white fw-bold work px-4 fs-5">
              How we work
            </button>
            <button className="text-white fs-5 contact">Contact us</button>
          </form>
          <img src="assets/profile.png" alt="profile-image" className="img" />
          <p className="para d-inline">
            "Put themselves in the merchant's shoes"
          </p>
          <p className="text-white mx-5 px-4 meta">Meta Inc.</p>
          <br />
        </div>
        <div className="col-6 second mb-5">
          <div className="purple">
            <img src="assets/laptop.svg" className="laptop" />
          </div>
          <div className="circle-icon">
            <img src="assets/Shape.png" alt="star shape" />
          </div>
          <img src="assets/Path.png" className="path" />
          <img src="assets/block.png" className="block" />
          <img src="assets/CombinedShape.png" alt="combined shape" className="comb"/>
          <img src="assets/CombinedShape2.png" alt="arrow shape" className="arrow"/>
          <div className="yellow">
            <img src="assets/girl.png" className="girl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
