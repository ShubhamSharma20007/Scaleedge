import React from 'react'
import lady_img from "../../assets/images/lampwithlady.png"
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import { useEffect } from 'react'
const blog = () => { 
  
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
      <Navbar/>
      <div className="wrapper">
        <div  class="col-md-12 warehouse-main-container ">
       <div className="row row1 ">
                <div className="col-md-4 firstCol">
                    <h1 className="aboutHeading">Blog</h1>
                    <div className="button1">
                        <a href="">Home<i class="fa-solid fa-angle-right"></i><span>Blog</span></a>
                    </div>
                </div>
                <div className="col-md-6 secondCol">
        
      <img className="image img-fluid" src={lady_img} alt="oneklick-contact-img"  title='oneklick-contact-img'/>
                </div>
            </div>
      

        <div className="newblog-parent col-md-12">
      <div className="newblog-container col-md-10">
        <div className="row ">
          <div className="left-newblog-container col-md-8">
            <img src={lady_img} className='img-fluid' alt="modules-img" title="modules-img" />
            <div className="blog-header-title">
                <h3>OneKlick is an Authorised Distributor of Jinko Solar, Solex,Novasys Green and Axitec.</h3>
                <p>OneKlick is a leading solar module authorized distributor. We offer high-quality modules from globally recognized brands like Jinko Solar, Solex, Axitec Solar, and Novasys Green. We strive to provide our clients with cutting edge solar technologies and ensure that our modules are built to the highest standards of quality and reliability.
                Authorized distributor of Top Solar Module Manufacturers.</p>
                <li>Authorized distributor of Top Solar Module Manufacturers</li>
                <li>Competitive Pricing</li>
                <li>Strong and Reliable distribution network</li>
                <li>Smooth and easy order process</li>
                <li>On Time Deliveries</li>
                <li>Commitments delivered</li>
                <li>Team of Experienced professionals with Ex-IITian as one of the founder</li>

            </div>
          </div>
          

          <div className="right-newblog-container col-md-4">
            <div className="inner-container">
                <div class="input-group search-bar-container">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control blog-search" placeholder="   Search" />
                   
                </div>
                <button type="button" class="btn btn-primary blog-btn">
                    <i class="fas fa-search"></i>
                </button>
                </div>  
                </div>
            </div>
        </div>
      </div>
      </div>
      </div>
      <Footer/>
      </div>
     
    </>
  )
}

export default blog
