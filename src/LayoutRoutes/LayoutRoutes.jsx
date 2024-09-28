import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Plans from "../components/Pages/Plans/Plans";
import Courses from "../components/Pages/courses/Courses";
import About from "../components/About/About.jsx";
import ContactUs from "../components/Pages/Contacts/ContactUs.jsx";
function LayoutRoutes() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Plans />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default LayoutRoutes;
