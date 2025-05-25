import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9E5DA" }}>
      <div className="row">
        <div className="col-3">
          <h4 className="head">Agency</h4>
        </div>
        <div className="col-3 menu">
          <h5>MENU</h5>
          <p>About</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="col-3 service">
          <h5>SERVICE</h5>
          <p>Design</p>
          <p>Development</p>
          <p>Marketing</p>
          <p>See More</p>
        </div>
        <div className="col-3 social">
          <div className="icon-circle">
            <img src="assets/facebook.png" className="soc" alt="facebook" />
          </div>
          <div className="icon-circle">
            <img src="assets/twitter.png" className="soc" alt="twitter" />
          </div>
          <div className="icon-circle">
            <img src="assets/instagram.png" className="soc" alt="instagram" />
          </div>
        </div>
      </div>
      <img src="assets/border.png" style={{marginLeft: "150px", marginBottom: "50px"}}/>
      <p className="copy-right">Copyright © 2022 Laaqiq. All Rights Reserved. <span className="use">Terms of Use</span> <span className="privacy">Privacy Policy</span></p> 
    </div>
  );
}

export default Footer;
