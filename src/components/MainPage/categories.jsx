import React from 'react'
import { useEffect } from 'react'
import "../MainPage/categories.css"
import growth from "../../assets/images/growth.webp"
import logic from "../../assets/images/logic.webp"
import turnover from "../../assets/images/turnover.webp"
import pinkdot from "../../assets/images/multipledot.webp"


const categories = () => {


  return (
    <>
        
            <div  className="col-md-12 cate-main-container">
            <div className="row cate-subcontainer ">
                <p className='section-subtitle'  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false'>Best Features</p>
                <div className="section-title-div col-md-8" >
                <h2 className='section-title'  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false'>We Are the Best  Software <br /> Company Manage</h2>
                </div>
                <div className="col-md-10  feature-item-container">
            
                <div className="feature-item col-md-3" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="100">
                        <div className="feature-icon">
                            <img src={growth} title='growth-icon' alt="growth-icon" />
                        </div>
                        <div className="feature-content" >
                            <h3 className='feature-title'>
                            Creative Design
                            </h3>
                            <p>Business is the knowledge or master event. Identify the error of the we ebsite coding page speed.</p>
                        </div>
                        <div className="feature-link">
                            <a href=""> See More    
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                    <div className="feature-item col-md-3" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="200">
                        <div className="feature-icon">
                            <img src={logic} title='logic-icon' alt="logic-icon" />
                        </div>
                        <div className="feature-content">
                            <h3 className='feature-title'>
                           Online Marketing
                            </h3>
                            <p>Business is the knowledge or master event. Identify the error of the we ebsite coding page speed.</p>
                        </div>
                        <div className="feature-link">
                            <a href=""> See More    
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                    <div className="feature-item col-md-3" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="300">
                        <div className="feature-icon">
                            <img src={turnover} title='turnover-icon' alt="turnover-icon" />
                        </div>
                        <div className="feature-content">
                            <h3 className='feature-title'>
                            Digital Marketing
                            </h3>
                            <p>Business is the knowledge or master event. Identify the error of the we ebsite coding page speed.</p>
                        </div>
                        <div className="feature-link">
                            <a href=""> See More    
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        

                    </div>
                </div>
            </div>
            <img src={pinkdot} alt="pinkdot" className='img-fluid  pinkdot-second'  title='pinkdot'/>
    </div>
   
    </>
  )
}

export default categories
