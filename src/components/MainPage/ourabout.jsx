import React, { useEffect } from 'react'
import "../MainPage/ourabout.css";

import Clipboard from "../../assets/images/main-image.png"

const ourabout = () => {
  return (
    <>
     
        <div className="col-md-12 main-page-container-second">
            <div className="row mainpage-row">
                <div className="col-md-6 mainpage-left-container"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300">
                  <img src={Clipboard} alt="clipboard-img" className='img-fluid' title='clipboard-img' />
                </div>
                <div className="col-md-6 mainpage-right-container" data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300">
                <p className='section-subtitle'>Our About Now</p>
                    <div className="mainpage-headline-container">
                    <h1 className='main-page-container-header'>Save This Managing About Media For Business</h1>
                    </div>
                    <p className='section-about col-md-11'>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>

                    <div className="col-md-10 about-title-content">

                    <div className="row">
                    <div className="col col-class">
                    <div className="about-subtitle col-md-6" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p>Business</p> 
                    </div>
                    <div className="about-subtitle col-md-6" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p>Business</p> 
                    </div>
                    <div className="about-subtitle col-md-6" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p>Business</p> 
                    </div>
                    </div>

                    <div className="col col-class">
                    <div className="about-subtitle col-md-6" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p>Business</p> 
                    </div>
                    <div className="about-subtitle col-md-6" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p>Business</p> 
                    </div>
                    <div className="about-subtitle col-md-6" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p>Business</p> 
                    </div>


                    </div>
                    {/* <div className="col-md-12">

                    </div> */}
                    </div>
                    
                    </div>

               </div>
            </div>
            </div>
      
    </>
  )
}

export default ourabout
