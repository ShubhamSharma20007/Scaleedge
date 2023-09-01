import React, { useEffect } from "react";
import "../ServicePage/service03.css";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Usableitem from "../Everyuseable/usableitem";
import sectionOne from "../../assets/images/service-one.webp";
import sectionTwo from "../../assets/images/service-second.webp";
import sectionThree from "../../assets/images/service-third.webp";
import "aos/dist/aos.css";
import AOS from "aos";
const service03 = () => {
  const sectionvalue = [
    {
      title: "Growth of Marketing Solution",
      para: "Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency",
      icon: sectionOne,
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
    },

    {
      title: "Growth of Marketing Solution",
      para: "Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency",
      icon: sectionTwo,
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
    },
    {
      title: "Growth of Marketing Solution",
      para: "Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency",
      icon: sectionThree,
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
    },
    {
      title: "Growth of Marketing Solution",
      para: "Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency",
      icon: sectionOne,
      dataaos: "fade-up",
      dataoffset: 350,
      easing: "ease-in-sine",
      duration: 200,
      repeatation: "false",
    },
    {
      title: "Growth of Marketing Solution",
      para: "Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency",
      icon: sectionTwo,
      dataaos: "fade-up",
      dataoffset: 350,
      easing: "ease-in-sine",
      duration: 200,
      repeatation: "false",
    },
    {
      title: "Growth of Marketing Solution",
      para: "Business building it before the tab providet management, Payroll & Worksite Services full-fledged applica best agency",
      icon: sectionThree,
      dataaos: "fade-up",
      dataoffset: 350,
      easing: "ease-in-sine",
      duration: 200,
      repeatation: "false",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(()=>{
    const wrap =  document.querySelector('.wrapper')
    const side = document.getElementById('mySidenav');
    wrap.addEventListener('click',function(){
      if (side.style.width >= '200px') {
        side.style.width = '0px';
      }
    else{
      side.style.width == '300px'
    }
    })
  })
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <Usableitem title="Service Three" />
      <div className="container-fluid service3-cont-2 ">
        <div className="row  service3-splides">
          {sectionvalue.map((item, index) => {
            return (
              <div
                className="col-lg-4  outer-splide"
                key={index}
                data-aos={item.dataaos}
                data-aos-offset={item.dataoffset}
                data-aos-easing={item.easing}
                data-aos-duration={item.Reactduration}
                data-aos-once={item.repeatation}
              >
                <div className=" service3-splide text-center service3-splide-1">
                  <h5 className="text-center">{item.title}</h5>
                  <p>{item.para}</p>
                  <div className="service3-img-wrapper service3-img-wrapper-1">
                    <img
                      className="img-fluid"
                      src={item.icon}
                      alt="service-card"
                      title="service-card"
                    />

                    <img className="service3-img-wrapper-img2" src="" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default service03;
