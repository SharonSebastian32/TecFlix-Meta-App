import React from "react";
import "./ContactUS.css";
   
function ContactUs() {
  return (
    <div className="container">
      <div   className="contact-us-container">
        <h1>Contact Us</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing e natur officia
          natus options
        </p>
        <form
          action="
        "
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Type here...."
            />
          </div>
          <button type="submit" className="sbmt-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
