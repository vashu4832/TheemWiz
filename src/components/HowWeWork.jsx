import React from "react";
import "./HowWeWork.css";

function HowWeWork() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9E5DA" }}>
      <div className="row border-bottom">
        <div className="col left-side">
          <h5>HOW WE WORK</h5>
          <h3 className="mt-4">
            Making Your Projects
            <br /> Looking Awesome
          </h3>
          <p className="mt-5 text-muted">
            Technical skills, design, business understanding, ability to
            <br /> put themselves in the merchant's shoes.
          </p>
          <a
            href=""
            style={{ textDecoration: "none", color: "#391400" }}
            className="d-block my-5"
          >
            Read More
          </a>
        </div>
        <div className="col right-side ">
          <div className="master ">
            <h1 className="mt-5 pt-5 ">1</h1>
            <h4 >Full service range including</h4>
          </div>
          <div className="master">
            <h1>2</h1>
            <h4>Technical skills, design, business</h4>
          </div>
          <div className="master">
            <h1>3</h1>
            <h4>Themselves in the merchant's</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
