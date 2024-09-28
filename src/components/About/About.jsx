import React from "react";
import "./About.css";
import miya from "../../assets/img/miya.jpg";
function About() {
  return (
    <div className="container">
      <div className="about-us-container">
        <div className="team-members">
          <h2>Our Team</h2>
          <div className="member-card">
            <img src={miya} className="member-image" alt="" />
            <h3 className="member-name">Miya Helinski</h3>
            <p className="member-role">Co-Founder</p>
          </div>
        </div>
        <div className="about-us-description">
          <h1 className="about-us-heading">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, tempore est. Quo ea cumque iusto. Ipsum eos omnis
              nostrum neque?
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
