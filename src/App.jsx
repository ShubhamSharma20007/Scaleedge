import React, { useRef } from "react";
import "./App.css"; // Import your global CSS styles
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Mainpage from "./components/MainPage/mainpage";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Blog from "./components/Blog/blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import { gsap, Power3 } from "gsap";
import Service01 from "./components/ServicePage/service01";
import  Service02 from "./components/ServicePage/service02";
import  Service03 from "./components/ServicePage/service03";
import  Service04 from "./components/ServicePage/service04";
// import SmoothScroll from "./components/SmoothScroll";

function App() {
  const containerRef = useRef(null);
  let tl = gsap.timeline();
  let power = Power3.easeOut();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage tl={tl} ease={power} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service01" element={<Service01  />} />
          <Route path="/service02" element={<Service02 />} />
          <Route path="/service03" element={<Service03 />} />
          <Route path="/service04" element={<Service04 />} />
        </Routes>
        {/* <Footer/> */}
       {/* This is content  of github */}
      </BrowserRouter>
    </>
  );
}

export default App;