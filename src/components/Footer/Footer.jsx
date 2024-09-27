import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/img/footer.png";
function Footer() {
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
                <a href="">Programs</a>
              </li>
              <li>
                <a href="">Our Plans</a>
              </li>
              <li>
                <a href="">Become a member</a>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a href=""> About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Support US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
