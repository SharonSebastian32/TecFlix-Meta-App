import React from "react";
import "./Home.css";
import metaverse from "../../../assets/img/meta.jpeg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Courses from "../courses/Courses";
import Community from "../Community/Community";
import Plans from "../Plans/Plans.jsx";
import About from "../../About/About.jsx";
import ContactUs from "../Contacts/ContactUs.jsx";

function Home() {
  const handleClick = () => {
    window.open("https://www.youtube.com/live/G5eDBSuhrP4?si=aNU_XTJ9wpT66FT6");
  };

  return (
    <>
      {" "}
      <section>
        <div className="container">
          <div className="home_container">
            <div className="home_content">
              <h2 className="section_title">Learn Everything For Free</h2>
              <p>Lorem ipsum dolor sit amet consectetur alias. lorem</p>
              <div className="home-btn">
                <button
                  className="reg-btn"
                  onClick={handleClick}
                  style={{ boxShadow: " " }}
                >
                  Get Started
                </button>
                <button className="reg-btn">Watch Now!</button>
              </div>
            </div>
            <div className="home_img">
              <div className="home-img-wrapper">
                <div className="box-01">
                  <div className="box-img">
                    <img src={metaverse} alt="" />
                  </div>
                </div>

                <div className="whatsapp-container">
                  <h5>500+ Students</h5>
                  <AiOutlineWhatsApp color="green" />
                </div>

                <div className="support">
                  <h5>Active Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <Community />
      <Plans />
      <About />
      <ContactUs />
    </>
  );
}

export default Home;
