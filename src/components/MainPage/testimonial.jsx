import React, { useState,useEffect } from 'react';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import testperson from "../../assets/images/tesperson.png";
import pinkdot from "../../assets/images/multipledot.webp"
import blurtrio from "../../assets/images/triangle.webp"
import earthdot from "../../assets/images/testiearthdot.webp"
import './testimonial.css'

const Testimonial = () => {
const [page,Setpage] =useState(2)


useEffect(()=>{
    function perpage(){
        if(window.innerWidth < 1150){
            Setpage(1)
        }
        else{
            Setpage(2)
        }
    }
    perpage();
    window.addEventListener('resize',perpage)

    return()=>{
        window.removeEventListener('resize',perpage)
    }
},[])



  return (

      <div className='testimonial-main-container col-md-12 p-0'>
        <div className="testimonial-sub-container">
            <div className="dot-shape1"><img src={pinkdot} alt="" /></div>
            <div className="dot-shape2"><img src={blurtrio} alt="" /></div>
            <div className="dot-shape3"><img src={earthdot} alt="" /></div>
        <div className="col-md-12"  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false'>
                <div className='d-flex justify-content-center'>
                <p className='section-subtitle bg-light text-dark '>Our Best Service</p>
                </div>
                <div className="section-title-div ">
                <h3 className='section-title text-light'>Perfect Contact This Software <br /> Company Manage</h3>
                </div>
            </div>
        <div className="splide-center col-md-12" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false'  data-aos-delay="200">
      <Splide options={{ rewind: true,perPage:page ,gap:'1rem', width:'100%' }} aria-label="My Favorite Images">
        <SplideSlide>
            <div className="container-img">
                <div className="testi-content">
                <p className='testi-person'>Shubham</p>
                <span>Founder</span>
                <p className='test-person-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum esse ex vero! Labore tempore animi atque repudiandae optio </p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star text-light"></i>
                </div>

          <img src={testperson} alt="Image 1"  className='img-fluid'/>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="container-img">
                <div className="testi-content">
                <p className='testi-person'>Shubham</p>
                <span>Founder</span>
                <p className='test-person-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum esse ex vero! Labore tempore animi atque repudiandae optio </p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star text-light"></i>
                </div>

          <img src={testperson} alt="Image 1"  className='img-fluid'/>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="container-img">
                <div className="testi-content">
                <p className='testi-person'>Shubham</p>
                <span>Founder</span>
                <p className='test-person-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum esse ex vero! Labore tempore animi atque repudiandae optio </p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star text-light"></i>
                </div>

          <img src={testperson} alt="Image 1"  className='img-fluid'/>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="container-img">
                <div className="testi-content">
                <p className='testi-person'>Shubham</p>
                <span>Founder</span>
                <p className='test-person-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum esse ex vero! Labore tempore animi atque repudiandae optio </p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star text-light"></i>
                </div>

          <img src={testperson} alt="Image 1"  className='img-fluid'/>
          </div>
        </SplideSlide>
      </Splide>
      </div>
      </div>
      </div>
    
  );
};


export default Testimonial;
