import React from "react";
import "./about.css";

function Home() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9E5DA" }}>
      <div className="row">
        <div className="img-main mx-5 border-bottom ">
          <img
            src="assets/digitalside.png"
            alt="digital Side Image"
            className=" logo"
          />
          <img src="assets/vertex.png" alt="Vertex Image" className=" logo" />
          <img
            src="assets/travelExplorer.png"
            alt="travelExplorer Image"
            className=" logo"
          />
          <img src="assets/fuzion.png" alt="Fuzion Image" className=" logo" />
          <img
            src="assets/mediaFury.png"
            alt="Media Fury Image"
            className=" logo"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="images">
            <img
              src="assets/chairTable.png"
              alt="table image"
              className="table"
            />
            <img
              src="assets/colorBlock.png"
              alt="color block image"
              className="color-block"
            />
          </div>
          <div
            className="circle-icon"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#f26e5f",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              marginTop: "-350px",
              marginLeft: "200px",
            }}
          >
            <img
              src="assets/manProfile.png"
              alt="men-profile"
              style={{ width: "80%" }}
            />
            <img src="assets/cloud.png" alt="cloud-img" className="cloud" />
            <img
              src="assets/CombinedShapeArrow.png"
              alt="arrow"
              className="arrow"
              style={{
                height: "100px",
                width: "150px",
                position: "absolute",
                marginBottom: "1550px",
                marginLeft: "900px",
              }}
            />
          </div>
        </div>
        <div className="col">
          <h5 className="about">ABOUT</h5>
          <h2 className="exp">
            An Experience
            <br /> Design Agency
          </h2>
          <p className="desc">Privides a full service range</p>
          <p className="more">
            Ability to put themselves in the merchant's shoes. It is
            <br /> meant to partner on the long run, and work as an extension
            <br /> of the merchant's team.
          </p>
          <button className="about-us">ABOUT US</button>
        </div>
      </div>
      <div className="row tr" style={{ backgroundColor: "#F9E5DA" }}>
        <div className="container-fluid">
          <div
            className="row border rounded stats-card w-100"
            style={{ marginLeft: "200px", marginBottom: "100px" }}
          >
            <div className="col-md-4 border-end py-4">
              <h2 className="fw-bold fs-1">42%</h2>
              <p className="fs-5 mt-4">Years of experience</p>
            </div>
            <div className="col-md-4 border-end py-4">
              <h2 className="fw-bold fs-1">73+</h2>
              <p className="fs-5 mt-4">Agency members</p>
            </div>
            <div className="col-md-4 py-4">
              <h2 className="fw-bold fs-1">5.000</h2>
              <p className="fs-5 mt-4">Projects complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
