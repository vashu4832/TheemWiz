import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Azah Anyeni",
    role: "Designer",
    image: "assets/azah.png",
  },
  {
    name: "Roelof Bekkenenks",
    role: "React Developer",
    image: "assets/roelof.png",
  },
  {
    name: "Leonardo Oliveira",
    role: "Illustrator",
    image: "assets/leonerdo.png",
  },
  {
    name: "Izabella Tabakova",
    role: "Product Designer",
    image: "assets/izabella.png",
  },
];

export default function Team() {
  return (
    <div className="team-section text-white">
      <div className="container">
        <h5 className="text-uppercase our-team">Our Team</h5>
        <h2 className="fw-bold display-5 mt-4">
          Team of Designers
          <br />
          and Developers
        </h2>
        <div className="row mt-5">
          {teamMembers.map((member, index) => (
            <div className="col-md-3" key={index}>
              <div className="card team-card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img mx-auto "
                />
              </div>
              <h5 className="fw-bold mt-4">{member.name}</h5>
              <p className="text-secondary m-0">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4 gap-2">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}
