import React from "react";
import "./Footer.css";

import footer_logo from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo_img">
                <img src={footer_logo} alt="" />
              </div>
              <h2>Meta AI</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium
              explicabo perferendis officiis iste.
            </p>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link to="/courses" onClick={handleClick}>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleClick}>
                  Our Plans
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleClick}>
                  Become a member
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <Link to="/about" onClick={handleClick}>
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleClick}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={handleClick}>
                  Support US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
