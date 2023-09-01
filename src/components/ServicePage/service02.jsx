import React, { useEffect } from "react";
import Usableitem from "../Everyuseable/usableitem";
import Navbar from "../Navbar/navbar";
import "../ServicePage/service02.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/footer";
import Service02second from "./service02second";
import Service02third from "./service02third";
import Testimonial from "../MainPage/testimonial";
const service02 = () => {
  const content = [
    {
      title: "Custom Website Development",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
    },
    {
      title: "WordPress Development",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      points: "Today, I am getting so  tired ",
    },
    {
      title: "Ecommerce web development",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
    },
    {
      title: "CMS or SaaS Development",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",

    },
    {
        title: "Web App Development",
        subtitle:
          "We help ambitious businesses like yours generate more profits to be building driving web traffice",
        dataaos: "fade-up",
        dataoffset: 200,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "false",

      },
      {
        title: "ERP Development",
        subtitle:
          "We help ambitious businesses like yours generate more profits to be building driving web traffice",
        dataaos: "fade-up",
        dataoffset: 200,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "false",
       
      },
  ];

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
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <Usableitem
        title="Web Development Company"
        para="ScaleEdge Solutions is a well known web development company in India. We are providing world class web design and web development services. Businesses who want to establish their strong online presence can rely on our team of experienced and professional web developers for user friendly, highly responsive and performance oriented websites and web applications at affordable price"
    
      />

      <div className="sectwo-main-container col-md-12">
        <div className="ser2-first-container col-md-12">
          <h2 className="section-title">Website Development Services</h2>

        </div>
        <div className="row col-md-12 sectwo-subcontainer">
          {content.map((item, index) => {
            return (
              <div
                className="col-md-5 sectwo-left"
                key={index}
                data-aos={item.dataaos}
                data-aos-offset={item.dataoffset}
                data-aos-easing={item.easing}
                data-aos-duration={item.Reactduration}
                data-aos-once={item.repeatation}
              >
                <div className="sectwo-icon col-md-1">
                  <span>
                    <i class="fa-solid fa-signal"></i>
                  </span>
                </div>
                <div className="sectwo-content col-md-10">
                  <h3 className="sectwo-title">{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <div className="sectwo-link">
                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="service-second-section">
        <Usableitem
        title="Web Development Solutions "
        para="ScaleEdge Solutions is a leading website development company in India. It is dedicated to providing web development solutions to empower businesses globally and help them achieve their business objectives in digital marketing. Our team of web designers and web developers have practical experience of working on web development projects for the jewellery, e-commerce, real estate, education, fashion, hospitality, automobile and finance industries. We have successfully delivered numerous projects for global clients from various industries, be it custom website development, ecommerce development or web app development."
    
      />
    </div>
   <Service02second />
   <Service02third/>
    <Testimonial/>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default service02;
