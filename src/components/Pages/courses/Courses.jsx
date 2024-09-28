import React from "react";
import "./Courses.css";
import ai from "../../../assets/img/ai.png";
import sdm from "../../../assets/img/sd.png";
import dg from "../../../assets/img/dg.png";
import hk from "../../../assets/img/Hacker.png";

function Courses() {
  const courseData = [
    {
      title: "Ai Development",
      Desc: "Master in Ai Development!!",
      img: ai,
    },
    {
      title: "Software  Development",
      Desc: "Master in Software Development!!",
      img: sdm,
    },
    {
      title: "Digital Marketing",
      Desc: "Master in Digital Marketing!!",
      img: dg,
    },
    {
      title: "Cyber Security",
      Desc: "Master in Cyber Security!!!",
      img: hk,
    },
  ];

  return (
    <div className="container course-container">
      <div className="course_top">
        <h2 className="section_title">Our Free Courses</h2>
        <p>The top trending free course with free certificate</p>
        <div className="course-wrapper">
          {courseData.map((courses, index) => (
            <div className="course_item">
              <span className="course_icon">
                <img src={courses.img} alt="" />
              </span>
              <div className="cousrse-content">
                <h4>{courses.title}</h4>
                <p> {courses.Desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
