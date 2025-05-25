import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing-section pt-5">
      <div className="container">
        <p className="text-uppercase mb-4 pricing">Pricing</p>
        <h2 className="fw-bold display-5 mb-5">
          Check Our
          <br />
          Pricing Plans
        </h2>
        <div className="row">
          <div className="free border-end ">
              <h5 className="title mx-4 mt-5">CONSULTATION</h5>
              <h3 className="sub-title mx-4 mt-4">Free</h3>
              <p className="description mx-4 mt-4">Your digital marketing efforts,<br/> instead of handling in-house.</p>
              <ul className="mx-4 mt-4">
                <li className="mt-3">Brand Design</li>
                <li className="mt-3">Marketing Analysis</li>
                <li className="mt-3">Production</li>
              </ul>
              <button className="btn-contact mx-4 mt-4">Contact Us</button>
          </div>
            <div className="one border-end">
                <button className="spe-btn pop mx-3">Popular</button>
              <h5 className="title mx-4 mt-4">DESIGN</h5>
              <h3 className="sub-title mx-4 mt-4">$1500</h3>
              <p className="description mx-4 mt-4">Provide your business with a variety<br/> of digital solutions to promote.</p>
              <ul className="mx-4 mt-4">
                <li className="mt-3">Brand Design</li>
                <li className="mt-3">Marketing Analysis</li>
                <li className="mt-3">Production</li>
              </ul>
              <button className="spe-btn mx-4 mt-4">Contact Us</button>
            </div>
            <div className="two">
              <h5 className="title  mx-4 mt-5">DESIGN-CODE</h5>
              <h3 className="sub-title  mx-4 mt-4">$2900</h3>
              <p className="description  mx-4 mt-4">Help you hit your marketing goals and<br/>grow your business.</p>
              <ul className=" mx-4 mt-4">
                <li className="mt-3">Brand Design</li>
                <li className="mt-3">Marketing Analysis</li>
                <li className="mt-3">Production</li>
              </ul>
              <button className="btn-contact mx-4 mt-4">Contact Us</button>
            </div>
        </div>
      </div>
    </section>
  );
}
