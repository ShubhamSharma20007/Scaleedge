import React, { useEffect, useRef } from 'react'

import tringle from "../../assets/images/bluetrio.webp"
import ytringle from "../../assets/images/yellowtrio.webp"
import trip from "../../assets/images/pinktrip.webp"
import threebar from "../../assets/images/threebar.webp"
import "../MainPage/ourservices.css"

const ourservices = () => {
   
  return (
    <>
    
        <div className="col-md-12 service-main-container">
            <div className="row cate-subcontainer " data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false'>
                <p className='section-subtitle'>Our Best Service</p>
                <div className="section-title-div col-md-8">
                <h3 className='section-title'>Experts in Every Aspect  <br />Service  lifecycle</h3>
                </div>
            </div>
            <div className="row col-md-12 justify-content-center align-items-center ">
                <div className="row col-md-10  p-0">

                <div className="col-md-4 p-0 ourserv" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="100">
                        <div className="service-shape">
                            <img src={threebar} alt="tringle-shape" title='tringle-shape' />
                        </div>
                        <div className="inner-icon-container" >
                            <div className="fix-value">
                            <div className="service-icon">
                            <img src={tringle} alt="tringle-shape" title='tringle-shape' />
                            </div>
                        <div className="innericon">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>
                        </div>
                        <div className="sevice-card-context my-3">
                        <h3 >
                        Get Latest Updates
                        </h3>
                        <p>Business building it before the tab providet management, Payroll & Worksite Services full-fledged.</p>
                        </div>
                        <div className="service-card-link">
                            <a href="">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-0 ourserv" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="200">
                        <div className="service-shape">
                            <img src={threebar} alt="tringle-shape" title='tringle-shape' />
                        </div>
                        <div className="inner-icon-container">
                            <div className="fix-value">
                            <div className="service-icon">
                            <img src={ytringle} alt="tringle-shape" title='tringle-shape' />
                            </div>
                        <div className="innericon">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>
                        </div>
                        <div className="sevice-card-context my-3">
                        <h3 >
                        Get Latest Updates
                        </h3>
                        <p>Business building it before the tab providet management, Payroll & Worksite Services full-fledged.</p>
                        </div>
                        <div className="service-card-link">
                            <a href="">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-0 ourserv" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="300">
                        <div className="service-shape">
                            <img src={threebar} alt="tringle-shape" title='tringle-shape' />
                        </div>
                        <div className="inner-icon-container">
                            <div className="fix-value">
                            <div className="service-icon">
                            <img src={trip} alt="tringle-shape" title='tringle-shape' />
                            </div>
                        <div className="innericon">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>
                        </div>
                        <div className="sevice-card-context my-3">
                        <h3 >
                        Get Latest Updates
                        </h3>
                        <p>Business building it before the tab providet management, Payroll & Worksite Services full-fledged.</p>
                        </div>
                        <div className="service-card-link">
                            <a href="">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="row col-md-12 justify-content-center align-items-center ">
                <div className="row col-md-10  p-0">

                <div className="col-md-4 p-0 ourserv" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="400">
                        <div className="service-shape">
                            <img src={threebar} alt="tringle-shape" title='tringle-shape' />
                        </div>
                        <div className="inner-icon-container">
                            <div className="fix-value">
                            <div className="service-icon">
                            <img src={tringle} alt="tringle-shape" title='tringle-shape' />
                            </div>
                        <div className="innericon">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>
                        </div>
                        <div className="sevice-card-context my-3">
                        <h3 >
                        Get Latest Updates
                        </h3>
                        <p>Business building it before the tab providet management, Payroll & Worksite Services full-fledged.</p>
                        </div>
                        <div className="service-card-link">
                            <a href="">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-0 ourserv" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="500">
                        <div className="service-shape">
                            <img src={threebar} alt="tringle-shape" title='tringle-shape' />
                        </div>
                        <div className="inner-icon-container">
                            <div className="fix-value">
                            <div className="service-icon">
                            <img src={ytringle} alt="tringle-shape" title='tringle-shape' />
                            </div>
                        <div className="innericon">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>
                        </div>
                        <div className="sevice-card-context my-3">
                        <h3 >
                        Get Latest Updates
                        </h3>
                        <p>Business building it before the tab providet management, Payroll & Worksite Services full-fledged.</p>
                        </div>
                        <div className="service-card-link">
                            <a href="">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-0 ourserv" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="600">
                        <div className="service-shape">
                            <img src={threebar} alt="tringle-shape" title='tringle-shape' />
                        </div>
                        <div className="inner-icon-container">
                            <div className="fix-value">
                            <div className="service-icon">
                            <img src={trip} alt="tringle-shape" title='tringle-shape' />
                            </div>
                        <div className="innericon">
                            <span>
                            <i class="fa-solid fa-plug fa-2x"></i>
                            </span>
                        </div>
                        </div>
                        <div className="sevice-card-context my-3">
                        <h3 >
                        Get Latest Updates
                        </h3>
                        <p>Business building it before the tab providet management, Payroll & Worksite Services full-fledged.</p>
                        </div>
                        <div className="service-card-link">
                            <a href="">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
       
                </div>
      
      
    </>
  )
}

export default ourservices
