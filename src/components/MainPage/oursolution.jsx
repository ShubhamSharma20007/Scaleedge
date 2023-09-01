import React from 'react'
import "../MainPage/oursolution.css"
import styled from 'styled-components';
import meeting from "../../assets/images/meeting.webp"
// const Section = styled.section`
// position:relative;
// min-height:100vh;
// overflow:hidden;
// `
const oursolution = () => {

  return (
    <>
       
          <div className="col-md-12 solution-main-container">
            <div className="row mainpage-row">
                <div className="col-md-6 mainpage-left-container" data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300">
                  <img src={meeting} alt="clipboard-img" className='img-fluid' title='clipboard-img' />
                </div>
                <div className="col-md-6 mainpage-right-container" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300">
                <p className='section-subtitle'>Our Company Solution</p>
                    <div className="mainpage-headline-container">
                    <h2 className='solution-container-header'>Save This Managing About Media For Business</h2>
                    </div>
                    <p className='section-about col-md-11'>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>
                    <div className="solution-inline">
                    <div className="inline_block">
                      <h3 className='solution-subcate'><span>Our Project</span></h3>
                    </div>
                    <div className="inline_block2 inline_block">
                      <h3 className='solution-subcate'><span>Our Project</span></h3>
                    </div>
                    <div className="inline_block3 inline_block ">
                      <h3 className='solution-subcate'><span>Our Project</span></h3>
                    </div>
                    </div>
                    <div className="slider-btn mt-4">
                      <a href="" className='main-btn'><span> get started </span></a>
                    </div>
                    
               </div>
            </div>
            </div>
       
      
    </>
  )
}

export default oursolution
