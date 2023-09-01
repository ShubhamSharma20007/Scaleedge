import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Usableitem from '../Everyuseable/usableitem';
import Navbar from '../Navbar/navbar';
import '../ServicePage/service01.css';
import tringle from "../../assets/images/cloud.webp"
import Footer from '../Footer/footer';
const service01 = () => {

  const value = [
    {
      title: 'Shubham Sharma',
      subtitle: 'Web Developer',
      Details: 'Hey Buddy',
      dataaos :'fade-up',
      dataoffset :200,
      easing :'ease-in-sine',
      duration :100,
      repeatation:'false'
    },
    {
      title: 'Shubham Sharma',
      subtitle: 'Web Developer',
      Details: 'Hey Buddy',
      dataaos :'fade-up',
      dataoffset :200,
      easing :'ease-in-sine',
      duration :100,
      repeatation:'false'
    },
    {
      title: 'Shubham Sharma',
      subtitle: 'Web Developer',
      Details: 'Hey Buddy',
      dataaos :'fade-up',
      dataoffset :200,
      easing :'ease-in-sine',
      duration :100,
      repeatation:'false'
    },
    {
      title: 'Shubham Sharma',
      subtitle: 'Web Developer',
      Details: 'Hey Buddy', 
      dataaos :'fade-up',
      dataoffset :200,
      easing :'ease-in-sine',
      duration :100,
      repeatation:'false'
    }
  ];

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar />
      <Usableitem title="Service One" />
      <div className="my-cards">
        <div className="row cards-container m-0 ">
          {value.map((item, index) => (
            <div className="col-md-4 p-0" key={index}   >
              <div className="first-context alwar-container" id="alwar" data-aos={item.dataaos} data-aos-offset={item.dataoffset}
            data-aos-easing={item.easing}
            data-aos-duration={item.Reactduration} data-aos-once={item.repeatation}>
                <div className="header-section text-start">
                <div className="service-icon">
                            <img src={tringle} alt="tringle-shape" title='tringle-shape' />
                  </div>
                  <div className="innericon innericon-second">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>

                    <h3>{item.title}</h3>

                </div>
                <div className="person-name">
                  <i className="fa-solid fa-user "></i>
                  <p>{item.subtitle}</p>
                </div>
                <div className="person-name">
                  <i className="fa-solid fa-phone "></i>
                  <p>{item.Details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default service01;
