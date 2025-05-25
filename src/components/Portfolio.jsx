import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#28293E" }}>
      <div className="row header">
        <h5>PORTFOLIO</h5>
        <h2>Latest Work</h2>
        <div className="para text-center my-5 lh-base">
          <p className="d-inline-block text-white mx-4 imp">
            Show All <sup className="text-opacity-75"  >14</sup>
          </p>
          <p className="d-inline-block text-white mx-4 text-opacity-75" >
            Design <sup>6</sup>
          </p>
          <p className="d-inline-block text-white mx-4 text-opacity-75" >
            Branding <sup>4</sup>
          </p>
          <p className="d-inline-block text-white mx-4 text-opacity-75" >
            Illustration <sup>3</sup>
          </p>
          <p className="d-inline-block text-white mx-4 text-opacity-75" >
            Motion <sup>1</sup>
          </p>
        </div>
      </div>
      <div className="row upper mt-5">
            <div className="col-5 sofa" >
                <img src="assets/sofa.png" alt="sofa-image" />
                <button>Design</button>
                <h3>SOFA</h3>
            </div>
            <div className="col-7 keyboard">
                <img src="assets/keyboard.png" alt="sofa-image" />
                <button>Branding</button>
                <h3>KEYBOARD</h3>
            </div>
      </div>
      <div className="row lower mt-5">
            <div className="col-7 media" >
                <img src="assets/workmedia.png" alt="work-media" />
                <button>Illustration</button>
                <h3>Work Media</h3>
            </div>
            <div className="col-5 done">
                <img src="assets/dddone.png" alt="dd-done" />
                <button>Motion</button>
                <h3>DDDone</h3>
            </div>
      </div>
      <button className="extra">Explore More</button>
    </div>
  );
}

export default Portfolio;
