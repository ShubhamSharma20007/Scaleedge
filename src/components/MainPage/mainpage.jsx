import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../MainPage/mainpage.css";
import Companyserver from "./companyserver";
import dotline from "../../assets/images/dottedline.webp";
import ladybulb from "../../assets/images/main-image.webp";
import pinkdot from "../../assets/images/multipledot.webp";
import rightyellow from "../../assets/images/rightyellowwing.webp";
import pinktringle from "../../assets/images/pinktriangle.webp";
import Categories from "./categories";
import Ourabout from "./ourabout";
import Ourservices from "./ourservices";
import Ourproject from "./ourproject";
import Socialmedia from "./socialmedia";
import Oursolution from "./oursolution";
import Testimonial from "./testimonial";
import Navbar from "../Navbar/navbar";
import Blognew from "./blognew";
import { useRef, useEffect } from "react";
import Footer from "../Footer/footer";


const mainpage = ({ tl, ease }) => {
  let item = useRef(null);

  useEffect(() => {
    tl.from(item.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      stagger: {
        amount: 0.9,
      },
      ease: ease,
      onComplete: () => {
        tl.pause();
      },
    });
  });

 

  useEffect(()=>{
    window.onload =()=>{
      AOS.init({duration :1000})
    }
  },[])

  return (
    <>
    
      <Navbar />
      <div className="col-md-12 main-page-container">
        <div className="row mainpage-row">
          <div className="col-md-6 mainpage-left-container" data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false">
            <p className="section-subtitle" ref={item}>
              We Will Be Make Best
            </p>
            <div
              className="mainpage-headline-container"
              
            > 
              <h1 className="main-page-container-header">
              Simpler.Smarter.Faster
              </h1>
              
              <img
                src={dotline}
                title="dotline"
                alt="dotline"
                className="img-fluid"
              />
            </div>
            <p className="section-about col-md-11">
            We believe in providing easiest solution to the most challenging problem.
            </p>
            <div className="slider-btn">
              <a href="" className="main-btn">
                <span> get started </span>
              </a>
            </div>
            <img
              src={pinktringle}
              alt="pinktringle"
              className="img-fluid pinktringle"
              title="pinktringle"
              
            />
          </div>
          <div className="col-md-6 mainpage-right-container">
            <img
              src={pinkdot}
              alt="pinkdot"
              className="img-fluid pinkdot"
              title="pinkdot"
            />
            <img
              src={ladybulb}
              alt="ladyblub"
              className="ladybulb img-fluid"
              title="ladybulb"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            />
            <img
              src={pinkdot}
              alt="pinkdot"
              className="img-fluid darkdot"
              title="pinkdot"
            />
            <img
              src={rightyellow}
              alt="curve-img"
              className="img-fluid curve-img"
              title="curve-img"
            />
          </div>
        </div>
      </div>

      <Categories />
      <Ourabout />
      <Companyserver />
      <Ourservices />
      <Ourproject />
      <Socialmedia />
      <Oursolution />
      <Testimonial />
      <Blognew />
      <Footer/>

    </>
  );
};

export default mainpage;
