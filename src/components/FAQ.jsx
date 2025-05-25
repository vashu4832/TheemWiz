import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9E5DA" }}>
      <div className="row pt-5">
        <div className="col left">
          <h5>FAQ</h5>
          <h3>
            Frequently Asked
            <br /> Questions
          </h3>
          <p>
            A digital agency is a business you hire to outsource your
            <br /> digital marketing efforts, instead of handling in-house.
          </p>
          <a href="" className="d-block mt-5">Contact Us</a>
        </div>
        <div className="col mb-5">
          <div className="business border-end">
            <h4>A digital agency is a business</h4>
            <img src="assets/up.png" />
            <p>
              Digital marketing efforts, instead of handling in-house. They<br/> can
              provide your business with a variety of digital solutions<br/> to
              promote your product or service online and help you hit<br/> your
              marketing goals and grow your business.
            </p>
          </div>
          <div className="hire border-end">
            <h4>Hire to outsource your digital</h4>
            <img src="assets/down.png" alt="down-icon" />
          </div>
           <div className="hire border-end">
            <h4>Marketing effort</h4>
            <img src="assets/down.png" alt="down-icon" />
          </div>
           <div className="hire border-end mb-5">
            <h4>Can provide your business</h4>
            <img src="assets/down.png" alt="down-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
