import React from "react";
import "./Community.css";
import tc from "../../../assets/img/tc.png";
import "../../../App.css";

const Community = () => {
  const handleJoin = () => {
    window.open("https://www.udemy.com/courses/free/");
  };
  return (
    <>
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img src={tc} alt="" />
          </div>
          <div className="start_content">
            <h2 className="section_title">Join Our Free Tech Community</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, ro quas, quia animi enim quidem. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Tenetur, ullam! Lorem ipsum
              
              animi enim quidem.
            </p>
            <button className="reg-btn" onClick={handleJoin}>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
