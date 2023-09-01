import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import "../MainPage/ourproject.css";
import testimg from "../../assets/images/testing.jpg"
import "../MainPage/ourproject.css"
// const Section = styled.section`
// position:relative;
// min-height:100vh;
// overflow:hidden;
// `

const ourproject = () => { 
  

  return (
    <>
    
      <div className='col-md-12 ourproject-main-container '>
        <div className="project-sub-container col-md-12">
        <div className="row col-md-10">
            <div className="col-md-6 left-project-section">
                <p className='section-subtitle '>Our Best Service</p>
                <div className="section-title-div ">
                <h2 className='section-title'>Experts in Every Aspect Service lifecycle</h2>
                </div>
          
            </div>
            <div className="col-md-6 right-project-section">
            <div className="">
                
                <button className='swipe-btn' data-slide="prev"  href="#carouselExampleIndicators" role="button">
                <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button className='swipe-btn' data-slide="next" href="#carouselExampleIndicators" role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
               
            </div>
            </div>
            </div>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide mt-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img className="d-block m-auto " src={testimg} alt="First slide"/>
    
      
    </div>
    <div className="carousel-item ">
      <img className="d-block m-auto " src={testimg}alt="Second slide"/>
      
    
    </div>
    <div className="carousel-item">
      <img className="d-block m-auto " src={testimg}alt="Third slide"/>
    </div>
  </div>
  {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>

</div>
   
      
    </>
  )
}

export default ourproject
